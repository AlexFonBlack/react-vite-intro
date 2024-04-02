import { useState } from "react"
import Button from "./Button/Button"

function StateVsRef() {

  const [value, setValue] = useState('')

  return(
    <div>
      <h3>Input value: {value}</h3>
      <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} className="control"/>
    </div>
  )
}

export default function FeedBackSection() {

  const [name, setName] = useState('')
  const [hasError, setHasError] = useState(false)
  const [reason, setReason] = useState('suggest')

  function handleNameChange(event){
    setName(event.target.value)
    setHasError(event.target.value.trim().length == 0)
  }

  return (
    <section>
        <h3>FeedBack</h3>

        <form style={{marginBottom: '2rem'}}>
          <label htmlFor="name">Your name</label>
          <input 
            type="text" 
            id="name" 
            className="control" 
            value={name}
            style = {{
              border: hasError ? '1px solid red' : null,
            }}
            onChange={handleNameChange}            
          />

          <label htmlFor="reason">Reason</label>
          <select id="reason" className="control" value={reason} onChange={event => setReason(event.target.value)}>
            <option value="error">Error</option>
            <option value="help">Help</option>
            <option value="suggest">Suggest</option>
          </select>

          <pre>
            <hr />
            Name: {name}
            <br />
            Reason: {reason}
            <br />
            hasError: {hasError}
            <hr />
          </pre>

          <Button disabled = {hasError} isActive={!hasError}>Send</Button>
                   
        </form>
        <StateVsRef/>        
    </section>
  )
}
