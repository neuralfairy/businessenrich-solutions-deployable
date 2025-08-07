import { useState, useEffect } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/enhanced-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  MessageSquare, 
  TrendingUp, 
  Target, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  BarChart3,
  Shield,
  Award,
  Zap,
  Brain,
  Lightbulb
} from "lucide-react"

const stats = [
  { value: "500+", label: "Companies Served" },
  { value: "40%", label: "Average Conversion Increase" },
  { value: "$50M+", label: "Revenue Generated" },
  { value: "98%", label: "Client Satisfaction" }
]

const features = [
  {
    icon: MessageSquare,
    title: "Message Architecture",
    description: "Build compelling narrative frameworks that resonate with your audience and drive action through psychology-based messaging strategies."
  },
  {
    icon: Target,
    title: "Conversion Optimization",
    description: "Data-driven messaging strategies that improve conversion rates across all customer touchpoints with measurable ROI."
  },
  {
    icon: TrendingUp,
    title: "Sales Enablement",
    description: "Equip your sales team with powerful messaging tools and frameworks that close more deals faster."
  },
  {
    icon: Users,
    title: "Multi-Channel Strategy",
    description: "Consistent messaging across all channels - email, social, ads, and direct sales for unified brand voice."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track and measure the impact of your messaging strategy with detailed analytics and insights."
  },
  {
    icon: Brain,
    title: "Psychology-Based Messaging",
    description: "Leverage cognitive psychology principles to create messages that influence and persuade effectively."
  }
]

const testimonials = [
  {
    quote: "Businessenrich transformed our messaging strategy and increased our conversion rates by 45% within 90 days. Their psychology-based approach really works.",
    author: "Sarah Chen",
    title: "VP Marketing",
    company: "TechFlow Solutions",
    rating: 5
  },
  {
    quote: "The ROI on our messaging strategy investment was incredible. We saw a 3x improvement in qualified leads and reduced our sales cycle by 30%.",
    author: "Michael Rodriguez",
    title: "Sales Director",
    company: "Growth Dynamics",
    rating: 5
  },
  {
    quote: "Finally, a messaging strategy that actually converts. Their team understood our market and created frameworks that consistently drive results.",
    author: "Emily Johnson",
    title: "CEO",
    company: "InnovateB2B",
    rating: 5
  }
]

const trustedBy = [
  "TechFlow Solutions",
  "Growth Dynamics", 
  "InnovateB2B",
  "ScaleUP Corp",
  "Nexus Industries",
  "Velocity Partners"
]

export default function Index() {
  const [email, setEmail] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                #1 Messaging Strategy Platform
              </Badge>
              <h1 className="text-4xl font-display font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
                Transform Your
                <span className="block text-accent"> Messaging Into Revenue</span>
              </h1>
              <p className="text-xl leading-8 text-white/90 mb-8 max-w-2xl">
                Craft high-converting messaging strategies that turn prospects into customers. 
                Our proven psychology-based frameworks help B2B companies increase conversions by 40% on average.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="xl" asChild>
                  <a href="https://salescentri.com/get-started/free-trial">
                    Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline-white" size="xl" asChild>
                  <a href="https://salescentri.com/solutions/use-case-navigator/demo">
                    Watch Demo
                  </a>
                </Button>
              </div>
              <p className="text-sm text-white/70">
                ✓ 14-day free trial ✓ No credit card required ✓ Setup in under 5 minutes
              </p>
            </div>
            
            <div className={`animate-slide-up ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-glow">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">ROI Calculator</CardTitle>
                  <CardDescription className="text-white/80">
                    See how much revenue you could generate with optimized messaging
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-accent">40%</div>
                      <div className="text-sm text-white/80">Avg. Conversion Increase</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-accent">6x</div>
                      <div className="text-sm text-white/80">Typical ROI</div>
                    </div>
                  </div>
                  <Button variant="hero" className="w-full" size="lg" asChild>
                    <a href="https://salescentri.com/solutions/use-case-navigator/recommendations">
                      Calculate Your ROI
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={stat.label} className="animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground mb-8">Trusted by leading B2B companies</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {trustedBy.map((company, index) => (
              <div key={company} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Complete Messaging Platform
            </Badge>
            <h2 className="text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Everything You Need for High-Converting Messaging
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our comprehensive platform combines psychology, data science, and proven frameworks 
              to create messaging that converts prospects into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="hover-lift animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <a href="/features">
                Explore All Features <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our clients say about their messaging transformation results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.author} className="hover-lift animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Enterprise Security</h3>
              <p className="text-sm text-muted-foreground">SOC 2 Type II certified with bank-grade encryption</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Industry Certified</h3>
              <p className="text-sm text-muted-foreground">ISO 27001 and GDPR compliant platform</p>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Fast Implementation</h3>
              <p className="text-sm text-muted-foreground">See results in 30 days or less</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Satisfaction Guarantee</h3>
              <p className="text-sm text-muted-foreground">90-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 brand-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <Lightbulb className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Transform Your Messaging Strategy?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join hundreds of companies that have increased their conversion rates with our proven methodology. 
            Start your free trial today and see results within 30 days.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="outline-white" size="xl" asChild>
              <a href="https://salescentri.com/get-started/free-trial">
                Start Free Trial
              </a>
            </Button>
            <Button variant="navy" size="xl" asChild>
              <a href="https://salescentri.com/get-started/book-demo">
                Book Demo
              </a>
            </Button>
          </div>

          <div className="max-w-md mx-auto">
            <p className="text-sm text-white/80 mb-4">Or subscribe to our newsletter for messaging tips:</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-foreground"
              />
              <Button variant="navy" asChild>
                <a href="https://salescentri.com/contact">Subscribe</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
