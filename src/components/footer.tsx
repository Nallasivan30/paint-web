import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] py-12 border-t border-border/40">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Brand Section */}
      <div className="space-y-4 animate-fade-up">
        <div className="flex items-center space-x-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-background">
            <div className="absolute inset-0 flex items-center justify-center text-primary font-bold text-xl">
              P
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight text-background">PrimeCoat</span>
        </div>
        <p className="text-background/80">
          Professional painting services with a commitment to quality, integrity, and customer satisfaction.
        </p>
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon" className="hover-scale bg-background/10 hover:bg-background/20">
            <Facebook className="h-5 w-5 text-background" />
            <span className="sr-only">Facebook</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover-scale bg-background/10 hover:bg-background/20">
            <Instagram className="h-5 w-5 text-background" />
            <span className="sr-only">Instagram</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover-scale bg-background/10 hover:bg-background/20">
            <Twitter className="h-5 w-5 text-background" />
            <span className="sr-only">Twitter</span>
          </Button>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="space-y-4 animate-fade-up animate-delay-100">
        <h3 className="font-semibold text-lg text-background">Quick Links</h3>
        <ul className="space-y-2">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Gallery", href: "/gallery" },
            { name: "Testimonials", href: "/testimonials" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-background/80 hover:text-background transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="space-y-4 animate-fade-up animate-delay-200">
        <h3 className="font-semibold text-lg text-background">Contact Us</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <MapPin className="h-5 w-5 mr-2 mt-0.5 text-background" />
            <span className="text-background/80">123 Painter Street, Colorville, CV 12345</span>
          </li>
          <li className="flex items-center">
            <Phone className="h-5 w-5 mr-2 text-background" />
            <span className="text-background/80">(555) 123-4567</span>
          </li>
          <li className="flex items-center">
            <Mail className="h-5 w-5 mr-2 text-background" />
            <span className="text-background/80">info@primecoat.com</span>
          </li>
        </ul>
      </div>

      {/* Newsletter Section */}
      <div className="space-y-4 animate-fade-up animate-delay-300">
        <h3 className="font-semibold text-lg text-background">Newsletter</h3>
        <p className="text-background/80">Subscribe to our newsletter for tips, news, and special offers.</p>
        <div className="flex space-x-2">
          <Input
            type="email"
            placeholder="Your email"
            className="max-w-[220px] bg-background/10 border-background/20 placeholder:text-background/50 text-background"
          />
          <Button type="submit" className="bg-background text-primary hover:bg-background/90">
            Subscribe
          </Button>
        </div>
      </div>
    </div>

    {/* Footer Bottom Section */}
    <div className="mt-12 pt-8 border-t border-background/20">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-background/80">
          © {new Date().getFullYear()} PrimeCoat Painters. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <Link
            href="/privacy-policy"
            className="text-sm text-background/80 hover:text-background transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-sm text-background/80 hover:text-background transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

