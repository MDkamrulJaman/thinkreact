import React, {useState} from 'react'

function UseStateFunc() {
 
const [count, setCount] = useState(45);
 

 
    return (
    <>
     
    <div>
      
      <p>You clicked {count} times</p>
      
      <button 
       onClick={
        () => setCount(count + 1)}>
     
     </button>

   
    </div>
    
    
    
    
    </>
  )
}

export default UseStateFunc;