"use client"

import { useState } from "react"
import PoemasListCarousel from "./PoemasListCarousel"
import { TypeView } from "../enum/TypeView"
import TypeViewButton from "./TypeViewButton"
import PoemasListGrid from "./PoemasListGrid"

const PoemasList = () => {
  const [typeView, setTypeView] = useState(TypeView.carousel) // ['carousel', 'grid']
  return (
    <>
      <TypeViewButton typeView={typeView} setTypeView={setTypeView} />
      {typeView === TypeView.carousel ?
        <PoemasListCarousel />
        :
        <PoemasListGrid />
      }
    </>

  )
}

export default PoemasList