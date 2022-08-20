import Shamikh from './icons/avatars/Shamikh'


const ChatBox = () => {

    const messages = [
        {id : 1 , avatar : <Shamikh />}
    ]
    return (
        <>
        <div className = 'h-full'>
            <div>
                <div className='flex'>
                    <div className='flex'>
                    <Shamikh />
                    </div>
                    <div className='flex flex-col ml-2'>
                        <p className='mb-2 font-light text-sm'>08:39</p>
                        <p className='bg-[#EBF3E9] w-72 p-4 rounded-lg'>Hei my sis just called, when i was on my way i told my phone was off..... SHHHH....</p>
                    </div>
                </div>

                <div className='flex justify-center my-8'>
                    <p className='bg-[#D3E8D2] text-[#424941] font-medium inline-block px-4 py-2 rounded-lg'>
                    Today
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default ChatBox