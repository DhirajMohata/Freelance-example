"use server"

import { redirect } from "next/navigation"
import { FormState } from "@/types"

export async function signUp(prevState: FormState, formData: FormData): Promise<FormState> {
  const email = formData.get("email")
  const password = formData.get("password")
  const name = formData.get("name")

  if (email && password && name) {
    redirect("/dashboard")
  }

  return {
    message: "Invalid input",
  }
}
