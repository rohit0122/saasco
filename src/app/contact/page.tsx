
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
  const data = await getPageMetaBySlug("contact");
  const meta: PageMeta = data.pageMeta[0]; // Assuming the first item contains the metadata

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    },
  };
}


const locations = [
  { city: "New York, USA", address: "123 Main Street, NY 10001" },
  { city: "London, UK", address: "456 High Street, London SW1A 1AA" },
  { city: "Sydney, AU", address: "789 George Street, Sydney NSW 2000" },
];

const ContactPage = () => (
  <div className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
    {/* Background blobs */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white">Get in Touch</h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-gray-300">
          We’d love to hear from you. Fill out the form or reach out directly.
        </p>
      </div>

      {/* Form Card */}
      <div className="mt-12 p-10 rounded-3xl bg-gray-100 dark:bg-gray-800 shadow-2xl dark:shadow-black/40 hover:shadow-3xl transition-shadow duration-500 max-w-2xl mx-auto">
        <form className="space-y-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              required
              className="mt-2 px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              className="mt-2 px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500 transition"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message..."
              required
              rows={5}
              className="mt-2 px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-500 resize-none transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 hover:from-indigo-600 hover:to-purple-700 dark:hover:from-indigo-700 dark:hover:to-purple-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Locations Section */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8">Our Offices</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {locations.map((loc, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-md dark:shadow-black/40 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{loc.city}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{loc.address}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8">Other Ways to Reach Us</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-md dark:shadow-black/40 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">support@saasco.com</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-md dark:shadow-black/40 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">+1 (123) 456-7890</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-md dark:shadow-black/40 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold text-gray-900 dark:text-white">Support Hours</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Mon-Fri, 9am - 6pm</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Contact() {
  return (
    <AppOpenLayout>
      <ContactPage />
    </AppOpenLayout>
  );
}
