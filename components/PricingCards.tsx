import { CheckCircle, Star, Zap, Clock, Users, TrendingUp } from 'lucide-react'

interface PricingTier {
  name: string
  price: string
  originalPrice?: string
  savings?: string
  description: string
  features: string[]
  cta: string
  ctaLink: string
  popular?: boolean
  badge?: string
  icon?: any
  bestFor?: string
  results?: string
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "£150",
    originalPrice: "£200",
    savings: "Save £50",
    description: "Perfect for testing the waters with Instagram advertising",
    icon: Zap,
    bestFor: "New businesses & first-time advertisers",
    results: "Typically see 2-3x ROAS",
    features: [
      "1 custom ad set with 3 variations",
      "1 Instagram story poster",
      "15-minute strategy call",
      "Basic targeting recommendations",
      "2-3 day delivery",
      "30-day money-back guarantee"
    ],
    cta: "Start Your First Campaign",
    ctaLink: "https://buy.stripe.com/14A5kDeMJ7SB6BYejT5os01"
  },
  {
    name: "Growth",
    price: "£250",
    originalPrice: "£350",
    savings: "Save £100",
    description: "Most popular for established salons ready to scale",
    badge: "BEST VALUE",
    icon: TrendingUp,
    bestFor: "Established businesses ready to scale",
    results: "Average 3-4x ROAS within 30 days",
    features: [
      "2 custom ad sets with 3 variations each",
      "2 Instagram story posters",
      "30-minute strategy call",
      "Advanced audience targeting",
      "Performance tracking setup",
      "1 week of optimization support",
      "3-4 day delivery",
      "Priority email support"
    ],
    cta: "Scale Your Business Now",
    ctaLink: "https://buy.stripe.com/bJe7sL6gdgp77G28Zz5os02",
    popular: true
  },
  {
    name: "Premium",
    price: "£350",
    originalPrice: "£500",
    savings: "Save £150",
    description: "Complete advertising package for serious businesses",
    badge: "MOST COMPREHENSIVE",
    icon: Users,
    bestFor: "Serious businesses wanting maximum results",
    results: "Consistently achieve 4-6x ROAS",
    features: [
      "3 custom Instagram ads",
      "3 Instagram story posters",
      "45-minute strategy call",
      "Premium audience research",
      "Landing page optimization tips",
      "2 weeks of optimization support",
      "Priority WhatsApp support",
      "4-5 day delivery",
      "Competitor analysis included"
    ],
    cta: "Get Maximum Results",
    ctaLink: "https://buy.stripe.com/6oUcN5awtc8Rf8u0t35os03"
  }
]

export default function PricingCards() {
  return (
    <div className="pricing-cards-grid items-stretch">
      {pricingTiers.map((tier, index) => {
        const IconComponent = tier.icon
        return (
          <div 
            key={index} 
            className={`pricing-card ${tier.popular ? 'featured' : ''} group flex flex-col h-full`}
          >
            {/* Enhanced Badge */}
            {(tier.popular || tier.badge) && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className={`px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg border-2 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-yellow-900 border-yellow-300 animate-pulse'
                    : tier.badge === 'MOST COMPREHENSIVE'
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-purple-300'
                    : 'bg-gradient-to-r from-brand2 to-brand text-white border-brand'
                }`}>
                  <Star className="w-4 h-4 fill-current" />
                  <span className="whitespace-nowrap">{tier.badge || 'Most Popular'}</span>
                </div>
              </div>
            )}
            
            {/* Header - Fixed height section */}
            <div className="text-center mb-6 flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-brand/10 to-brand2/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                {IconComponent && <IconComponent className="w-8 h-8 text-brand" />}
              </div>
              <h3 className="text-2xl font-bold text-muted-900 mb-2">{tier.name}</h3>
              
              {/* Pricing with savings */}
              <div className="mb-3">
                <div className="flex items-center justify-center space-x-2">
                  <div className="text-4xl font-bold text-brand">{tier.price}</div>
                  {tier.originalPrice && (
                    <div className="text-lg text-muted-500 line-through">{tier.originalPrice}</div>
                  )}
                </div>
                {tier.savings && (
                  <div className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full inline-block mt-1">
                    {tier.savings}
                  </div>
                )}
              </div>
              
              <p className="text-muted-600 mb-3">{tier.description}</p>
              
              {/* Best for & Results */}
              <div className="space-y-2">
                <div className="text-xs font-medium text-brand bg-brand/5 px-3 py-1 rounded-full">
                  {tier.bestFor}
                </div>
                <div className="text-xs text-muted-600">
                  {tier.results}
                </div>
              </div>
            </div>

            {/* Features - Flexible height section */}
            <div className="flex-grow mb-6">
              <ul className="space-y-3 h-full">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button - Fixed at bottom */}
            <div className="mt-auto">
              <a
                href={tier.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:-translate-y-1 hover:scale-105 block relative overflow-hidden group ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-brand to-brand2 hover:from-brand-600 hover:to-brand2-600 text-white shadow-lg hover:shadow-2xl' 
                    : 'bg-gradient-to-r from-muted-100 to-muted-200 hover:from-brand hover:to-brand2 hover:text-white text-muted-900 border border-muted-300'
                }`}
              >
                <span className="relative z-10">{tier.cta}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </a>
              
              {/* Trust indicators */}
              <div className="text-center mt-4 text-xs text-muted-500">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>Quick delivery</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>5-star rated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
