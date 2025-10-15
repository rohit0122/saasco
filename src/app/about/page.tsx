import AppOpenLayout from "@/layout/AppOpenLayout";
import Image from "next/image";
import { FaUsers, FaClock, FaHeadset, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { Metadata } from "next";
import { getPageMetaBySlug } from "@/lib/pageMeta";
import { getPageData } from "@/lib/pageData";

// Define the structure for metadata information
interface PageMeta {
  title: string;
  description: string;
  keywords: string;
}

// Define the structure for each team member
interface TeamMember {
  name: string;
  role: string;
  img: string
  altTxt: string;
  socials: {
    [key: string]: string; // Assuming Socials is an object with dynamic keys and string values
  };
}

interface MeetOutTeamItem {
  Name: string;
  Roles: string;
  Picture: {
    url?: string;
    alternativeText?: string;
  };
  Socials: {
    [key: string]: string;
  };
}

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const data = await getPageMetaBySlug("about");
  const meta: PageMeta = data.pageMeta[0]; // Assuming the first item contains the metadata

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
  };
}

// Generate static parameters for the page
export async function generateStaticParams() {
  return [{ slug: 'about' }];
}

// Enable Incremental Static Regeneration (ISR)
export const revalidate = 300; // Revalidate every 5 minutes

export default async function About() {
  const data = await getPageData("about");
  const teamMembers: TeamMember[] = (data.pageData.meetOutTeam || []).map((item: MeetOutTeamItem) => ({
    name: item.Name,
    role: item.Roles,
    img: `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.Picture?.url || ""}`,
    altTxt: item.Picture?.alternativeText || item.Name,
    socials: item.Socials,
  }));

  const stats = [
    { icon: <FaUsers size={28} className="text-indigo-500" />, label: "Clients Worldwide", value: "500+" },
    { icon: <FaClock size={28} className="text-indigo-500" />, label: "Uptime Reliability", value: "99.9%" },
    { icon: <FaHeadset size={28} className="text-indigo-500" />, label: "Support & Guidance", value: "24/7" },
  ];

  return (
    <AppOpenLayout>
      <div className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {"Empowering Innovation"}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
              {"At SaaSCo, we simplify complexity and empower creators..."}
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center"
              >
                <div className="mb-4">{item.icon}</div>
                <h2 className="text-3xl font-bold text-indigo-600">{item.value}</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Team */}
          <div className="mt-24 text-center">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Meet Our Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-gray-300">
              Our team of experts is dedicated to turning your vision into reality.
            </p>

            <div className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 p-8 flex flex-col items-center"
                >
                  <div className="relative w-32 h-32 -mt-20">
                    <Image
                      alt={member.altTxt}
                      src={member.img}
                      fill
                      className="rounded-full shadow-lg object-cover"
                    />
                  </div>
                  <h5 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h5>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">{member.role}</p>

                  {/* Social links */}
                  <div className="mt-4 flex space-x-4">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="text-gray-500 hover:text-indigo-600 transition">
                        <FaLinkedin size={20} />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} className="text-gray-500 hover:text-indigo-600 transition">
                        <FaTwitter size={20} />
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} className="text-gray-500 hover:text-indigo-600 transition">
                        <FaGithub size={20} />
                      </a>
                    )}
                  </div>

                  <a
                    href="#"
                    className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 text-sm font-medium shadow-md transition-all"
                  >
                    View Profile
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppOpenLayout>
  );
}