import React from "react"

export default function ListComponent({ listItems, swapColor }) {
  return (
    <ul>
      {listItems.map((item, index) => {
        return (
          <li className={item.color} key={index}>
            {item.text}{" "}
            <button onClick={() => swapColor(item)}>Change Color</button>
          </li>
        )
      })}
    </ul>
  )
}
