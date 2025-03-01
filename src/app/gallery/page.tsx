"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"
import RootLayout from "@/components/layout"

// Gallery categories and images
const categories = [
  { id: "all", name: "All Projects" },
  { id: "interior", name: "Interior" },
  { id: "exterior", name: "Exterior" },
  { id: "commercial", name: "Commercial" },
  { id: "specialty", name: "Specialty" },
]

const galleryItems = [
  {
    id: 1,
    title: "Modern Living Room Transformation",
    description: "Complete interior painting with accent wall and trim work.",
    category: "interior",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Living Room", "Accent Wall", "Neutral Tones"],
  },
  {
    id: 2,
    title: "Craftsman Home Exterior",
    description: "Full exterior painting with trim detail and front door accent.",
    category: "exterior",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Exterior", "Craftsman", "Bold Colors"],
  },
  {
    id: 3,
    title: "Retail Store Renovation",
    description: "Commercial painting project for a local boutique.",
    category: "commercial",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Commercial", "Retail", "Brand Colors"],
  },
  {
    id: 4,
    title: "Kitchen Cabinet Refinishing",
    description: "Complete cabinet refinishing with custom color matching.",
    category: "interior",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Kitchen", "Cabinets", "White"],
  },
  {
    id: 5,
    title: "Faux Finish Accent Wall",
    description: "Specialty finish creating a textured look for a dining room.",
    category: "specialty",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Dining Room", "Faux Finish", "Texture"],
  },
  {
    id: 6,
    title: "Colonial Home Exterior",
    description: "Classic colonial home with traditional color scheme.",
    category: "exterior",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Exterior", "Colonial", "Traditional"],
  },
  {
    id: 7,
    title: "Office Space Renovation",
    description: "Commercial office painting with brand-aligned colors.",
    category: "commercial",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Commercial", "Office", "Corporate"],
  },
  {
    id: 8,
    title: "Master Bedroom Suite",
    description: "Calming color palette for a master bedroom retreat.",
    category: "interior",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Bedroom", "Calming", "Neutral"],
  },
  {
    id: 9,
    title: "Venetian Plaster Feature Wall",
    description: "Luxury finish for an entryway statement wall.",
    category: "specialty",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Entryway", "Venetian Plaster", "Luxury"],
  },
  {
    id: 10,
    title: "Contemporary Kitchen",
    description: "Bright and airy kitchen with custom cabinet painting.",
    category: "interior",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Kitchen", "Contemporary", "Bright"],
  },
  {
    id: 11,
    title: "Victorian Home Restoration",
    description: "Historical color scheme for a Victorian home exterior.",
    category: "exterior",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Exterior", "Victorian", "Historical"],
  },
  {
    id: 12,
    title: "Restaurant Interior",
    description: "Vibrant commercial painting for a local restaurant.",
    category: "commercial",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Commercial", "Restaurant", "Vibrant"],
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const openLightbox = (id: number) => {
    setSelectedImage(id)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const getSelectedItem = () => {
    return galleryItems.find((item) => item.id === selectedImage)
  }

  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Our painting portfolio"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-up">
              Our Work Gallery
            </h1>
            <p className="mt-6 text-xl text-muted-foreground animate-fade-up animate-delay-100">
              Browse our portfolio of completed projects and get inspired for your next painting transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className="mb-2"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 50} className="h-full">
                <div
                  className="bg-background rounded-xl shadow-sm border border-border/50 overflow-hidden hover-lift h-full cursor-pointer"
                  onClick={() => openLightbox(item.id)}
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects found in this category. Please select another category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl bg-background rounded-xl shadow-lg overflow-hidden animate-scale-in">
            <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-10" onClick={closeLightbox}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-square relative">
                <Image
                  src={getSelectedItem()?.image || "/placeholder.svg"}
                  alt={getSelectedItem()?.title || "Gallery image"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{getSelectedItem()?.title}</h2>
                <p className="text-muted-foreground mb-4">{getSelectedItem()?.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Project Details:</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {getSelectedItem()?.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    This project showcases our attention to detail and commitment to quality. We worked closely with the
                    client to select the perfect colors and finishes for their space, resulting in a beautiful
                    transformation that exceeded their expectations.
                  </p>
                </div>

                <div className="mt-auto">
                  <Button asChild>
                    <Link href="/contact">
                      Get a Similar Look
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Contact us today to schedule a consultation and get a free, no-obligation quote for your painting
                project.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get a Free Quote
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

