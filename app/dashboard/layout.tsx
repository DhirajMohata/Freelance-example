'use client'

import { DashboardSidebar } from "@/components/layouts/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import Confetti from 'react-confetti'
import { useEffect, useState } from "react"
import { logout } from '@/store/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'
import { ThemeToggle } from "@/components/themes/themeToggle"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const router = useRouter()
    const dispatch = useDispatch()
    const [expanded, setExpanded] = useState(false);
    const [isFirstTime, setIsFirstTime] = useState(false)

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        router.push("/auth/login")
    };

    useEffect(() => {
        if (localStorage.getItem('isFirstTime') === 'true') {
          setIsFirstTime(true)
          localStorage.removeItem('isFirstTime')
        }
      }, [])

    return (
        <SidebarProvider>
            {isFirstTime && (
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                recycle={false}
                numberOfPieces={200}
            />
            )}
            <div className="flex h-screen w-full">
                <DashboardSidebar 
                    expanded={expanded} 
                    setExpanded={setExpanded} 
                    handleLogout={handleLogout}
                />
                <main className="flex-1 overflow-auto">
                {children}
                </main>
            </div>
            <ThemeToggle />
        </SidebarProvider>
    )
}
