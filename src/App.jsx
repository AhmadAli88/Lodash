import { useState } from "react";
import ChunkedArray from "./components/Array Manipulation";
import DeepCloneComponent from "./components/DeepCloneComponent";
import SearchComponent from "./components/Functional Programming";
import ScrollComponent from "./components/Performance";
import SearchInput from "./components/Debouncing Form Handling";
import ThrottleComponent from "./components/Throttle Scroll Event";
import LodashExample from "./components/Chaining";


const App = () => {
  const [results, setResults] = useState([]);

  const arr = [1, 2, 3, 4, 5];
  const chunkSize = 2;


  const user = { name: 'John', age: 30, address: { city: 'New York' } };

   // Function to handle the search logic
   const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Example: Simulate filtering results based on search query
    const allItems = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
    const filtered = allItems.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    setResults(filtered);
  };
  return (
    <div>
      <h1>Array Chunking Example</h1>
      <ChunkedArray arr={arr} chunkSize={chunkSize} />

      <h1>Deep Clone Example</h1>
      <DeepCloneComponent user={user} />

      <div>
      <SearchComponent value={results} onSearch={handleSearch} />
      <div>
        <h3>Search Results:</h3>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
    <ScrollComponent/>
    <div>
      <SearchInput/>
    </div>
    <ThrottleComponent/>
    <LodashExample/>
    </div>
  );
};

export default App;
