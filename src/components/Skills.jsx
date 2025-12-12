import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiReact,
  SiPython,
  SiAmazonaws,
  SiSnowflake,
  SiJavascript,
  SiNodedotjs,
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiMongodb,
  SiR,
  SiApacheairflow,
  SiApachespark,
  SiKubernetes,
  SiApache,
  SiApachekafka,
  SiDatabricks,
  SiJenkins,
  SiOracle,
  SiMysql,
  SiStreamlit,
} from 'react-icons/si'
import { FaDatabase, FaBrain, FaJava, FaCode } from 'react-icons/fa'
import { skills } from '../data/resumeData'

// Icon mapping
const iconMap = {
  SiPython,
  SiR,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTensorflow,
  SiPytorch,
  SiAmazonaws,
  SiSnowflake,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiPostgresql,
  SiMongodb,
  FaDatabase,
  FaBrain,
  SiApacheairflow,
  SiApachespark,
  SiJava: FaJava,
  SiScala: FaCode,
  SiRuby: FaCode,
  SiCsharp: FaCode,
  SiApache,
  SiApachekafka,
  SiDatabricks,
  SiJenkins,
  SiOracle,
  SiMysql,
  SiStreamlit,
  SiGithub,
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // Safety check
  if (!skills || !skills.programming) {
    return (
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Skills data loading...</p>
        </div>
      </section>
    )
  }

  const skillCategories = [
    { name: 'Programming Languages', skills: skills.programming || [] },
    { name: 'Big Data Technologies', skills: skills.bigData || [] },
    { name: 'Cloud & Infrastructure', skills: skills.cloud || [] },
    { name: 'Tools & Databases', skills: skills.tools || [] },
  ]

  // Flatten all skills for the grid view
  const allSkills = [
    ...(skills.programming || []),
    ...(skills.bigData || []),
    ...(skills.cloud || []),
    ...(skills.tools || []),
  ]

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8"
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
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </motion.div>

        {/* Grid Layout for All Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3"
        >
          {allSkills.map((skill, skillIndex) => {
            const Icon = iconMap[skill.icon] || FaBrain
            return (
              <motion.div
                key={skillIndex}
                className="glass-strong rounded-lg p-2 md:p-3 hover:shadow-xl transition-all cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: skillIndex * 0.03,
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-2 bg-primary-500/20 rounded-lg mb-2">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary-500" />
                  </div>
                  <h4 className="font-semibold text-xs text-gray-800 dark:text-gray-200 mb-1.5 leading-tight">
                    {skill.name}
                  </h4>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: `${skill.level}%` }}
                      transition={{
                        duration: 1,
                        delay: skillIndex * 0.03,
                        ease: 'easeOut',
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {skill.level}%
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Technology Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-accent-500">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {[
              SiPython,
              SiR,
              SiJavascript,
              SiReact,
              SiAmazonaws,
              SiSnowflake,
              SiDocker,
              SiKubernetes,
              SiGit,
              SiPostgresql,
              SiMongodb,
              SiApacheairflow,
              SiApachespark,
              SiTensorflow,
              SiPytorch,
              FaBrain,
            ].map((Icon, index) => (
              <motion.div
                key={index}
                className="p-4 glass-strong rounded-xl hover:bg-primary-500/20 transition-all"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + index * 0.05,
                  type: 'spring',
                  stiffness: 200,
                }}
              >
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
