"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { submitContactForm } from "./actions"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    try {
      await submitContactForm(data)
      setToastMessage("Your message has been sent.")
      reset()
    } catch (error) {
      setToastMessage("There was a problem sending your message.")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setToastMessage(null), 5000) // Hide toast after 5 seconds
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("name")}
          placeholder="Your Name"
          className="w-full px-3 py-2 text-blue-800 placeholder-blue-400 bg-blue-50 rounded-md outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
        />
        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="Your Email"
          className="w-full px-3 py-2 text-blue-800 placeholder-blue-400 bg-blue-50 rounded-md outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
        />
        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <textarea
          {...register("message")}
          placeholder="Your Message"
          rows={4}
          className="w-full px-3 py-2 text-blue-800 placeholder-blue-400 bg-blue-50 rounded-md outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
        />
        {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg">
          {toastMessage}
        </div>
      )}
    </form>
  )
}

