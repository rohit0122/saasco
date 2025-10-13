
import AppOpenLayout from "@/layout/AppOpenLayout";
import { FaRocket, FaUsers, FaShieldAlt } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaasCo | Page",
  description: "SaaS Co |  Template",
};
const features = [
    { icon: <FaRocket size={28} className="text-indigo-500" />, title: "Fast Performance", desc: "Optimized for speed and reliability to scale with your business." },
    { icon: <FaUsers size={28} className="text-indigo-500" />, title: "User Friendly", desc: "Intuitive design for seamless experience for everyone." },
    { icon: <FaShieldAlt size={28} className="text-indigo-500" />, title: "Secure & Reliable", desc: "Top-notch security measures to protect your data." },
];

const stats = [
    { label: "Users Worldwide", value: "10K+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Uptime Guarantee", value: "99.9%" },
];

const HomePage = () => {
    return (
        <main className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
            {/* Background shapes */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

            {/* Hero Section */}
            <section className="mx-auto max-w-7xl relative pt-32 pb-24 text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 animate-fade-in">
                    🚀 SaaSCo – Build Your Digital Future, Faster
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 mb-8 animate-fade-in delay-200">
                    Powerful, intuitive, and scalable platform for creators and businesses alike. Our platform provides the tools you need to innovate, scale, and succeed. Stop worrying about infrastructure and start building what matters.
                </p>
                <div className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
                   
                    <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        {/* Main Quote */}
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight animate-fade-in">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                                Everything you need
                            </span>, nothing you dont
                        </h2>

                        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 italic animate-fade-in delay-200">
                            A powerful, yet simple suite of tools designed to help your business grow.
                        </p>

                        {/* Accent line */}
                        <div className="mt-6 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-80 animate-fade-in delay-400"></div>
                    </div>
                </div>

                {/* Optional Call-to-Action Buttons */}
                <div className="mt-8 flex justify-center gap-4 flex-wrap">
                    <a
                        href="#"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Get Started
                    </a>
                    <a
                        href="#features"
                        className="px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold shadow-inner hover:shadow-lg transition-all duration-300"
                    >
                        Learn More
                    </a>
                </div>
            </section>

            {/* Features Section */}
            <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Our Features</h2>
                    <p className="mt-4 text-lg text-slate-600 dark:text-gray-300">Designed for creators, teams, and businesses.</p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 text-center"
                        >
                            <div className="mb-4 flex justify-center">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="mt-32 py-24 bg-gray-100 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-3 text-center">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                            >
                                <h3 className="text-3xl font-bold text-indigo-600">{stat.value}</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="mt-32 text-center px-4 sm:px-6 lg:px-8 pb-32">
                <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Ready to get started?</h2>
                <p className="text-lg text-slate-600 dark:text-gray-300 mb-8">
                    Join thousands of creators and businesses already using SaaSCo.
                </p>
                <a
                    href="/contact"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all"
                >
                    Contact Us
                </a>
            </section>
        </main>
    );
};

export default function Home() {
    return (
        <AppOpenLayout>
            <HomePage />
        </AppOpenLayout>
    );
}
