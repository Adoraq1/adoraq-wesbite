import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  business: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    business: "Glow Beauty Salon",
    content: "The ads Adoraq created brought us 15 new clients in the first week. Finally, advertising that actually works for my salon!",
    rating: 5,
    avatar: "SM"
  },
  {
    name: "Emma Thompson", 
    business: "Zen Wellness Studio",
    content: "I was skeptical about Instagram ads, but the results speak for themselves. Booked solid for the next month.",
    rating: 5,
    avatar: "ET"
  }
]

interface TestimonialsProps {
  showAll?: boolean
}

export default function Testimonials({ showAll = false }: TestimonialsProps) {
  const displayTestimonials = showAll ? testimonials : testimonials.slice(0, 2)

  return (
    <div className="space-y-6">
      {displayTestimonials.map((testimonial, index) => (
        <div key={index} className="card">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-brand to-brand2 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
              {testimonial.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-700 mb-3 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-muted-900">{testimonial.name}</p>
                <p className="text-sm text-muted-600">{testimonial.business}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
