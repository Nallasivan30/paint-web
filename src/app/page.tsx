import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Star, PaintBucket, Home, Building2, Brush } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"
import RootLayout from "@/components/layout"
import React from "react"

export default function HomePage() {
  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assests/hndpt.jpg"
            alt="Painting professionals at work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-24 sm:py-32 lg:py-40">
          <div className="flex flex-col items-start space-y-6 md:w-2/3 lg:w-1/2">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary animate-fade-in">
              <span>Professional Painting Services</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-up">
              Transform Your Space With <span className="text-primary">Premium</span> Painting
            </h1>

            <p className="text-xl text-muted-foreground animate-fade-up animate-delay-100">
              Professional painting services for residential and commercial properties. Quality workmanship, exceptional
              customer service, and attention to detail.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-200">
              <Button size="lg" className="group">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Our Services
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-4 animate-fade-up animate-delay-300">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block h-8 w-8 rounded-full bg-muted ring-2 ring-background" />
                ))}
              </div>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium">500+ happy customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
<section className="py-20 bg-muted/50">
  <div className="container mx-auto px-4">
    <ScrollReveal>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold sm:text-4xl mb-4">Our Professional Services</h2>
        <p className="text-muted-foreground text-lg">
          We offer a wide range of painting services to meet all your needs, from interior to exterior painting.
        </p>
      </div>
    </ScrollReveal>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: <Home className="h-10 w-10" />,  
          title: "Residential Interior",
          description:
            "Transform your home with our premium interior painting services, creating beautiful and lasting finishes.",
          delay: 0,
          color: "border-red-500 text-red-500",
        },
        {
          icon: <Building2 className="h-10 w-10" />,
          title: "Commercial Painting",
          description: "Professional painting solutions for offices, retail spaces, and commercial buildings.",
          delay: 100,
          color: "border-blue-500 text-blue-500",
        },
        {
          icon: <PaintBucket className="h-10 w-10" />,
          title: "Exterior Painting",
          description:
            "Protect and beautify your property's exterior with our durable and weather-resistant paints.",
          delay: 200,
          color: "border-green-500 text-green-500",
        },
        {
          icon: <Brush className="h-10 w-10" />,
          title: "Cabinet Refinishing",
          description: "Give your kitchen a fresh new look with our cabinet refinishing and painting services.",
          delay: 300,
          color: "border-yellow-500 text-yellow-500",
        },
        {
          icon: <Check className="h-10 w-10" />,
          title: "Color Consultation",
          description: "Our color experts will help you choose the perfect palette for your space.",
          delay: 400,
          color: "border-purple-500 text-purple-500",
        },
        {
          icon: <Check className="h-10 w-10" />,
          title: "Deck & Fence Staining",
          description: "Protect and enhance your outdoor wooden surfaces with our staining services.",
          delay: 500,
          color: "border-pink-500 text-pink-500",
        },
      ].map((service, index) => (
        <ScrollReveal key={index} delay={service.delay} className="h-full">
          <div className={`bg-background rounded-xl p-6 shadow-sm border-2 ${service.color} hover-lift h-full`}>
            <div className={`mb-4 ${service.color}`}>{React.cloneElement(service.icon, { className: `h-10 w-10 ${service.color}` })}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground mb-4">{service.description}</p>
            <Link href="/service" className="text-primary font-medium inline-flex items-center hover:underline">
              Learn more
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </div>
</section>


      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
                <Image
                  src="/assests/bluwh.jpg"
                  alt="Professional painters at work"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal className="order-1 md:order-2">
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">Why Choose PrimeCoat Painters?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                With years of experience and a commitment to excellence, we deliver superior painting services that
                exceed expectations.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Experienced Professionals",
                    description: "Our team consists of skilled painters with years of experience in the industry.",
                  },
                  {
                    title: "Quality Materials",
                    description: "We use only premium paints and materials to ensure a beautiful, long-lasting finish.",
                  },
                  {
                    title: "Attention to Detail",
                    description: "We take pride in our meticulous approach to every project, big or small.",
                  },
                  {
                    title: "Timely Completion",
                    description: "We respect your time and work efficiently to complete projects on schedule.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="mt-8">Learn More About Us</Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground text-lg">
                Don't just take our word for it. Here's what our satisfied customers have to say about our services.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                content:
                  "The team at PrimeCoat did an amazing job painting our living room and kitchen. They were professional, clean, and the quality of work exceeded our expectations.",
                rating: 5,
                delay: 0,
              },
              {
                name: "Michael Chen",
                role: "Business Owner",
                content:
                  "We hired PrimeCoat to paint our office space, and they delivered exceptional results. Their attention to detail and professionalism made the process smooth and stress-free.",
                rating: 5,
                delay: 100,
              },
              {
                name: "Emily Rodriguez",
                role: "Interior Designer",
                content:
                  "As an interior designer, I have high standards for painting work. PrimeCoat consistently delivers quality results for my clients. Highly recommended!",
                rating: 5,
                delay: 200,
              },
            ].map((testimonial, index) => (
              <ScrollReveal key={index} delay={testimonial.delay}>
                <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50 hover-lift">
                  <div className="flex mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                  </div>
                  <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/20 mr-3"></div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/testimonials">
                View All Testimonials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Ready to Transform Your Space?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Contact us today for a free consultation and quote. Let's bring your vision to life with our
                professional painting services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-primary font-semibold">
                  Get a Free Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  Contact Us
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-foreground/10 rounded-lg -z-10"></div>
                <Image
                  src="/assests/twpl.avif"
                  alt="Beautifully painted interior"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </RootLayout>
  )
}

