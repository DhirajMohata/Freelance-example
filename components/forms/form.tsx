"use client"

import * as React from "react"
import { useFormState } from "react-dom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FormState, FormProps } from "@/types/index"



export function Form({ children, action, submitButton = "Submit", className, ...props }: FormProps) {
  const [state, formAction] = useFormState(action, { message: "", errors: {} })
  const [isPending, startTransition] = React.useTransition()

  return (
    <form
      action={(formData) => {
        startTransition(() => formAction(formData))
      }}
      className={cn("space-y-4", className)}
      {...props}
    >
      {state?.message && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {state.message}
        </div>
      )}
      {children}
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Loading..." : submitButton}
      </Button>
    </form>
  )
}