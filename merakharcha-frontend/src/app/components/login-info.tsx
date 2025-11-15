import { LogIn, Users, TrendingDown, BarChart3 } from 'lucide-react'

export default function LoginInfo() {
  const benefits = [
    {
      icon: Users,
      title: 'Manage Groups',
      description: 'Organize expenses for friends, roommates, or business teams'
    },
    {
      icon: TrendingDown,
      title: 'Track Spending',
      description: 'Monitor and analyze your expense patterns over time'
    },
    {
      icon: BarChart3,
      title: 'Get Insights',
      description: 'Understand your spending habits with detailed analytics'
    },
    {
      icon: LogIn,
      title: 'Instant Access',
      description: 'Access your expense data anytime, anywhere, on any device'
    },
  ]

  return (
    <div className="flex flex-col justify-center items-center h-full p-12 text-primary-foreground">
      <div className="max-w-md">
        {/* Logo/Brand */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-3 text-balance">Merakharcha</h2>
          <p className="text-lg text-primary-foreground/90">
            Manage your shared finances with ease
          </p>
        </div>

        {/* Benefits List */}
        <div className="space-y-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary-foreground/20">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-primary-foreground/80 text-sm mt-1">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/90 text-balance">
            Your expense management companion trusted by thousands
          </p>
        </div>
      </div>
    </div>
  )
}
