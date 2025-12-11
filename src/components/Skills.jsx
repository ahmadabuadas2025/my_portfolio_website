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
  SiPostgresql,
  SiMongodb,
  SiR,
  SiApacheairflow,
  SiApachespark,
  SiKubernetes,
  SiApache,
  SiApachekafka,
  SiDatabricks,
  SiGooglecloud,
  SiJenkins,
  SiOracle,
  SiMysql,
  SiTableau,
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
  SiJava: FaJava, // Using FaJava as fallback
  SiScala: FaCode, // Using FaCode as fallback for Scala
  SiRuby: FaCode, // Using FaCode as fallback for Ruby
  SiCsharp: FaCode, // Using FaCode as fallback for C#
  SiApache,
  SiApachekafka,
  SiDatabricks,
  SiGooglecloud,
  SiJenkins,
  SiOracle,
  SiMysql,
  SiTableau,
  SiStreamlit,
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    { name: 'Programming Languages', skills: skills.programming },
    { name: 'Big Data Technologies', skills: skills.bigData },
    { name: 'Cloud & Infrastructure', skills: skills.cloud },
    { name: 'Tools & Databases', skills: skills.tools },
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-primary-500">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = iconMap[skill.icon] || FaBrain
                  return (
                    <motion.div
                      key={skillIndex}
                      className="glass-strong rounded-xl p-6 hover:shadow-xl transition-all"
                      whileHover={{ scale: 1.05, y: -5 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary-500/20 rounded-lg">
                          <Icon className="w-8 h-8 text-primary-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </h4>
                          <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={
                                isInView ? { width: `${skill.level}%` } : {}
                              }
                              transition={{
                                duration: 1,
                                delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                ease: 'easeOut',
                              }}
                            />
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {skill.level}%
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Icon Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-accent-500">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
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
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + index * 0.05,
                  type: 'spring',
                  stiffness: 200,
                }}
              >
                <Icon className="w-12 h-12 text-primary-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
