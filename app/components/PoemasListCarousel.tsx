import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PoemasListCarousel = () => {
  return (
    <>
      <div className='hidden md:flex flex-col'>
        <div className='border-[20px] border-secondary p-6'>
          <div className="carousel w-full">

            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} id={`item${i + 1}`} className="carousel-item w-full justify-center">
                <Image width={400} height={400} src={`/Poemas/Poema${i + 1}.jpeg`} alt='Poema visual' className="max-w-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          {Array.from({ length: 14 }).map((_, i) => (
            <Link key={i} href={`#item${i + 1}`} className="btn btn-primary btn-sm">
              {i + 1}
            </Link>
          ))}
        </div>
      </div>
      <div className='md:hidden flex flex-col justify-center flex-1 gap-4'>
        <div className="carousel carousel-center bg-neutral rounded-box  w-full gap-2">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} id={`itemmobile${i + 1}`} className="carousel-item w-full">
              <Image width={250} height={250} src={`/Poemas/Poema${i + 1}.jpeg`} alt='Poema visual' className="w-full h-auto" />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center w-full p-2 gap-2">
          {Array.from({ length: 14 }).map((_, i) => (
            <Link key={i} href={`#itemmobile${i + 1}`} className="btn btn-primary btn-sm">
              {i + 1}
            </Link>
          ))}
        </div>
      </div>
    </>

  )
}

export default PoemasListCarousel