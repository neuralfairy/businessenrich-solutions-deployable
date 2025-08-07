import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/enhanced-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, ArrowRight, TrendingUp, MessageSquare, Target } from "lucide-react"

const featuredPost = {
  title: "The Psychology Behind High-Converting B2B Messages",
  excerpt: "Discover the cognitive principles that make some messages irresistible while others get ignored. Learn how to apply psychological triggers in your messaging strategy.",
  author: "Sarah Johnson",
  date: "December 15, 2024",
  readTime: "8 min read",
  category: "Psychology",
  image: "/api/placeholder/600/300"
}

const blogPosts = [
  {
    title: "5 Messaging Frameworks That Increased Our Clients' Conversion Rates by 40%",
    excerpt: "A deep dive into the proven messaging frameworks we use to help B2B companies dramatically improve their conversion rates.",
    author: "Michael Chen",
    date: "December 12, 2024",
    readTime: "12 min read",
    category: "Strategy",
    image: "/api/placeholder/400/200"
  },
  {
    title: "How to Audit Your Current Messaging Strategy",
    excerpt: "Step-by-step guide to evaluating your existing messaging and identifying opportunities for improvement.",
    author: "Emily Rodriguez",
    date: "December 10, 2024",
    readTime: "6 min read",
    category: "Audit",
    image: "/api/placeholder/400/200"
  },
  {
    title: "The ROI of Professional Messaging Strategy",
    excerpt: "Real data from our clients showing the financial impact of investing in professional messaging strategy.",
    author: "Sarah Johnson",
    date: "December 8, 2024",
    readTime: "5 min read",
    category: "ROI",
    image: "/api/placeholder/400/200"
  },
  {
    title: "Common Messaging Mistakes That Kill Conversions",
    excerpt: "Avoid these critical messaging mistakes that we see companies make repeatedly, costing them potential customers.",
    author: "Michael Chen",
    date: "December 5, 2024",
    readTime: "7 min read",
    category: "Mistakes",
    image: "/api/placeholder/400/200"
  },
  {
    title: "Building a Messaging Strategy for SaaS Companies",
    excerpt: "Specific frameworks and tactics that work best for software companies looking to improve their messaging.",
    author: "Emily Rodriguez",
    date: "December 3, 2024",
    readTime: "10 min read",
    category: "SaaS",
    image: "/api/placeholder/400/200"
  },
  {
    title: "The Future of B2B Messaging: AI and Personalization",
    excerpt: "How artificial intelligence is changing the landscape of B2B messaging and what it means for your strategy.",
    author: "Sarah Johnson",
    date: "December 1, 2024",
    readTime: "9 min read",
    category: "AI",
    image: "/api/placeholder/400/200"
  }
]

const categories = [
  { name: "All Posts", count: 24, icon: MessageSquare },
  { name: "Strategy", count: 8, icon: Target },
  { name: "Psychology", count: 6, icon: TrendingUp },
  { name: "Case Studies", count: 5, icon: TrendingUp },
  { name: "ROI", count: 3, icon: TrendingUp },
  { name: "SaaS", count: 2, icon: Target }
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Thought Leadership
            </Badge>
            <h1 className="text-4xl font-display font-bold tracking-tight sm:text-6xl mb-6">
              Messaging Strategy
              <span className="block text-accent"> Insights & Best Practices</span>
            </h1>
            <p className="text-xl leading-8 text-white/90 mb-8">
              Expert insights, proven strategies, and actionable tips to help you master 
              the art and science of high-converting B2B messaging.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Featured Article</h2>
            <p className="text-xl text-muted-foreground">Our latest deep-dive into messaging strategy</p>
          </div>
          
          <Card className="max-w-4xl mx-auto hover-lift animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-muted rounded-l-lg"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">{featuredPost.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <CardTitle className="text-2xl mb-4">{featuredPost.title}</CardTitle>
                <CardDescription className="text-base mb-6">{featuredPost.excerpt}</CardDescription>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    By {featuredPost.author}
                  </div>
                  <Button variant="hero" asChild>
                    <a href="https://salescentri.com/resources/case-studies">
                      Read Article <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories & Posts */}
      <section className="py-24 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.name}
                      variant="ghost"
                      className="w-full justify-between text-left"
                      asChild
                    >
                      <a href={`https://salescentri.com/resources/case-studies`}>
                        <div className="flex items-center">
                          <category.icon className="h-4 w-4 mr-2" />
                          {category.name}
                        </div>
                        <Badge variant="outline">{category.count}</Badge>
                      </a>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={post.title} className="hover-lift animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="aspect-video bg-muted rounded-t-lg"></div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{post.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          <div>{post.author}</div>
                          <div>{post.date}</div>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <a href="https://salescentri.com/resources/case-studies">
                            Read More <ArrowRight className="h-3 w-3 ml-1" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://salescentri.com/resources/whitepapers-ebooks">
                    Load More Articles
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-brand text-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold mb-4">
            Stay Updated on Messaging Strategy
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get our latest insights, case studies, and proven frameworks delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
            />
            <Button variant="navy" size="lg" asChild>
              <a href="https://salescentri.com/contact">Subscribe</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}