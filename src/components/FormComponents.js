import React from "react"

export default function FormComponents({ captureInput, inputText, setInput }) {
  return (
    <form>
      <label>
        <input type="text" onChange={captureInput} value={inputText} />
      </label>
      <button type="submit" onClick={setInput}>
        Click to Add
      </button>
    </form>
  )
}
