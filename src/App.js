import { useState, useEffect } from "react";

function App() {
  const [items,setItems] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
          setItems(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchItems();
  }, [])


  return (
    <div className="App">
      <input type="text" placeholder='Search' onChange={e => {setSearchTerm(e.target.value)}} />
      <ul>
        {items.filter((val) =>{
    if (searchTerm === "") {
      return val;
    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  }).map(item => (
          <p key={item.id}>
            {item.title}
          </p>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
