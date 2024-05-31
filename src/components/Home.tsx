import "./Home.css"
import { useState, useEffect } from 'react'

export default function Home(){
  const [data, setData] = useState<any>()
  console.log(new Date().toLocaleDateString('en-CA').split('T')[0])

  const fetchData = () => {
    const apiKey: String = "NPzkN3QlcDnfIngrGKC7YuibZ7XmrSzPt2gQYFXd";
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`).then(response => response.json()).then(data => setData(data))
  }

  useEffect(()=> {
    fetchData()
  }, [])
console.log(data)

  return data ? <div>
      <img className="universe-img" src={data.url} alt="..."/>
      <div>
        <p>{data.date}</p>
        <h4>{data.title}</h4>
        <p>Copyright: {data.copyright}</p>
        <p>{data.explanation}</p>
      </div>
    </div> :
    <h2>Loading...</h2>
}