import { notFound } from 'next/navigation'
import PostLayout from '@/components/PostLayout'
import postsData from '@/data/posts.json'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = postsData.find(p => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <PostLayout
      title={post.title}
      excerpt={post.excerpt}
      date={post.date}
      author={post.author}
      category={post.category}
      readTime={post.readTime}
      content={post.content}
    />
  )
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return postsData.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each post
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = postsData.find(p => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Adoraq Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}
