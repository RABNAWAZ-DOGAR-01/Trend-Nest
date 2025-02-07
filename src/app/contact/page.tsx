import Newest from "@/components/Newest"
import ContactForm from "./contact-form"
import Link from "next/link"

export default function ContactPage() {
  return (
    
    <div className="min-h bg-gradient-to-br from-blue-100 via-white to-white flex items-center  justify-center p-4 py-20 ">
       
      <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden w-full max-w-2xl">
       
        <div className="md:flex">
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Get in Touch</h2>
            <p className="text-blue-600 mb-4">
              We'd love to hear from you! Send us a message using the form, and we'll get back to you as soon as
              possible.
            </p>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-blue-400">
                <h3 className="font-bold">Address</h3>
                <p className="text-blue-700">City karachi</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className="text-blue-400">
                <h3 className="font-bold">Email</h3>
                <p className="text-blue-600">rabnawazdogar9@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <ContactForm />
          </div>
        </div>
      </div>
      
    </div>
  )
}

