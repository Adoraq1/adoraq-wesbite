import { CheckCircle, Star, Zap, Clock, Users, TrendingUp, Calendar, MessageCircle, Video } from 'lucide-react'

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  ctaLink: string
  popular?: boolean
  badge?: string
  icon?: any
  highlight?: boolean
}

const pricingTiers: PricingTier[] = [
  {
    name: "Essentials Campaign",
    price: "£150",
    description: "Perfect for single events and promotional campaigns",
    icon: Zap,
    features: [
      "3 Posters/Flyers (different styles)",
      "2 Instagram Story Ads",
      "2 Carousels (3 slides each)",
      "3 Captions + CTA variations",
      "Optimized Eventbrite/Meetup listing text",
      "Delivery in 3–4 days"
    ],
    cta: "Book Essentials Campaign — £150",
    ctaLink: "https://buy.stripe.com/14A5kDeMJ7SB6BYejT5os01"
  },
  {
    name: "Growth Campaign",
    price: "£250",
    description: "Most popular for multiple events and comprehensive campaigns",
    badge: "BEST VALUE",
    icon: TrendingUp,
    highlight: true,
    features: [
      "2 Full Campaigns (for 2 events OR 2 strategies for 1 big event)",
      "6 Posters/Flyers",
      "4 Instagram Story Ads",
      "4 Carousels",
      "1 Teaser Reel (short vertical video ad)",
      "5 Captions + CTA variations",
      "Optimized Eventbrite/Meetup listing text",
      "Posting Schedule (calendar: when & how to release creatives)",
      "🎁 Bonus: 1 Week WhatsApp Q&A support",
      "Delivery in 4–5 days"
    ],
    cta: "Upgrade to Growth Campaign — £250",
    ctaLink: "https://buy.stripe.com/bJe7sL6gdgp77G28Zz5os02",
    popular: true
  },
  {
    name: "Monthly Promo Partner",
    price: "£500/month",
    description: "Complete ongoing support for regular event promotion",
    badge: "MOST COMPREHENSIVE",
    icon: Users,
    features: [
      "Up to 4 Event Campaigns every month",
      "Posters, Stories, Carousels, Reels (mix & match per event)",
      "Captions + CTA suggestions",
      "Optimized Eventbrite/Meetup listings",
      "7/7 WhatsApp Support",
      "2 Video Calls/month to review and improve ads"
    ],
    cta: "Apply for Monthly Partnership — £500/month",
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
            className={`pricing-card ${tier.popular ? 'featured' : ''} group flex flex-col h-full ${tier.highlight ? 'ring-2 ring-purple-500/50 shadow-2xl' : ''}`}
          >
            {/* Enhanced Badge */}
            {tier.badge && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className={`px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg ${
                  tier.badge === 'BEST VALUE' 
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600'
                }`}>
                  {tier.badge}
                </div>
              </div>
            )}

            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-brand/10 rounded-lg flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-2xl font-bold text-muted-900 mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-brand mb-2">{tier.price}</div>
              <p className="text-muted-600">{tier.description}</p>
            </div>

            {/* Features */}
            <div className="flex-grow mb-8">
              <ul className="space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
              <a
                href={tier.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block"
              >
                {tier.cta}
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}
