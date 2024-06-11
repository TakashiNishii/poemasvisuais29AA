"use client"

import { PhotoIcon, Squares2X2Icon } from "@heroicons/react/16/solid"
import { TypeView } from "../enum/TypeView"
import classNames from "classnames";

interface TypeViewButtonProps {
  typeView: TypeView | TypeView.carousel
  setTypeView: (typeView: TypeView) => void
}

const TypeViewButton = (
  { typeView, setTypeView }: TypeViewButtonProps
) => {
  return (
    <div className="flex flex-row rounded-full w-full p-1 my-2 border border-secondary md:w-1/4">
      <button className={classNames("btn rounded-none rounded-l-full w-1/2", typeView === TypeView.carousel && "btn-secondary")} onClick={() => setTypeView(TypeView.carousel)}>
        <PhotoIcon className="w-5 h-5 mr-2" />
      </button>
      <div className="divider divider-horizontal mx-0"></div>
      <button className={classNames("btn rounded-none rounded-r-full w-1/2", typeView === TypeView.grid && "btn-secondary")} onClick={() => setTypeView(TypeView.grid)}>
        <Squares2X2Icon className="w-5 h-5 mr-2" />
      </button>
    </div>
  )
}

export default TypeViewButton