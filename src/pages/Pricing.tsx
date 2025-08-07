import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/enhanced-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$497",
    period: "/month",
    description: "Perfect for small teams getting started with messaging strategy",
    features: [
      "Basic messaging framework",
      "Up to 3 customer personas",
      "Email templates library",
      "Monthly strategy review",
      "Basic analytics dashboard",
      "Email support"
    ],
    cta: "Start Free Trial",
    href: "https://salescentri.com/pricing/free-trial",
    popular: false
  },
  {
    name: "Professional",
    price: "$1,497",
    period: "/month",
    description: "Advanced features for growing businesses and sales teams",
    features: [
      "Advanced messaging architecture",
      "Unlimited customer personas",
      "Multi-channel campaign templates",
      "Weekly strategy consultations",
      "Advanced analytics & A/B testing",
      "Sales script optimization",
      "CRM integrations",
      "Priority support"
    ],
    cta: "Start Free Trial",
    href: "https://salescentri.com/pricing/free-trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex needs",
    features: [
      "Custom messaging strategy",
      "Dedicated strategy consultant",
      "Team training & workshops",
      "Custom integrations",
      "White-label options",
      "24/7 dedicated support",
      "SLA guarantees",
      "Custom reporting"
    ],
    cta: "Contact Sales",
    href: "https://salescentri.com/pricing/enterprise-custom",
    popular: false
  }
]

const faqs = [
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a 14-day free trial with full access to all features in your chosen plan. No credit card required to start."
  },
  {
    question: "Can I change plans anytime?",
    answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle."
  },
  {
    question: "What's included in the setup?",
    answer: "Every plan includes onboarding, initial strategy consultation, and setup assistance to ensure you get maximum value from day one."
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer: "Yes, our Enterprise plan is fully customizable with dedicated support, custom integrations, and tailored messaging strategies."
  }
]

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl mb-6">
              Choose Your Messaging
              <span className="block text-primary"> Strategy Plan</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground mb-8">
              Start with a free trial. Scale as you grow. No hidden fees or long-term commitments.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`relative hover-lift animate-slide-up ${plan.popular ? 'ring-2 ring-primary' : ''}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-display">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-4">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    className="w-full" 
                    size="lg"
                    asChild
                  >
                    <a href={plan.href}>{plan.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 bg-gradient-section">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Zap className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold mb-4">
              Calculate Your Messaging ROI
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              See how much revenue you could generate with improved messaging strategy.
            </p>
            <div className="bg-white rounded-lg p-8 shadow-soft">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">40%</div>
                  <div className="text-sm text-muted-foreground">Average conversion increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">$250K</div>
                  <div className="text-sm text-muted-foreground">Average annual revenue impact</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">6x</div>
                  <div className="text-sm text-muted-foreground">Typical ROI within 12 months</div>
                </div>
              </div>
              <Button variant="hero" size="lg" className="mt-8" asChild>
                <a href="https://salescentri.com/solutions/use-case-navigator/recommendations">Get Custom ROI Estimate</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about our pricing and plans.</p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Card key={faq.question} className="hover-glow animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <CardTitle className="text-left">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}