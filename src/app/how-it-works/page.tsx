
import AppOpenLayout from "@/layout/AppOpenLayout";
import { FaRegLightbulb, FaCogs, FaChartLine } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaasCo | Page",
  description: "SaaS Co |  Template",
};
const steps = [
  {
    title: "Sign Up",
    description: "Create your account in less than a minute. No credit card required to get started.",
    icon: <FaRegLightbulb size={24} className="text-white" />,
    bg: "bg-gradient-to-r from-indigo-500 to-purple-600",
  },
  {
    title: "Connect Your Data",
    description: "Integrate seamlessly with our powerful API or use one of our pre-built connectors.",
    icon: <FaCogs size={24} className="text-white" />,
    bg: "bg-gradient-to-r from-teal-500 to-cyan-500",
  },
  {
    title: "Analyze & Grow",
    description: "Use our intuitive dashboard to gain insights, monitor performance, and scale your business.",
    icon: <FaChartLine size={24} className="text-white" />,
    bg: "bg-gradient-to-r from-pink-500 to-red-500",
  },
];

const HowItWorksPage = () => (
  <div className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
    {/* Decorative background shapes */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white animate-fade-in">
          Simple Steps to Success
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-gray-300 animate-fade-in delay-200">
          Get up and running in minutes.
        </p>
      </div>

      {/* Steps Section */}
      <div className="mt-20 grid gap-8 md:grid-cols-3">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
          >
            <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${step.bg} shadow-lg`}>
              {step.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Optional CTA Section */}
      <div className="mt-32 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
          Ready to get started?
        </h2>
        <p className="text-lg text-slate-600 dark:text-gray-300 mb-8">
          Join thousands of creators and businesses already using SaaSCo.
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

export default function HowItWorks() {
  return (
    <AppOpenLayout>
      <HowItWorksPage />
    </AppOpenLayout>
  );
}
