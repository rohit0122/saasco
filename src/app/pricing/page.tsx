import AppOpenLayout from "@/layout/AppOpenLayout";
import { getPageMetaBySlug } from "@/lib/pageData";
import { Metadata } from "next";

// Define the structure for metadata information
interface PageMeta {
  title: string;
  description: string;
  keywords: string;
}

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const data = await getPageMetaBySlug("pricing");
  const meta: PageMeta = data.pageMeta[0]; // Assuming the first item contains the metadata

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
    },
  };
}

const tiers = [
  { name: 'Starter', price: '0', features: ['1 Project', 'Basic Analytics', 'Community Support'] },
  { name: 'Pro', price: '49', features: ['10 Projects', 'Advanced Analytics', 'Email Support', 'API Access'], popular: true },
  { name: 'Enterprise', price: 'Custom', features: ['Unlimited Projects', 'Dedicated Infrastructure', 'Premium Support', 'SSO'] },
];

const PricingPage = () => (
  <div className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
    {/* Background decorative blobs */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white animate-fade-in">
          Find the Right Plan
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-gray-300 animate-fade-in delay-200">
          Start for free, then scale with confidence.
        </p>
      </div>

      {/* Pricing Tiers */}
      <div className="mt-20 grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 flex flex-col`}
          >
            {tier.popular && (
              <div className="mb-4 text-center">
                <span className="inline-block px-3 py-1 text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full shadow-lg">
                  Most Popular
                </span>
              </div>
            )}

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">{tier.name}</h3>

            <div className="flex items-baseline justify-center mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                {tier.price !== "Custom" ? `$${tier.price}` : tier.price}
              </span>
              {tier.price !== "Custom" && (
                <span className="ml-1 text-lg font-medium text-gray-500 dark:text-gray-400">
                  /mo
                </span>
              )}
            </div>

            <ul className="mb-6 space-y-4">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 ${
                tier.popular
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700"
                  : "bg-gray-700 dark:bg-gray-600 text-white hover:bg-gray-800 dark:hover:bg-gray-500"
              }`}
            >
              {tier.popular ? "Get Started" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>

      {/* Optional Comparison Section */}
      <div className="mt-32 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Compare Plans</h2>
        <p className="text-lg text-slate-600 dark:text-gray-300 mb-12">
          Find the perfect plan that fits your needs.
        </p>
        {/* Here you can add a comparison table if needed */}
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center px-4 sm:px-6 lg:px-8 pb-32">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Ready to get started?</h2>
        <p className="text-lg text-slate-600 dark:text-gray-300 mb-8">
          Pick your plan and start building today.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
);

export default function Pricing() {
  return (
    <AppOpenLayout>
      <PricingPage />
    </AppOpenLayout>
  );
}
