import Link from 'next/link'
import { CheckCircle, Calendar, MessageCircle, TrendingUp, Clock, ArrowRight, Star } from 'lucide-react'
import Testimonials from '../../components/Testimonials'

export default function ContinuityPage() {
  const features = [
    {
      icon: Calendar,
      title: "12 Instagram Posts Monthly",
      description: "Fresh, on-brand content delivered every month to keep your feed active and engaging"
    },
    {
      icon: TrendingUp,
      title: "2 Custom Posters",
      description: "Professional promotional graphics for special offers, events, or seasonal campaigns"
    },
    {
      icon: MessageCircle,
      title: "Priority WhatsApp Support",
      description: "Direct access to our team for quick questions, urgent requests, or strategy adjustments"
    },
    {
      icon: Clock,
      title: "Seasonal Promotions",
      description: "Strategic campaigns for holidays, local events, and industry-specific seasons"
    }
  ]

  const timeline = [
    { week: "Week 1", activity: "Content strategy & brand audit" },
    { week: "Week 2", activity: "Design & copy creation" },
    { week: "Week 3", activity: "Review & revisions" },
    { week: "Week 4", activity: "Delivery & next month planning" }
  ]

  return (
    <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand/10 text-brand px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>Most Comprehensive Package</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-muted-900 mb-6">
            Never Run Out of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand2">
              On-Brand Content
            </span>{' '}
            Again
          </h1>
          
          <p className="text-xl text-muted-600 max-w-3xl mx-auto mb-8">
            Join our monthly design plan and get a steady stream of professional Instagram content, 
            promotional materials, and priority support - all for one simple monthly fee.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-600 mb-12">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-brand2" />
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-brand2" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-brand2" />
              <span>Priority support</span>
            </div>
          </div>
        </div>

        {/* Pricing Hero */}
        <div className="card max-w-4xl mx-auto mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand to-brand2 rounded-full transform translate-x-16 -translate-y-16 opacity-10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-muted-900 mb-4">
                £500 per month
              </h2>
              <p className="text-lg text-muted-600 mb-6">
                Everything your beauty or wellness business needs to maintain a strong, 
                consistent presence on Instagram.
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <feature.icon className="w-4 h-4 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-muted-900">{feature.title}</h3>
                      <p className="text-muted-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a
                href="https://buy.stripe.com/9B6dR91ZXdcVbWicbL5os04"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>Join the Monthly Design Plan</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Content Calendar Preview */}
            <div className="bg-muted-50 rounded-2xl p-6">
              <h3 className="font-bold text-muted-900 mb-4 text-center">Monthly Content Calendar</h3>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="aspect-square bg-white rounded-lg p-2 text-center">
                    <div className="text-xs text-muted-500 mb-1">Post {i + 1}</div>
                    <div className="w-full h-12 bg-gradient-to-br from-brand/20 to-brand2/20 rounded"></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-600">
                <span>+ 2 Custom Posters</span>
                <span>+ Seasonal Campaigns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-muted-900 mb-6">
              Why Businesses Love Our Monthly Plan
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-brand2" />
                </div>
                <div>
                  <h3 className="font-semibold text-muted-900 mb-2">Save 40+ Hours Monthly</h3>
                  <p className="text-muted-600">Stop spending hours creating content. Focus on what you do best - serving your clients.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-muted-900 mb-2">Consistent Growth</h3>
                  <p className="text-muted-600">Regular, high-quality content keeps your audience engaged and attracts new followers consistently.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-brand2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-brand2" />
                </div>
                <div>
                  <h3 className="font-semibold text-muted-900 mb-2">Always Supported</h3>
                  <p className="text-muted-600">Priority WhatsApp access means you get quick answers and can pivot your marketing when needed.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-brand/5 to-brand2/5 rounded-xl">
              <h4 className="font-semibold text-muted-900 mb-2">Perfect for:</h4>
              <ul className="text-muted-700 space-y-1">
                <li>• Established salons with 3+ staff members</li>
                <li>• Wellness studios running regular classes</li>
                <li>• Fitness businesses with multiple services</li>
                <li>• Any business wanting consistent growth</li>
              </ul>
            </div>
          </div>

          {/* Delivery Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-muted-900">How It Works</h3>
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-muted-900">{item.week}</h4>
                    <p className="text-muted-600">{item.activity}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="card bg-gradient-to-br from-brand-50 to-brand2-50 border-l-4 border-brand">
              <h4 className="font-semibold text-muted-900 mb-2">What You Get Each Month:</h4>
              <ul className="text-muted-700 space-y-1 text-sm">
                <li>✓ 12 custom Instagram post designs</li>
                <li>✓ 2 promotional posters</li>
                <li>✓ Captions and hashtag suggestions</li>
                <li>✓ Content calendar and posting schedule</li>
                <li>✓ Unlimited revisions during review week</li>
                <li>✓ Priority WhatsApp support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="card mb-20">
          <h2 className="text-3xl font-bold text-muted-900 text-center mb-12">
            Monthly Plan vs. One-Off Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-muted-900 mb-4">One-Off Projects</h3>
              <div className="space-y-3 text-muted-600">
                <p>• Sporadic content creation</p>
                <p>• Inconsistent posting schedule</p>
                <p>• No ongoing strategy</p>
                <p>• Higher cost per piece</p>
                <p>• Standard support</p>
              </div>
              <div className="mt-6 text-2xl font-bold text-muted-500">£150-350 per project</div>
            </div>
            
            <div className="text-center border-l-2 border-brand pl-8">
              <h3 className="text-xl font-semibold text-brand mb-4">Monthly Plan ⭐</h3>
              <div className="space-y-3 text-muted-700">
                <p>• Consistent content every month</p>
                <p>• Strategic posting calendar</p>
                <p>• Ongoing optimization</p>
                <p>• 40% better value</p>
                <p>• Priority support</p>
              </div>
              <div className="mt-6 text-2xl font-bold text-brand">£500 per month</div>
              <div className="text-sm text-muted-600 mt-1">(Worth £800+ individually)</div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-muted-900 text-center mb-12">
            Success Stories from Monthly Plan Members
          </h2>
          <div className="max-w-4xl mx-auto">
            <Testimonials showAll />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-muted-900 mb-6">
            Ready to Join the Monthly Design Plan?
          </h2>
          <p className="text-xl text-muted-600 mb-8 max-w-2xl mx-auto">
            Start getting consistent, professional content that keeps your audience engaged 
            and your business growing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://buy.stripe.com/9B6dR91ZXdcVbWicbL5os04"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
            >
              <span>Start Monthly Plan - £500</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a
                              href="https://wa.me/4407493052323"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat About Custom Plans</span>
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-muted-500 text-sm mb-4">
              Questions about the monthly plan?
            </p>
            <Link href="/packages" className="text-brand hover:underline font-medium">
              ← Back to individual packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
