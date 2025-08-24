import Link from 'next/link'
import { CheckCircle, ArrowRight, Shield, TrendingUp, Users, Clock } from 'lucide-react'
import PricingCards from '@/components/PricingCards'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'

export default function PackagesPage() {
  return (
    <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-muted-900 mb-6">
            Ready to Attract More Clients With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand2">
              Ads That Work?
            </span>
          </h1>
          <p className="text-xl text-muted-600 max-w-3xl mx-auto mb-8">
            Choose the perfect package for your beauty, wellness, or fitness business. 
            All packages include custom ad design, proven copy, and strategic guidance.
          </p>
          
          {/* Urgency Banner */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full inline-block mb-8 animate-pulse">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">Limited Time: Save up to £150 on all packages!</span>
            </div>
          </div>
          
          {/* Enhanced Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
              <Users className="w-8 h-8 text-brand mb-2" />
              <div className="text-2xl font-bold text-muted-900">500+</div>
              <span className="text-sm text-muted-600">Happy Clients</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
              <TrendingUp className="w-8 h-8 text-brand2 mb-2" />
              <div className="text-2xl font-bold text-muted-900">3.8x</div>
              <span className="text-sm text-muted-600">Average ROAS</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
              <Clock className="w-8 h-8 text-brand mb-2" />
              <div className="text-2xl font-bold text-muted-900">2-5</div>
              <span className="text-sm text-muted-600">Days Delivery</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
              <Shield className="w-8 h-8 text-brand2 mb-2" />
              <div className="text-2xl font-bold text-muted-900">30-Day</div>
              <span className="text-sm text-muted-600">Money Back</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-muted-900 mb-4">
              Choose Your Perfect Package
            </h2>
            <p className="text-muted-600 max-w-2xl mx-auto">
              All packages include everything you need to start getting results immediately
            </p>
          </div>
          {/* Add extra top spacing to prevent ribbon clipping */}
          <div className="pt-8 pb-4">
            <PricingCards />
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-muted-900 mb-4">
              Compare Our Packages
            </h2>
            <p className="text-lg text-muted-600 max-w-2xl mx-auto">
              See exactly what's included in each package to make the perfect choice for your business
            </p>
          </div>
          
          <div className="comparison-table max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead className="comparison-header">
                <tr>
                  <th className="text-left p-6 font-semibold">Features</th>
                  <th className="comparison-cell font-semibold">
                    <div>Starter</div>
                    <div className="text-sm font-normal opacity-90">£150</div>
                  </th>
                  <th className="comparison-cell font-semibold relative">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-bold">
                      POPULAR
                    </div>
                    <div className="mt-2">Growth</div>
                    <div className="text-sm font-normal opacity-90">£250</div>
                  </th>
                  <th className="comparison-cell font-semibold">
                    <div>Premium</div>
                    <div className="text-sm font-normal opacity-90">£350</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="comparison-row">
                  <td className="p-4 font-medium text-left">Custom Ad Sets</td>
                  <td className="comparison-cell">1 set (3 variations)</td>
                  <td className="comparison-cell bg-brand-50/30">2 sets (6 variations)</td>
                  <td className="comparison-cell">3 sets (9+ variations)</td>
                </tr>
                <tr className="comparison-row">
                  <td className="p-4 font-medium text-left">Instagram Story Posters</td>
                  <td className="comparison-cell">1 poster</td>
                  <td className="comparison-cell bg-brand-50/30">2 posters</td>
                  <td className="comparison-cell">3 posters</td>
                </tr>
                <tr className="comparison-row">
                  <td className="p-4 font-medium text-left">Strategy Call Duration</td>
                  <td className="comparison-cell">15 minutes</td>
                  <td className="comparison-cell bg-brand-50/30">30 minutes</td>
                  <td className="comparison-cell">45 minutes</td>
                </tr>
                <tr className="comparison-row">
                  <td className="p-4 font-medium text-left">Audience Targeting</td>
                  <td className="comparison-cell">Basic recommendations</td>
                  <td className="comparison-cell bg-brand-50/30">Advanced targeting</td>
                  <td className="comparison-cell">Premium research</td>
                </tr>
                <tr className="comparison-row">
                  <td className="p-4 font-medium text-left">Performance Tracking</td>
                  <td className="comparison-cell">❌</td>
                  <td className="comparison-cell bg-brand-50/30">✅ Setup included</td>
                  <td className="comparison-cell">✅ Advanced setup</td>
                </tr>
                <tr className="comparison-row">
                  <td className="p-4 font-medium text-left">Optimization Support</td>
                  <td className="comparison-cell">❌</td>
                  <td className="comparison-cell bg-brand-50/30">1 week</td>
                  <td className="comparison-cell">2 weeks</td>
                </tr>
                <tr className="comparison-row">
                  <td className="p-4 font-medium text-left">Landing Page Tips</td>
                  <td className="comparison-cell">❌</td>
                  <td className="comparison-cell bg-brand-50/30">❌</td>
                  <td className="comparison-cell">✅ Included</td>
                </tr>
                <tr className="comparison-row">
                  <td className="p-4 font-medium text-left">Support Level</td>
                  <td className="comparison-cell">Email</td>
                  <td className="comparison-cell bg-brand-50/30">Priority Email</td>
                  <td className="comparison-cell">WhatsApp Priority</td>
                </tr>
                <tr className="comparison-row">
                  <td className="p-4 font-medium text-left">Delivery Time</td>
                  <td className="comparison-cell">2-3 days</td>
                  <td className="comparison-cell bg-brand-50/30">3-4 days</td>
                  <td className="comparison-cell">4-5 days</td>
                </tr>
                <tr className="comparison-row bg-muted-50">
                  <td className="p-4 font-bold text-left">Expected ROAS</td>
                  <td className="comparison-cell font-bold text-brand">2-3x</td>
                  <td className="comparison-cell font-bold text-brand bg-brand-50/30">3-4x</td>
                  <td className="comparison-cell font-bold text-brand">4-6x</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Value Proposition & Quick Purchase */}
        <div className="bg-gradient-to-r from-brand to-brand2 rounded-2xl p-8 mb-20 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            🔥 Most Popular Choice: Growth Package
          </h2>
          <p className="text-xl mb-6 opacity-90">
            90% of our clients choose Growth for the perfect balance of value and results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[200px]">
              <div className="text-2xl font-bold">£250</div>
              <div className="text-sm opacity-80">was £350 - Save £100</div>
            </div>
            <div className="text-lg font-semibold">
              → Average 3-4x ROAS in 30 days
            </div>
          </div>
          <a
            href="https://buy.stripe.com/bJe7sL6gdgp77G28Zz5os02"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand hover:bg-gray-100 font-bold py-4 px-8 rounded-xl inline-flex items-center space-x-2 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <span>Get Growth Package Now</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <div className="text-sm mt-4 opacity-75">
            ⚡ Quick 2-minute checkout • 💳 Secure payment via Stripe • 🛡️ 30-day guarantee
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-muted-900 mb-6">
              Why Choose Adoraq?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-muted-900 mb-2">Industry Specialists</h3>
                  <p className="text-muted-600">We exclusively work with beauty, wellness, and fitness businesses. We understand your customers and what makes them book.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-brand2" />
                </div>
                <div>
                  <h3 className="font-semibold text-muted-900 mb-2">Proven Results</h3>
                  <p className="text-muted-600">Our clients see an average 3x return on ad spend within the first month. No generic templates - just strategies that work.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-muted-900 mb-2">Quick Turnaround</h3>
                  <p className="text-muted-600">Get your custom ads delivered within 2-5 business days. No waiting weeks for results - start advertising immediately.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Before/After Preview */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-muted-900">Before vs After</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="card">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-600 font-bold">❌</span>
                  </div>
                  <h4 className="font-semibold text-muted-900">Before</h4>
                </div>
                <ul className="text-sm text-muted-600 space-y-2">
                  <li>• Generic stock photos</li>
                  <li>• Weak call-to-actions</li>
                  <li>• Poor targeting</li>
                  <li>• Low conversion rates</li>
                </ul>
              </div>
              
              <div className="card">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-brand2/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-brand2" />
                  </div>
                  <h4 className="font-semibold text-muted-900">After</h4>
                </div>
                <ul className="text-sm text-muted-600 space-y-2">
                  <li>• Custom brand visuals</li>
                  <li>• Compelling copy</li>
                  <li>• Precise audience targeting</li>
                  <li>• 3x higher conversions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study */}
        <div className="card mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-muted-900 mb-4">
              Case Study: Glow Beauty Salon
            </h2>
            <p className="text-lg text-muted-600">
              How we helped a London salon increase bookings by 250% in 30 days
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand mb-2">15</div>
              <div className="text-muted-600">New clients in week 1</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand2 mb-2">£2,800</div>
              <div className="text-muted-600">Revenue generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand mb-2">4.2x</div>
              <div className="text-muted-600">Return on ad spend</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-600 italic mb-4">
              "I was skeptical about Instagram ads, but Adoraq changed everything. The ads they created brought us so many new clients that we had to hire additional staff!"
            </p>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand to-brand2 rounded-full flex items-center justify-center text-white font-semibold">
                SM
              </div>
              <div className="text-left">
                <div className="font-semibold text-muted-900">Sarah Mitchell</div>
                <div className="text-sm text-muted-600">Owner, Glow Beauty Salon</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-muted-900 text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="max-w-4xl mx-auto">
            <Testimonials showAll />
          </div>
        </div>

        {/* Guarantee */}
        <div className="card max-w-2xl mx-auto mb-20 text-center">
          <div className="w-16 h-16 bg-brand2/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-brand2" />
          </div>
          <h3 className="text-2xl font-bold text-muted-900 mb-4">
            30-Day Money-Back Guarantee
          </h3>
          <p className="text-muted-600 mb-6">
            If you're not completely satisfied with your custom ads within 30 days, 
            we'll refund every penny. No questions asked.
          </p>
          <div className="flex items-center justify-center space-x-2 text-brand">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Risk-free guarantee</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-muted-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of beauty and wellness businesses already getting amazing results with our custom Instagram ads.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/44749052323"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.299"/>
              </svg>
              <span>Chat About Your Needs</span>
            </a>
            
            <Link href="/continuity" className="btn-primary inline-flex items-center space-x-2">
              <span>See Monthly Plan</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <FAQ />
      </div>
    </div>
  )
}
