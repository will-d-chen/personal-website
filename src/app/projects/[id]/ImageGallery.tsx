"use client"

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : (prev ?? 0) - 1))
  }, [selectedIndex, images.length])

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : (prev ?? 0) + 1))
  }, [selectedIndex, images.length])

  const handleClose = useCallback(() => {
    setSelectedIndex(null)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      } else if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedIndex, handleClose, handlePrev, handleNext])

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedIndex])

  if (!images || images.length === 0) return null

  return (
    <div className="mt-12 border-t border-white/10 pt-8">
      <h3 className="text-xl font-bold text-amber-200 mb-6 font-sans">Project Gallery</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((img, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedIndex(index)}
            className="flex flex-col bg-white/5 rounded-2xl overflow-hidden border border-white/10 group hover:border-amber-500/20 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 cursor-pointer"
          >
            <div className="relative h-56 sm:h-64 w-full overflow-hidden">
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                priority={index < 4}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-custom-brown/40 backdrop-blur-sm border-t border-white/5 flex-grow flex items-center justify-center">
              <p className="text-amber-100/90 text-sm italic text-center font-sans">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 select-none">
          {/* Background click to close */}
          <div className="absolute inset-0 cursor-default" onClick={handleClose} />

          {/* Close button */}
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full z-50"
            aria-label="Close preview"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Nav buttons (only if more than 1 image) */}
          {images.length > 1 && (
            <>
              <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 bg-white/10 hover:bg-white/20 rounded-full z-50"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 bg-white/10 hover:bg-white/20 rounded-full z-50"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image Container */}
          <div className="relative w-full max-w-5xl h-[75vh] flex flex-col items-center justify-center z-40">
            <div className="relative w-full h-[65vh]">
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                className="object-contain transition-all duration-300"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
            
            {/* Caption */}
            <div className="mt-4 max-w-3xl text-center px-4">
              <p className="text-amber-200 text-lg font-sans italic">{images[selectedIndex].caption}</p>
              {images.length > 1 && (
                <p className="text-white/40 text-xs mt-1.5 font-sans">
                  {selectedIndex + 1} of {images.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
