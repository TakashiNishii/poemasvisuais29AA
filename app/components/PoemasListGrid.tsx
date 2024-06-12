"use client"
import { MagnifyingGlassCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

interface PoemasListGridProps {
  setOpen: (open: boolean) => void,
  setSelectedImage: (image: number) => void
}

const PoemasListGrid = ({ setOpen, setSelectedImage }: PoemasListGridProps) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6'>
      {Array.from({ length: 15 }).map((_, i) => (
        <div key={i} id={`item${i + 1}`} className="border-2 border-secondary rounded-md flex flex-col justify-between items-center gap-2 ">
          <Image width={250} height={250} src={`/Poemas/Poema${i + 1}.jpeg`} alt='Poema visual' className="max-w-full rounded-t-sm flex-1" />
          <MagnifyingGlassCircleIcon className="w-10 h-10 text-primary hover:cursor-pointer" onClick={() => {
            setSelectedImage(i + 1)
            setOpen(true)
          }} />
        </div>
      ))}
    </div>
  )
}

export default PoemasListGrid