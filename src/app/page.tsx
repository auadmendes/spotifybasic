"use client"
import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  //Play,
  Shuffle,
  //SkipBack,
  //SkipForward,
  Repeat
} from 'lucide-react'

import {
  SkipForward,
  SkipBack,
  Play,
  MicrophoneStage,
  Queue,
  DesktopTower,
  SpeakerSimpleLow,
  ArrowsOutSimple
} from 'phosphor-react'

import Image from 'next/image'
import { Sidebar } from '@/components/Sidebar'
import { Footer } from '@/components/Footer'
import { Playlist } from '@/components/Playlist'

export default function Home() {

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h2 className='font-semibold text-3xl mt-10'>Good afternoon</h2>

          <Playlist />

          <h1 className='font-semibold text-3xl mt-10'>Made for Luciano Mendes</h1>

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
        </main>

      </div>

      <Footer />

    </div>
  )
}
