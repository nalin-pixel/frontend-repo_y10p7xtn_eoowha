import Spline from '@splinetool/react-spline';

function Hero() {
  const handlePrimaryClick = () => {
    const el = document.getElementById('cta');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-white via-purple-50 to-blue-50">
      {/* Top navigation (simple) */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400" />
            <span className="text-xl font-semibold tracking-tight text-gray-900">Valitron</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#how" className="hover:text-gray-900 transition">How it works</a>
            <a href="#cta" className="hover:text-gray-900 transition">Get started</a>
          </div>
        </div>
      </div>

      {/* Spline 3D scene */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-12 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              AI interviewer that ranks candidates against your job description
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              Meet Valitron — an AI voice agent that screens applicants, scores them on structured rubrics, and surfaces the best fits. Save weeks on screening and spend time with the top of your funnel.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={handlePrimaryClick} className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white font-medium shadow-md hover:shadow-lg transition">
                Try Valitron free
              </button>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-800 font-medium hover:bg-gray-50 transition">
                See features
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">No credit card required • Get ranked shortlists in minutes</p>
          </div>

          <div className="relative h-[420px] sm:h-[520px]">
            {/* Subtle blurred gradient behind the scene (does not block interaction) */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl blur-3xl opacity-60" style={{ background: 'radial-gradient(600px 300px at 50% 50%, rgba(139,92,246,0.25), rgba(59,130,246,0.15), rgba(251,146,60,0.12) 70%, transparent 80%)' }} />
            <div className="relative h-full w-full rounded-3xl ring-1 ring-black/5 bg-white/20 backdrop-blur-sm">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient flourish (visual only, non-blocking) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-120px] h-[240px] bg-gradient-to-t from-purple-200/40 via-blue-200/20 to-transparent" />
    </section>
  );
}

export default Hero;
