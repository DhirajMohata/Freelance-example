
import { AuthForm } from "@/components/forms/auth-form"
import { signUp } from "../../actions/signup"
import { ThemeToggle } from "@/components/themes/themeToggle"

export default function SignUpPage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 flex items-center justify-center p-4">
      <AuthForm mode="signup" action={signUp} />
      <ThemeToggle />
    </div>
  )
}
