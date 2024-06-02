import "./Error.css"

export default function Error(error: any) { 
  console.log(error)
    return <div className="error">
      <h1>Error {error.error.status}</h1>
      <h2>{error.error.message}</h2>
      {error.error.status >= 400 ?
        <p className="instructions">The problem with loading data occured.The server was unable to process the request. Try to refresh the page or try again later.</p> : <p>The server is unable to process the request. Please try again later</p>
      }
    </div>
}
