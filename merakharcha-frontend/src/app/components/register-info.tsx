import { Check } from 'lucide-react'

export default function RegisterInfo() {
  const features = [
    {
      title: 'Split Expenses Easily',
      description: 'Track who owes whom with our intuitive expense splitting system'
    },
    {
      title: 'Real-time Tracking',
      description: 'See your expenses updated instantly across all connected accounts'
    },
    {
      title: 'Smart Settlements',
      description: 'Get the most efficient way to settle debts among group members'
    },
    {
      title: 'Detailed Reports',
      description: 'Visualize your spending patterns and financial insights'
    },
  ]

  return (
    <div className="flex flex-col justify-center items-center h-full p-12 text-primary-foreground">
      <div className="max-w-md">
        {/* Logo/Brand */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-3 text-balance">Merakharcha</h2>
          <p className="text-lg text-primary-foreground/90">
            Smart expense splitting & tracking for groups
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-foreground">
                  <Check className="h-4 w-4 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-primary-foreground/80 text-sm mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/90 text-balance">
            ✨ Join thousands of users managing expenses smarter
          </p>
        </div>
      </div>
    </div>
  )
}
