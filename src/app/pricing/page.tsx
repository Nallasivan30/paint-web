import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"
import RootLayout from "@/components/layout"

export default function PricingPage() {
  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Pricing and packages"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-up">
              Transparent Pricing
            </h1>
            <p className="mt-6 text-xl text-muted-foreground animate-fade-up animate-delay-100">
              Fair, competitive pricing for all our painting services with no hidden fees or surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Choose Your Perfect Plan</h2>
              <p className="text-muted-foreground text-lg">
                We offer a variety of service packages to meet your needs and budget. All plans include premium paints
                and professional application.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Basic",
                description: "Perfect for single room refreshes",
                price: "$350",
                unit: "starting at",
                features: [
                  { included: true, text: "Single room painting" },
                  { included: true, text: "Basic wall preparation" },
                  { included: true, text: "Standard paint options" },
                  { included: true, text: "2-year warranty" },
                  { included: true, text: "Basic cleanup" },
                  { included: false, text: "Color consultation" },
                  { included: false, text: "Premium finishes" },
                ],
                delay: 0,
              },
              {
                title: "Standard",
                description: "Ideal for multiple room projects",
                price: "$1,200",
                unit: "starting at",
                featured: true,
                features: [
                  { included: true, text: "Up to 3 rooms painting" },
                  { included: true, text: "Thorough surface preparation" },
                  { included: true, text: "Premium paint options" },
                  { included: true, text: "5-year warranty" },
                  { included: true, text: "Complete cleanup" },
                  { included: true, text: "Color consultation" },
                  { included: false, text: "Premium finishes" },
                ],
                delay: 100,
              },
              {
                title: "Premium",
                description: "Complete home transformation",
                price: "$3,500",
                unit: "starting at",
                features: [
                  { included: true, text: "Whole house painting" },
                  { included: true, text: "Advanced surface preparation" },
                  { included: true, text: "Premium paint and finishes" },
                  { included: true, text: "7-year warranty" },
                  { included: true, text: "Complete cleanup" },
                  { included: true, text: "Color consultation" },
                  { included: true, text: "Touch-up kit included" },
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
                    <div className="mb-6">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.unit}</span>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mr-2 shrink-0" />
                          )}
                          <span className={feature.included ? "" : "text-muted-foreground"}>{feature.text}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild variant={plan.featured ? "default" : "outline"} className="w-full">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Pricing */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">Need a Custom Quote?</h2>
              <p className="text-muted-foreground text-lg mb-6">
                We understand that every project is unique. Contact us for a personalized quote tailored to your
                specific needs and requirements.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Detailed Assessment",
                    description: "We'll evaluate your space and discuss your vision to provide an accurate quote.",
                  },
                  {
                    title: "Transparent Pricing",
                    description: "Our quotes break down all costs so you know exactly what you're paying for.",
                  },
                  {
                    title: "Flexible Options",
                    description: "We can adjust our services to accommodate your budget without compromising quality.",
                  },
                  {
                    title: "No Obligation",
                    description: "Our quotes are free and come with no pressure or obligation to proceed.",
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

              <Button className="mt-8" asChild>
                <Link href="/contact">
                  Request Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Custom painting project"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">
                Find answers to common questions about our pricing and services.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How do you determine the cost of a painting project?",
                answer:
                  "We consider factors such as the size of the area to be painted, the condition of the surfaces, the type of paint and finishes required, the complexity of the project, and the estimated time and labor needed.",
                delay: 0,
              },
              {
                question: "Do you offer discounts for larger projects?",
                answer:
                  "Yes, we typically offer scaled pricing for larger projects, which can result in a lower per-room or per-square-foot cost compared to smaller projects.",
                delay: 100,
              },
              {
                question: "Is the cost of paint included in your pricing?",
                answer:
                  "Yes, all our pricing includes the cost of premium paints. If you prefer specific specialty paints or brands that are outside our standard offerings, there may be an additional cost.",
                delay: 200,
              },
              {
                question: "Do you require a deposit?",
                answer:
                  "Yes, we typically require a 25% deposit to secure your spot on our schedule, with the balance due upon completion of the project and your satisfaction.",
                delay: 300,
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept cash, checks, and all major credit cards. We can also arrange payment plans for larger projects upon request and approval.",
                delay: 400,
              },
              {
                question: "Are there any hidden fees I should be aware of?",
                answer:
                  "No, we pride ourselves on transparent pricing. Our quotes include all costs, and we'll discuss any potential additional charges (such as extensive repairs) before proceeding with the work.",
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">Ready to Get Started?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Contact us today for a free, no-obligation quote and take the first step toward transforming your space.
              </p>
              <Button size="lg" variant="secondary" className="text-primary font-semibold" asChild>
                <Link href="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </RootLayout>
  )
}

