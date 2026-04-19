"use client"
import { useEffect } from 'react'
import Image from 'next/image'

export default function ImageLightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl hover:text-cyan-400 transition z-10"
        aria-label="Close"
      >
        ×
      </button>
      
      <div 
        className="relative max-w-7xl max-h-[90vh] w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="100vw"
          quality={100}
        />
      </div>
      
      <div className="absolute bottom-4 text-center text-white/60 text-sm">
        Click anywhere or press ESC to close
      </div>
    </div>
  )
}
