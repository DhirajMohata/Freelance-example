import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Home, Briefcase, Users, LogOut } from 'lucide-react';

export function DashboardSidebar({ expanded, setExpanded, handleLogout }: { expanded: boolean, setExpanded: (value: boolean) => void, handleLogout: () => void }) {
  const pathname = usePathname();
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Briefcase, label: 'Projects', href: '/auth/login' },
    { icon: Users, label: 'Team', href: '/auth/signup' },
    { icon: LogOut, label: 'Log Out', action: 'logout', href: '/logout' },
  ];
  return (
    <motion.div
      className={cn(
        "flex flex-col bg-gradient-to-b from-purple-100 to-purple-200 dark:bg-gradient-to-b dark:from-purple-600 dark:to-purple-500 h-screen p-4 shadow-lg",
        expanded ? "w-64" : "w-20"
      )}
      animate={{ width: expanded ? 256 : 80 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-end mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {expanded ? <ChevronLeft /> : <ChevronRight />}
        </Button>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href || item.label}>
              {item.action === 'logout' ? (
                <Button
                  onClick={handleLogout}
                  className={cn(
                    "flex items-center p-2 rounded-lg transition-colors w-full gap-2",
                    "hover:bg-white dark:hover:bg-gray-700",
                    "bg-purple-500 dark:bg-purple-900"
                  )}
                >
                  <item.icon className="w-6 h-6 text-gray-600 dark:text-white" />
                  <span
                    className={cn(
                      "text-gray-700 dark:text-gray-200",
                      expanded ? "opacity-100 transition-opacity duration-300" : "opacity-0 hidden"
                    )}
                  >
                    {item.label}
                  </span>
                </Button>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center p-2 gap-2 rounded-lg transition-colors",
                    "hover:bg-white dark:hover:bg-gray-700",
                    pathname === item.href && "bg-white dark:bg-gray-700"
                  )}
                >
                  <item.icon className="w-6 h-6 text-gray-600 dark:text-white" />
                  <span
                    className={cn(
                      "ml-3 text-gray-700 dark:text-gray-200",
                      expanded ? "opacity-100 transition-opacity duration-300" : "opacity-0 hidden"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}
