import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"
import RootLayout from "@/components/layout"

export default function FAQPage() {
  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Frequently Asked Questions"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-up">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-xl text-muted-foreground animate-fade-up animate-delay-100">
              Find answers to common questions about our painting services, process, and policies.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Services & Process",
                description: "Learn about our painting services and what to expect during the process.",
                link: "#services-process",
                delay: 0,
              },
              {
                title: "Pricing & Payment",
                description: "Information about our pricing structure, estimates, and payment options.",
                link: "#pricing-payment",
                delay: 100,
              },
              {
                title: "Materials & Techniques",
                description: "Details about the paints, tools, and techniques we use for optimal results.",
                link: "#materials-techniques",
                delay: 200,
              },
              {
                title: "Scheduling & Timeline",
                description: "Questions about project scheduling, duration, and availability.",
                link: "#scheduling-timeline",
                delay: 300,
              },
              {
                title: "Preparation & Cleanup",
                description: "Information about how we prepare for and clean up after painting projects.",
                link: "#preparation-cleanup",
                delay: 400,
              },
              {
                title: "Warranties & Guarantees",
                description: "Details about our warranties, guarantees, and what they cover.",
                link: "#warranties-guarantees",
                delay: 500,
              },
            ].map((category, index) => (
              <ScrollReveal key={index} delay={category.delay}>
                <Link href={category.link}>
                  <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50 hover-lift h-full">
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="text-primary font-medium inline-flex items-center">
                      View Questions
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Process FAQs */}
      <section id="services-process" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center">Services & Process</h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "What painting services do you offer?",
                answer:
                  "We offer a comprehensive range of painting services including interior painting, exterior painting, commercial painting, cabinet refinishing, deck and fence staining, color consultation, and specialty finishes. We work on residential and commercial properties of all sizes.",
              },
              {
                question: "How does your painting process work?",
                answer:
                  "Our process begins with a consultation to understand your needs and provide a detailed quote. Once approved, we schedule the project, prepare the surfaces (including cleaning, repairing, and priming as needed), apply the paint with precision, and conduct a final inspection with you to ensure your complete satisfaction.",
              },
              {
                question: "Do you handle both residential and commercial projects?",
                answer:
                  "Yes, we have dedicated teams for both residential and commercial painting projects. Our commercial team is experienced in working with businesses to minimize disruption, including offering after-hours and weekend service when needed.",
              },
              {
                question: "Can you help me choose colors for my space?",
                answer:
                  "We offer professional color consultation services to help you select the perfect colors for your space. Our color experts consider factors like lighting, architecture, existing furnishings, and your personal preferences to recommend a cohesive color palette.",
              },
              {
                question: "Do you offer specialty finishes or decorative painting?",
                answer:
                  "Yes, we offer a variety of specialty finishes including faux finishes, textured walls, metallic paints, Venetian plaster, stenciling, and more. These decorative techniques can add unique character and visual interest to your space.",
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Payment FAQs */}
      <section id="pricing-payment" className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center">Pricing & Payment</h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "How do you determine the cost of a painting project?",
                answer:
                  "We consider factors such as the size of the area to be painted, the condition of the surfaces, the type of paint and finishes required, the complexity of the project, and the estimated time and labor needed. We provide detailed, transparent quotes that break down all costs.",
              },
              {
                question: "Do you offer free estimates?",
                answer:
                  "Yes, we provide free, no-obligation estimates for all painting projects. We can provide a rough estimate over the phone, but for an accurate quote, we prefer to visit your property to assess the surfaces and discuss your specific needs in person.",
              },
              {
                question: "Is the cost of paint included in your pricing?",
                answer:
                  "Yes, all our pricing includes the cost of premium paints. If you prefer specific specialty paints or brands that are outside our standard offerings, there may be an additional cost, which we'll clearly communicate in the estimate.",
              },
              {
                question: "Do you require a deposit?",
                answer:
                  "Yes, we typically require a 25% deposit to secure your spot on our schedule, with the balance due upon completion of the project and your satisfaction. For larger projects, we may arrange a payment schedule with installments at key milestones.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept cash, checks, and all major credit cards. We can also arrange payment plans for larger projects upon request and approval. All payment options will be discussed during the estimation process.",
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Techniques FAQs */}
      <section id="materials-techniques" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center">Materials & Techniques</h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "What brands of paint do you use?",
                answer:
                  "We primarily use premium paints from Sherwin-Williams and Benjamin Moore, which offer excellent coverage, durability, and color retention. We can also accommodate requests for specific brands if you have a preference.",
              },
              {
                question: "Do you offer eco-friendly or low-VOC paint options?",
                answer:
                  "Yes, we offer a variety of eco-friendly, low-VOC (Volatile Organic Compounds), and zero-VOC paint options. These paints are better for the environment and indoor air quality, making them ideal for homes with children, pets, or individuals with sensitivities.",
              },
              {
                question: "How do you apply the paint?",
                answer:
                  "We use a combination of brushes, rollers, and sprayers depending on the surface and finish desired. Our professional painters are skilled in all application techniques and will select the most appropriate method for each area of your project to ensure the best results.",
              },
              {
                question: "How many coats of paint will you apply?",
                answer:
                  "We typically apply two coats of paint for most projects to ensure even coverage and a durable finish. In some cases, such as when painting a lighter color over a darker one or when using certain specialty finishes, additional coats may be necessary.",
              },
              {
                question: "Do you use primers before painting?",
                answer:
                  "Yes, we use primers when necessary to ensure proper adhesion, coverage, and longevity of the paint. Priming is particularly important on new drywall, when covering stains or dark colors, when painting over glossy surfaces, and for exterior projects.",
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scheduling & Timeline FAQs */}
      <section id="scheduling-timeline" className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center">Scheduling & Timeline</h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "How far in advance should I schedule my painting project?",
                answer:
                  "We recommend scheduling at least 2-4 weeks in advance, especially during our busy season (spring and summer). For larger projects or if you have a specific timeframe in mind, booking further in advance is advisable. We do our best to accommodate urgent requests when possible.",
              },
              {
                question: "How long will my painting project take?",
                answer:
                  "The duration depends on the size and complexity of the project. A single room typically takes 1-2 days, while a full interior home painting might take 3-7 days. Exterior projects usually take 3-5 days for an average-sized home. We'll provide a specific timeline estimate for your project during the consultation.",
              },
              {
                question: "Do you work weekends or evenings?",
                answer:
                  "Our standard working hours are Monday through Friday, 8:00 AM to 6:00 PM. However, we can arrange weekend or evening work for commercial projects or in special circumstances where minimizing disruption is critical. This flexibility may affect pricing and should be discussed during the estimation process.",
              },
              {
                question: "What happens if there's bad weather during my exterior painting project?",
                answer:
                  "For exterior projects, we monitor weather conditions closely and will reschedule if conditions are not suitable for painting (rain, high humidity, extreme temperatures). We'll communicate any weather-related delays promptly and adjust the schedule accordingly.",
              },
              {
                question: "How quickly can you start after I approve the estimate?",
                answer:
                  "Once you approve the estimate and provide the deposit, we'll schedule your project based on our current workload. During peak seasons, this might be 2-4 weeks, but during slower periods, we may be able to start within a week. For urgent projects, let us know, and we'll do our best to accommodate your timeline.",
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation & Cleanup FAQs */}
      <section id="preparation-cleanup" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center">Preparation & Cleanup</h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "How should I prepare my home before you arrive?",
                answer:
                  "We recommend removing small items, pictures, and valuables from the areas to be painted. For furniture, we typically handle moving larger pieces to the center of the room and covering them with protective materials. Please secure pets in areas away from the work zones for their safety and comfort.",
              },
              {
                question: "Do you repair drywall or other surface damage before painting?",
                answer:
                  "Yes, our standard preparation includes minor drywall repairs, filling nail holes, and sanding rough areas. For more extensive repairs (large holes, water damage, etc.), we can either include this in our services for an additional fee or recommend a specialist depending on the extent of the damage.",
              },
              {
                question: "How do you protect my furniture and belongings during painting?",
                answer:
                  "We take great care to protect your property by covering furniture with plastic sheeting, using drop cloths on floors, and applying painter's tape to protect trim, fixtures, and other areas not being painted. Our goal is to leave your home exactly as we found it, except for the beautiful new paint.",
              },
              {
                question: "Do you clean up after completing the project?",
                answer:
                  "Absolutely. Our cleanup process includes removing all painting materials, tools, and debris, disposing of paint cans properly, removing protective coverings, returning furniture to its original position, and a final inspection to ensure everything is clean and in order.",
              },
              {
                question: "Do I need to be home during the painting process?",
                answer:
                  "You don't need to be present during the entire painting process, though we do recommend being available at the beginning to review the project details and at the end for a final walkthrough. We just need a way to access your property on the scheduled days.",
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Warranties & Guarantees FAQs */}
      <section id="warranties-guarantees" className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center">Warranties & Guarantees</h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "Do you offer a warranty on your work?",
                answer:
                  "Yes, we offer a 2-year warranty on our standard painting services, 5-year warranty on our premium services, and 7-year warranty on our deluxe packages. These warranties cover issues like peeling, blistering, and excessive fading under normal conditions.",
              },
              {
                question: "What is your satisfaction guarantee?",
                answer:
                  "We guarantee your complete satisfaction with our work. Before we consider a project complete, we conduct a walkthrough with you to ensure everything meets your expectations. If you notice any issues or areas that need touch-ups, we'll address them promptly at no additional cost.",
              },
              {
                question: "What happens if I notice an issue after the project is completed?",
                answer:
                  "If you notice any issues with our workmanship after the project is completed, please contact us right away. We'll schedule a time to inspect the issue and make necessary repairs according to our warranty terms. We stand behind our work and want you to be completely satisfied.",
              },
              {
                question: "Are the paint products themselves covered under warranty?",
                answer:
                  "The paint products we use come with manufacturer warranties that vary by brand and product line. These typically cover defects in the paint itself. We'll provide you with information about the specific paint warranties that apply to the products used in your project.",
              },
              {
                question: "What isn't covered under your warranty?",
                answer:
                  "Our warranty doesn't cover damage caused by factors beyond our control, such as structural issues, water damage, settling of the home, improper cleaning (using abrasive cleaners), intentional damage, or normal wear and tear. We're happy to discuss specific scenarios if you have concerns.",
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">Still Have Questions?</h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                We're here to help! Contact us directly and our team will be happy to assist you with any questions or
                concerns.
              </p>
              <Button size="lg" variant="secondary" className="text-primary font-semibold" asChild>
                <Link href="/contact">
                  Contact Us
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

