import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What's included in the free checklist?",
    answer: "A comprehensive 1-page guide covering the 7 essential steps every beauty or wellness business must complete before launching Instagram ads. This includes profile optimization, offer positioning, budget planning, and more."
  },
  {
    question: "Is this really free?",
    answer: "Yes, completely free. No hidden costs, no credit card required. We're sharing this because we believe every small business deserves to succeed with their advertising."
  },
  {
    question: "How quickly will I receive the checklist?",
    answer: "The download link will be sent to your email immediately after you submit the form. Check your inbox (and spam folder just in case) within 2-3 minutes."
  },
  {
    question: "Do you work with businesses outside of London?",
    answer: "While we're based in London and specialize in the local market, we do work with beauty, wellness, and fitness businesses throughout the UK. Contact us to discuss your specific needs."
  },
  {
    question: "What makes your ads different?",
    answer: "We focus specifically on beauty, wellness, and fitness businesses. This means we understand your customers, your challenges, and what actually converts in your industry. No generic templates - just proven strategies."
  }
]

export default function FAQ() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-muted-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-600">
            Everything you need to know about getting started
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="card group">
              <summary className="w-full flex items-center justify-between text-left cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-muted-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown className="w-5 h-5 text-muted-500 transition-transform duration-200 flex-shrink-0 group-open:rotate-180" />
              </summary>
              
              <div className="mt-4 pt-4 border-t border-muted-200">
                <p className="text-muted-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-600 mb-4">
            Still have questions?
          </p>
          <a
                            href="https://wa.me/4407493052323"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.299"/>
            </svg>
            <span>Message us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
