import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react'

interface PostLayoutProps {
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  readTime: string
  content: string
}

export default function PostLayout({ 
  title, 
  excerpt, 
  date, 
  author, 
  category, 
  readTime, 
  content 
}: PostLayoutProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  
  return (
    <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link 
          href="/blog"
          className="inline-flex items-center space-x-2 text-brand hover:text-brand-600 font-medium mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Back to Blog</span>
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 text-sm text-muted-500 mb-4">
            <span className="bg-brand/10 text-brand px-3 py-1 rounded-full font-semibold">
              {category}
            </span>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={date}>{formattedDate}</time>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-muted-900 mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-xl text-muted-600 mb-8 leading-relaxed">
            {excerpt}
          </p>

          <div className="flex items-center justify-between border-y border-muted-200 py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand to-brand2 rounded-full flex items-center justify-center text-white font-semibold">
                {author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-semibold text-muted-900">{author}</div>
                <div className="text-sm text-muted-500">Marketing Specialist</div>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-muted-600">
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Share</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="text-muted-700 leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: content
                .replace(/\n\n/g, '</p><p>')
                .replace(/^/, '<p>')
                .replace(/$/, '</p>')
                .replace(/<p>## (.*?)<\/p>/g, '<h2 class="text-2xl font-bold text-muted-900 mt-12 mb-6">$1</h2>')
                .replace(/<p>### (.*?)<\/p>/g, '<h3 class="text-xl font-semibold text-muted-900 mt-8 mb-4">$1</h3>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-brand hover:text-brand-600 underline">$1</a>')
                .replace(/<p>- (.*?)<\/p>/g, '<li class="mb-2">$1</li>')
                .replace(/(<li.*?>.*?<\/li>)/g, '<ul class="list-disc pl-6 mb-6 space-y-2">$1</ul>')
            }}
          />
        </article>

        {/* CTA Section */}
        <div className="card mt-16 bg-gradient-to-br from-brand-50 to-brand2-50">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-muted-900 mb-4">
              Ready to Transform Your Salon's Marketing?
            </h3>
            <p className="text-muted-600 mb-6">
              Get custom Instagram ads that actually convert browsers into paying clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary">
                Get Free Checklist
              </Link>
              <Link href="/packages" className="btn-secondary">
                View Packages
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-muted-900 mb-8">
            You Might Also Like
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/blog/instagram-stories-that-convert-salon-clients" className="card group hover:shadow-lg transition-all duration-300">
              <h4 className="font-semibold text-muted-900 group-hover:text-brand transition-colors duration-200 mb-2">
                5 Instagram Story Templates That Convert Browsers into Salon Clients
              </h4>
              <p className="text-muted-600 text-sm">
                Transform your Instagram Stories from afterthoughts into powerful booking tools...
              </p>
            </Link>
            
            <Link href="/blog/beauty-salon-marketing-budget-guide" className="card group hover:shadow-lg transition-all duration-300">
              <h4 className="font-semibold text-muted-900 group-hover:text-brand transition-colors duration-200 mb-2">
                How Much Should Your Beauty Salon Spend on Marketing?
              </h4>
              <p className="text-muted-600 text-sm">
                Discover the optimal marketing budget for your salon size and learn how to allocate...
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
