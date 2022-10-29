//import { useState, createContext } from 'react'

import {  createContext, useState } from "react"

// const Notification = ({ message, severity }) => {
//     const notificationStyles = {
//       position: 'absolute',
//       top: 100,
//       right: 10,
//       width: 'auto',
//       height: 'auto',
//       backgroundColor: severity === 'success' ? 'green' : 'red',
//       color: 'white',
//       padding: '10px 20px 10px 20px'
//     }
  
//     if(message === '') return

//     return (
//       <div style={notificationStyles} className={severity === 'success' ? 'greenClass' : 'redClass'}>
//         {message}
//       </div>
//     )
//   }
  

// export const NotificationContext = createContext()

// export const NotificationProvider = ({ children }) => {
//     const [message, setMessage] = useState('')
//     const [severity, setSeverity] = useState('success')

//     const setNotification = (severity, message) => {
//         setSeverity(severity)
//         setMessage(message)

//         setTimeout(() => {
//             setMessage('')
//         }, 2000)
//     }

//     return(
//         <NotificationContext.Provider value={{ setNotification }}>
//             <Notification severity={severity} message={message}/>
//             {children}
//         </NotificationContext.Provider>
//     )
// }

const Notification = ({msg} ) => {
    const notificationStyles = {
        position: 'absolute',
        top: 100,
        right: 10,
        padding: '10px 20px 10px 20px',
        background: 'green',
        color: 'white'
    }
    if (msg === '') return
    return(
        <div style={notificationStyles}>
            {msg}
        </div>
    )
}
export const NotificationContext = createContext()

export const NotificationProvider =({children}) =>{
    const [message, setMessage] = useState('')

    const setNotification = (msg) => {
        setMessage(msg)

        setTimeout(() => {
            setMessage('')
        }, 3000)
    }
return(
    <NotificationContext.Provider value={{ setNotification}}>
        <Notification msg={message}/>
        { children }
    </NotificationContext.Provider>
)
}
export default Notification