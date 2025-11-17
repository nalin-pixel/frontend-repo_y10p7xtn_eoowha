import { Sparkles, Mic, Gauge, ListChecks } from 'lucide-react';

function Features() {
  const features = [
    {
      icon: <Mic className="h-5 w-5" />,
      title: 'AI Voice Interviews',
      desc: 'Conversational screening calls that feel natural and consistent across every candidate.'
    },
    {
      icon: <ListChecks className="h-5 w-5" />,
      title: 'Structured Rubrics',
      desc: 'Scorecards aligned to your job description ensure fair, comparable evaluations.'
    },
    {
      icon: <Gauge className="h-5 w-5" />,
      title: 'Automatic Ranking',
      desc: 'Instant shortlists of the strongest candidates for your specific role.'
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: 'ATS Friendly',
      desc: 'Export summaries and scores to your ATS and workflows with one click.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why teams choose Valitron</h2>
          <p className="mt-3 text-gray-600">Cut screening time by up to 80% while improving signal quality and candidate experience.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-xl border border-gray-200 p-5 hover:shadow-md transition bg-white">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 text-purple-700">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
