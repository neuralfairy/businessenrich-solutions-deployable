import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/enhanced-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, TrendingUp } from "lucide-react"

const stats = [
  { label: "Companies Served", value: "500+" },
  { label: "Revenue Generated", value: "$50M+" },
  { label: "Conversion Increase", value: "40%" },
  { label: "Years of Experience", value: "10+" }
]

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Messaging Strategist",
    bio: "Former VP of Marketing at Fortune 500 companies with expertise in B2B messaging and conversion optimization.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Michael Chen",
    role: "Head of Strategy",
    bio: "Psychology PhD specializing in persuasion and decision-making frameworks for business communication.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Emily Rodriguez",
    role: "Senior Consultant",
    bio: "15+ years in sales enablement and marketing automation with proven track record in revenue growth.",
    image: "/api/placeholder/300/300"
  }
]

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy is designed with measurable outcomes and ROI in mind."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "We become an extension of your team, deeply understanding your business goals."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in methodology and execution."
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "We constantly evolve our approaches based on data and market insights."
  }
]

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              About Businessenrich
            </Badge>
            <h1 className="text-4xl font-display font-bold tracking-tight sm:text-6xl mb-6">
              Transforming B2B Communication
              <span className="block text-accent"> Into Revenue Growth</span>
            </h1>
            <p className="text-xl leading-8 text-white/90 mb-8">
              We're a team of messaging strategists, psychologists, and business consultants dedicated to 
              helping companies communicate their value more effectively and drive measurable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={stat.label} className="animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that great messaging is the foundation of business success. Too many 
                companies struggle to articulate their value clearly, leading to missed opportunities 
                and stagnant growth.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our mission is to bridge that gap by providing data-driven messaging strategies 
                that transform how businesses communicate with their customers, resulting in 
                higher conversion rates, increased revenue, and sustainable growth.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="https://salescentri.com/get-started/book-demo">Partner With Us</a>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={value.title} className="hover-lift animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="text-center pb-4">
                    <value.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-sm">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our diverse team brings together expertise in psychology, marketing, sales, and business strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className="text-center hover-lift animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="outline">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>{member.bio}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-gradient-section">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-display font-bold mb-4">Based in Savannah, Georgia</h2>
            <p className="text-xl text-muted-foreground mb-8">
              While we're headquartered in historic Savannah, we serve clients globally with 
              remote-first consulting and digital delivery of all our messaging strategies.
            </p>
            <div className="bg-white rounded-lg p-8 shadow-soft">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="font-semibold mb-2">Headquarters</h3>
                  <p className="text-muted-foreground">
                    123 Bull Street<br />
                    Savannah, GA 31401<br />
                    United States
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Get in Touch</h3>
                  <p className="text-muted-foreground">
                    Phone: (912) 555-0123<br />
                    Email: hello@businessenrich.com<br />
                    Hours: Mon-Fri, 9AM-6PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-brand text-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how we can help transform your messaging strategy and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline-white" size="lg" asChild>
              <a href="https://salescentri.com/get-started/calendly">Schedule a Call</a>
            </Button>
            <Button variant="navy" size="lg" asChild>
              <a href="https://salescentri.com/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}