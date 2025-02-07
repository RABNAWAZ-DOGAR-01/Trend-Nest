"use server"

import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function submitContactForm(data: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(data)

  if (!result.success) {
    throw new Error("Invalid form data")
  }

  // Here you would typically send an email or save to a database
  // For this example, we'll just simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // If everything is successful, just return
  // If there's an error, it will be caught in the component
}

