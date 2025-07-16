"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

interface Heart {
    id: number
    left: number
    duration: number
    size: number
    delay: number
}

const FallingHearts: React.FC = () => {
    const [hearts, setHearts] = useState<Heart[]>([])
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const createHeart = () => {
            if (!containerRef.current) return

            const containerWidth = containerRef.current.offsetWidth
            const newHeart: Heart = {
                id: Date.now() + Math.random(),
                left: Math.random() * (containerWidth - 30), // Adjust for heart size
                duration: Math.random() * 5 + 5, // 5-10 seconds
                size: Math.random() * 20 + 10, // 10-30px
                delay: Math.random() * 2, // 0-2 seconds of delay
            }
            setHearts((prevHearts) => [...prevHearts, newHeart])

            // Remove the heart after its animation ends
            setTimeout(
                () => {
                    setHearts((prevHearts) => prevHearts.filter((heart) => heart.id !== newHeart.id))
                },
                (newHeart.duration + newHeart.delay) * 1000,
            )
        }

        const interval = setInterval(createHeart, 500) // Create a heart every 0.5 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-50" aria-hidden="true">
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="absolute text-custom-pink animate-fall"
                    style={{
                        left: `${heart.left}px`,
                        fontSize: `${heart.size}px`,
                        animationDuration: `${heart.duration}s`,
                        animationDelay: `${heart.delay}s`,
                        top: "-30px", // Start above the viewport
                    }}
                >
                    {"❤️"} {/* Heart emoji */}
                </div>
            ))}
            <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
        }
      `}</style>
        </div>
    )
}

export default FallingHearts
