export default function TermsPage() {
  return (
    <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-muted-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-600">
            Last updated: January 15, 2024
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-muted-700">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-muted-900 mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using Adoraq's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-muted-900 mb-4">Services</h2>
            <p className="mb-4">
              Adoraq provides marketing design services specifically for beauty, wellness, and fitness businesses, including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Custom Instagram ad design and copywriting</li>
              <li>Social media content creation</li>
              <li>Marketing strategy consultation</li>
              <li>Promotional materials design</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-muted-900 mb-4">Payment Terms</h2>
            <p className="mb-4">
              Payment for services is required in advance unless otherwise agreed in writing. We accept payments via:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Stripe payment links for one-time projects</li>
              <li>Monthly subscription for ongoing services</li>
              <li>Bank transfer for larger projects (by arrangement)</li>
            </ul>
            <p className="mb-4">
              All prices are in British Pounds (GBP) and include applicable taxes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-muted-900 mb-4">Refund Policy</h2>
            <p className="mb-4">
              We offer a 30-day money-back guarantee on our services. If you're not satisfied with our work, we will provide a full refund within 30 days of delivery, provided:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>You have not used the delivered materials in any marketing campaigns</li>
              <li>You provide specific feedback about why the work doesn't meet your needs</li>
              <li>You allow us one opportunity to revise the work before requesting a refund</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-muted-900 mb-4">Intellectual Property</h2>
            <p className="mb-4">
              Upon full payment, you receive full commercial rights to use the custom designs and copy we create for your business. However:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>You may not resell our designs to third parties</li>
              <li>We retain the right to showcase our work in our portfolio</li>
              <li>Any stock images or fonts used are licensed appropriately</li>
              <li>We may use anonymized case studies for marketing purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-muted-900 mb-4">Client Responsibilities</h2>
            <p className="mb-4">
              To ensure successful project completion, clients must:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide accurate business information and requirements</li>
              <li>Respond to requests for feedback within 48 hours</li>
              <li>Provide high-quality source materials when requested</li>
              <li>Ensure they have rights to any images or content they provide</li>
              <li>Review and approve final work before we consider it complete</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-muted-900 mb-4">Delivery and Revisions</h2>
            <p className="mb-4">
              We aim to deliver all projects within the specified timeframe. Revision policies:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>One-off projects include up to 2 rounds of revisions</li>
              <li>Monthly plan clients get unlimited revisions during review week</li>
              <li>Major scope changes may incur additional charges</li>
              <li>Revisions must be requested within 7 days of delivery</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-muted-900 mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              Adoraq's liability is limited to the amount paid for services. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Performance of your advertising campaigns</li>
              <li>Results or return on investment</li>
              <li>Third-party platform policy changes</li>
              <li>Technical issues beyond our control</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-muted-900 mb-4">Termination</h2>
            <p className="mb-4">
              Either party may terminate services with 30 days' written notice. Monthly subscriptions can be cancelled at any time, effective at the end of the current billing period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-muted-900 mb-4">Governing Law</h2>
            <p className="mb-4">
              These terms are governed by the laws of England and Wales. Any disputes will be resolved in the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-muted-900 mb-4">Contact Information</h2>
            <p className="mb-4">
              For questions about these terms, please contact us:
            </p>
            <div className="bg-muted-50 p-6 rounded-xl">
              <p><strong>Email:</strong> hello@adoraq.com</p>
              <p><strong>WhatsApp:</strong> +44 749052323</p>
              <p><strong>Address:</strong> London, UK</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
