import Link from 'next/link'
import { CheckCircle, Download, Clock, ArrowRight } from 'lucide-react'
import Testimonials from '../../components/Testimonials'

export default function ThankYouPage() {
  return (
    <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Success Message */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-brand2 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-muted-900 mb-4">
            Your Checklist is On the Way!
          </h1>
          <p className="text-xl text-muted-600 mb-8">
            Check your email for the download link. It should arrive within the next 2-3 minutes.
          </p>
          
          {/* Direct Download */}
          <div className="inline-flex items-center space-x-2 text-brand">
            <Download className="w-5 h-5" />
            <a 
              href="/assets/adoraq-checklist.pdf" 
              download
              className="font-semibold hover:underline"
            >
              Or download it directly here
            </a>
          </div>
        </div>

        {/* One-Time Offer */}
        <div className="card max-w-2xl mx-auto mb-16 relative overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200">
          {/* Urgency Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            🎟 One-Time Offer
          </div>
          
          <div className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-muted-900 mb-4">
                Exclusive One-Time Offer: Kickstart Your Event Promotion for Just £49.99
              </h2>
              <p className="text-lg text-muted-600">
                Get a professional ad kit in 48h — posters, stories, and captions ready-to-use for your next event.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-brand2" />
                <span className="text-muted-700">1 Custom Poster/Flyer (Instagram & print ready)</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-brand2" />
                <span className="text-muted-700">1 Instagram Story Ad</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-brand2" />
                <span className="text-muted-700">1 Caption + CTA suggestion</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-muted-700"><strong>🎁 Hidden Freebies</strong> (delivered after purchase)</span>
              </div>
            </div>

            <div className="text-center space-y-4">
              <a
                href="https://buy.stripe.com/7sY14n5c91ud2lI8Zz5os00"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              >
                <span>Claim My Starter Kit — £49.99</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <p className="text-sm text-red-600 font-semibold bg-red-50 px-4 py-2 rounded-lg border border-red-200">
                ⚠️ This special one-time offer is only available now — once you leave this page, it's gone.
              </p>
              
              <p className="text-sm text-muted-500">
                Secure payment via Stripe • 30-day money-back guarantee
              </p>
              
              <div className="pt-4">
                <Link 
                  href="/packages" 
                  className="text-brand hover:underline font-medium"
                >
                  Or see our full packages →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-muted-900 text-center mb-8">
            What Our Clients Say
          </h3>
          <Testimonials />
        </div>

        {/* Additional CTAs */}
        <div className="text-center mt-16 space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
                              href="https://wa.me/4407493052323"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.299"/>
              </svg>
              <span>Have Questions? Let's Chat</span>
            </a>
            <Link href="/packages" className="btn-primary">
              View All Packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
