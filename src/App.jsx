import { useEffect, useState } from 'react'
import './App.css'
import { Table } from './table';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([])

  useEffect(() =>{
    const fetchData = async() => {
      try{
        const res = await fetch ('https://jsonplaceholder.typicode.com/users')
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching data", err);
        
      }
    }
    fetchData();
  },[])

  const search = (data) => {
    return data.filter((item) => 
      item.name.toLowerCase().includes(query) ||
      item.username.toLowerCase().includes(query) ||
      item.email.toLowerCase().includes(query) ||
      item.phone.toLowerCase().includes(query)
      );
  };
   
  return (
    <div className='container'>
      <div className='app'>
      <h1 className='text'>Search to a person</h1>
      <input 
        type="text" 
        placeholder='Search ' 
        className='search' 
        onChange={e => setQuery(e.target.value )}
        />
        <Table data={search(data)} />
    </div>
    </div>
    
  )
}

export default App
