
import Image from 'next/image';
import { PlusCircle } from 'lucide-react';

export default function NewPost(){
    return (
        <>
         <div className="flex flex-row w-full border rounded-2xl bg-white p-2 mt-3 cursor-pointer" data-hs-overlay="#new-post-modal">
            <Image src="/avatar.png" width={50} height={50} />
            <p className="text-gray-400 my-auto ml-4 w-full">Escreva seu texto... </p>
            <PlusCircle className="text-gray-400 my-auto h-8"/>
        </div>
        </>
    )
}
