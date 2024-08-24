import "./App.css"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a href="#" className="flex items-center justify-center" >
          <PencilIcon className="h-6 w-6" />
          <span className="sr-only">Assignment Helper</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Features
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Testimonials
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Pricing
          </a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4" >
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-r from-[#6366F1] to-[#4338CA]">
          <div className="container px-4 md:px-6 text-center text-primary-foreground">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-in">
              Let Us Do Your Assignment
            </h1>
            <p className="mx-auto max-w-xl mt-4 text-lg sm:text-xl animate-fade-in-up">
              Get expert help with your Homework and assignments. Fast turnaround, affordable prices, and guaranteed
              satisfaction.
            </p>
            <div className="mt-8 flex justify-center gap-4 animate-fade-in-up">
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-[#6366F1] shadow transition-colors hover:bg-[#4338CA] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                
              >
                Get a Quote
              </a>
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-[#6366F1] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#4338CA] hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in">
              <div className="flex flex-col items-center text-center space-y-4">
                <ClockIcon className="h-12 w-12 text-[#6366F1] animate-bounce" />
                <h3 className="text-2xl font-bold">Fast Turnaround</h3>
                <p className="text-muted-foreground">Get your Assignment done quickly, with a fast turnaround time.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <PencilIcon className="h-12 w-12 text-[#6366F1] animate-bounce" />
                <h3 className="text-2xl font-bold">Expert Writers</h3>
                <p className="text-muted-foreground">
                  Our team of expert writers will ensure your Assignment is top-notch.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <DollarSignIcon className="h-12 w-12 text-[#6366F1] animate-bounce" />
                <h3 className="text-2xl font-bold">Affordable Prices</h3>
                <p className="text-muted-foreground">
                  Our prices are designed to fit your budget and provide excellent value.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 bg-[#F3F4F6]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in">
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <blockquote className="space-y-2">
                  <p className="text-lg">&quot;Assignment Helper saved my grades!&quot;</p>
                  <cite className="font-medium">- John Doe, Student</cite>
                </blockquote>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <blockquote className="space-y-2">
                  <p className="text-lg">&quot;I couldn&apos;t have done it without Assignment Helper.&quot;</p>
                  <cite className="font-medium">- Sarah Adams, Student</cite>
                </blockquote>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                <blockquote className="space-y-2">
                  <p className="text-lg">&quot;Highly recommended for anyone struggling with Assignment!&quot;</p>
                  <cite className="font-medium">- Michael Kim, Student</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 bg-[#F3F4F6]">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center space-y-4 animate-fade-in">
              <h2 className="text-3xl font-bold">Get a Quote</h2>
              <p className="text-muted-foreground">
                Fill out the form below to get a quote for your Assignment assignment.
              </p>
              <form className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" type="text" placeholder="Enter subject" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Describe your Assignment assignment" rows={4} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input id="deadline" type="date" />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#6366F1] text-primary-foreground hover:bg-[#4338CA] transition-colors"
                >
                  Get Quote
                </Button>
              </form>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 bg-[#F3F4F6]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in">
              <div className="flex flex-col items-center text-center space-y-4">
                <RocketIcon className="h-12 w-12 text-[#6366F1] animate-bounce" />
                <h3 className="text-2xl font-bold">Guaranteed Results</h3>
                <p className="text-muted-foreground">Our expert writers will ensure you get the grades you need.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <ShieldCheckIcon className="h-12 w-12 text-[#6366F1] animate-bounce" />
                <h3 className="text-2xl font-bold">Secure and Confidential</h3>
                <p className="text-muted-foreground">Your personal information and Assignment are safe with us.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <HeadphonesIcon className="h-12 w-12 text-[#6366F1] animate-bounce" />
                <h3 className="text-2xl font-bold">24/7 Support</h3>
                <p className="text-muted-foreground">Get help whenever you need it, day or night.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 bg-[#F3F4F6]">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center space-y-4 animate-fade-in">
              <h2 className="text-3xl font-bold">Why Choose Assignment Helper?</h2>
              <p className="text-muted-foreground">We're the best choice for all your Assignment needs.</p>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <CheckIcon className="h-6 w-6 text-[#6366F1]" />
                  <p>Expert writers with advanced degrees</p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckIcon className="h-6 w-6 text-[#6366F1]" />
                  <p>Guaranteed satisfaction or your money back</p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckIcon className="h-6 w-6 text-[#6366F1]" />
                  <p>Affordable prices to fit any budget</p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckIcon className="h-6 w-6 text-[#6366F1]" />
                  <p>Fast turnaround to meet your deadlines</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Assignment Helper. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4" >
            Terms of Service
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4" >
            Privacy Policy
          </a>
        </nav>
      </footer>
    </div>
  )
}

function CheckIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function ClockIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function DollarSignIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function HeadphonesIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
}


function PencilIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}


function RocketIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function ShieldCheckIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}