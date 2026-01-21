import { motion } from 'framer-motion';
import { useState } from 'react';

interface Experience {
  id: number;
  company: string;
  title: string;
  period: string;
  location: string;
  logo: string;
  website: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Asana',
    title: 'R&D Front-Developer : Ts, Js',
    period: 'January 2025 - present',
    location: 'USA, SF',
    logo: 'https://asana.com/favicon.ico',
    website: 'https://asana.com/',
    achievements: [
      'Conducted research for improving frontend applications improvements which led to a 30% load time increase across multiple projects.',
      'Worked on ADR for moving internal search capability from Mongo client to Algolia.',
      'Led development research and impact assessment to move from legacy React codes to Nextjs microfrontend with minimal downtime, ended up migrating 5 application 100% from React to NextJS which increased the development experience',
    ],
  },
  {
    id: 2,
    company: 'Vaurse',
    title: 'Tech Lead',
    period: 'April 2023 – August 2024',
    location: 'UEA, Dubai',
    logo: 'https://vaurse.com/favicon.ico',
    website: 'https://vaurse.com/',
    achievements: [
      'Implemented AI job-seekers and employers matching while saving the data to the pinecone vector database.',
      'Integrated a DAO system (Solidity) to foster stakeholder collaboration and decision-making.',
      'Engineered a scalable microservice architecture using Nestjs, and MongoDB and deployed each service to AWS.',
      'Actively participated in hiring and onboarding new developers.',
    ],
  },
  {
    id: 3,
    company: 'Microverse',
    title: 'Technical Support Engineer',
    period: 'January 2022 - November 2024',
    location: 'US, California',
    logo: 'https://www.microverse.org/favicon.ico',
    website: 'https://www.microverse.org/',
    achievements: [
      'Mentoring junior web developers, and providing technical support through code reviews.',
      'Proposing improvement to code organization to improve code quality and overall performance.',
      'Providing advice and tips on how to maintain motivation to maintain longevity in the program.',
    ],
  },
  {
    id: 4,
    company: 'Mundopato',
    title: 'Software engineer',
    period: 'December 2021 – March 2022',
    location: 'Portland, United States',
    logo: 'https://www.mundopato.com/favicon.ico',
    website: 'https://www.mundopato.com/',
    achievements: [
      'Migrated and restructured legacy monolithic applications into microservices, leveraging cloud environments for scalability.',
      'Designed event-driven solutions for reliable, scalable, and maintainable systems, while maintaining production systems and managing incidents.',
      'Applied best practices (SOLID, SEO, TDD, DDD) in development',
    ],
  },
];

const socialLinks = [
  { icon: '🐦', href: '#', label: 'Twitter' },
  { icon: '💼', href: '#', label: 'LinkedIn' },
  { icon: '📸', href: '#', label: 'Instagram' },
  { icon: '🎵', href: '#', label: 'TikTok' },
  { icon: '▶️', href: '#', label: 'YouTube' },
  { icon: '📱', href: '#', label: 'App' },
];

const WorkExperience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-display font-semibold text-white mb-12"
        >
          Work Experience
        </motion.h2>

        {/* Experience Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {experiences.map((exp) => {
            const LogoComponent = ({ logo, company, website }: { logo: string; company: string; website: string }) => {
              const [logoError, setLogoError] = useState(false);
              const [currentLogo, setCurrentLogo] = useState(logo);
              
              // Try multiple logo sources as fallbacks
              const logoSources = [
                logo,
                `https://logo.clearbit.com/${website.replace(/https?:\/\//, '').replace(/\/$/, '')}`,
                `https://www.google.com/s2/favicons?domain=${website.replace(/https?:\/\//, '').replace(/\/$/, '')}&sz=128`,
              ];
              
              const tryNextLogo = () => {
                const currentIndex = logoSources.indexOf(currentLogo);
                if (currentIndex < logoSources.length - 1) {
                  setCurrentLogo(logoSources[currentIndex + 1]);
                } else {
                  setLogoError(true);
                }
              };
              
              if (logoError) {
                return (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="w-10 h-10 bg-dark-500 rounded flex items-center justify-center">
                      <span className="text-lg font-bold text-primary-400">{company.charAt(0)}</span>
                    </div>
                  </div>
                );
              }
              
              return (
                <img 
                  src={currentLogo} 
                  alt={`${company} logo`}
                  className="w-full h-full object-contain"
                  onError={tryNextLogo}
                />
              );
            };
            
            return (
              <motion.div
                key={exp.id}
                variants={cardVariants}
                whileHover={{ scale: 1.01, y: -3 }}
                className="card-glass p-6 group h-96 flex flex-col"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 flex-shrink-0">
                  {/* Company Logo - Clickable Link */}
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-gradient-to-br from-dark-600 to-dark-700 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 p-2 hover:bg-gradient-to-br hover:from-primary-500/20 hover:to-purple-500/20 transition-all duration-300"
                    aria-label={`Visit ${exp.company} website`}
                  >
                    <LogoComponent logo={exp.logo} company={exp.company} website={exp.website} />
                  </a>
                
                {/* Header Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg group-hover:text-primary-400 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-primary-400 text-sm font-medium mt-1">{exp.title}</p>
                    </div>
                    <div className="text-right md:text-left">
                      <p className="text-gray-400 text-xs">{exp.period}</p>
                      <p className="text-gray-500 text-xs mt-1">{exp.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Scrollable Achievements */}
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar mt-4">
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-primary-400 mt-1.5 flex-shrink-0">●</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Cross-functional Team Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-gray-400 text-sm">
            I'm currently looking to join a{' '}
            <span className="text-primary-400 font-medium">cross-functional</span> team
          </p>
          <p className="text-gray-500 text-xs mt-1">
            that values improving people's lives through accessible design
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.1, y: -3 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="w-10 h-10 rounded-full bg-dark-700/50 flex items-center justify-center hover:bg-primary-600/30 transition-colors"
              aria-label={social.label}
            >
              <span className="text-lg">{social.icon}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;

