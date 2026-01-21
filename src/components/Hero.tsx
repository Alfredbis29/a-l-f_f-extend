import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section with Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-12"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            className="relative mb-6"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1">
              <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center overflow-hidden">
                {/* Memoji-style avatar */}
                <div className="text-5xl">👨‍💻</div>
              </div>
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-dark-900"
            />
          </motion.div>

          {/* Hello Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-sm mb-2"
          >
            Hello Sir, <span className="text-primary-400">Hello, World</span>
          </motion.p>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-white mb-2">
              Judges a book
            </h2>
            <h2 className="text-2xl md:text-3xl font-display font-semibold">
              by its <span className="text-gradient">COVER...</span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Software Engineer Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            I'm a Software Engineer<span className="text-primary-400">!</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Currently, I'm a Software Engineer at{' '}
            <span className="text-primary-400">@ Facebook</span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-gray-500 text-sm leading-relaxed mb-2">
            A self-taught UI/UX designer, functioning in the industry for 3+ years now.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            I make meaningful and delightful digital products that create an equilibrium
            between user needs and business goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

