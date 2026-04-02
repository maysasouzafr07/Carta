'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Sun, Moon } from 'lucide-react'

export default function Home() {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const handleClick = () => {
        setOpen(true)

        setTimeout(() => {
            router.push('/Carta')
        }, 800)
    }

    return (
        <div className="flex items-center justify-center h-screen bg-amber-200">

            {/* 👇 adicionamos perspective aqui */}
            <div
                className="relative w-[420px] h-[260px]"
                style={{ perspective: '1000px' }}
            >

                {/* Envelope base */}
                <div className="absolute inset-0 bg-amber-100 rounded-sm shadow-lg"></div>

                {/* Abas laterais */}
                <div
                    className="absolute inset-0 bg-red-800"
                    style={{ clipPath: 'polygon(0 0, 50% 50%, 0 100%)' }}
                />
                <div
                    className="absolute inset-0 bg-red-800"
                    style={{ clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)' }}
                />

                {/* 👇 ABA CORRIGIDA (abre de verdade) */}
                <div
                    className="absolute inset-0 bg-amber-100 transition-all duration-700"
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 50% 50%)',
                        transformOrigin: 'top',
                        transform: open ? 'rotateX(180deg)' : 'rotateX(0deg)',
                        transformStyle: 'preserve-3d'
                    }}
                />

                {/* Selo */}
                {!open && (
                    <div
                        onClick={handleClick}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full shadow-xl flex items-center justify-center cursor-pointer hover:scale-110 transition"
                        style={{
                            background: 'radial-gradient(circle at 30% 30%, #fff4b0, #d4a017, #8c6b00)',
                            boxShadow: '0 0 15px rgba(212,160,23,0.8), inset 0 0 10px rgba(255,255,255,0.6)'
                        }}
                    >
                        <div className="flex gap-1 text-red-900">
                              <Moon size={18} />
                            <Sun size={18} />
                          
                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}