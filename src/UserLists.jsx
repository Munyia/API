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
     {error && <p>Error: {error}</p>}
            <div className='user'>
                {listOfUsers.map(user => (
                    <div id='use'>
                       <h1>{user.id}</h1>
                       <h2>{user.name}</h2>
                       <h3> {user.email} </h3> 
                       </div>
                ))}
            </div>
    </div>
  )
}
export default UserLists 