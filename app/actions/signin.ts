"use server"

import { redirect } from "next/navigation"
import { FormState } from "@/types"

export async function signIn(prevState: FormState, formData: FormData): Promise<FormState> {
  const email = formData.get("email")
  const password = formData.get("password")
    
  if (email && password) {
    redirect("/dashboard")
  }

  return {
    message: "Invalid credentials",
  }
}
