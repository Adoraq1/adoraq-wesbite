import Link from 'next/link'
import { CheckCircle, ArrowRight, Shield, TrendingUp, Users, Clock, MessageCircle } from 'lucide-react'
import PricingCards from '../../components/PricingCards'
import Testimonials from '../../components/Testimonials'
import FAQ from '../../components/FAQ'

export default function PackagesPage() {
  return (
    <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand/10 text-brand px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>Event Marketing Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-muted-900 mb-6">
            Event Marketing That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand2">
              Actually Works
            </span>
          </h1>
          
          <p className="text-xl text-muted-600 max-w-3xl mx-auto mb-8">
            From single events to ongoing campaigns, we create the marketing materials that fill your events and grow your audience.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-600 mb-12">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-brand2" />
              <span>3-5 day delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-brand2" />
              <span>Eventbrite optimization</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-brand2" />
              <span>WhatsApp support</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pt-8 pb-4">
          <PricingCards />
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-900 mb-4">
              Compare Our Packages
            </h2>
            <p className="text-lg text-muted-600 max-w-2xl mx-auto">
              Choose the perfect package for your event marketing needs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full comparison-table">
              <thead>
                <tr className="comparison-header">
                  <th className="comparison-cell">Feature</th>
                  <th className="comparison-cell">Essentials (£150)</th>
                  <th className="comparison-cell">Growth (£250)</th>
                  <th className="comparison-cell">Monthly (£500/month)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="comparison-row">
                  <td className="comparison-cell font-medium">Posters/Flyers</td>
                  <td className="comparison-cell">3</td>
                  <td className="comparison-cell">6</td>
                  <td className="comparison-cell">Up to 12 (4 campaigns)</td>
                </tr>
                <tr className="comparison-row">
                  <td className="comparison-cell font-medium">Story Ads</td>
                  <td className="comparison-cell">2</td>
                  <td className="comparison-cell">4</td>
                  <td className="comparison-cell">Included in each campaign</td>
                </tr>
                <tr className="comparison-row">
                  <td className="comparison-cell font-medium">Carousels</td>
                  <td className="comparison-cell">2</td>
                  <td className="comparison-cell">4</td>
                  <td className="comparison-cell">Included in each campaign</td>
                </tr>
                <tr className="comparison-row">
                  <td className="comparison-cell font-medium">Teaser Reel (Video)</td>
                  <td className="comparison-cell">—</td>
                  <td className="comparison-cell">1</td>
                  <td className="comparison-cell">Included in each campaign</td>
                </tr>
                <tr className="comparison-row">
                  <td className="comparison-cell font-medium">Captions + CTAs</td>
                  <td className="comparison-cell">3 variations</td>
                  <td className="comparison-cell">5 variations</td>
                  <td className="comparison-cell">Multiple per campaign</td>
                </tr>
                <tr className="comparison-row">
                  <td className="comparison-cell font-medium">Eventbrite/Meetup Text</td>
                  <td className="comparison-cell">✔</td>
                  <td className="comparison-cell">✔</td>
                  <td className="comparison-cell">✔</td>
                </tr>
                <tr className="comparison-row">
                  <td className="comparison-cell font-medium">Posting Schedule</td>
                  <td className="comparison-cell">—</td>
                  <td className="comparison-cell">✔</td>
                  <td className="comparison-cell">✔</td>
                </tr>
                <tr className="comparison-row">
                  <td className="comparison-cell font-medium">WhatsApp Support</td>
                  <td className="comparison-cell">—</td>
                  <td className="comparison-cell">1 Week Q&A</td>
                  <td className="comparison-cell">7/7 Support</td>
                </tr>
                <tr className="comparison-row">
                  <td className="comparison-cell font-medium">Consulting Calls</td>
                  <td className="comparison-cell">—</td>
                  <td className="comparison-cell">—</td>
                  <td className="comparison-cell">2 Video Calls/month</td>
                </tr>
                <tr className="comparison-row">
                  <td className="comparison-cell font-medium">Delivery Time</td>
                  <td className="comparison-cell">3–4 days</td>
                  <td className="comparison-cell">4–5 days</td>
                  <td className="comparison-cell">Ongoing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <Testimonials />
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <FAQ />
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="card bg-gradient-to-br from-brand-50 to-brand2-50">
            <h3 className="text-3xl font-bold text-muted-900 mb-4">
              Ready to Fill Your Events?
            </h3>
            <p className="text-lg text-muted-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of event organizers already getting amazing results with our marketing materials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/4407493052323"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Us
              </a>
              <Link href="/" className="btn-secondary">
                Get Free Checklist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
