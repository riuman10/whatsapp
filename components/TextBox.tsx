import { useState } from "react";
import Shamikh from './icons/avatars/Shamikh';
import Mohd from './icons/avatars/Mohd';
import Roberta from './icons/avatars/Roberta';
import Angela from './icons/avatars/Angela';
import Bruna from './icons/avatars/Bruna';
import FitMidde from './icons/avatars/FitMidde';




const data = [
    {id : 1 , name : 'Shamikh' , message : 'Annanvynu mirey migeyah! PS knn..' , avatar : <Shamikh />},
    {id : 2 , name : "Roberta" , message : "Baixa o kwai com o meu, por..." , avatar :  <Roberta />},
    {id : 3 , name : "Ângela" , message : "Bora jogar aquele Genshin?" , avatar : <Angela /> },
    {id : 4 , name : "Bruna" , message : "Bora jogar aquele Genshin?" , avatar : <Bruna />},
    {id : 5 , name : 'Fit Midde' , message : 'Bora jogar aquele Genshin?' , avatar : <FitMidde /> },
    {id : 6 , name : 'Mohd' , message : 'kitties!! whens commings?' , avatar : <Mohd />}
]

const TextBox = () => {
    return (
        <>
            <div className="my-6 flex-col">
                <ChatBar />
            </div>
        </>
    )
}


const ChatBar = () => {
    return (
        <>
            <div>
                {data.map((info) => (
                    <div key={info.id} className = 'flex hover:bg-white rounded-2xl cursor-pointer my-4 py-3 px-2'>
                    <div>
                        {info.avatar}
                    </div>
                    <div className="flex-1 ml-4">
                    <h1 className="font-semibold text-[#0E1F12] text-lg">
                        {info.name}
                    </h1>
                    <p className="text-[#424941] text-base">
                        {info.message}
                    </p>
                </div>
                <p className="text-[#000000] font-light">
                    12:33
                </p>
                    </div>
                ))}
            </div>
        </>
    )
}



export default TextBox;