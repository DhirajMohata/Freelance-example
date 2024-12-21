"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ProjectForm } from "@/components/forms/project-form"
import { Plus } from 'lucide-react'

export function ProjectDialog({ action }: { action: any }) {
  const [open, setOpen] = useState(false)

  const addProject = async (projectData: any) => {
    const response = await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    })
    const newProject = await response.json()
    setOpen(false) // Close the dialog after adding the project
  }


  return (
    <Dialog  open={open} onOpenChange={setOpen}>
      <DialogTrigger className="mr-11" asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
        </DialogHeader>
        <ProjectForm action={addProject} />
      </DialogContent>
    </Dialog>
  )
}