import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/enhanced-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react"
import { useState } from "react"

const faqCategories = [
  {
    category: "Getting Started",
    icon: HelpCircle,
    faqs: [
      {
        question: "What is messaging strategy and why do I need it?",
        answer: "Messaging strategy is the systematic approach to crafting and delivering your value proposition in a way that resonates with your target audience and drives desired actions. It's essential because clear, compelling messaging is the foundation of all successful marketing and sales efforts. Without it, you risk confusing prospects, missing opportunities, and losing competitive advantage."
      },
      {
        question: "How do I know if my current messaging needs improvement?",
        answer: "Signs that your messaging needs work include: low conversion rates, difficulty explaining what you do, prospects not understanding your value, long sales cycles, high customer acquisition costs, and feedback that your messaging is confusing or generic. Our free messaging audit can help identify specific areas for improvement."
      },
      {
        question: "What's included in your messaging strategy service?",
        answer: "Our comprehensive service includes: customer research and persona development, competitive analysis, value proposition creation, messaging hierarchy and framework development, content templates for all channels, sales enablement materials, and ongoing optimization based on performance data."
      }
    ]
  },
  {
    category: "Implementation",
    icon: MessageCircle,
    faqs: [
      {
        question: "How long does it take to see results from a new messaging strategy?",
        answer: "While implementation begins immediately, measurable results typically appear within 30-60 days. Initial improvements in clarity and engagement often show within weeks, while conversion rate improvements become apparent after 1-2 months of consistent implementation across all channels."
      },
      {
        question: "Can you work with our existing marketing and sales teams?",
        answer: "Absolutely! We're designed to integrate seamlessly with your existing teams. We provide training, templates, and ongoing support to ensure your team can effectively implement and maintain the messaging strategy. We become an extension of your team rather than a replacement."
      },
      {
        question: "Do you provide training for our team?",
        answer: "Yes, comprehensive training is included in all our packages. This includes workshops for your marketing and sales teams, documentation and playbooks, ongoing consultation calls, and access to our resource library. We ensure your team is fully equipped to execute the strategy effectively."
      }
    ]
  },
  {
    category: "Pricing & Plans",
    icon: HelpCircle,
    faqs: [
      {
        question: "Do you offer a free trial or consultation?",
        answer: "Yes! We offer a free 30-minute strategy consultation where we'll review your current messaging and provide initial recommendations. We also offer a 14-day trial period for our Professional plan, allowing you to experience our full service risk-free."
      },
      {
        question: "What's the difference between your plans?",
        answer: "Our Starter plan focuses on core messaging framework development, Professional adds advanced features like multi-channel optimization and regular consultations, while Enterprise provides fully customized solutions with dedicated support. Each plan scales with your business needs and complexity."
      },
      {
        question: "Can I upgrade or downgrade my plan?",
        answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle. We'll work with you to ensure a smooth transition and that you're always on the plan that best fits your current needs."
      }
    ]
  },
  {
    category: "Results & ROI",
    icon: HelpCircle,
    faqs: [
      {
        question: "What kind of results can I expect?",
        answer: "Our clients typically see 20-40% improvements in conversion rates, 30-60% increases in qualified leads, and significant reductions in sales cycle length. Specific results vary based on industry, starting point, and implementation consistency, but all clients see measurable improvements in messaging effectiveness."
      },
      {
        question: "How do you measure the success of a messaging strategy?",
        answer: "We track multiple metrics including conversion rates across all channels, lead quality scores, sales cycle length, customer acquisition cost, engagement rates, and customer feedback. We provide monthly reports showing progress against baseline metrics and recommend optimizations based on performance data."
      },
      {
        question: "What if I'm not satisfied with the results?",
        answer: "We stand behind our work with a satisfaction guarantee. If you're not seeing measurable improvements within 90 days of full implementation, we'll work with you at no additional cost to refine the strategy until you achieve the results you need."
      }
    ]
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl font-display font-bold tracking-tight sm:text-6xl mb-6">
              Everything You Need to Know
              <span className="block text-accent"> About Messaging Strategy</span>
            </h1>
            <p className="text-xl leading-8 text-white/90 mb-8">
              Get answers to the most common questions about our messaging strategy services, 
              implementation process, and expected results.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={category.category} className="mb-12 animate-slide-up" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
              <div className="flex items-center mb-8">
                <category.icon className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-display font-bold">{category.category}</h2>
              </div>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const itemId = `${category.category}-${faqIndex}`
                  const isOpen = openItems.includes(itemId)
                  
                  return (
                    <Card key={faqIndex} className="hover-glow">
                      <Collapsible open={isOpen} onOpenChange={() => toggleItem(itemId)}>
                        <CollapsibleTrigger asChild>
                          <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-left text-lg">{faq.question}</CardTitle>
                              <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-gradient-section">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our messaging strategy experts are here to help. Get personalized answers 
              to your specific questions and challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg">Live Chat</CardTitle>
                  <CardDescription>Get instant answers</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://salescentri.com/contact/support-request/live-chat">Start Chat</a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg">Schedule Call</CardTitle>
                  <CardDescription>Book a consultation</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="hero" className="w-full" asChild>
                    <a href="https://salescentri.com/get-started/calendly">Book Now</a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover-lift">
                <CardHeader>
                  <CardTitle className="text-lg">Email Support</CardTitle>
                  <CardDescription>Detailed responses</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://salescentri.com/contact/support-request">Send Email</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-brand text-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Transform Your Messaging?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Start your journey to more effective messaging with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline-white" size="lg" asChild>
              <a href="https://salescentri.com/get-started/free-trial">Start Free Trial</a>
            </Button>
            <Button variant="navy" size="lg" asChild>
              <a href="https://salescentri.com/get-started/book-demo">Book Free Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}