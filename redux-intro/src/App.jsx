import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement} from './redux/counterSlice'
import Navbar from './Navbar'
import { useEffect, Suspense }  from 'react'
// import { ErrorBoundary } from 'react-error-boundary'
import { ErrorBoundary } from "react-error-boundary";

function App() {

  const count = useSelector((state) => state.counter.value); 
  const dispatch = useDispatch();


  useEffect(() => {

    console.log("Hi, Initial value of count: ", count);
  }, []); 

  return (
    <>
      <Navbar/>
      <h1>This is a counter app and the current value is {count} </h1>
      <button className="btn" onClick={() => dispatch(increment())}>Increment</button>
      <button className="btn" onClick={() => dispatch(decrement())}>Decrement</button>
      
      <ErrorBoundary fallback={ <h1>Error</h1> }>
        <Suspense fallback="...Loading">
          <Child name="kyle"/>
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

function Child({name})
{
    return <h1>{name}</h1>
}

export default App;