import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface UserTestimonialProps {
  name: string
  age: number
  testimonial: string
}

export function UserTestimonial({ name, age, testimonial }: UserTestimonialProps) {
  return (
    <Card className="bg-green-50 border-green-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{name}, {age}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-800">&ldquo;{testimonial}&rdquo;</p>
      </CardContent>
    </Card>
  )
}
