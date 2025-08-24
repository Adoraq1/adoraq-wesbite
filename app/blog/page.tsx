import { TrendingUp, BookOpen, Users } from 'lucide-react'
import BlogList from '@/components/BlogList'
import postsData from '@/data/posts.json'

export default function BlogPage() {
  const featuredPosts = postsData.filter(post => post.featured)
  const otherPosts = postsData.filter(post => !post.featured)

  return (
    <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-muted-900 mb-6">
            Marketing Tips for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand2">
              Beauty & Wellness
            </span>{' '}
            Businesses
          </h1>
          <p className="text-xl text-muted-600 max-w-3xl mx-auto mb-8">
            Proven strategies, insider tips, and real case studies to help your salon, 
            spa, or fitness studio attract more clients and grow your business.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-brand" />
              </div>
              <div className="text-2xl font-bold text-muted-900">50+</div>
              <div className="text-muted-600">Marketing Articles</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brand2/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-brand2" />
              </div>
              <div className="text-2xl font-bold text-muted-900">500+</div>
              <div className="text-muted-600">Businesses Helped</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-brand" />
              </div>
              <div className="text-2xl font-bold text-muted-900">3x</div>
              <div className="text-muted-600">Average ROAS</div>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-muted-900 mb-8">Featured Articles</h2>
            <BlogList posts={featuredPosts} featured={true} />
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-3xl font-bold text-muted-900 mb-8">Latest Articles</h2>
          <BlogList posts={otherPosts} />
        </div>

        {/* CTA Section */}
        <div className="card mt-20 bg-gradient-to-br from-brand-50 to-brand2-50 text-center">
          <h3 className="text-3xl font-bold text-muted-900 mb-4">
            Ready to Put These Tips into Action?
          </h3>
          <p className="text-lg text-muted-600 mb-8 max-w-2xl mx-auto">
            Stop struggling with DIY marketing. Let our team create custom Instagram ads 
            that actually convert browsers into paying clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="btn-primary">
              Get Free Checklist
            </a>
            <a href="/packages" className="btn-secondary">
              View Our Packages
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
