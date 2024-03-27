import { useState } from 'react';
import {differences} from '../data';
import Button from './Button/Button';

function SecondSection() {
  
  const [contentType, setContentType] = useState(null)

  function handleClick(type){
    setContentType(type)
  }

  return (
      <section>
        <h3>Button sections</h3>
        <Button
          isActive={contentType == 'way'} 
          onClick = {() => handleClick('way')}>Подход
        </Button>
        <Button 
        isActive={contentType == 'easy'}
        onClick = {() => handleClick('easy')}>Доступ
        </Button>
        <Button 
        isActive={contentType == 'program'}
        onClick = {() => handleClick('program')}>Вывод
        </Button>
    
        {
          contentType ? (<p>{differences[contentType]}</p>)
                      : (<p>Push on button</p>)
        }
      </section>
  )
}

export default SecondSection