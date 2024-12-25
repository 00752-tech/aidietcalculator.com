import { type LucideIcon } from 'lucide-react'

interface ToolSectionHeaderProps {
  title: string
  icon: LucideIcon
}

export function ToolSectionHeader({ title, icon: Icon }: ToolSectionHeaderProps) {
  return (
    <div className="flex items-center space-x-2 py-6 border-t border-b border-gray-200 my-8">
      <Icon className="w-8 h-8 text-primary" />
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  )
}
