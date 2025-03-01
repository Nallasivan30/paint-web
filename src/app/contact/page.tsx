"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ScrollReveal from "@/components/scroll-reveal"
import RootLayout from "@/components/layout"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="Contact us" fill className="object-cover" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-up">Contact Us</h1>
            <p className="mt-6 text-xl text-muted-foreground animate-fade-up animate-delay-100">
              Get in touch with our team to discuss your painting project or request a free quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <ScrollReveal>
                <h2 className="text-3xl font-bold sm:text-4xl mb-6">Get In Touch</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Have questions about our services or want to schedule a consultation? Contact us using the form or
                  reach out directly through the information below.
                </p>
              </ScrollReveal>

              <div className="space-y-6">
                <ScrollReveal delay={100}>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Our Location</h3>
                      <p className="text-muted-foreground">123 Painter Street, Colorville, CV 12345</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground">info@primecoat.com</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={500}>
                <div className="mt-12 aspect-video w-full rounded-xl overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sbg!4v1579767901424!5m2!1sen!2sbg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200}>
              <div className="bg-background rounded-xl shadow-sm border border-border/50 p-8">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

                {isSubmitted ? (
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 mb-4">
                      <Send className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                    <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select a service</option>
                          <option value="interior">Interior Painting</option>
                          <option value="exterior">Exterior Painting</option>
                          <option value="commercial">Commercial Painting</option>
                          <option value="cabinet">Cabinet Refinishing</option>
                          <option value="deck">Deck & Fence Staining</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project..."
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">
                Find answers to common questions about our painting services.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does a typical painting project take?",
                answer:
                  "The duration of a painting project depends on the size and complexity of the job. A standard interior room typically takes 1-2 days, while larger projects like a full house exterior may take 1-2 weeks. We'll provide a specific timeline during your consultation.",
                delay: 0,
              },
              {
                question: "Do you provide free estimates?",
                answer:
                  "Yes, we provide free, no-obligation estimates for all painting projects. Contact us to schedule a consultation, and we'll assess your space and provide a detailed quote.",
                delay: 100,
              },
              {
                question: "What types of paint do you use?",
                answer:
                  "We use premium, high-quality paints from trusted brands like Sherwin-Williams and Benjamin Moore. We select the appropriate paint type based on the surface, environment, and your preferences.",
                delay: 200,
              },
              {
                question: "Do I need to move my furniture before you start painting?",
                answer:
                  "We typically handle moving furniture to the center of the room and covering it with protective materials. For larger pieces, we may request your assistance or recommend moving them out of the room beforehand.",
                delay: 300,
              },
              {
                question: "How do I prepare for a painting project?",
                answer:
                  "We recommend removing small items, pictures, and valuables from the area to be painted. Our team will handle furniture moving, surface preparation, and cleanup.",
                delay: 400,
              },
              {
                question: "Do you offer color consultation services?",
                answer:
                  "Yes, we provide professional color consultation services to help you select the perfect colors for your space. Our experts can guide you through the selection process and even provide sample patches to test colors in your space.",
                delay: 500,
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={faq.delay}>
                <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </RootLayout>
  )
}

