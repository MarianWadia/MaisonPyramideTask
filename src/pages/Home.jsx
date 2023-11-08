import React, {useEffect, useState} from 'react'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch(`https://rickandmortyapi.com/api/character`)
            const newData = await response.json();
            setData(newData.results)
        }
        fetchData();
    }, [])
    console.log(data)

    {window.localStorage.getItem("user")?
    (
        <div>
            {data?.map((item)=>(
            item.id<=2 && ( 
                <ul key={item.id}>
                    <li>Number: {item.id} {item.name}</li>
                    <li>Status: {item.status}</li>
                </ul>
            )
        ))}</div>
    ):(<div>You are not authorized </div>)}


}

export default Home