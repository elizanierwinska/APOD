import "./Home.css"
import { useState, useEffect } from 'react'

export default function Home(){
  const [data, setData] = useState<any>()

  const fetchData = () => {
    const apiKey: String = "NPzkN3QlcDnfIngrGKC7YuibZ7XmrSzPt2gQYFXd";
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`).then(response => response.json()).then(data => setData(data))
  }

  useEffect(()=> {
    fetchData()
  }, [])
console.log(data)

  return data ? <div className="container">
      <h1>Astronomy Picture of the Day</h1>
      <h2>{data.title}</h2>
      <img className="universe-img" src={data.url} alt="..."/>
      <div>
        <p>{data.date}</p>
        <p>Copyright: {data.copyright}</p>
        <p>{data.explanation}</p>
      </div>
    </div> :
    <h2>Loading...</h2>
}