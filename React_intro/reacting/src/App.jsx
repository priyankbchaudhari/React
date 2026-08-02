import Navbar from './Navbar'
import DemoCard from './Card'
import Card1 from './Card'

function App()
{
  return (
      <>
        <h1>From App Component {Math.floor(Math.random() * 1000)}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <Navbar />
        <DemoCard />
        <Card1 />
      </>
  )
}

export default App;