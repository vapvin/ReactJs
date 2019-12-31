import React, { useState, useEffect } from 'react';
import axios from 'axios'

const App = () => {

  const [data, setData] = useState({ hits: [] })
  const [query, setQuery] = useState('react')  

  useEffect(() => {
    let ignore = false

    async function get() {
      const result = await axios(`https://hn.algolia.com/api/v1/search?query=${query}`)
      if(!ignore) setData(result.data)
    }

    get() //start get parsing

    return () => {
      ignore = true
    };
  }, [query])
  return (
    <>
      <input value={query} onChange={ e => setQuery(e.target.value)} />
      <ul>
        {data.hits.map(item => (
          <li key={item.objectId}><a href={item.url}>{item.title}</a></li>
        ))}
      </ul>
    </>
  )
}

export default App;
