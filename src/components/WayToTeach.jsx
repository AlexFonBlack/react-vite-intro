

//props передача перементров в функцию

//так же можно передавать сам параметры.
//в нашем случаи это title и description
// ...при этом props.title можно заменить на просто title
function WayToTeach(props){
    return (
      <li>
        <p>
          <strong>{props.title}</strong> {props.description}
        </p>
    </li>
    )
  }

  export default WayToTeach