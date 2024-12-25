import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ExpertInsightProps {
  name: string
  credentials: string
  insight: string
}

export function ExpertInsight({ name, credentials, insight }: ExpertInsightProps) {
  return (
    <Card className="bg-blue-50 border-blue-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        <p className="text-sm text-gray-600">{credentials}</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-800 italic">&ldquo;{insight}&rdquo;</p>
      </CardContent>
    </Card>
  )
}
