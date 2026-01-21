import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-6">
            Contact
          </h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xl mx-auto"
          >
            I'm currently looking to join a{' '}
            <span className="text-primary-400">cross-functional</span> team that values
            improving people's lives through accessible design.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-500 text-xs mb-8"
          >
            or if you have a question or just want to say hi, I'll try my best to get
            back to you!
          </motion.p>

          {/* Email */}
          <motion.a
            href="mailto:alfredbis29@outlook.com"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block text-primary-400 hover:text-primary-300 transition-colors mb-8"
          >
            <span className="text-sm">📧 alfredbis29@outlook.com</span>
          </motion.a>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            {[
              { icon: '🐦', href: '#', label: 'Twitter' },
              { icon: '💼', href: '#', label: 'LinkedIn' },
              { icon: '📸', href: '#', label: 'Instagram' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -3 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index + 0.6 }}
                className="w-10 h-10 rounded-full bg-dark-700/50 flex items-center justify-center hover:bg-primary-600/30 transition-colors"
                aria-label={social.label}
              >
                <span className="text-lg">{social.icon}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 pt-8 border-t border-dark-700/50 text-center"
        >
          <p className="text-gray-600 text-xs">
            Designed & Built by{' '}
            <span className="text-primary-400">Alfred Bis</span>
          </p>
          <p className="text-gray-700 text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;

