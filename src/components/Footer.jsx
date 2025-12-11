import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import { personalInfo, socialLinks } from '../data/resumeData'

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> by {personalInfo.name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-500 transition-colors"
              >
                LinkedIn
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-500 transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

