import Link from 'next/link'
import { CheckCircle, Download, MessageCircle, ArrowRight } from 'lucide-react'

export default function SuccessPage() {
  return (
    <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Success Message */}
        <div className="mb-16">
          <div className="w-20 h-20 bg-brand2 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-muted-900 mb-6">
            Payment Received Successfully!
          </h1>
          
          <p className="text-xl text-muted-600 mb-8 max-w-2xl mx-auto">
            Thank you for choosing Adoraq. We're excited to help transform your business 
            with ads that actually work.
          </p>
        </div>

        {/* What Happens Next */}
        <div className="card mb-16 text-left">
          <h2 className="text-2xl font-bold text-muted-900 mb-6 text-center">
            What Happens Next?
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-muted-900 mb-2">We'll Contact You Within 24 Hours</h3>
                <p className="text-muted-600">
                  Our team will reach out via WhatsApp or email to schedule your strategy call 
                  and gather the details we need to create your custom ads.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-muted-900 mb-2">Strategy Call & Planning</h3>
                <p className="text-muted-600">
                  We'll discuss your business goals, target audience, and current challenges 
                  to create a customized advertising strategy.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-muted-900 mb-2">Design & Creation</h3>
                <p className="text-muted-600">
                  Our team will create your custom ads, copy, and any additional materials 
                  included in your package.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-muted-900 mb-2">Review & Delivery</h3>
                <p className="text-muted-600">
                  You'll receive your materials for review, and we'll make any necessary 
                  revisions before final delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="card">
            <div className="w-12 h-12 bg-brand2/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-brand2" />
            </div>
            <h3 className="text-xl font-semibold text-muted-900 mb-3">
              WhatsApp Support
            </h3>
            <p className="text-muted-600 mb-4">
              Need to reach us quickly? Send us a message on WhatsApp for priority support.
            </p>
            <a
                              href="https://wa.me/4407493052323"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message Us</span>
            </a>
          </div>
          
          <div className="card">
            <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Download className="w-6 h-6 text-brand" />
            </div>
            <h3 className="text-xl font-semibold text-muted-900 mb-3">
              Download Your Checklist
            </h3>
            <p className="text-muted-600 mb-4">
              While you're waiting, grab your free Instagram ads checklist to start preparing.
            </p>
            <a
              href="/assets/adoraq-checklist.pdf"
              download
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Checklist</span>
            </a>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="card bg-gradient-to-br from-brand-50 to-brand2-50">
          <h3 className="text-2xl font-bold text-muted-900 mb-4">
            Keep Learning While You Wait
          </h3>
          <p className="text-muted-600 mb-6">
            Check out our latest marketing tips and case studies to get inspired 
            for your upcoming campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="btn-secondary inline-flex items-center space-x-2">
              <span>Read Our Blog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/packages" className="text-brand hover:underline font-medium flex items-center space-x-1">
              <span>View Other Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-16">
          <p className="text-muted-500 text-lg">
            Thank you for trusting Adoraq with your marketing. We can't wait to help you grow your business! 🚀
          </p>
        </div>
      </div>
    </div>
  )
}
