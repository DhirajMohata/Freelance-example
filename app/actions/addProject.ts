"use server"

import { FormState } from "@/types"

export async function addProject(prevState: FormState, formData: FormData): Promise<FormState> {
  const name = formData.get("name")
  const team = formData.get("team")
  const teamId = formData.get("teamId")
  const description = formData.get("description")
  const techStack = formData.get("techStack") ? JSON.parse(formData.get("techStack") as string) : null

  if (name && team && teamId && description && techStack) {
    return { message: "Project added successfully" }
  }

  return {
    message: "Invalid input",
  }
}
