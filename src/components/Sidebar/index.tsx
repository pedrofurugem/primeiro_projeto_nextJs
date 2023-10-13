import Image from "next/image"

import { Home, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

export default function Sidebar(){
    return (
      <div className="flex flex-col bg-white w-80 rounded-2xl border m-2 pr-5 select-none">
        <Image 
          className="m-16 mx-auto"
          src="/logo.png" 
          alt="logo" 
          width={111} 
          height={56} 
        />
        <div className="flex flex-col ml-5 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <Home/>
              <p>Inicio</p>
            </div>
            <div className="flex flex-row gap-2">
              <GraduationCap />
              <p>Voltar para a plataforma</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between cursor-pointer hs-collapse-toggle" data-hs-collapse="#categoria-1">
              <p>Comece por aqui</p>

              <ChevronDown className="hs-collapse-open:hidden"/> 
              <ChevronUp className="hs-collapse-open:block hidden"/>
            </div>

            <div id="categoria-1" className="flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                <p className="text-2xl">🥳</p> 
                <p className="my-auto">Boas vindas</p>
              </div>

              <div className="flex flex-row gap-2">
                <p className="text-2xl">🤝</p>
                <p className="my-auto">Regras de convivencia</p>
              </div>

              <div className="flex flex-row gap-2">
                <p className="text-2xl">😶</p>
                <p className="my-auto">Apresente-se</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between cursor-pointer hs-collapse-toggle" data-hs-collapse="#categoria-2">
              <p>Comece por aqui</p>

              <ChevronDown className="hs-collapse-open:hidden"/> 
              <ChevronUp className="hs-collapse-open:block hidden"/>
            </div>

            <div id="categoria-2" className="flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                <p className="text-2xl">🥳</p> 
                <p className="my-auto">Boas vindas</p>
              </div>

              <div className="flex flex-row gap-2">
                <p className="text-2xl">🤝</p>
                <p className="my-auto">Regras de convivencia</p>
              </div>

              <div className="flex flex-row gap-2">
                <p className="text-2xl">😶</p>
                <p className="my-auto">Apresente-se</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
