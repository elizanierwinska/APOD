import "./Collapsible.css"
import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'react-feather';
import { collapsibleProps } from "../types"

export default function Collapsible({children, title}: collapsibleProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  }

  return<div className="flex-container">
      <button className="button" onClick={handleOpen}>
      <div className="flex">
        <h3>{title}</h3>
        {
          isOpen ? (<ChevronUp />) : (<ChevronDown />)
        }
      </div>
      </button>
    <div>{isOpen && <div>{children}</div>}</div>
  </div> 
}