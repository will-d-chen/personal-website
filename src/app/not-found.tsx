import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-bold mb-4 text-amber-200">404</h1>
      <h2 className="text-2xl font-semibold mb-6 text-amber-100">Page Not Found</h2>
      <p className="text-lg text-amber-100/70 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-amber-600 text-white font-medium rounded-xl hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition duration-200"
      >
        Return Home
      </Link>
    </div>
  )
}