import React from 'react'
import {useEffect,useState} from 'react'

const UserLists = () => {
    const  [listOfUsers, setListOfUsers]= useState("")
    const [error, setError] = useState("")
    console.log(listOfUsers);

  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => setListOfUsers(res))
    .catch(err => setError(err));
  }, [])
 
  return (
    <div>
       <p>{listOfUsers && listOfUsers[0].name}</p>
    </div>
  )
}
export default UserLists 