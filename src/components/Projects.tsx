import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  sourceUrl: string;
  reversed?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Counter',
    description: 'A counter application showcasing interactive JavaScript functionality. This project demonstrates state management and dynamic UI updates with clean, responsive design.',
    image: '/project1.png',
    liveUrl: '#',
    sourceUrl: '#',
    reversed: false,
  },
  {
    id: 2,
    title: 'Tonic',
    description: 'A modern web application built with attention to detail and user experience. Features a clean interface and responsive design that works seamlessly across all devices.',
    image: '/project2.png',
    liveUrl: '#',
    sourceUrl: '#',
    reversed: true,
  },
];

const Projects = () => {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-display font-semibold text-white mb-12"
        >
          My Projects
        </motion.h2>

        <div className="space-y-24">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`flex flex-col ${
                project.reversed ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-8 md:gap-12 items-center`}
            >
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: project.reversed ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex-1"
              >
                <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-600/20 hover:bg-primary-600/30 rounded-lg text-primary-400 text-sm transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    See Live
                  </motion.a>
                  <motion.a
                    href={project.sourceUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-dark-700/50 hover:bg-dark-600/50 rounded-lg text-gray-400 text-sm transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Source Code
                  </motion.a>
                </div>
              </motion.div>

              {/* Project Image */}
              <motion.div
                initial={{ opacity: 0, x: project.reversed ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex-1"
              >
                <div className="card-glass p-4 overflow-hidden group">
                  <div className="relative aspect-video bg-gradient-to-br from-dark-600 to-dark-700 rounded-lg overflow-hidden">
                    {/* Mock Browser Window */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-dark-800 flex items-center px-3 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      <div className="flex-1 mx-4">
                        <div className="h-4 bg-dark-600 rounded-full w-1/2" />
                      </div>
                    </div>
                    
                    {/* Content Area */}
                    <div className="pt-8 p-4 space-y-3">
                      <div className="h-4 bg-dark-500 rounded w-3/4" />
                      <div className="h-3 bg-dark-500/50 rounded w-full" />
                      <div className="h-3 bg-dark-500/50 rounded w-5/6" />
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="h-12 bg-dark-500/30 rounded" />
                        <div className="h-12 bg-dark-500/30 rounded" />
                        <div className="h-12 bg-dark-500/30 rounded" />
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-primary-600/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <span className="text-white font-medium">View Project</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
