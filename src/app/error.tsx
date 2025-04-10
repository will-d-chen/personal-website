'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
      <p className="text-lg mb-6">
        An error occurred. Please try again later or contact support if the problem persists.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-6 py-3 rounded-md bg-gray-600 text-white hover:bg-gray-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 