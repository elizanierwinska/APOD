import "./Header.css";
import { headerProps } from "../types";

export default function Header({today, date, setDate, setData}: headerProps) {
  console.log(typeof(today))

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //set the date to the date from the input field 
    if(event.target.name === "date"){
      setDate({
          date: event.target.value,
          startDate: "",
          endDate: "",
          count: ""
        }
      )
      setData(null);
    }else if (event.target.name === "startDate"){
      setDate((prev: any) => {
          return {
          ...prev,
          date: "",
          startDate: event.target.value,
          count: ""
      }});
    }else if (event.target.name === "endDate"){
      setDate((prev: any) => {
        return {
          ...prev,
          date: "",
          endDate: event.target.value,
          count: ""
        }});
      setData(null);
    } else {
      setDate(() => {
        return {
          date: "",
          startDate: "",
          endDate: "",
          count: event.target.value
        }});
      setData(null);
    }
  }

  return <div>
    <div className="header-container">
        <h1 className="page-title">Astronomy Picture of the Day</h1>
        <h1 className="small-screen-title">APOD</h1>
    </div>
    <div className="input-fields">
          <div className="flex-inputs">
          <div className="flex">
              <p>Date:</p>
              <input 
                className="date-picker"
                type="date" 
                name="date"
                onChange={handleChange}
                value={date.date}
                min="1995-06-16"
                max={today}
              />
            </div>
          <div className="flex">
              <p>Start date:</p>
              <input 
                  className="date-picker"
                  type="date" 
                  name="startDate"
                  onChange={handleChange}
                  value={date.startDate}
                  min="1995-06-16"
                  max={today}
              />
            </div>
            <div className="flex">
              <p>End date:</p>
              <input 
                  className="date-picker"
                  type="date" 
                  name="endDate"
                  onChange={handleChange}
                  value={date.endDate}
                  min="1995-06-16"
                  max={today}
              />
            </div>
            <div className="flex">
              <p>Count:</p>
              <input 
                  className="count"
                  type="number" 
                  name="count"
                  onChange={handleChange}
                  value={date.count}
                  min="1995-06-16"
                  max={today}
              />
            </div>
          </div>
      </div>
  </div>
}