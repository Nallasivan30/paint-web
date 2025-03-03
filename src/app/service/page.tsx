import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, PaintBucket, Home, Building2, Brush, Palette, Droplet } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"
import RootLayout from "@/components/layout"

export default function ServicesPage() {
  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="Painting services" fill className="object-cover" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-up">
              Our Painting Services
            </h1>
            <p className="mt-6 text-xl text-muted-foreground animate-fade-up animate-delay-100">
              Professional painting solutions for residential and commercial properties.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Comprehensive Painting Solutions</h2>
              <p className="text-muted-foreground text-lg">
                From interior touch-ups to complete exterior transformations, we offer a full range of professional
                painting services.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Home className="h-10 w-10 text-primary" />,
                title: "Residential Interior",
                description:
                  "Transform your home with our premium interior painting services, creating beautiful and lasting finishes for every room.",
                features: [
                  "Wall and ceiling painting",
                  "Trim and molding painting",
                  "Accent walls and decorative finishes",
                  "Color consultation",
                  "Drywall repair and preparation",
                ],
                image: "/placeholder.svg?height=400&width=600",
                delay: 0,
              },
              {
                icon: <PaintBucket className="h-10 w-10 text-primary" />,
                title: "Exterior Painting",
                description:
                  "Protect and beautify your property's exterior with our durable and weather-resistant paints and expert application.",
                features: [
                  "House exterior painting",
                  "Deck and fence staining",
                  "Garage and shed painting",
                  "Pressure washing",
                  "Weatherproofing and sealing",
                ],
                image: "/placeholder.svg?height=400&width=600",
                delay: 100,
              },
              {
                icon: <Building2 className="h-10 w-10 text-primary" />,
                title: "Commercial Painting",
                description:
                  "Professional painting solutions for offices, retail spaces, and commercial buildings with minimal disruption.",
                features: [
                  "Office and retail space painting",
                  "Industrial facility painting",
                  "After-hours and weekend service",
                  "Low-VOC paint options",
                  "Multi-unit property painting",
                ],
                image: "/placeholder.svg?height=400&width=600",
                delay: 200,
              },
              {
                icon: <Brush className="h-10 w-10 text-primary" />,
                title: "Cabinet Refinishing",
                description:
                  "Give your kitchen a fresh new look with our cabinet refinishing and painting services at a fraction of replacement cost.",
                features: [
                  "Cabinet door and drawer painting",
                  "Custom color matching",
                  "Distressed and specialty finishes",
                  "Hardware replacement",
                  "Protective topcoat application",
                ],
                image: "/placeholder.svg?height=400&width=600",
                delay: 300,
              },
              {
                icon: <Palette className="h-10 w-10 text-primary" />,
                title: "Color Consultation",
                description:
                  "Our color experts will help you choose the perfect palette for your space, considering lighting, architecture, and your preferences.",
                features: [
                  "Professional color recommendations",
                  "On-site color visualization",
                  "Sample paint application",
                  "Color scheme coordination",
                  "Trend and style guidance",
                ],
                image: "/placeholder.svg?height=400&width=600",
                delay: 400,
              },
              {
                icon: <Droplet className="h-10 w-10 text-primary" />,
                title: "Specialty Finishes",
                description:
                  "Add unique character to your space with our specialty painting techniques and decorative finishes.",
                features: [
                  "Faux finishes and textures",
                  "Metallic and pearlescent paints",
                  "Venetian plaster",
                  "Stenciling and patterns",
                  "Mural and accent designs",
                ],
                image: "/placeholder.svg?height=400&width=600",
                delay: 500,
              },
            ].map((service, index) => (
              <ScrollReveal key={index} delay={service.delay}>
                <div className="bg-background rounded-xl shadow-sm border border-border/50 overflow-hidden hover-lift h-full">
                  <div className="aspect-video relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>

                    <h4 className="font-medium mb-2">Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">
                        Request a Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Our Painting Process</h2>
              <p className="text-muted-foreground text-lg">
                We follow a systematic approach to ensure quality results and customer satisfaction for every project.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Consultation",
                description:
                  "We begin with a thorough consultation to understand your vision, preferences, and requirements for the project.",
                delay: 0,
              },
              {
                number: "02",
                title: "Preparation",
                description:
                  "Proper preparation is essential. We protect your furniture, repair surfaces, and ensure everything is ready for painting.",
                delay: 100,
              },
              {
                number: "03",
                title: "Painting",
                description:
                  "Our skilled painters apply premium paints with precision and attention to detail for a flawless finish.",
                delay: 200,
              },
              {
                number: "04",
                title: "Inspection",
                description:
                  "We conduct a thorough inspection and walkthrough to ensure the results meet our high standards and your expectations.",
                delay: 300,
              },
            ].map((step, index) => (
              <ScrollReveal key={index} delay={step.delay}>
                <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50 hover-lift h-full">
                  <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Materials We Use */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">Premium Materials for Lasting Results</h2>
              <p className="text-muted-foreground text-lg mb-6">
                We use only high-quality paints and materials from trusted brands to ensure beautiful, durable finishes
                that stand the test of time.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Premium Paints",
                    description:
                      "We use top-tier paints from Sherwin-Williams, Benjamin Moore, and other premium brands.",
                  },
                  {
                    title: "Eco-Friendly Options",
                    description:
                      "We offer low-VOC and environmentally friendly paint options for health-conscious clients.",
                  },
                  {
                    title: "Specialized Coatings",
                    description:
                      "We utilize specialized coatings for high-traffic areas, moisture-prone spaces, and exterior surfaces.",
                  },
                  {
                    title: "Quality Tools",
                    description:
                      "Our professional-grade brushes, rollers, and sprayers ensure smooth, even application.",
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
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Premium paint products"
                    fill
                    className="object-cover hover-scale"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Professional painting tools"
                    fill
                    className="object-cover hover-scale"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Eco-friendly paint options"
                    fill
                    className="object-cover hover-scale"
                  />
                </div>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Specialized coatings"
                    fill
                    className="object-cover hover-scale"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Transparent Pricing</h2>
              <p className="text-muted-foreground text-lg">
                We provide fair, competitive pricing for all our services with no hidden fees or surprises.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Basic",
                description: "Perfect for single room refreshes",
                price: "Starting at $350",
                features: [
                  "Single room painting",
                  "Basic wall preparation",
                  "Standard paint options",
                  "2-year warranty",
                  "Basic cleanup",
                ],
                delay: 0,
              },
              {
                title: "Standard",
                description: "Ideal for multiple room projects",
                price: "Starting at $1,200",
                featured: true,
                features: [
                  "Up to 3 rooms painting",
                  "Thorough surface preparation",
                  "Premium paint options",
                  "5-year warranty",
                  "Complete cleanup",
                  "Color consultation",
                ],
                delay: 100,
              },
              {
                title: "Premium",
                description: "Complete home transformation",
                price: "Starting at $3,500",
                features: [
                  "Whole house painting",
                  "Advanced surface preparation",
                  "Premium paint and finishes",
                  "7-year warranty",
                  "Complete cleanup",
                  "Color consultation",
                  "Touch-up kit",
                ],
                delay: 200,
              },
            ].map((plan, index) => (
              <ScrollReveal key={index} delay={plan.delay}>
                <div
                  className={`bg-background rounded-xl shadow-sm border overflow-hidden h-full hover-lift ${
                    plan.featured ? "border-primary ring-1 ring-primary/20 relative" : "border-border/50"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    <div className="text-2xl font-bold mb-6">{plan.price}</div>

                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild variant={plan.featured ? "default" : "outline"} className="w-full">
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Need a custom quote for your specific project? Contact us for a personalized estimate.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Request Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">Ready to Transform Your Space?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Contact us today to schedule a consultation and get a free, no-obligation quote for your painting
                project.
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
                  <Link href="/gallery">View Our Work</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </RootLayout>
  )
}

