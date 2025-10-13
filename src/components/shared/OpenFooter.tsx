'use client';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from "react-icons/bs";

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Brand Center", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    title: "Help Center",
    links: [
      { name: "Discord Server", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "Facebook", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Licensing", href: "#" },
      { name: "Terms & Conditions", href: "#" },
    ],
  },
  {
    title: "Download",
    links: [
      { name: "iOS", href: "#" },
      { name: "Android", href: "#" },
      { name: "Windows", href: "#" },
      { name: "MacOS", href: "#" },
    ],
  },
];

const socialIcons = [
  { icon: <BsFacebook size={20} />, href: "#" },
  { icon: <BsInstagram size={20} />, href: "#" },
  { icon: <BsTwitter size={20} />, href: "#" },
  { icon: <BsGithub size={20} />, href: "#" },
  { icon: <BsDribbble size={20} />, href: "#" },
];

const OpenFooter = () => {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500 opacity-20 rounded-full filter blur-3xl mix-blend-multiply animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500 opacity-20 rounded-full filter blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 gap-8 md:grid-cols-4">
        {footerSections.map((section, idx) => (
          <div key={idx} className="animate-fade-in delay-[${idx * 100}ms]">
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="relative w-full bg-gray-800 px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-t-3xl shadow-inner">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} SaaSCo. All rights reserved.</p>
        <div className="mt-4 flex space-x-6 sm:mt-0">
          {socialIcons.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="transition-transform transform hover:scale-110 hover:text-cyan-400"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default OpenFooter;
