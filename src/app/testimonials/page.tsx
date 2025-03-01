import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"
import RootLayout from "@/components/layout"

export default function TestimonialsPage() {
  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="Happy clients" fill className="object-cover" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-up">
              Client Testimonials
            </h1>
            <p className="mt-6 text-xl text-muted-foreground animate-fade-up animate-delay-100">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-border/50 relative">
              <Quote className="absolute top-8 left-8 h-24 w-24 text-primary/10" />
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <div className="flex justify-center mb-6">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                    ))}
                </div>
                <p className="text-xl md:text-2xl font-medium mb-8">
                  "PrimeCoat Painters transformed our home with their exceptional painting services. The team was
                  professional, punctual, and paid incredible attention to detail. The quality of their work exceeded
                  our expectations, and we couldn't be happier with the results. I highly recommend them to anyone
                  looking for top-notch painting services."
                </p>
                <div className="flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-muted mr-4 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Jennifer Wilson"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-lg">Jennifer Wilson</p>
                    <p className="text-muted-foreground">Residential Client</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground text-lg">
                We take pride in our work and the satisfaction of our clients. Here are some of their experiences.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Chen",
                role: "Business Owner",
                content:
                  "We hired PrimeCoat to paint our office space, and they delivered exceptional results. Their attention to detail and professionalism made the process smooth and stress-free.",
                rating: 5,
                delay: 0,
              },
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                content:
                  "The team at PrimeCoat did an amazing job painting our living room and kitchen. They were professional, clean, and the quality of work exceeded our expectations. I would definitely hire them again for future projects.",
                rating: 5,
                delay: 100,
              },
              {
                name: "Emily Rodriguez",
                role: "Interior Designer",
                content:
                  "As an interior designer, I have high standards for painting work. PrimeCoat consistently delivers quality results for my clients. Their color matching is impeccable and their finishes are flawless.",
                rating: 5,
                delay: 200,
              },
              {
                name: "David Thompson",
                role: "Property Manager",
                content:
                  "We've used PrimeCoat for multiple properties in our management portfolio. Their team is reliable, efficient, and delivers consistent quality. They've become our go-to painting contractor.",
                rating: 5,
                delay: 300,
              },
              {
                name: "Lisa Martinez",
                role: "Homeowner",
                content:
                  "The exterior painting job PrimeCoat did on our home transformed the entire look of our property. They were thorough in their preparation and the paint job has held up beautifully.",
                rating: 5,
                delay: 400,
              },
              {
                name: "Robert Kim",
                role: "Restaurant Owner",
                content:
                  "PrimeCoat painted our restaurant during off-hours to minimize disruption to our business. The team was accommodating, professional, and did an excellent job. Highly recommended!",
                rating: 5,
                delay: 500,
              },
            ].map((testimonial, index) => (
              <ScrollReveal key={index} delay={testimonial.delay}>
                <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50 hover-lift h-full">
                  <div className="flex mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                  </div>
                  <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary/20 mr-3 overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Video Testimonials</h2>
              <p className="text-muted-foreground text-lg">
                Watch our clients share their experiences with PrimeCoat Painters.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-background rounded-xl shadow-sm border border-border/50 overflow-hidden hover-lift">
                  <div className="aspect-video bg-muted relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Video thumbnail"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center">
                        <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Client Success Story</h3>
                    <p className="text-muted-foreground">
                      Hear about this client's experience with our painting services and the transformation of their
                      space.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">Ready to Experience Our Quality Service?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Join our growing list of satisfied customers. Contact us today for a free consultation and quote.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" className="text-primary font-semibold" asChild>
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </RootLayout>
  )
}

