import Image from 'next/image'

const PoemasListGrid = () => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6'>
      {Array.from({ length: 14 }).map((_, i) => (
        <div key={i} id={`item${i + 1}`} className="border-2 border-secondary p-6">
          <Image width={250} height={250} src={`/Poemas/Poema${i + 1}.jpeg`} alt='Poema visual' className="max-w-full" />
        </div>
      ))}
    </div>
  )
}

export default PoemasListGrid