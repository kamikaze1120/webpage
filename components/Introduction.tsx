"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function Introduction() {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card className="mb-8 bg-beige-100 dark:bg-brown-800">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-brown-900 dark:text-beige-100">Mujtaba Hussain Mohammed</CardTitle>
        <CardDescription className="text-brown-700 dark:text-beige-300">Sr. Business Analyst</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-brown-800 dark:text-beige-200">
          Highly experienced Business Data Analyst with over 10 years in various domains, including Governmental, Banking, Telecom, Broadcasting, and Media. 
          {expanded ? (
            <>
              Proven expertise in business requirement gathering, process modeling, and system administration. Strong analytical skills with a passion for building data-driven solutions from scratch. Proficient in using SQL, Python, and data visualization tools like Tableau and Power BI to create actionable insights and drive process improvements. Certified Scaled Agile Practitioner with a solid track record of working in Agile environments and leading projects.
            </>
          ) : null}
        </p>
        <Button 
          variant="link" 
          onClick={() => setExpanded(!expanded)} 
          className="mt-2 text-brown-600 dark:text-beige-400"
        >
          {expanded ? 'Read less' : 'Read more'} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

