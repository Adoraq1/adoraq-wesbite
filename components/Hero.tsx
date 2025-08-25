import { CheckCircle, Download, Star } from 'lucide-react'
import LeadForm from './LeadForm'

export default function Hero() {
  return (
    <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column - Copy & Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-muted-900 leading-tight">
                Sell Out Your Events with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand2">
                  Ready-to-Use Social Media Campaigns
                </span>
              </h1>
              
              <p className="text-xl text-muted-600 leading-relaxed">
                Custom posters, Instagram ads, and captions — all done-for-you in just days.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#free-guide"
                className="btn-primary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Get the Free Guide</span>
                <Download className="w-5 h-5" />
              </a>
              <a
                href="#packages"
                className="btn-secondary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>View Packages</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-600">Join 200+ event organizers</span>
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-muted-600 ml-1">4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Checklist Card */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              {/* Modern Checklist Card */}
              <div className="hero-checklist-card relative bg-gradient-to-br from-purple-100 via-blue-50 to-green-100 rounded-3xl p-8 shadow-2xl border border-white/50 backdrop-blur-sm">
                
                {/* Free Download Badge */}
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 animate-pulse">
                    <Download className="w-4 h-4" />
                    <span className="font-bold text-sm">Free Download</span>
                  </div>
                </div>

                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand to-brand2 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Event Marketing Guide</h3>
                  <p className="text-gray-600 text-sm">5 Proven Steps to Fill More Seats with Social Media</p>
                </div>
                
                {/* Enhanced Checklist Items */}
                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: 'Event positioning',
                      description: 'Create compelling event descriptions that drive registrations'
                    },
                    {
                      title: 'Audience targeting', 
                      description: 'Reach the right people who actually attend events like yours'
                    },
                    {
                      title: 'Creative strategy',
                      description: 'Design eye-catching posters and ads that stop the scroll'
                    },
                    {
                      title: 'Content calendar',
                      description: 'Plan your social media posts for maximum engagement'
                    },
                    {
                      title: 'Conversion optimization',
                      description: 'Turn interested followers into ticket buyers'
                    }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 p-3 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 transform hover:scale-105 animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Professional PDF Badge */}
                <div className="flex items-center justify-center">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center space-x-2 shadow-lg">
                    <span>📄</span>
                    <span>1-Page PDF • Instant Access</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-4 -left-4 bg-brand text-white px-3 py-1 rounded-full text-xs font-semibold animate-float" style={{animationDelay: '1s'}}>
                1-Page Only
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
