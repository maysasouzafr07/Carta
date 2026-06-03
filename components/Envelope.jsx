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
        }, 1500)
    }

    return (
        <div className="flex items-center justify-center h-screen bg-neutral-900 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-neutral-950">
            
            <div
                className="relative w-[450px] h-[280px]"
                style={{ perspective: '1500px' }}
            >
                {/* 1. Fundo/Interior do Envelope */}
                <div className={`absolute inset-0 bg-red-950 rounded-md shadow-2xl overflow-hidden border border-red-900/50 transition-opacity duration-1000 ${open ? 'opacity-10' : 'opacity-100'}`}>
                    <div className="absolute inset-0 shadow-[inset_0_20px_30px_rgba(0,0,0,0.8)]"></div>
                </div>

                {/* 2. A Carta */}
                <div 
                    className={`absolute left-6 right-6 bg-[#fcf5e3] rounded-sm transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col items-center pt-8 border border-[#e2d5b8] shadow-[0_0_15px_rgba(0,0,0,0.3)]
                    ${open ? '-top-20 h-[320px] z-20 rotate-1' : 'top-4 h-[260px] z-10 rotate-0'}`}
                >
                    <div className="w-full px-8 flex flex-col gap-4 opacity-60">
                        <div className="h-4 w-1/3 bg-[#d1c4a9] rounded-sm mb-4"></div>
                        <div className="h-3 w-full bg-[#d1c4a9] rounded-sm"></div>
                        <div className="h-3 w-5/6 bg-[#d1c4a9] rounded-sm"></div>
                        <div className="h-3 w-full bg-[#d1c4a9] rounded-sm"></div>
                        <div className="h-3 w-4/5 bg-[#d1c4a9] rounded-sm"></div>
                    </div>
                </div>

                {/* 3. Aba Lateral Esquerda */}
                <div
                    className={`absolute inset-0 z-30 transition-opacity duration-1000 ${open ? 'opacity-10' : 'opacity-100'}`}
                    style={{ 
                        clipPath: 'polygon(0 0, 55% 50%, 0 100%)',
                        filter: 'drop-shadow(3px 0px 4px rgba(0,0,0,0.4))'
                    }}
                >
                    <div className="w-full h-full bg-gradient-to-br from-red-800 to-red-900 border-r border-red-700/30"></div>
                </div>

                {/* 4. Aba Lateral Direita */}
                <div
                    className={`absolute inset-0 z-30 transition-opacity duration-1000 ${open ? 'opacity-10' : 'opacity-100'}`}
                    style={{ 
                        clipPath: 'polygon(100% 0, 45% 50%, 100% 100%)',
                        filter: 'drop-shadow(-3px 0px 4px rgba(0,0,0,0.4))'
                    }}
                >
                    <div className="w-full h-full bg-gradient-to-bl from-red-800 to-red-900 border-l border-red-700/30"></div>
                </div>

                {/* 5. Aba Inferior */}
                <div
                    className={`absolute inset-0 z-30 transition-opacity duration-1000 ${open ? 'opacity-10' : 'opacity-100'}`}
                    style={{ 
                        clipPath: 'polygon(0 100%, 50% 45%, 100% 100%)',
                        filter: 'drop-shadow(0px -4px 6px rgba(0,0,0,0.5))'
                    }}
                >
                    <div className="w-full h-full bg-gradient-to-t from-red-950 to-red-800 border-t border-red-700/30"></div>
                </div>

                {/* 6. Aba Superior (CORRIGIDA: Rotação suave em 145° e transição suave) */}
                <div
                    className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${open ? 'z-10' : 'z-40'}`}
                    style={{
                        transformOrigin: 'top',
                        transform: open ? 'rotateX(145deg)' : 'rotateX(0deg)',
                        transformStyle: 'preserve-3d',
                        filter: open ? 'none' : 'drop-shadow(0px 5px 10px rgba(0,0,0,0.6))'
                    }}
                >
                    {/* Frente da Aba (Exterior) */}
                    <div 
                        className="absolute inset-0 bg-gradient-to-b from-red-700 to-red-900 border-b border-red-600/30"
                        style={{ 
                            clipPath: 'polygon(0 0, 100% 0, 50% 55%)',
                            backfaceVisibility: 'hidden',
                        }}
                    />
                    {/* Verso da Aba (Interior) */}
                    <div 
                        className="absolute inset-0 bg-red-950"
                        style={{ 
                            clipPath: 'polygon(0 0, 100% 0, 50% 55%)',
                            backfaceVisibility: 'hidden',
                            transform: 'rotateX(180deg)'
                        }}
                    >
                        <div className="w-full h-full shadow-[inset_0_10px_20px_rgba(0,0,0,0.8)]"></div>
                    </div>
                </div>

                {/* 7. Selo de Cera 3D */}
                <div
                    onClick={handleClick}
                    className={`absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 z-50 
                    ${open ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 hover:scale-110'}`}
                    style={{
                        background: 'radial-gradient(circle at 30% 30%, #ffd700, #daa520, #8b6508)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.6), inset 0 3px 8px rgba(255,255,255,0.7), inset 0 -4px 10px rgba(100,70,0,0.9)',
                        border: '2px solid rgba(218, 165, 32, 0.5)'
                    }}
                >
                    <div className="absolute inset-2 rounded-full border border-yellow-700/40 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] pointer-events-none"></div>
                    
                    <div className="flex gap-1.5 text-[#523b03] drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)] z-10">
                        <Moon size={22} strokeWidth={2.5} />
                        <Sun size={22} strokeWidth={2.5} />
                    </div>
                </div>

            </div>
        </div>
    )
}