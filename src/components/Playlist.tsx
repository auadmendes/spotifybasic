import Image from "next/image";
import { Play } from "phosphor-react";

export function Playlist() {
  return (
    <div className='grid grid-cols-3 gap-4 mt-4'>
      <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
        <Image src="/queen.jpeg" width={104} height={104} alt='album' />
        <strong>Queen</strong>
        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play fill='' />
        </button>
      </a>
      <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
        <Image src="/eminem.png" width={104} height={104} alt='album' />
        <strong>Eminem</strong>
        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play fill='' />
        </button>
      </a>
      <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
        <Image src="/linking.jpg" width={104} height={104} alt='album' />
        <strong>Linking Park</strong>
        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play fill='' />
        </button>
      </a>
      <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
        <Image src="/metalica.jpeg" width={104} height={104} alt='album' />
        <strong>Metalica</strong>
        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play fill='' />
        </button>
      </a>
      <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
        <Image src="/sia.jpeg" width={104} height={104} alt='album' />
        <strong>Sia</strong>
        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play fill='' />
        </button>
      </a>
      <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors'>
        <Image src="/weeknd.jpeg" width={104} height={104} alt='album' />
        <strong>Weeknd</strong>
        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play fill='' />
        </button>
      </a>
    </div>
  )
}