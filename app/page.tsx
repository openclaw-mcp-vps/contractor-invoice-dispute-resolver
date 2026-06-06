export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers &amp; Contractors
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Chasing Unpaid Invoices.<br />
          <span className="text-[#58a6ff]">Build Your Case in Minutes.</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          DisputeKit automatically compiles timestamped work logs, communication threads, and contract breach documentation into a professional evidence package — ready for platform submission or legal use.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Get DisputeKit — $12/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. Instant access.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "📋", title: "Work Log Import", desc: "Upload time-tracking exports and get auto-formatted, timestamped evidence." },
          { icon: "💬", title: "Communication Export", desc: "Extract email and message threads into clean, court-ready documents." },
          { icon: "📄", title: "Contract Analysis", desc: "Identify breach clauses and generate a breach summary with citations." },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited dispute packages",
              "Work log import (CSV, PDF)",
              "Communication thread export",
              "Contract breach analysis",
              "Downloadable PDF packages",
              "Priority email support",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Resolving Disputes
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What file formats can I upload?",
              a: "DisputeKit accepts CSV and PDF work logs, plain text or PDF email exports, and PDF or DOCX contracts. More formats are added regularly.",
            },
            {
              q: "Is the evidence package legally valid?",
              a: "The package is formatted to meet common platform dispute requirements and can be used as supporting documentation in legal proceedings. We recommend consulting a lawyer for formal legal action.",
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel with one click from your account dashboard. You keep access until the end of your billing period.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} DisputeKit. All rights reserved.
      </footer>
    </main>
  )
}
