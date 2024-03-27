import {ways} from '../data';
import WayToTeach from './WayToTeach'

function FirstSection() {
  return (
    <section>
        <h3>Заголовок 3</h3>
            <ul>
                {ways.map((way) => <WayToTeach key={way.title} {...way}/>)}
            </ul>
    </section>
  )
}

export default FirstSection