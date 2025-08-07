import { useState } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/enhanced-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, MessageSquare, Target, TrendingUp, Users, Zap, BarChart3, Brain, Lightbulb } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Message Architecture",
    description: "Build compelling narrative frameworks that resonate with your target audience and drive action.",
    benefits: ["Audience segmentation", "Value proposition mapping", "Message hierarchy", "Emotional triggers"]
  },
  {
    icon: Target,
    title: "Conversion Optimization",
    description: "Data-driven messaging strategies that improve conversion rates across all customer touchpoints.",
    benefits: ["A/B testing frameworks", "CRO best practices", "Performance tracking", "ROI measurement"]
  },
  {
    icon: Brain,
    title: "Psychology-Based Messaging",
    description: "Leverage cognitive psychology principles to create messages that influence and persuade effectively.",
    benefits: ["Behavioral triggers", "Persuasion techniques", "Cognitive biases", "Decision frameworks"]
  },
  {
    icon: TrendingUp,
    title: "Sales Enablement",
    description: "Equip your sales team with powerful messaging tools that close more deals faster.",
    benefits: ["Sales scripts", "Objection handling", "Follow-up sequences", "Proposal templates"]
  },
  {
    icon: Users,
    title: "Multi-Channel Strategy",
    description: "Consistent messaging across all channels - email, social, ads, and direct sales.",
    benefits: ["Channel optimization", "Brand consistency", "Cross-platform sync", "Unified voice"]
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track and measure the impact of your messaging strategy with detailed analytics.",
    benefits: ["Engagement metrics", "Conversion tracking", "ROI analysis", "Performance insights"]
  }
]

const useCases = [
  {
    title: "SaaS Companies",
    description: "Transform technical features into compelling business value propositions",
    metrics: "Average 40% increase in trial-to-paid conversions"
  },
  {
    title: "B2B Service Providers",
    description: "Articulate complex services in simple, persuasive terms",
    metrics: "Typical 60% boost in qualified lead generation"
  },
  {
    title: "Sales Teams",
    description: "Equip representatives with proven messaging frameworks",
    metrics: "Up to 35% improvement in close rates"
  }
]

export default function Features() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Messaging Strategy Platform
            </Badge>
            <h1 className="text-4xl font-display font-bold tracking-tight sm:text-6xl mb-6">
              Transform Your Messaging Into
              <span className="block text-accent"> Revenue-Driving Results</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-8 text-white/90 mb-8">
              Our comprehensive messaging strategy platform helps B2B companies craft compelling narratives 
              that convert prospects into customers and customers into advocates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="https://salescentri.com/solutions/use-case-navigator/demo">View Interactive Demo</a>
              </Button>
              <Button variant="outline-white" size="xl" asChild>
                <a href="https://salescentri.com/get-started/book-demo">Book Strategy Session</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-display font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Complete Messaging Strategy Suite
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Everything you need to create, implement, and optimize high-converting messaging strategies.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="overview">Platform Overview</TabsTrigger>
              <TabsTrigger value="features">Core Features</TabsTrigger>
              <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={feature.title} className="hover-lift animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardHeader>
                      <feature.icon className="h-12 w-12 text-primary mb-4" />
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-6 w-6 text-primary" />
                    <Badge variant="outline">AI-Powered</Badge>
                  </div>
                  <h3 className="text-2xl font-display font-bold">Smart Message Generation</h3>
                  <p className="text-muted-foreground">
                    Our AI analyzes your industry, audience, and competitors to generate personalized 
                    messaging frameworks that resonate with your specific market.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      Industry-specific templates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      Competitor analysis integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-3" />
                      Real-time optimization suggestions
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-section rounded-lg p-8 hover-glow">
                  <div className="text-center">
                    <Lightbulb className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Message Intelligence</h4>
                    <p className="text-sm text-muted-foreground">
                      Get instant insights on message effectiveness and optimization opportunities
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="use-cases" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => (
                  <Card key={useCase.title} className="text-center hover-lift">
                    <CardHeader>
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                      <CardDescription>{useCase.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="text-sm font-semibold text-primary">{useCase.metrics}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-brand text-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Transform Your Messaging Strategy?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join hundreds of companies that have improved their conversion rates with our proven methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline-white" size="lg" asChild>
              <a href="https://salescentri.com/get-started/free-trial">Start Free Trial</a>
            </Button>
            <Button variant="navy" size="lg" asChild>
              <a href="https://salescentri.com/contact/sales-inquiry">Request Custom Quote</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}