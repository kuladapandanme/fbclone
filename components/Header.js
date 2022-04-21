import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid'
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon'

function Header() {
    return (
        <div className='flex sticky top-0 z-50 bg-white items-center p-2 lg:px-5 shadow-md'>
            <div className='flex items-center'>
                <img src='https://res.cloudinary.com/bellaeenar/image/upload/w_40,h_40,c_fill/fbclone/fb-circle-512.webp' alt='fbclone' width={40} height={40} />
                <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                    <SearchIcon className='h-6 text-gray-600' />
                    <input className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500' type='text' placeholder='Search Facebook' name='' id='' />
                </div>
            </div>
            <div className='flex justify-center flex-grow'>
                <div className='flex'>
                    <HeaderIcon Icon={HomeIcon} active />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            <div>
                {/* Profile Pic */}
                <p className='whitespace-nowrap font-semibold pr-3'>Bella Eenar</p>
            </div>
        </div>

    )
}

export default Header