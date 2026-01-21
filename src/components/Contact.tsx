import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-8">
            Contact me
          </h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl"
          >
            If you have an application you are interested in developing, a feature that you need
            built or a project that needs coding. I'd love to help with it.
          </motion.p>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-gray-400 text-base md:text-lg mb-3 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-dark-700/50 border border-dark-500/50 rounded-xl text-white text-base md:text-lg focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-gray-400 text-base md:text-lg mb-3 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-dark-700/50 border border-dark-500/50 rounded-xl text-white text-base md:text-lg focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-gray-400 text-base md:text-lg mb-3 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={8}
                className="w-full px-6 py-4 bg-dark-700/50 border border-dark-500/50 rounded-xl text-white text-base md:text-lg focus:outline-none focus:border-primary-500 transition-colors resize-none"
                placeholder="Your message..."
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto px-12 py-5 bg-primary-600 hover:bg-primary-500 rounded-xl font-medium text-lg md:text-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Get In Touch
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-24 pt-12 border-t border-dark-700/50 text-center"
        >
          <p className="text-gray-600 text-sm md:text-base">
            Designed & Built by{' '}
            <span className="text-primary-400">Alfred Bis</span>
          </p>
          <p className="text-gray-700 text-sm md:text-base mt-3">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
