import Image from "next/image";

export function Album() {
  return (
    <div className='grid grid-cols-8 gap-4 mt-4'>
      <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
        <Image src="/roses.jpeg" className='w-full' width={120} height={120} alt='album' />
        <strong className='font-semibold'>Guns and Roses</strong>
        <span className='text-sm text-zinc-400'>Freddy Mercury</span>
      </a>
      <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
        <Image src="/straits.jpg" className='w-full' width={120} height={120} alt='album' />
        <strong className='font-semibold'>Dire Straits</strong>
        <span className='text-sm text-zinc-400'>Freddy Mercury</span>
      </a>
      <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
        <Image src="/titas.jpeg" className='w-full' width={120} height={120} alt='album' />
        <strong className='font-semibold'>Titãs</strong>
        <span className='text-sm text-zinc-400'>Freddy Mercury</span>
      </a>
      <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
        <Image src="/U2.jpeg" className='w-full' width={120} height={120} alt='album' />
        <strong className='font-semibold'>U2</strong>
        <span className='text-sm text-zinc-400'>Freddy Mercury</span>
      </a>
      <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
        <Image src="/nirvana.jpg" className='w-full' width={120} height={120} alt='album' />
        <strong className='font-semibold'>Nirvana</strong>
        <span className='text-sm text-zinc-400'>Freddy Mercury</span>
      </a>
    </div>
  )
}