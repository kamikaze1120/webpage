"use client"

import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"

export default function Skills() {
  const skills = [
    { name: "SDLC", category: "Process" },
    { name: "Dev-ops Methodology", category: "Process" },
    { name: "Project Management", category: "Management" },
    { name: "Data Analysis", category: "Technical" },
    { name: "Business Process Improvement", category: "Process" },
    { name: "Vendor Management", category: "Management" },
    { name: "Team Leadership", category: "Management" },
    { name: "SQL", category: "Technical" },
    { name: "Python", category: "Technical" },
    { name: "Tableau", category: "Technical" },
    { name: "Power BI", category: "Technical" },
    { name: "JIRA", category: "Tools" },
    { name: "Scaled Agile Framework", category: "Process" },
    { name: "Ivanti ISM", category: "Tools" },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-4 h-full hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900">
                <h3 className="font-semibold mb-1">{skill.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{skill.category}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

