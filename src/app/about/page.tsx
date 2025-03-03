import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Award, Clock, Paintbrush } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"
import RootLayout from "@/components/layout"

export default function AboutPage() {
  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="Our painting team" fill className="object-cover" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-up">
              About PrimeCoat Painters
            </h1>
            <p className="mt-6 text-xl text-muted-foreground animate-fade-up animate-delay-100">
              We're a team of passionate professionals dedicated to transforming spaces with premium painting services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">Our Story</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Founded in 2005, PrimeCoat Painters began with a simple mission: to provide exceptional painting
                services with integrity, quality, and customer satisfaction at the forefront.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                What started as a small team of dedicated painters has grown into a full-service painting company
                serving residential and commercial clients throughout the region.
              </p>
              <p className="text-muted-foreground text-lg">
                Despite our growth, we've maintained our commitment to personalized service and attention to detail that
                set us apart from the beginning.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
                <Image
                  src="/face/h1.jpeg"
                  alt="Company founders"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Our Core Values</h2>
              <p className="text-muted-foreground text-lg">
                These principles guide everything we do and help us deliver exceptional service to our clients.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Quality",
                description:
                  "We never compromise on quality, using premium materials and techniques for lasting results.",
                delay: 0,
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Integrity",
                description: "We operate with honesty and transparency in all our client and team interactions.",
                delay: 100,
              },
              {
                icon: <Clock className="h-10 w-10 text-primary" />,
                title: "Reliability",
                description: "We respect your time with punctual service and projects completed on schedule.",
                delay: 200,
              },
              {
                icon: <Paintbrush className="h-10 w-10 text-primary" />,
                title: "Craftsmanship",
                description: "Our skilled painters take pride in their attention to detail and precision.",
                delay: 300,
              },
            ].map((value, index) => (
              <ScrollReveal key={index} delay={value.delay}>
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50 hover-lift h-full">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground text-lg">
                Our experienced professionals are dedicated to delivering exceptional results for every project.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "David Miller",
                role: "Founder & CEO",
                bio: "With over 20 years of experience in the painting industry, David founded PrimeCoat with a vision for quality and excellence.",
                delay: 0,
                image:'/face/h2.jpeg'
              },
              {
                name: "Sarah Thompson",
                role: "Lead Designer",
                bio: "Sarah brings her expertise in color theory and interior design to help clients make the perfect color choices for their spaces.",
                delay: 100,
                image:'/face/h3.jpeg'
              },
              {
                name: "Michael Rodriguez",
                role: "Project Manager",
                bio: "Michael ensures that every project runs smoothly, on time, and exceeds client expectations.",
                delay: 200,
                image:'/face/h4.jpeg'
              },
              {
                name: "Jennifer Lee",
                role: "Customer Relations",
                bio: "Jennifer is dedicated to providing exceptional customer service and ensuring client satisfaction throughout the process.",
                delay: 300,
                image:'/face/h5.jpeg'
              },
            ].map((member, index) => (
              <ScrollReveal key={index} delay={member.delay}>
                <div className="bg-background rounded-xl shadow-sm border border-border/50 overflow-hidden hover-lift">
                  <div className="h-64 bg-muted relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Years of Experience" },
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "25+", label: "Professional Painters" },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="p-6">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <p className="text-primary-foreground/80">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <ScrollReveal>
                <h2 className="text-3xl font-bold sm:text-4xl mb-4">Ready to Work With Us?</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Contact us today to discuss your project and get a free, no-obligation quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/services">Explore Our Services</Link>
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Image
                  src="/assests/bxpnt.avif"
                  alt="Our painting team at work"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  )
}

