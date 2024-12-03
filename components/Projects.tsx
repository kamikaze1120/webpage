"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0)

  const projects = [
    {
      title: "Video Learning AI",
      description: "Developed an AI system using AWS Machine Learning modules to analyze garbage volume from video data, improving processing speed by 50% and enhancing city planning capabilities.",
      impact: "Streamlined waste management processes and improved resource allocation for the City of Fort Worth."
    },
    {
      title: "HUD CCDE Workflow Optimization",
      description: "Mapped and created efficient workflows for the HUD CCDE form, collaborating with credit bureaus and underwriters to ensure accurate and compliant data processing.",
      impact: "Improved regulatory adherence by 30% and enhanced data integrity in the mortgage underwriting process at Wells Fargo."
    },
    {
      title: "Agile Transformation Initiative",
      description: "Implemented SAFe methodologies across multiple Agile Release Trains, leading to a 30% reduction in project delivery time and enhanced team collaboration.",
      impact: "Significantly improved project management efficiency and stakeholder satisfaction at Mitel."
    }
  ]

  return (
    <Card className="mb-8 bg-brown-100 dark:bg-beige-800" id="projects">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-brown-900 dark:text-beige-100">Key Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex mb-4">
          {projects.map((project, index) => (
            <Button
              key={index}
              variant={selectedProject === index ? "default" : "outline"}
              onClick={() => setSelectedProject(index)}
              className="mr-2"
            >
              {project.title}
            </Button>
          ))}
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-brown-800 dark:text-beige-200">{projects[selectedProject].title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-brown-700 dark:text-beige-300">{projects[selectedProject].description}</CardDescription>
            <p className="mt-2 font-semibold text-brown-800 dark:text-beige-200">Impact: {projects[selectedProject].impact}</p>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}

