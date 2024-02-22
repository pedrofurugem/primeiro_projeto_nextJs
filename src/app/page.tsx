import Image from 'next/image'

import { PlusCircle } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <div className="flex flex-row w-full border rounded-2xl bg-white p-2 mt-3 cursor-pointer" data-hs-overlay="#new-post-modal">
        <Image src="/avatar.png" width={50} height={50} />
        <p className="text-gray-400 my-auto ml-4 w-full">Escreva seu texto... </p>
        <PlusCircle className="text-gray-400 my-auto h-8"/>
      </div>

      <div id="new-post-modal" className="hs-overlay hidden size-full fixed top-0   start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div className="rounded-2xl hs-overlay-open:opacity-100 hs-overlay-open:duration-1000 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto pointer-events-auto bg-white">
          <div className="flex flex-col p-2">
            <p className="text-2xl text-center">Escreva seu post</p>
            <p className="text-gray-400 h-48">Escreva alguma coisa..</p>
          </div>
          
            <div className="flex flex-row gap-2 bg-gray-100 p-2 rounded-b-2xl">
              <div className="w-full"></div>
              <button data-hs-overlay="#new-post-modal" className="bg-gray-50 border border-white font-bold text-black p-2 rounded-xl">Cancelar</button>
              <button className="bg-blue-600 text-white p-2 rounded-xl">Enviar</button>
            </div>
        </div>
      </div>
    </main>
  )
}
