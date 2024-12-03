import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  const education = [
    {
      degree: "Bachelor's in Computer Science and Information Technology",
      institution: "East-West University",
      location: "Chicago",
      period: "01/2015 - 09/2018"
    },
    {
      degree: "Bachelor in Business Administration",
      institution: "Osmania University",
      location: "Hyderabad",
      period: "07/2012 - 08/2014"
    }
  ]

  return (
    <Card className="mb-8 bg-beige-100 dark:bg-brown-800" id="education">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-brown-900 dark:text-beige-100">Education</CardTitle>
      </CardHeader>
      <CardContent>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold text-brown-800 dark:text-beige-200">{edu.degree}</h3>
            <p className="text-brown-600 dark:text-beige-400">{edu.institution}, {edu.location}</p>
            <p className="text-brown-500 dark:text-beige-300">{edu.period}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

