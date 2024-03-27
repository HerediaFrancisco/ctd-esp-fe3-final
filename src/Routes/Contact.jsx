import React from 'react'
import Form from '../Components/Form'
import { useGlobalState } from '../Context/context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state, dispatch } = useGlobalState();
  return (
    <div className={state.theme === 'dark' ? 'dark' : 'light'}>
      <h2 className='contact'>Want to know more?</h2>
      <p className='contact'>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact