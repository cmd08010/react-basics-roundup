import React from "react"

export default function ListComponent({ listItems }) {
  return (
    <ul>
      {listItems.map((item, index) => {
        return (
          <li className={item.color} key={index}>
            {item.text} <button>Change Color</button>
          </li>
        )
      })}
    </ul>
  )
}

/* return (
    <ul>
      <li className={dataModel.color}>
        {dataModel.text} <button>Change Color</button>
      </li>
      <li className="green">
        Potatoes <button>Change Color</button>
      </li>
      <li className="red">
        Trees <button>Change Color</button>
      </li>
      <li className="green">
        Computers <button>Change Color</button>
      </li>
    </ul>
  ) */
