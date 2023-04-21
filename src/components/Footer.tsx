import { Repeat, Shuffle } from "lucide-react";
import Image from "next/image";
import { ArrowsOutSimple, DesktopTower, MicrophoneStage, Play, Queue, SkipBack, SkipForward, SpeakerSimpleLow } from "phosphor-react";

export function Footer() {
  return (
    <footer className="bg-zinc-800/40 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className='flex items-center gap-3'>
        <Image src="/queen.jpeg" width={56} height={56} alt='album' />
        <div className='flex flex-col'>
          <strong className='font-normal'>Bohemian Rhapsody</strong>
          <span className='text-xs text-zinc-400'>Quuen</span>
        </div>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <div className='flex items-center gap-6'>
          <Shuffle className='text-zinc-200' />
          <SkipBack color="#fff" weight="fill" size={24} className='text-zinc-200' />
          <button className='w-10 h-10 flex items-center justify-center  rounded-full bg-white text-black ml-auto'>
            <Play weight="fill" size={24} />
          </button>
          <SkipForward color="#fff" weight="fill" size={24} className='text-zinc-200' />
          <Repeat className='text-zinc-200' />
        </div>

        <div className='flex items-center gap-2'>
          <span className='text-xs text-zinc-400'>0:31</span>
          <div className='h-1 rounded-full w-96 bg-zinc-600'>
            <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
          </div>
          <span className='text-xs text-zinc-400'>2:14</span>
        </div>

      </div>

      <div className='flex items-center gap-4'>
        <MicrophoneStage size={20} />
        <Queue size={20} />
        <DesktopTower size={20} />
        <div className='flex items-center gap-2'>
          <SpeakerSimpleLow size={20} />
          <div className='h-1 rounded-full w-24 bg-zinc-600'>
            <div className='bg-zinc-200 w-12 h-1 rounded-full'></div>
          </div>
        </div>
        <ArrowsOutSimple size={20} />
      </div>
    </footer>
  )
}