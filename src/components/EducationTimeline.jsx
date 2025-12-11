import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { education } from '../data/resumeData'

const EducationTimeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 via-primary-500 to-accent-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10 shadow-lg">
                  <FaGraduationCap className="w-2 h-2 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
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
                    {/* University Logo at Corner */}
                    {edu.logo && (
                      <div className="absolute top-4 right-4">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-accent-500/20 dark:bg-accent-500/30 rounded-xl p-2 flex items-center justify-center shadow-lg border-2 border-accent-500/30">
                          <img
                            src={edu.logo}
                            alt={`${edu.institution} logo`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none'
                            }}
                          />
                        </div>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-accent-500 mb-2 pr-24 md:pr-28">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-500 font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {edu.period} • {edu.location}
                    </p>
                    {edu.gpa && (
                      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">
                        GPA: {edu.gpa}
                      </p>
                    )}
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {edu.description}
                    </p>
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <p
                            key={achIndex}
                            className="text-sm text-gray-600 dark:text-gray-400"
                          >
                            • {achievement}
                          </p>
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
    </section>
  )
}

export default EducationTimeline

