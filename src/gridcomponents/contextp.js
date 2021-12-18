import React from 'react'
import Context from '../formcomponents/contextc';

const App = () => {
  const name= 'rahul'

  const handle=(e)=>{  
    console.log(e);
    console.log('this is function in App');
  }

  return (
    <div>
    This is app 
    <Context value={name} handleClick={handle}/>
{/*     
    {console.log('this is function in App two')}; */}
    


      
    </div>
  )
}

export default App