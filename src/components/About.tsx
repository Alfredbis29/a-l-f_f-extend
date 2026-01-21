import { motion } from 'framer-motion';

const skills = {
  languages: [
    { name: 'JavaScript', icon: '🟨' },
    { name: 'HTML', icon: '🟧' },
    { name: 'CSS', icon: '🟦' },
  ],
  frameworks: [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Tailwind', icon: '💨' },
  ],
  skills: [
    { name: 'Git', icon: '📚' },
    { name: 'REST APIs', icon: '🔗' },
    { name: 'Responsive Design', icon: '📱' },
  ],
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
          className="text-2xl md:text-3xl font-display font-semibold text-white mb-6"
        >
          About Myself
        </motion.h2>

        {/* About Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
            Hello I'm a software developer! I can help you build a product, feature or website.
            Look through some of my work and experience! If you like what you see and have a
            project you need coded, don't hesitate to contact me.
          </p>
          
          <div className="flex gap-4 mt-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm"
            >
              LET'S CONNECT
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-primary-500/50 hover:border-primary-400 rounded-lg font-medium text-sm text-primary-400 transition-all duration-300"
            >
              Get my resume
            </motion.a>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Languages */}
          <motion.div
            variants={itemVariants}
            className="card-glass p-6"
          >
            <h3 className="text-lg font-display font-semibold text-white mb-4">Languages</h3>
            <ul className="space-y-3">
              {skills.languages.map((skill) => (
                <li key={skill.name} className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="text-lg">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Frameworks */}
          <motion.div
            variants={itemVariants}
            className="card-glass p-6"
          >
            <h3 className="text-lg font-display font-semibold text-white mb-4">Frameworks</h3>
            <ul className="space-y-3">
              {skills.frameworks.map((skill) => (
                <li key={skill.name} className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="text-lg">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={itemVariants}
            className="card-glass p-6"
          >
            <h3 className="text-lg font-display font-semibold text-white mb-4">Skills</h3>
            <ul className="space-y-3">
              {skills.skills.map((skill) => (
                <li key={skill.name} className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="text-lg">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

