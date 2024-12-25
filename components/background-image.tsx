export function BackgroundImage() {
  return (
    <div 
      className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat opacity-15"
      style={{
        backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
      }}
    />
  )
}
