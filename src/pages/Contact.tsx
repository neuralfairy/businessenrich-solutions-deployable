import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/enhanced-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Users } from "lucide-react"

const contactMethods = [
  {
    icon: Calendar,
    title: "Book a Strategy Session",
    description: "Schedule a personalized consultation to discuss your messaging needs",
    cta: "Book Now",
    href: "https://salescentri.com/get-started/calendly"
  },
  {
    icon: MessageCircle,
    title: "Live Chat Support",
    description: "Get instant answers to your questions from our messaging experts",
    cta: "Start Chat",
    href: "https://salescentri.com/contact/support-request/live-chat"
  },
  {
    icon: Users,
    title: "Sales Inquiry",
    description: "Speak with our sales team about custom messaging solutions",
    cta: "Contact Sales",
    href: "https://salescentri.com/contact/sales-inquiry"
  }
]

const offices = [
  {
    city: "Savannah",
    address: "123 Bull Street, Savannah, GA 31401",
    phone: "(912) 555-0123",
    email: "savannah@businessenrich.com"
  }
]

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Get In Touch
            </Badge>
            <h1 className="text-4xl font-display font-bold tracking-tight sm:text-6xl mb-6">
              Let's Transform Your
              <span className="block text-accent"> Messaging Strategy</span>
            </h1>
            <p className="text-xl leading-8 text-white/90 mb-8">
              Ready to see measurable results from your messaging? Our experts are here to help 
              you craft compelling strategies that drive conversions and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Choose How You'd Like to Connect</h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to get the messaging strategy support you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={method.title} className="text-center hover-lift animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <method.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="hero" className="w-full" asChild>
                    <a href={method.href}>{method.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card className="hover-glow">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form action="https://salescentri.com/contact" method="POST" className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        rows={4}
                        placeholder="Tell us about your messaging challenges and goals..."
                        required 
                      />
                    </div>
                    
                    <Button type="submit" variant="hero" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up" style={{animationDelay: "0.2s"}}>
              <div>
                <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-muted-foreground">(912) 555-0123</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">hello@businessenrich.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="text-muted-foreground">
                        123 Bull Street<br />
                        Savannah, GA 31401
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Business Hours</div>
                      <div className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        Saturday - Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <Card className="hover-glow">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>
                    Need immediate assistance? Try these options.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://salescentri.com/get-started/free-trial">
                      Start Free Trial
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://salescentri.com/contact/support-request/submit-ticket">
                      Submit Support Ticket
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://salescentri.com/contact/partnerships/partner-inquiry">
                      Partner Inquiry
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Our Office</h2>
            <p className="text-xl text-muted-foreground">
              Visit us in historic Savannah or connect with us virtually.
            </p>
          </div>
          
          {offices.map((office, index) => (
            <Card key={office.city} className="max-w-2xl mx-auto hover-glow animate-fade-in">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{office.city} Office</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-muted-foreground">{office.address}</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">{office.phone}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">{office.email}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}