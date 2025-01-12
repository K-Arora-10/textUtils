import React from 'react'

const capitalize = (word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalize(props.alert.type)}  </strong>{props.alert.message}
    </div>
  )
}
