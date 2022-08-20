import MessageBox from './icons/MessageBox'
import Dots from './icons/Dots';
import Record from './icons/Record'
import SearchBar from './SearchBar';
import TextBox from './TextBox';

const SideBar = () =>  {
    return (  
        <>
        <div className='bg-[#FBFDF6] w-[35%] h-screen px-5 overflow-scroll'>
        <div className='flex justify-between items-center mt-10'>
            <h1 className='text-3xl font-sans font-light'>Whatsapp</h1>
            <div className='flex items-center justify-center gap-4'>
                <Record />
                <MessageBox />
                <Dots />
            </div>
        </div>
        <div className='mt-6'>
            <SearchBar />
        </div>
        <div className='bg-scroll'>
            <TextBox />
        </div>
        </div>
        </>
    );
}

export default SideBar;