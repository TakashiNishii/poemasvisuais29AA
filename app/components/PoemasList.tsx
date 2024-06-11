"use client"

import { useState } from "react"
import PoemasListCarousel from "./PoemasListCarousel"
import { TypeView } from "../enum/TypeView"
import TypeViewButton from "./TypeViewButton"

const PoemasList = () => {
  const [typeView, setTypeView] = useState(TypeView.carousel) // ['carousel', 'grid']
  return (
    <>
      <TypeViewButton typeView={typeView} setTypeView={setTypeView} />
      {typeView === TypeView.carousel ?
        <PoemasListCarousel />
        :
        <></>
      }
    </>

  )
}

export default PoemasList