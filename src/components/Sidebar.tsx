import { Library } from 'lucide-react'
import { House, MagnifyingGlass } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">

      <div className='flex items-center gap-2'>
        <div className='w-3 h-3 bg-red-500 rounded-full' />
        <div className='w-3 h-3 bg-yellow-500 rounded-full' />
        <div className='w-3 h-3 bg-green-500 rounded-full' />
      </div>

      <nav className='space-y-5 mt-10'>
        <a className='flex items-center gap-3 text-xs font-semibold text-zinc-200'
          href="">
          <House />
          Home
        </a>
        <a className='flex items-center gap-3 text-xs font-semibold text-zinc-200'
          href="">
          <MagnifyingGlass />
          Search
        </a>
        <a className='flex items-center gap-3 text-xs font-semibold text-zinc-200'
          href="">
          <Library />
          Your library
        </a>
      </nav>

      <nav className='flex flex-col gap-3 mt-6 pt-10 border-t border-zinc-700'>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Matilde</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Luciano</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Best Rocks</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>80's Rock</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Academia</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Jaquelaine</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Passeio</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Aniversário</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Samba Raiz</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>90's Music</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Fsculdade 📚</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Românticas 💔</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Sofrência</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rap</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Poesia Acústica</a>

      </nav>

    </aside>
  )
}