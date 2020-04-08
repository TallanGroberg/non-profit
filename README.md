yes my read me is a website todo list



make profile image upload 


make feedback form *****

change doc.title to be right name. 

add transitions


```javascript
import React, {useState} from 'react'

const App = () => {
  //hook 
  const [inputs, setInputs] = useState({name: '', email: '', password: '',})

  //how to set state 

  const handleChange = (e) => {
    //get name and value
    const {name, value} = e.target

    //same as this.setState                      get name and value off input and match to                                                             this object 
    setInputs(prev/* same as prevState */ => ({...prev, [name]: value }) )
  }

  return (<>

    <form onSubmit={handleSignup}> 
      <input id='signup-name' placeholder='name' type="text" name='name' value={inputs.name} onChange={handleChange}/>
      <input id='signup-email' placeholder='email' type="text" name='email' value={inputs.email} onChange={handleChange}/>
      <input id='signup-password' placeholder='password' type="password" name='password' value={inputs.password} onChange={handleChange}/>
      <button id="signup-submit-button">Signup</button>
      
      
    </form>

          </>)
}

```


if state is an array...

```javascript
import React, {useState} from 'react'

const App = () => {
  //hook                      define data type here
  const [inArray, setArray] = useState([])

  //how to set state 

  const AddToArray = (e) => {
   
    //same as this.setState                     get everything off previous array                                                              
    setInputs(prev => ([...prev, 'thing added' ]) )
  }

  const showArray = () => {
    inArray.map(thing => {
      return <p>thing</p>
    })
  }

  return (<>

    <button onClick={addToArray}>add a thing.</button>

             {showArray()}{/*expect output thing added times button clicked */}
          </>)
}

```

```javascript
import React, {useState} from 'react'

const App = () => {
  //hook                      define data type here
  const [inArray, setInArray] = useState([])

  //how to set state 

  const AddToArray = (e) => {
   
    //same as this.setState                     get everything off previous array                                                              
    setInArray(prev => ([...prev, 'thing added' ]) )
  }

  const showArray = () => {
    inArray.map(thing => {
      return <p>thing</p>
    })
  }

  return (<>

    <button onClick={addToArray}>add a thing.</button>

             {showArray()}{/*expect output thing added times button clicked */}
          </>)
}

```

for boolean's

```javascript
import React, {useState} from 'react'

const App = () => {
  //hook                      define data type here
  const [toggle, setToggle] = useState(false)


  //how to set state 
  const handleToggle = () => {
    //same as this.setState  
                           //whatever prevState was, change to oppisite.               
    setToggle(prev => (!prev) )
  }

  

  return (<>

    <button onClick={handleToggle}>add a thing.</button>

             {toggle === true ? <h1>true</h1> : <h1>false</h1>}{/* exprect false, true, false, true*/}
          </>)
}

```





```javascript
import React, {useState} from 'react'

const App = () => {
  //hook                      define data type as number
  const [count, setCount] = useState(0)


  //how to set state 
  const counter = () => {
    //same as this.setState  
                           //whatever prevState was, add 1.               
    setCount(prev => (prev + 1) )
  }

  

  return (<>

    <button onClick={counter}>add a thing.</button>

             <h1>{count}</h1>{/* expect 1 then 2, 3, 4, so on... */}
          </>)
}

```

For strings 


```javascript
import React, {useState} from 'react'

const App = () => {
  //hook                      define string
  const [string, setString] = useState('')


  //how to set state 
  const addString = () => {
    //same as this.setState  
                           // just set The string               
    setInputs('it says whatever i want.')
  }

  

  return (<>

    <button onClick={addString}>add a thing.</button>

             {toggle === true ? <h1>true</h1> : <h1>false</h1>}{/* expect 1 then 2, 3, 4, so on... */}
          </>)
}

```
















 









