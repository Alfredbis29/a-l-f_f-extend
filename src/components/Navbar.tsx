import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl font-display">A</span>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {['Home', 'About', 'Let'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ color: '#a855f7' }}
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

