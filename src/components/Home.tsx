import "./Home.css"
import { useState, useEffect } from 'react'

export default function Home(){
  let today = new Date().toLocaleDateString('en-CA')
  console.log(today)
  const [data, setData] = useState<any>();
  const [date, setDate] = useState<string>(today);

  const fetchData = () => {
    const apiKey: String = "NPzkN3QlcDnfIngrGKC7YuibZ7XmrSzPt2gQYFXd";
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`).then(response => response.json()).then(data => setData(data))
  }

  useEffect(()=> {
    fetchData()
  }, [date])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
  }

  console.log(data)

  return data ? <div className="container">
      <h1>Astronomy Picture of the Day</h1>
      <h2>{data.title}</h2>
      <img className="universe-img" src={data.url} alt="..."/>
      <div>
        <input 
          type="date" 
          onChange={handleChange}
          value={date}
          max={today}
          min="1995-06-16"
        />
        <p>{data.date}</p>
        <p>{data.explanation}</p>
      </div>
    </div> :
    <h2>Loading...</h2>
}