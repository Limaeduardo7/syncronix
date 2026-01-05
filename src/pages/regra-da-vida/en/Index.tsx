import SEO from "@/components/quantum-key/SEO";
import LiveViewers from "@/components/quantum-key/LiveViewers";
import PurchaseNotifications from "@/components/quantum-key/PurchaseNotifications";
import { americanPurchaseNotifications } from "@/components/quantum-key/notificationsData";
import { Check, Brain, Target, Zap } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-gray-900 relative">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Gradient Orbs */}
      <div className="fixed top-0 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-200/40 to-blue-200/40 rounded-full blur-[120px] animate-pulse"></div>
      <div className="fixed bottom-0 -right-40 w-96 h-96 bg-gradient-to-r from-blue-200/40 to-indigo-200/40 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-100/30 to-blue-100/30 rounded-full blur-[150px]"></div>

      <SEO
        title="The Rule of Life | eBook - Applied Mental Clarity"
        description="A direct and visual manual showing how the human mind operates behind decisions, habits, and results. Discover how real change happens."
        keywords="ebook, habit change, identity, behavior, human mind, transformation, mental clarity, personal development"
        canonical="https://achavdopoder.com/ebook-the-rule-of-life"
        lang="en-US"
      />

      <PurchaseNotifications
        purchaseText="just purchased the eBook!"
        justNowText="purchased now"
        notifications={americanPurchaseNotifications}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Tech Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-cyan-500/30 rounded-full bg-cyan-500/10 backdrop-blur-sm">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-cyan-400 font-medium">MENTAL TRANSFORMATION SYSTEM</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            THE RULE OF LIFE
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The direct and visual manual that shows how the human mind operates behind decisions, habits, and results
          </p>

          <div className="mb-12">
            <LiveViewers text="people are viewing this page right now" />
          </div>

          <a
            href="#offer"
            className="group relative inline-block px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xl rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              I WANT MENTAL CLARITY NOW
              <span className="text-2xl">→</span>
            </span>
          </a>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/20 to-transparent"></div>

        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Why trying to change with effort alone almost always fails?
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="border-l-4 border-blue-400 pl-6 py-4 bg-white/60 backdrop-blur-sm rounded-r-xl shadow-lg shadow-blue-100/50">
              Have you ever tried to change through willpower and watched the result disappear in days or weeks? It's not lack of discipline. You were fighting the wrong system.
            </p>
            <p className="border-l-4 border-blue-400 pl-6 py-4 bg-white/60 backdrop-blur-sm rounded-r-xl shadow-lg shadow-blue-100/50">
              The truth is that <span className="text-blue-600 font-bold">identity controls behavior on autopilot</span>. As long as you continue believing you're "that type of person," you'll repeat the same patterns.
            </p>
            <p className="border-l-4 border-blue-400 pl-6 py-4 bg-white/60 backdrop-blur-sm rounded-r-xl shadow-lg shadow-blue-100/50">
              This book isn't motivation. It's not a magic promise. It's <span className="text-blue-600 font-bold">applied mental clarity</span> so results emerge as a natural consequence.
            </p>
          </div>
        </div>
      </section>

      {/* What you'll discover */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>

        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            What you'll discover
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Brain className="w-12 h-12 text-blue-600" />,
                title: "How the mind really works",
                description: "Understand why you repeat the same patterns even when wanting to move forward"
              },
              {
                icon: <Target className="w-12 h-12 text-blue-600" />,
                title: "The role of identity",
                description: "Discover how who you believe you are determines your results"
              },
              {
                icon: <Zap className="w-12 h-12 text-blue-600" />,
                title: "Real and lasting change",
                description: "Learn how to correct internal programming for automatic results"
              },
              {
                icon: <Check className="w-12 h-12 text-blue-600" />,
                title: "Mental coherence system",
                description: "Understand how the brain seeks coherence with your internal beliefs"
              }
            ].map((item, index) => (
              <div key={index} className="group relative p-8 rounded-2xl bg-white border border-blue-200/60 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 backdrop-blur-sm">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 via-cyan-50/0 to-blue-50/0 group-hover:from-blue-50 group-hover:via-cyan-50/30 group-hover:to-transparent transition-all duration-300"></div>

                <div className="relative">
                  <div className="mb-4 p-3 w-fit rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="relative py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            The transformation you'll experience
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Before */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
              <div className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-full">
                BEFORE
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-4">Without mental clarity</h3>
              <ul className="space-y-4">
                {[
                  "Repeating the same mistakes constantly",
                  "Fighting yourself without understanding why",
                  "Temporary changes that don't last",
                  "Willpower that quickly runs out",
                  "Feeling stuck in the same patterns"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 text-xl font-bold">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-green-50 to-cyan-50 border-2 border-green-300 shadow-xl">
              <div className="absolute top-4 right-4 px-4 py-2 bg-green-600 text-white text-sm font-bold rounded-full">
                AFTER
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-4">With mental clarity</h3>
              <ul className="space-y-4">
                {[
                  "Understanding patterns and knowing how to change them",
                  "Aligning identity with desired results",
                  "Deep and permanent changes",
                  "Mental system working in your favor",
                  "Freedom to create the life you want to live"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="text-green-600 text-xl font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            This book is for you if...
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "You want real changes, not just temporary motivation",
              "You're tired of repeating the same patterns",
              "You seek to understand how the mind really works",
              "You want results based on clarity, not effort",
              "You desire deep and lasting transformation",
              "You're ready to take control of your life"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            What readers are saying
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Miller",
                location: "New York, NY",
                text: "Finally understood why I kept going back to the same habits. This book completely changed my perspective on personal transformation.",
                rating: 5
              },
              {
                name: "Sarah Johnson",
                location: "Los Angeles, CA",
                text: "It's not just another self-help book. It's a practical manual that shows exactly how the mind operates. Total clarity.",
                rating: 5
              },
              {
                name: "Michael Davis",
                location: "Chicago, IL",
                text: "I've read dozens of books about habit change, but this was the only one that truly made me understand the mechanics behind it. Highly recommend!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="relative p-8 bg-white rounded-2xl border border-blue-200 shadow-lg hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "How do I receive the eBook after purchase?",
                answer: "You'll receive immediate access after payment confirmation. The eBook will be sent to your email and will be available on the Hotmart platform for download on any device."
              },
              {
                question: "Can I read on any device?",
                answer: "Yes! The eBook is available in PDF format, allowing reading on smartphones, tablets, computers, and e-readers. You can download and read offline whenever you want."
              },
              {
                question: "How does the 7-day guarantee work?",
                answer: "Simple: if within 7 days you're not satisfied for any reason, just request a refund and we'll return 100% of your investment. No questions asked, no hassle."
              },
              {
                question: "Is this book different from other habit books?",
                answer: "Completely. It's not temporary motivation or superficial techniques. It's a visual and direct manual that shows how the mind operates behind behaviors, focusing on identity as the foundation of real change."
              },
              {
                question: "Do I need prior knowledge?",
                answer: "No. The content is presented in a clear and visual way, accessible to anyone seeking to understand how the human mind works and wants practical results."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-blue-600 text-2xl">?</span>
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/30 via-transparent to-transparent"></div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* eBook Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Glow behind mockup */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-3xl blur-3xl"></div>
                <img
                  src="/regra-da-vida/mockup-ebook.png"
                  alt="The Rule of Life - eBook"
                  className="relative w-full max-w-md rounded-3xl shadow-2xl shadow-cyan-500/20 border border-cyan-500/20"
                />
              </div>
            </div>

            {/* Pricing Card */}
            <div className="relative p-8 md:p-12 rounded-2xl bg-white border-2 border-blue-300 shadow-2xl shadow-blue-200/50 text-center overflow-hidden">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-cyan-100/30 to-blue-100/30 opacity-50 blur-xl"></div>

              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  The Rule of Life
                </h3>

                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-orange-300 rounded-full bg-gradient-to-r from-orange-50 to-yellow-50 shadow-lg">
                  <span className="text-orange-600 font-bold text-lg">🔥 LAUNCH OFFER 🔥</span>
                </div>

                {/* Pricing */}
                <div className="mb-8 space-y-3">
                  <p className="text-red-500 line-through text-2xl md:text-3xl font-black">
                    $49.90
                  </p>
                  <p className="text-lg font-semibold text-gray-600">only</p>
                  <p className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    $29.90
                  </p>
                  <p className="text-lg font-semibold text-gray-600">one-time payment</p>
                </div>

                {/* Benefits */}
                <div className="text-left mb-8 space-y-3">
                  {[
                    "✅ Immediate access to complete eBook",
                    "✅ Read on any device",
                    "✅ Direct and visual content",
                    "✅ 7-day money-back guarantee"
                  ].map((benefit, index) => (
                    <p key={index} className="text-gray-700 flex items-center gap-2 font-medium">
                      <span className="text-blue-600 text-xl">→</span>
                      {benefit}
                    </p>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://pay.hotmart.com/E103440064H?checkoutMode=10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block w-full px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">SECURE MY SPOT</span>
                </a>

                <p className="text-sm text-gray-600 mt-4 flex items-center justify-center gap-2">
                  <span className="text-green-500">🔒</span>
                  100% secure payment via Hotmart
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Start your transformation today
          </h2>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            The mental clarity you seek is one click away. Minimal investment, maximum impact on how you understand and transform your life.
          </p>

          <div className="inline-flex flex-col items-center gap-6 p-8 bg-white rounded-2xl border-2 border-blue-300 shadow-2xl shadow-blue-200/40">
            <div className="space-y-2">
              <p className="text-gray-600 line-through text-xl">$49.90</p>
              <p className="text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                $29.90
              </p>
              <p className="text-sm text-gray-600">Limited-time launch offer</p>
            </div>

            <a
              href="https://pay.hotmart.com/E103440064H?checkoutMode=10"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block px-16 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-2xl rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">START NOW</span>
            </a>

            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className="text-green-500">🔒</span>
              Secure payment • Immediate access • 7-day guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-green-50/30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-100/20 to-transparent"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-green-300 rounded-full bg-white shadow-lg shadow-green-200/50">
            <span className="text-2xl">🛡️</span>
            <span className="text-green-600 font-bold">TOTAL GUARANTEE</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
            Unconditional 7-Day Money-Back Guarantee
          </h2>

          <div className="p-8 rounded-2xl bg-white border-2 border-green-200 shadow-xl shadow-green-200/30">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              If for any reason you're not satisfied, we'll refund <span className="text-green-600 font-bold">100% of your investment</span>. No questions asked, no hassle.
            </p>
            <p className="text-lg text-gray-600">
              You have nothing to lose. <span className="text-blue-600 font-bold">All the risk is on us.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 bg-gray-50 border-t border-gray-200">
        <div className="relative max-w-4xl mx-auto text-center text-gray-600">
          <p className="mb-4">© 2026 The Rule of Life. All rights reserved.</p>
          <p className="text-sm">This site is not part of Facebook or Meta. We are not affiliated with Facebook in any way.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
