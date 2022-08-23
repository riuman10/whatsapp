import Search from './icons/Search'

const SearchBar = () => {
    return (
        <>
        <div className='flex justify-between items-center w-full pl-6 bg-green rounded-full text-secondary'>
        <input type="search" id="default-search" placeholder="Search for a conversation" className='outline-none w-full h-14 bg-green' required
        />
        <button type="submit" className='bg-[#D3E8D2] h-14 rounded-full w-16 flex items-center justify-center'>
            <Search />
        </button>
        </div>
        </>
    )
}

export default SearchBar;