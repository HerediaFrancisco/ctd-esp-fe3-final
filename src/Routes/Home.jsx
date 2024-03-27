
import Card from '../Components/Card'

import { useGlobalState } from '../Context/context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  /*
  const url = 'https://jsonplaceholder.typicode.com/users'
  const [doctor, setDoctor] = useState([])
  console.log(doctor)

  useEffect(() => {
    axios(url)
    .then(res => setDoctor(res.data))
  },[])

  {doctor.map((item) => <Card key={item.id} name={item.name} username={item.username} id={item.id}/>)}
  */

  const {state} = useGlobalState()

  return (
    <main className={state.theme === 'dark' ? 'dark' : 'light'} >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.listOdon.map((item) => <Card key={item.id} item={item}/>)}
      </div>
    </main>
  )
}

export default Home