import Phone from './icons/Phone'
import Dots from './icons/Dots'
import MessageInput from './MessageInput'
import ChatBox from './ChatBox'

const Chat = () => {
    return (
        <>
        <div className="h-screen w-full">
            <div className='flex justify-between px-8 py-5 items-center'>
                <div className=''>
                    <h1 className='text-lg font-medium'>Abu</h1>
                    <p className='text-[#424941] font-light'>Last Active at 08:33</p>
                </div>
                <div className='flex gap-4'>
                    <Phone className = 'cursor-pointer'/>
                    <Dots className = 'cursor-pointer'/>
                </div>
            </div>

            <div className='overflow-scroll h-[75%]'>
                <ChatBox />
            </div>

            <div className='mx-4 my-2 h-[10%] items-center'>
                <MessageInput />
            </div>
        </div>
        </>
    )
}


export default Chat;