import React, {useEffect, useState} from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router';

const Home = ({setUserState}) => {
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch(`https://rickandmortyapi.com/api/character`)
            const newData = await response.json();
            setData(newData.results.slice(0,2))
        }
        fetchData();
    }, [])
    console.log(data)
    const navigate = useNavigate()
    
    const handleClick =  () => {
        signOut(auth).then(() => {
            setUserState(null)
            navigate("/signin")
          }).catch((error) => {
            console.error(error)
          });
          
    }
  return (
    <div className='not-auth' style={{justifyContent: "space-around"}}>
        {data?.map((item)=>(
            <div key={item.id} className='character'>
                <img src={item.image} alt="" style={{width: "80px", height: "80px", borderRadius: "80px"}}/>
                <div>
                    <p>Name: {item.name}</p>
                    <p>Status: {item.status}</p>
                    <p>Gender: {item.gender}</p>
                </div>
            </div>
    ))}
    <button onClick={handleClick} style={{width: "20%", alignSelf: "end"}}>SignOut</button>
    </div>
  )
}

export default Home