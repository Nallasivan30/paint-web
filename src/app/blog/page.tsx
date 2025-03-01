import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/scroll-reveal"
import RootLayout from "@/components/layout"

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Perfect Paint Colors for Your Home",
    excerpt:
      "Selecting the right paint colors can be overwhelming. Learn our designer tips for creating a cohesive color palette that reflects your style.",
    date: "February 15, 2024",
    author: "Sarah Thompson",
    readTime: "6 min read",
    category: "Color Tips",
    image: "/placeholder.svg?height=600&width=800",
    slug: "how-to-choose-perfect-paint-colors",
  },
  {
    id: 2,
    title: "Interior vs. Exterior Paint: Understanding the Differences",
    excerpt:
      "Not all paints are created equal. Discover the key differences between interior and exterior paints and why using the right type matters.",
    date: "January 28, 2024",
    author: "Michael Rodriguez",
    readTime: "5 min read",
    category: "Paint Types",
    image: "/placeholder.svg?height=600&width=800",
    slug: "interior-vs-exterior-paint-differences",
  },
  {
    id: 3,
    title: "Preparing Your Home for a Professional Paint Job",
    excerpt:
      "Learn how to properly prepare your home before the painters arrive to ensure a smooth process and excellent results.",
    date: "January 10, 2024",
    author: "David Miller",
    readTime: "7 min read",
    category: "Preparation",
    image: "/placeholder.svg?height=600&width=800",
    slug: "preparing-home-for-professional-paint-job",
  },
  {
    id: 4,
    title: "2024 Color Trends: What's Hot in Home Painting",
    excerpt:
      "Stay ahead of the curve with our guide to the hottest color trends for 2024, from bold accent walls to subtle neutral palettes.",
    date: "December 12, 2023",
    author: "Jennifer Lee",
    readTime: "4 min read",
    category: "Trends",
    image: "/placeholder.svg?height=600&width=800",
    slug: "2024-color-trends-home-painting",
  },
  {
    id: 5,
    title: "The Benefits of Low-VOC and Eco-Friendly Paints",
    excerpt:
      "Discover how eco-friendly paint options can create a healthier home environment while still delivering beautiful results.",
    date: "November 30, 2023",
    author: "Sarah Thompson",
    readTime: "5 min read",
    category: "Eco-Friendly",
    image: "/placeholder.svg?height=600&width=800",
    slug: "benefits-low-voc-eco-friendly-paints",
  },
  {
    id: 6,
    title: "How to Properly Maintain Your Painted Surfaces",
    excerpt:
      "Learn essential tips for keeping your painted walls, trim, and exteriors looking fresh and beautiful for years to come.",
    date: "November 15, 2023",
    author: "Michael Rodriguez",
    readTime: "6 min read",
    category: "Maintenance",
    image: "/placeholder.svg?height=600&width=800",
    slug: "properly-maintain-painted-surfaces",
  },
]

export default function BlogPage() {
  return (
    <RootLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="Painting blog" fill className="object-cover" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-up">
              Painting Tips & Insights
            </h1>
            <p className="mt-6 text-xl text-muted-foreground animate-fade-up animate-delay-100">
              Expert advice, trends, and inspiration for your painting projects.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Featured blog post"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>

              <div>
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                  Featured Post
                </div>
                <h2 className="text-3xl font-bold mb-4">The Ultimate Guide to Choosing the Right Paint Finish</h2>
                <p className="text-muted-foreground mb-6">
                  From matte to high-gloss, each paint finish has its own unique properties and ideal applications. In
                  this comprehensive guide, we break down the different paint finishes and help you choose the perfect
                  one for every room and surface in your home.
                </p>

                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>March 5, 2024</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <User className="h-4 w-4 mr-1" />
                    <span>David Miller</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>8 min read</span>
                  </div>
                </div>

                <Button asChild>
                  <Link href="/blog/ultimate-guide-paint-finishes">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Latest Articles</h2>
              <p className="text-muted-foreground text-lg">
                Browse our collection of painting tips, trends, and expert advice.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 50} className="h-full">
                <div className="bg-background rounded-xl shadow-sm border border-border/50 overflow-hidden hover-lift h-full">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="aspect-[16/9] relative">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground mb-3">
                      {post.category}
                    </div>
                    <Link href={`/blog/${post.slug}`} className="block">
                      <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">{post.title}</h3>
                    </Link>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary font-medium inline-flex items-center hover:underline"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-primary text-primary-foreground rounded-xl p-8 md:p-12">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-primary-foreground/80 mb-6">
                  Get the latest painting tips, trends, and inspiration delivered straight to your inbox.
                </p>

                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                  <Button type="submit" variant="secondary" className="text-primary font-semibold">
                    Subscribe
                  </Button>
                </form>

                <p className="text-xs text-primary-foreground/70 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </RootLayout>
  )
}

