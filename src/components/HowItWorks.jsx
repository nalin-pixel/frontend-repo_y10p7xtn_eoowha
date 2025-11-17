function HowItWorks() {
  const steps = [
    {
      step: '1',
      title: 'Paste your job description',
      desc: 'We extract requirements and generate a structured rubric tailored to your role.'
    },
    {
      step: '2',
      title: 'Share the interview link',
      desc: 'Candidates complete an AI-led voice interview at their convenience.'
    },
    {
      step: '3',
      title: 'Review ranked shortlists',
      desc: 'See top candidates first with scores, key quotes, and risk flags.'
    }
  ];

  return (
    <section id="how" className="py-20 bg-gradient-to-b from-white to-purple-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How it works</h2>
          <p className="mt-3 text-gray-600">From JD to shortlist in minutes.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold">
                {s.step}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
