import { ArrowRight } from 'lucide-react';

function CTA() {
  return (
    <section id="cta" className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Start screening with Valitron</h2>
        <p className="mt-3 text-gray-600">Create your first AI-led interview and get a ranked shortlist in minutes.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-white font-medium shadow-md hover:shadow-lg transition">
            Get started free <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-800 font-medium hover:bg-gray-50 transition">
            Book a demo
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500">No setup • No credit card • Cancel anytime</p>
      </div>
    </section>
  );
}

export default CTA;
