import {useEffect,useState} from 'react'
import './App.css'
import UserLists from './UserLists'

function App() {
  // const [data, setData] = useState("")
  // const [error, setError] = useState("")
  // console.log(data);
  // useEffect (() => {
  //   fetch("https://hn.algolia.com/api/v1/search?query=redux")
  //   .then(res => res.json())
  //   .then(res =>setData(res))
  //   .catch(err => setError(err))
  // }, [])

  return (
    <>
      <UserLists/>
    </>
  )
}

export default App
