
import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import Tours from './components/Tours'



const url = 'https://fakestoreapi.com/products'



function App() {


   const  [list, setList] = useState([])
   const [loading, setLoading] = useState(true)

   const fetchData = async () => {
    setLoading(true)
    try{
      const resp = await fetch(url);
      const data = await resp.json();
      setList(data)
      setLoading(false)
    }catch(error){
      console.error(error)
      setLoading(false)

    }
   }
  useEffect(() => {
    fetchData()
  },[]);

  //  if(loading){
  //   return <Loading />
  //  }
  return (
    <>
      {/* <h2>
        {list.map((item) => {
          return <div key={item.id}>
            <h2>{item.title}</h2>
            <h2>{item.description}</h2>
            <h2>{item.price}</h2>
            <img src={item.image} alt="" />
          </div>
        })}
      </h2> */
      <Tours list={list} />
      }
    </>
  )
}

export default App
