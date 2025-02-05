import React from 'react'
import PropTypes, { shape } from 'prop-types'

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {props.alert.msg}  
    </div>
  )
}

Alert.propTypes = {
  msg : PropTypes.string,
  type : PropTypes.string, 
}

export default Alert

