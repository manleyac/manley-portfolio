import React, { useState } from "react"
import { GoThreeBars } from "react-icons/go";
import { IoMdClose } from "react-icons/io";

import "./Burger.styles.css";

export const Burger = ({ open, setOpen }) => {
   const icon = open ? <IoMdClose size={25}/> : <GoThreeBars size={25}/>;

  return (
    <div className="burgerIcon" open={open} onClick={() => setOpen(!open)}>
      {icon}
    </div>
  )
}
