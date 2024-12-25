import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Blog Post Not Found</h2>
        <p className="text-gray-600 mb-6">Could not find the requested blog post.</p>
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Return to Blog
        </Link>
      </div>
    </div>
  )
}
