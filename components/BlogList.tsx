import Link from 'next/link'
import { Clock, User, ArrowRight } from 'lucide-react'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  readTime: string
  featured?: boolean
}

interface BlogListProps {
  posts: BlogPost[]
  featured?: boolean
  limit?: number
}

export default function BlogList({ posts, featured = false, limit }: BlogListProps) {
  let displayPosts = posts
  
  if (featured) {
    displayPosts = posts.filter(post => post.featured)
  }
  
  if (limit) {
    displayPosts = displayPosts.slice(0, limit)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayPosts.map((post) => (
        <article key={post.slug} className="card group hover:shadow-lg transition-all duration-300">
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm text-muted-500 mb-2">
              <span className="bg-brand/10 text-brand px-2 py-1 rounded-full text-xs font-semibold">
                {post.category}
              </span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}
              </time>
            </div>
            
            <h2 className="text-xl font-bold text-muted-900 mb-3 group-hover:text-brand transition-colors duration-200 line-clamp-2">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            
            <p className="text-muted-600 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-muted-500">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <Link 
              href={`/blog/${post.slug}`}
              className="text-brand hover:text-brand-600 font-semibold text-sm flex items-center space-x-1 group/link"
            >
              <span>Read more</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}
