import { NextRequest, NextResponse } from 'next/server'

// MailerLite API configuration
const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID

interface SubscribeRequest {
  email: string
  name: string
  whatsappUpdates?: boolean
}

export async function POST(request: NextRequest) {
  try {
    // Check for required environment variables
    if (!MAILERLITE_API_KEY || !MAILERLITE_GROUP_ID) {
      console.error('Missing required environment variables: MAILERLITE_API_KEY or MAILERLITE_GROUP_ID')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const body: SubscribeRequest = await request.json()
    const { email, name, whatsappUpdates = false } = body

    // Validate required fields
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create subscriber in MailerLite
    const subscriberData = {
      email: email,
      fields: {
        name: name,
        whatsapp_updates: whatsappUpdates ? 'yes' : 'no'
      },
      groups: [MAILERLITE_GROUP_ID]
    }

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify(subscriberData)
    })

    const responseData = await response.json()

    if (response.ok) {
      console.log('Subscriber created successfully:', responseData)
      return NextResponse.json(
        { 
          success: true, 
          message: 'Successfully subscribed to mailing list',
          subscriberId: responseData.data?.id
        },
        { status: 200 }
      )
    } else {
      console.error('MailerLite API error:', responseData)
      
      // Handle common MailerLite errors
      if (response.status === 422 && responseData.message?.includes('email')) {
        return NextResponse.json(
          { error: 'This email is already subscribed or invalid' },
          { status: 422 }
        )
      }
      
      return NextResponse.json(
        { 
          error: 'Failed to subscribe to mailing list',
          details: responseData.message || 'Unknown error'
        },
        { status: response.status }
      )
    }
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle preflight requests for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
