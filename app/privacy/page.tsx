export default function PrivacyPage() {
  return (
    <div className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-muted-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-600">
            Last updated: January 15, 2024
          </p>
        </header>

        <div className="prose prose-lg max-w-none text-muted-700">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-muted-900 mb-4">Information We Collect</h2>
            <p className="mb-4">
              When you use our services, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Personal information such as your name and email address when you fill out our contact forms</li>
              <li>Business information about your salon, spa, or fitness business</li>
              <li>Communication preferences, including consent for WhatsApp updates</li>
              <li>Technical information such as IP address and browser type for website functionality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-muted-900 mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide our marketing and design services</li>
              <li>Send you our free marketing resources and checklist</li>
              <li>Communicate with you about our services via email or WhatsApp (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-muted-900 mb-4">Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>With service providers who help us operate our business (e.g., email marketing platforms)</li>
              <li>When required by law or to protect our rights</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-muted-900 mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-muted-900 mb-4">Your Rights</h2>
            <p className="mb-4">
              Under UK GDPR, you have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your information</li>
              <li>Object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-muted-900 mb-4">Cookies</h2>
            <p className="mb-4">
              Our website uses essential cookies to ensure proper functionality. We do not use tracking cookies or analytics that collect personal information without your consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-muted-900 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or want to exercise your rights, please contact us:
            </p>
            <div className="bg-muted-50 p-6 rounded-xl">
              <p><strong>Email:</strong> hello@adoraq.com</p>
              <p><strong>WhatsApp:</strong> +44 749052323</p>
              <p><strong>Address:</strong> London, UK</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-muted-900 mb-4">Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
