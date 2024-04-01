import { useState } from "react"
import Button from "./Button/Button"

export default function FeedBackSection() {

  //Основной вариант создания useState (отслеживание состояния)
  // const [name, setName] = useState('')
  // const [hasError, setHasError] = useState(false)
  // const [reason, setReason] = useState('suggest')

  //Второй вариант с группировкой в один объект:
  const [form, setForm] = useState({
    name: '',
    hasError: false,
    reason: 'suggest'
  })

  function handleNameChange(event){
    //----Для первого варианта:
    // setName(event.target.value)
    // setHasError(event.target.value.trim().length == 0)
    //Для второго:
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length == 0
    }))
  }

  //prev - ддя передачи предыдущего значениея состояния 
  // const toggleError = () => {
    // setHasError((prev) => !prev)
    // console.log(hasError) //новое состояние основываясь от предыдущего
  // }

  return (
    <section>
        <h3>FeedBack</h3>

        {/* block for useRef */}

        {/* <Button onClick={toggleError}> Toggle Error </Button> */}

        <form>
          <label htmlFor="name">Your name</label>
          <input 
            type="text" 
            id="name" 
            className="control" 
            value={form.name}
            style = {{
              border: form.hasError ? '1px solid red' : null,
            }}
            onChange={handleNameChange}            
          />

          <label htmlFor="reason">Reason</label>
          <select id="reason" 
            className="control" 
            value={form.reason} 
            onChange={(event) => 
              setForm((prev) =>({...prev, reason: event.target.value}))}
          >
            <option value="error">Error</option>
            <option value="help">Help</option>
            <option value="suggest">Suggest</option>
          </select>

          <pre>
            {JSON.stringify(form, null, 2)}
          </pre>

          <Button disabled = {form.hasError} isActive={!form.hasError}>Send</Button>
        </form>        
    </section>
  )
}
