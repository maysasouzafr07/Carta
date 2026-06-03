'use client'
import { useRouter } from 'next/navigation'

export default function Carta() {
    const router = useRouter()

    return (
        /* Fundo escuro atualizado para manter a mesma identidade do envelope */
        <div className="flex items-center justify-center h-screen bg-neutral-900 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-neutral-950">
            
            {/* Carta combinando com o papel marfim do componente anterior */}
            <div className="w-[500px] h-[600px] bg-[#fcf5e3] shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-12 border border-[#e2d5b8] flex flex-col justify-between rounded-sm">
                
                <div className="mt-8">
                    <h1 className="text-3xl font-serif mb-8 text-center text-red-950">
                        Convite Especial
                    </h1>

                    <p className="text-[#523b03] leading-relaxed text-center text-lg px-4">
                        Você está convidado(a) para um momento inesquecível ✨  
                        <br /><br />
                        Será uma honra ter sua presença nesse dia tão especial 💖
                    </p>
                </div>

                {/* 👇 CONTAINER DOS BOTÕES */}
                <div className="flex flex-col gap-3">
                    
                    {/* Botão Principal */}
                    <button
                        onClick={() => router.push('/Flor')}
                        className="w-full bg-gradient-to-r from-red-800 to-red-900 text-[#fcf5e3] py-3 px-4 rounded-sm hover:from-red-900 hover:to-red-950 transition-all shadow-md font-medium text-lg border border-red-700/50"
                    >
                        Continuar 🌹
                    </button>

                    {/* 👇 NOVO BOTÃO: Alinhado à direita e abaixo do botão de continuar */}
                    <div className="flex justify-end">
                        <button
                            onClick={() => router.push('/')} /* Caso sua rota se chame /envelope de fato, mude '/' para '/envelope' */
                            className="text-[#8b6508] hover:text-red-900 text-sm transition-colors border-b border-transparent hover:border-red-900 pb-0.5"
                        >
                            Voltar ao envelope
                        </button>
                    </div>
                    
                </div>

            </div>

        </div>
    ) 
}