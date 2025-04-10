import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}