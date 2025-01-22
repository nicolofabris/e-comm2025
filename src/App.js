import {useState} from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

import products from './db/data'

function App() {
	const [selectedCategory, setSelectedCategory] = useState(null)

	const [query, setQuery] = useState("")

	const handleInputChange = (e) => {
		setQuery(e.target.value)
	}

	const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1))

	const handleChange = (e) => {
		setSelectedCategory(e.target.value)
	}

	
  return (
    <>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
