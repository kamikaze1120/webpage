"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Experience() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)

  const experiences = [
    {
      title: "Business Analyst / System Administrator",
      company: "City of Fort Worth",
      period: "05/2023 - 05/2024",
      responsibilities: [
        "Developed a Video Learning AI using AWS Machine Learning modules, improving processing speed by 50%.",
        "Implemented a file upload feature, reducing submission time by 50% and increasing user engagement by 30%.",
        "Leveraged Generative AI to enhance garbage volume calculations, improving data reliability by 25%.",
        "Collaborated with data scientists to optimize AI models, reducing processing errors by 20%.",
        "Enhanced Workflow Manager platform, increasing process efficiency by 20% and reducing manual errors by 15%.",
        "Conducted business process audits, saving about $100,000 annually.",
        "Leveraged REST APIs for data exchange, improving data retrieval times by 40%."
      ]
    },
    {
      title: "Lead Technology Business System Consultant",
      company: "Wells Fargo",
      period: "10/2021 - 05/2023",
      responsibilities: [
        "Mapped and created efficient workflows for HUD CCDE form, improving regulatory adherence by 30%.",
        "Collaborated with data scientists to align workflows with data analysis needs.",
        "Created and managed Confluence sites with Kanban boards, improving information sharing by 40%.",
        "Utilized JIRA, Confluence, and Aha for Agile project management.",
        "Monitored and groomed Service-Now Agile sprint backlogs, improving sprint readiness by 25%.",
        "Acted as a liaison between LOB's, ensuring effective communication of critical updates."
      ]
    },
    {
      title: "Sr. Business Analyst",
      company: "Mitel",
      period: "03/2021 - 10/2021",
      responsibilities: [
        "Implemented SAFe methodologies, reducing project delivery time by 30%.",
        "Performed gap analysis and collaborated with data scientists to enhance system functionality.",
        "Created and maintained vital project documentation, ensuring 100% match with stakeholder requirements.",
        "Designed critical documentation including BRDs, IAs, and HLDs.",
        "Utilized JIRA for defect tracking and reporting."
      ]
    },
    {
      title: "Sr. Business Data Analyst",
      company: "British Telecom",
      period: "09/2019 - 02/2021",
      responsibilities: [
        "Led data-driven solutions that improved operational efficiency by 35%.",
        "Maintained detailed project documentation, ensuring 100% compliance during audits.",
        "Conducted UAT with data scientists, reducing post-deployment defects by 25%.",
        "Facilitated workshops to gather requirements, integrating insights from data scientists.",
        "Created training materials based on data scientists' insights, improving user adoption rates by 30%."
      ]
    }
  ]

  return (
    <Card className="mb-8 bg-beige-100 dark:bg-brown-800" id="experience">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-brown-900 dark:text-beige-100">Experience</CardTitle>
      </CardHeader>
      <CardContent>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-brown-800 dark:text-beige-200">{exp.title}</h3>
                <p className="text-brown-600 dark:text-beige-400">{exp.company} | {exp.period}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                className="text-brown-600 hover:text-brown-800 dark:text-beige-400 dark:hover:text-beige-200"
              >
                {expandedJob === index ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </div>
            {expandedJob === index && (
              <ul className="list-disc list-inside mt-2 text-brown-700 dark:text-beige-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

