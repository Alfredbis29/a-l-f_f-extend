import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    // Listen for Hero glow events from AnimatedBackground
    const handleHeroGlow = (event: Event) => {
      const customEvent = event as CustomEvent<{ intensity: number }>;
      setGlowIntensity(customEvent.detail.intensity);
    };

    window.addEventListener('heroGlow', handleHeroGlow as EventListener);

    return () => {
      window.removeEventListener('heroGlow', handleHeroGlow as EventListener);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 relative">
      {/* Glow effect that reacts to squares */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, rgba(139, 92, 246, ${glowIntensity * 0.1}), transparent 70%)`,
          opacity: glowIntensity,
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Section with Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-12 relative"
          style={{
            filter: `drop-shadow(0 0 ${10 + glowIntensity * 20}px rgba(255, 255, 255, ${glowIntensity * 0.3}))`,
          }}
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            className="relative mb-6"
          >
            <div className="w-36 h-36 rounded-full border-2 border-gray-700/50 p-0.5">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                <img 
                  src="/images/profile.png" 
                  alt="Alfred Bis" 
                  className="w-full h-full object-cover object-top scale-90"
                />
              </div>
            </div>
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-dark-900" />
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
              Where visuals meet architecture
            </h2>
            <h2 className="text-2xl md:text-3xl font-display font-semibold">
              — I build the <span className="text-gradient">full experience.</span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            I'm Alfred<span className="text-primary-400">!</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Glad to see you!
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            I'm Alfred Bis a software developer! I can help you build a product, feature or website. 
            Look through some of my work and experience! If you like what you see and have a project 
            you need coded, don't hesitate to contact me.
          </p>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="mt-8 flex justify-center gap-4"
          >
            {[
              { 
                name: 'GitHub', 
                href: 'https://github.com/Alfredbis29', 
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                )
              },
              { 
                name: 'AngelList', 
                href: 'https://angel.co/u/alfred-bis', 
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.5 0h-15A4.5 4.5 0 0 0 0 4.5v15A4.5 4.5 0 0 0 4.5 24h15a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 19.5 0zm-8.25 18.75H6.75V9.75h4.5v9zm-2.25-10.5a2.25 2.25 0 1 1 2.25-2.25 2.25 2.25 0 0 1-2.25 2.25zm10.5 10.5h-4.5v-4.5c0-1.5-.75-2.25-2.25-2.25s-2.25.75-2.25 2.25v4.5H7.5V9.75h4.5v1.5c.75-1.5 2.25-2.25 4.5-2.25 3 0 4.5 2.25 4.5 5.25v4.5z"/>
                  </svg>
                )
              },
              { 
                name: 'LinkedIn', 
                href: 'https://www.linkedin.com/in/alfred-bis', 
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )
              },
              { 
                name: 'Medium', 
                href: 'https://medium.com/@alfredbis29', 
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.54 12l5.23-5.23a1.5 1.5 0 0 0 0-2.12L13.54 12zm-1.41 0L2.7 1.65a1.5 1.5 0 0 0-2.12 0L0 2.23l10.13 10.13L0 22.49l.58.58a1.5 1.5 0 0 0 2.12 0L12.13 12zm1.41 0l5.23 5.23a1.5 1.5 0 0 0 2.12 0L24 12l-5.23-5.23a1.5 1.5 0 0 0-2.12 0L12.13 12z"/>
                  </svg>
                )
              },
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-dark-700/50 hover:bg-primary-600/30 flex items-center justify-center text-gray-400 hover:text-primary-400 transition-all duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
