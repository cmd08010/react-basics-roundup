import React, { useState } from "react"
import FormComponent from "./components/FormComponents"
import ListComponent from "./components/ListComponent"

const data = [
  {
    color: "red",
    text: "Zebra"
  },
  {
    color: "green",
    text: "Potatoes"
  },
  {
    color: "red",
    text: "Trees"
  },
  {
    color: "green",
    text: "Computers"
  }
]
function App() {
  const [listItems, setListItems] = useState(data)
  return (
    <div>
      <h1>React Roundup App</h1>
      <FormComponent />
      <ListComponent listItems={listItems} />
    </div>
  )
}

export default App
