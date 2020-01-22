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
  const [inputText, setInputText] = useState("")

  const captureInput = e => {
    console.log(e.target.value)
    setInputText(e.target.value)
  }
  const setInput = e => {
    e.preventDefault()
    let newObj = {
      color: "red",
      text: inputText
    }
    setListItems([...listItems, newObj])
  }

  const swapColor = listItem => {
    if (listItem.color === "red") {
      listItem.color = "green"
    } else if (listItem.color === "green") {
      listItem.color = "red"
    }
    setListItems([...listItems])
  }

  return (
    <div>
      <h1>React Roundup App</h1>
      <FormComponent captureInput={captureInput} setInput={setInput} />
      <ListComponent listItems={listItems} swapColor={swapColor} />
    </div>
  )
}

export default App
