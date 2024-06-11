"use client"

import { useState } from "react"
import PoemasListCarousel from "./PoemasListCarousel"
import { TypeView } from "../enum/TypeView"
import TypeViewButton from "./TypeViewButton"
import PoemasListGrid from "./PoemasListGrid"
import classNames from "classnames"
import Image from "next/image"

const PoemasList = () => {
  const [typeView, setTypeView] = useState(TypeView.carousel) // ['carousel', 'grid']
  const [imageSelected, setImageSelected] = useState(0)
  const [open, setOpen] = useState(false)
  return (
    <>
      <TypeViewButton typeView={typeView} setTypeView={setTypeView} />
      {typeView === TypeView.carousel ?
        <PoemasListCarousel setOpen={setOpen} setSelectedImage={setImageSelected} />
        :
        <PoemasListGrid setOpen={setOpen} setSelectedImage={setImageSelected} />
      }
      <dialog id="my_modal_1" className={classNames("modal",
        open && "modal-open "
      )}>
        <div className="modal-box min-w-[60vw] flex justify-center border-2 border-secondary">
          <button className="btn btn-sm btn-circle btn-primary absolute right-2 top-2" onClick={() => setOpen(false)}>✕</button>
          <Image width={800} height={800} src={`/Poemas/Poema${imageSelected}.jpeg`} alt='Poema visual' className="w-full h-auto object-fill" />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setOpen(false)}>close</button>
        </form>
      </dialog>
    </>

  )
}

export default PoemasList