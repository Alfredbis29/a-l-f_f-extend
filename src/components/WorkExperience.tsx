import { motion } from 'framer-motion';

const experiences = [
  { id: 1, title: 'CSS on the Mobile', image: '/placeholder1.png' },
  { id: 2, title: 'CSS on the Mobile', image: '/placeholder2.png' },
  { id: 3, title: 'CSS on the Mobile', image: '/placeholder3.png' },
  { id: 4, title: 'CSS on the Mobile', image: '/placeholder4.png' },
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
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="card-glass p-4 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {/* Image Placeholder */}
                <div className="w-20 h-14 bg-gradient-to-br from-dark-600 to-dark-700 rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="w-12 h-8 bg-dark-500 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-400">📱</span>
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <div>
                  <h3 className="text-white font-medium text-sm group-hover:text-primary-400 transition-colors">
                    {exp.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
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

