import Hero from '../components/Hero'
import FAQ from '../components/FAQ'
import Testimonials from '../components/Testimonials'
import LeadForm from '../components/LeadForm'
import { CheckCircle, Clock, MessageCircle, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Free Guide Section */}
      <section id="free-guide" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-muted-900 mb-6">
            Free Guide for Event Organizers
          </h2>
          <p className="text-xl text-muted-600 mb-8 max-w-2xl mx-auto">
            Learn the 5 proven steps to fill more seats with Instagram & Facebook ads.
          </p>
          <LeadForm />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-900 mb-6">
              Why Event Organizers Choose Us
            </h2>
            <p className="text-xl text-muted-600 max-w-3xl mx-auto">
              Stop stressing about design and start filling seats with professional marketing campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Fill more seats',
                description: 'Without stressing about design'
              },
              {
                icon: Clock,
                title: 'Save hours',
                description: 'Campaigns delivered in 3–4 days'
              },
              {
                icon: CheckCircle,
                title: 'Stand out',
                description: 'From generic Canva posters'
              },
              {
                icon: MessageCircle,
                title: 'Support via WhatsApp',
                description: 'Fast feedback when you need it'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-brand to-brand2 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-muted-900 mb-2">{benefit.title}</h3>
                <p className="text-muted-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-900 mb-6">
              Here's what organizers say about working with us
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Packages Preview Section */}
      <section id="packages" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-muted-900 mb-6">
              Ready-to-Use Event Marketing Packages
            </h2>
            <p className="text-xl text-muted-600 max-w-3xl mx-auto">
              Choose the perfect package for your event size and timeline.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Essentials Campaign',
                price: '£150',
                description: 'Perfect for single events',
                features: ['3 Posters/Flyers', '2 Instagram Stories', '2 Carousels', 'Captions + CTAs']
              },
              {
                title: 'Growth Campaign',
                price: '£250',
                description: 'Best value for multiple events',
                features: ['2 Full Campaigns', '6 Posters/Flyers', '4 Instagram Stories', '1 Teaser Reel'],
                highlight: 'Best Value'
              },
              {
                title: 'Monthly Partner',
                price: '£500/month',
                description: 'Most comprehensive solution',
                features: ['4 Campaigns/month', 'All Creatives', '7/7 Support', '2 Video Calls/month'],
                highlight: 'Most Comprehensive'
              }
            ].map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 relative ${pkg.highlight ? 'ring-2 ring-brand/50' : ''}`}>
                {pkg.highlight && (
                  <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold text-white ${
                    pkg.highlight === 'Best Value' ? 'bg-gradient-to-r from-purple-500 to-purple-600' : 'bg-gradient-to-r from-blue-500 to-blue-600'
                  }`}>
                    {pkg.highlight}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-muted-900 mb-2">{pkg.title}</h3>
                <div className="text-3xl font-bold text-brand mb-2">{pkg.price}</div>
                <p className="text-muted-600 mb-6">{pkg.description}</p>
                <ul className="space-y-2 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-brand2" />
                      <span className="text-muted-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/packages"
                  className="btn-primary w-full text-center"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a href="/packages" className="btn-secondary text-lg px-8 py-4">
              View All Packages & Pricing
            </a>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  )
}
