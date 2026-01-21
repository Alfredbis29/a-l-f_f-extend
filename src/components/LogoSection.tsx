import { motion } from 'framer-motion';

const LogoSection = () => {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          {/* Glow Effect Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-500/30 via-primary-600/20 to-transparent blur-3xl scale-150" />
          
          {/* Platform Base */}
          <motion.div
            animate={{ 
              rotateX: [0, 5, 0],
              rotateY: [0, 5, 0],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
            className="relative"
            style={{ perspective: '1000px' }}
          >
            {/* 3D Platform */}
            <div className="relative w-64 h-40">
              {/* Top Surface */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-8 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 rounded-full"
                style={{
                  transform: 'rotateX(70deg) translateZ(20px)',
                  boxShadow: '0 0 60px rgba(139, 92, 246, 0.6)',
                }}
              />
              
              {/* Platform Ring */}
              <div 
                className="absolute bottom-2 left-1/2 -translate-x-1/2 w-64 h-3"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.5) 20%, rgba(139, 92, 246, 0.8) 50%, rgba(139, 92, 246, 0.5) 80%, transparent 100%)',
                  borderRadius: '50%',
                  transform: 'rotateX(70deg)',
                }}
              />
              
              {/* Inner Glow Ring */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-2"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(168, 85, 247, 0.8) 50%, transparent 100%)',
                  borderRadius: '50%',
                  transform: 'rotateX(70deg)',
                  filter: 'blur(2px)',
                }}
              />

              {/* Center Logo */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/50">
                  <span className="text-white font-bold text-3xl font-display">A</span>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 h-40"
              >
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-primary-400/50 rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${i * 60}deg) translateX(70px)`,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Side Decorations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute -left-20 bottom-0 opacity-30"
          >
            <div className="w-16 h-16 border border-primary-500/30 rounded-lg transform -rotate-12" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute -right-20 bottom-0 opacity-30"
          >
            <div className="w-16 h-16 border border-primary-500/30 rounded-lg transform rotate-12" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoSection;

