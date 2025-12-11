import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo } from '../data/resumeData'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id="about"
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
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-strong rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            {personalInfo.summary}
          </p>
          <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            I specialize in building scalable data infrastructure, optimizing data warehouses, 
            and implementing machine learning solutions that drive business value. My expertise spans 
            across cloud platforms, data engineering tools, data science methodologies, and modern software development practices.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            With a strong foundation in data science, I apply statistical analysis, predictive modeling, 
            and advanced analytics to solve complex business challenges. I leverage data science techniques 
            to extract meaningful insights, build robust ML models, and create data-driven solutions that 
            enhance decision-making processes.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            When I'm not coding, I enjoy contributing to open-source projects, writing technical 
            blogs, and staying updated with the latest trends in data engineering, data science, and AI.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

