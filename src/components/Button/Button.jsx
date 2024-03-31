import classes from './Button.module.css'

function Button( {children, isActive, ...props} ) {

  //console.log(classes)

  return (
    <button 
      className={isActive ? `${classes.button} ${classes.active}` : classes.button} 
      {...props}
    >
        {children}
    </button>
  )
}

export default Button