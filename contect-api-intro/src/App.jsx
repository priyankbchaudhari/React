import { useContext } from 'react'
import Profile from './Components/Profile'
import UserContext from './context/UserContext'

function App() {

  let {setUser} = useContext(UserContext);

  function loginHandler()
  {
      setUser({name: 'Priyank', email:"priyank@gmail.com", img:'https://images.unsplash.com/photo-1640951613773-54706e06851d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'})
  }

  return (
    <>
      <div className="border-b py-3">
        <div className="flex mx-w-6xl  max-w-4xl mx-auto justify-between">
          <h3 className="">Context API's</h3>
          <div>
            <button className="" onClick={loginHandler}>Login</button>
          </div>
        </div>
      </div>

      <div className='mt-44 max-w-4xl mx-auto'>
        <Profile />
      </div>
    </>
  )
}

export default App
