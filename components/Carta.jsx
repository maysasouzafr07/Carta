'use client'
import { useRouter } from 'next/navigation'

export default function Carta() {
  const router = useRouter()

  return (
    <div className="flex items-center justify-center h-screen bg-amber-200">
      
      <div className="w-[500px] h-[600px] bg-amber-50 shadow-xl p-10 border border-amber-200 flex flex-col justify-between">
        
        <div>
          <h1 className="text-2xl font-serif mb-4 text-center">
            Convite Especial
          </h1>

          <p className="text-gray-700 leading-relaxed text-center">
            Você está convidado(a) para um momento inesquecível ✨  
            <br /><br />
            Será uma honra ter sua presença nesse dia tão especial 💖
          </p>
        </div>

        {/* 👇 BOTÃO NO FINAL */}
        <button
          onClick={() => router.push('/Flor')}
          className="mt-6 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
        >
          Continuar 🌹
        </button>

      </div>

    </div>
  )
}