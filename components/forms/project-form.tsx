"use client"

import { useState } from "react"
import { Plus, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/forms/form"

export function ProjectForm({ action }: { action: any }) {
  const [techStack, setTechStack] = useState<string[]>([])
  const [techInput, setTechInput] = useState("")

  const handleAddTech = () => {
    if (techInput && !techStack.includes(techInput)) {
      setTechStack([...techStack, techInput])
      setTechInput("")
    }
  }

  const handleRemoveTech = (tech: string) => {
    setTechStack(techStack.filter((t) => t !== tech))
  }

  return (
    <Form action={action} submitButton="Add Project">
      <input type="hidden" name="techStack" value={JSON.stringify(techStack)} />
      <Input name="name" placeholder="Project Name" required />
      <Input name="team" placeholder="Team Name" required />
      <Input name="teamId" placeholder="Team ID" required />
      <Textarea name="description" placeholder="Description" required />
      <div className="space-y-2">
        <div className="flex gap-2">
          <Input
            placeholder="Add Tech Stack"
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
          />
          <Button type="button" onClick={handleAddTech}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
              <button
                type="button"
                onClick={() => handleRemoveTech(tech)}
                className="ml-1"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      </div>
    </Form>
  )
}

