export interface User {
    id: string
    email: string
    name: string
  }
  
  export interface Project {
    id: string
    name: string
    team: string
    teamId: string
    description: string
    techStack: string[]
  }
  
  export interface FormState {
    errors?: {
      [key: string]: string[]
    }
    message?: string
  }
  
  export interface FormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'action'> {
    children?: React.ReactNode
    action: (prevState: FormState, formData: FormData) => Promise<FormState>
    submitButton?: string
  }