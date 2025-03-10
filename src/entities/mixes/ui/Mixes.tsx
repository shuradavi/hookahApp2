import React, { FC } from "react"
import { getMixCategories } from "../api/mixesApi";

const Mixes: FC<Props> = () => {
    getMixCategories()
  return (
    <div>
      Категории
    </div>
  )
};

export default Mixes;
