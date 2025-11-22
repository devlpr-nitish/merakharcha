import { ArrowRight, Users, TrendingUp, BarChart3, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/app/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-secondary/20 border border-secondary rounded-full">
              <p className="text-sm font-medium text-foreground">✨ Trusted by thousands managing shared finances</p>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
              Manage Shared Finances <span className="text-primary">with Ease</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Split expenses with friends, track spending patterns, and gain insights into your shared finances. No more
              awkward money conversations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="px-8 py-6 text-base font-semibold">
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-base font-semibold bg-transparent">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Everything You Need</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to make expense management simple and transparent
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 bg-card border border-border rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Manage Groups</h3>
              <p className="text-muted-foreground leading-relaxed">
                Organize expenses for friends, roommates, or business teams. Create unlimited groups and track expenses
                separately for each.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 bg-card border border-border rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Track Spending</h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitor and analyze your expense patterns over time. Get real-time insights into who spent what and
                when.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 bg-card border border-border rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Get Insights</h3>
              <p className="text-muted-foreground leading-relaxed">
                Understand your spending habits with detailed analytics. Identify trends and make smarter financial
                decisions together.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 bg-card border border-border rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Instant Access</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access your expense data anytime, anywhere, on any device. Stay updated with real-time notifications and
                alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-3">
              <p className="text-5xl sm:text-6xl font-bold text-primary">10K+</p>
              <p className="text-lg text-muted-foreground">Active Users</p>
            </div>
            <div className="text-center space-y-3">
              <p className="text-5xl sm:text-6xl font-bold text-primary">$5M+</p>
              <p className="text-lg text-muted-foreground">Expenses Tracked</p>
            </div>
            <div className="text-center space-y-3">
              <p className="text-5xl sm:text-6xl font-bold text-primary">98%</p>
              <p className="text-lg text-muted-foreground">User Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold">Ready to simplify expense management?</h2>
          <p className="text-lg opacity-90">
            Join thousands of users who have already simplified their shared finances.
          </p>
          <Button
            size="lg"
            className="px-8 py-6 text-base font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Start Your Free Trial
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
