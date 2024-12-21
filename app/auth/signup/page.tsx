'use client'
import { AuthForm } from "@/components/forms/auth-form"
import { ThemeToggle } from "@/components/themes/themeToggle"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import { login } from "@/store/slices/authSlice"
import { RootState } from '@/store/store'

export default function SignUpPage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)


  const handleSignUp = async (formData: FormData) => {

    dispatch(login({ email: "email", token: "data_token" }))
    localStorage.setItem("token", "data_token")
    localStorage.setItem("isFirstTime", "true")
    router.push("/dashboard") 
  }

  if(isLoggedIn || localStorage.getItem("token")) {
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 flex items-center justify-center p-4">
      <AuthForm mode="signup" action={handleSignUp} />
      <ThemeToggle />
    </div>
  )
}
