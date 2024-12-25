export function CopyrightNotice() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="mt-8 text-center text-sm text-foreground">
      <p>© {currentYear} AIDietCalculator.com All rights reserved.</p>
    </footer>
  )
}
