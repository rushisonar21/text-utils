import React from 'react'
import PropTypes, { shape } from 'prop-types'

function Alert(props) {
  return (
    <div style={{height: '50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {props.alert.msg}  
    </div>
    }
    </div>
  )
}

Alert.propTypes = {
  msg : PropTypes.string,
  type : PropTypes.string, 
}

export default Alert

