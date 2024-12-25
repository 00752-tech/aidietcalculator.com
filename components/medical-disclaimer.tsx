import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from 'lucide-react'

export function MedicalDisclaimer() {
  return (
    <Alert variant="warning" className="mt-8">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Medical Disclaimer</AlertTitle>
      <AlertDescription>
        The AI Diet Planner is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or dietary changes. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
      </AlertDescription>
    </Alert>
  )
}
