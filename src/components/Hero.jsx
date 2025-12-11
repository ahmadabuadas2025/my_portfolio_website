import { motion } from 'framer-motion'
import { FaArrowDown, FaLinkedin, FaGithub } from 'react-icons/fa'
import {
  SiPython,
  SiAmazonaws,
  SiSnowflake,
  SiApachespark,
  SiDocker,
  SiKubernetes,
  SiApacheairflow,
  SiPostgresql,
  SiMongodb,
  SiTensorflow,
  SiPytorch,
  SiGit,
} from 'react-icons/si'
import { personalInfo, socialLinks } from '../data/resumeData'

// Top technologies to display
const techIcons = [
  { Icon: SiPython, name: 'Python', delay: 0 },
  { Icon: SiAmazonaws, name: 'AWS', delay: 0.5 },
  { Icon: SiSnowflake, name: 'Snowflake', delay: 1 },
  { Icon: SiApachespark, name: 'Spark', delay: 1.5 },
  { Icon: SiDocker, name: 'Docker', delay: 2 },
  { Icon: SiKubernetes, name: 'Kubernetes', delay: 2.5 },
  { Icon: SiApacheairflow, name: 'Airflow', delay: 3 },
  { Icon: SiPostgresql, name: 'PostgreSQL', delay: 3.5 },
  { Icon: SiMongodb, name: 'MongoDB', delay: 4 },
  { Icon: SiTensorflow, name: 'TensorFlow', delay: 4.5 },
  { Icon: SiPytorch, name: 'PyTorch', delay: 5 },
  { Icon: SiGit, name: 'Git', delay: 5.5 },
]

// Positions for floating icons
const iconPositions = [
  { top: '10%', left: '5%' },
  { top: '15%', right: '8%' },
  { top: '25%', left: '3%' },
  { top: '30%', right: '12%' },
  { top: '45%', left: '7%' },
  { top: '50%', right: '5%' },
  { top: '65%', left: '10%' },
  { top: '70%', right: '8%' },
  { top: '80%', left: '4%' },
  { top: '85%', right: '10%' },
  { top: '20%', left: '15%' },
  { top: '60%', right: '15%' },
]

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-primary-500/20 dark:from-primary-900/30 dark:via-accent-900/30 dark:to-primary-900/30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      </div>

      {/* Floating Technology Icons */}
      {techIcons.map((tech, index) => {
        const position = iconPositions[index % iconPositions.length]
        const duration = 8 + Math.random() * 4 // Random duration between 8-12 seconds
        const delay = tech.delay + Math.random() * 2
        
        return (
          <motion.div
            key={tech.name}
            className="absolute z-0"
            style={{
              ...position,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
              y: [
                0,
                -30 + Math.random() * 60,
                -20 + Math.random() * 40,
                0,
              ],
              x: [
                0,
                20 + Math.random() * 40,
                -20 + Math.random() * 40,
                0,
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: delay,
            }}
          >
            <div className="p-3 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl border border-primary-500/20 shadow-lg hover:shadow-xl transition-all">
              <tech.Icon className="w-8 h-8 md:w-10 md:h-10 text-primary-500" />
            </div>
          </motion.div>
        )
      })}

      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl z-0"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-accent-500/20 rounded-full blur-xl z-0"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-400/20 rounded-full blur-lg z-0"
        animate={{
          y: [0, -15, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          {/* Profile Photo */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex justify-center"
          >
            <motion.div
              className="relative w-52 h-52 md:w-64 md:h-64 rounded-full glass-strong border-4 border-primary-500/50 overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent"></div>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-6"
          >
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              {socialLinks.linkedin && (
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-strong rounded-full hover:bg-primary-500/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6 text-primary-500" />
                </motion.a>
              )}
              {socialLinks.github && (
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-strong rounded-full hover:bg-primary-500/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub"
                >
                  <FaGithub className="w-6 h-6 text-primary-500" />
                </motion.a>
              )}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <motion.a
              href="#about"
              className="inline-block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaArrowDown className="w-6 h-6 text-primary-500" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
