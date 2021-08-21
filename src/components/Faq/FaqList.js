import { useState, useEffect } from "react";
import getFaq from "../../services/service";

function FaqList() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchFaq = async () => {
      await getFaq()
        .then(response => {
          console.log(response.data.data);
          setData(response.data.data)
        })

    }
    
    fetchFaq();
  }, [])

  return (
    <ul>
      {data.map(item => (
        <div>
          <h1>{item.question}</h1>
          <p>{item.answer}</p>
        </div>
      ))}
    </ul>
  )
}

export default FaqList;