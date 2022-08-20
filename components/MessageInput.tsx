import Attach from './icons/Attach'
import Smiley from './icons/Smiley'
import Microphone from './icons/Microphone'
import Arrow from './icons/Arrow'
import { useState } from 'react'


const MessageInput = () => {
    const [input , setInput] = useState('');
    
    return (
        <>
        <div>
        <div className='flex justify-between items-center w-full pl-6 bg-green rounded-full text-secondary'>
        <input type="search" id="default-search" placeholder="Search for a conversation" className='outline-none w-full h-14 bg-green placeholder:text-secondary' onChange={e => setInput(e.target.value)} required
        />
        <div className='flex gap-1 mr-2'>
            <Attach />
            <Smiley />
        </div>
        <button type="submit" className='bg-[#D3E8D2] h-14 rounded-full w-16 flex items-center justify-center'>
            {input.length > 0 ? <Arrow /> : <Microphone />}
        </button>
        </div>
        </div>
        </>
    )
}


export default MessageInput;