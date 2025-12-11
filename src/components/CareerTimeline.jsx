import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaBriefcase, FaTimes } from 'react-icons/fa'
import { experience } from '../data/resumeData'

const CareerTimeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [openModalIndex, setOpenModalIndex] = useState(null)

  // Debug: Log experience data
  console.log('CareerTimeline - Experience data:', experience?.length || 0)

  // Safety check for experience data
  if (!experience || experience.length === 0) {
    return (
      <section
        id="experience"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Career Path</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">No experience data available.</p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Career Path</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, x: 0 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10 shadow-lg">
                  <FaBriefcase className="w-2 h-2 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <motion.div
                    className="glass-strong rounded-xl p-6 hover:shadow-xl transition-all relative"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Company Logo at Corner */}
                    {exp.logo && (
                      <div className="absolute top-4 right-4">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-primary-500/20 dark:bg-primary-500/30 rounded-xl p-2 flex items-center justify-center shadow-lg border-2 border-primary-500/30">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none'
                            }}
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-3 pr-24 md:pr-28">
                      <h3 className="text-xl font-bold text-primary-500">
                        {exp.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <p className="text-accent-500 font-semibold">
                        {exp.company}
                      </p>
                      {exp.achievements && exp.achievements.length > 0 && (
                        <button
                          onClick={() => setOpenModalIndex(index)}
                          className="text-primary-500 hover:text-primary-600 text-sm font-medium underline transition-colors"
                        >
                          See more
                        </button>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {exp.period} • {exp.location}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Modal */}
      <AnimatePresence>
        {openModalIndex !== null && experience[openModalIndex] && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenModalIndex(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="glass-strong rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {experience[openModalIndex].logo && (
                      <img
                        src={experience[openModalIndex].logo}
                        alt={`${experience[openModalIndex].company} logo`}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-primary-500 mb-1">
                        {experience[openModalIndex].title}
                      </h3>
                      <p className="text-accent-500 font-semibold">
                        {experience[openModalIndex].company}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpenModalIndex(null)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <FaTimes className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
                
                {experience[openModalIndex].achievements && experience[openModalIndex].achievements.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {experience[openModalIndex].achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-primary-500 mt-1">•</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default CareerTimeline

