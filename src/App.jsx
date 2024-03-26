import { useState } from 'react';

import Button from './components/Button/Button';
import Header from './components/Header';
import WayToTeach from './components/WayToTeach';
import {ways, differences} from './data';




function App() {

  const [contentType, setContentType] = useState(null)

  function handleClick(type){
    setContentType(type)
  }
 
  return (
    <div>
      <Header/>
      <main>
        <section>
          <h3>Заголовок 3</h3>
          <ul>
            {ways.map((way) => <WayToTeach {...way}/>)}
           
            {/* <WayToTeach 
              title = {ways[0].title} 
              description = {ways[0].description} 
            />
            <WayToTeach {...ways[1]} /> {//аналогичная запись, т.к. поля title и description есть в ways}
            <WayToTeach {...ways[2]} /> */}
          </ul>
        </section>
        <section>
          <h3>Button sections</h3>
          <Button onClick = {() => handleClick('way')}>Подход</Button>
          <Button onClick = {() => handleClick('easy')}>Доступ</Button>
          <Button onClick = {() => handleClick('program')}>Вывод</Button>
          
          {
            contentType ? (<p>{differences[contentType]}</p>)
                        : (<p>Push on button</p>)
          }
        </section>

      </main>
    </div>
  )
}

export default App
