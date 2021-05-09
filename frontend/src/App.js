import { useState, useCallback } from "react";
import "./App.css";
import Data from "./components/Data";
import TopBar from "./components/TopBar";
import Header from "./components/Header";

function App() {
  const [selectedDateOrder, setSelectedDateOrder] = useState("");
  const [selectedCategory, setselectedCategory] = useState("");

  const dateOptions = ["under construction", "ascending", "descending"];
  const categoriesOptions = ["", "c1", "c2", "c3", "c5", "c6", "c7"];

  const callbackDate = useCallback(filter => {
    setSelectedDateOrder(filter);
    console.log("triggered", selectedDateOrder);
  }, []);

  const callbackCategories = useCallback(filter => {
    setselectedCategory(filter);
    console.log("triggered", selectedCategory);
  }, []);

  return (
    <div className="App">
      <Header />
      <TopBar
        callbackDate={callbackDate}
        callbackCategories={callbackCategories}
        selectedDateOrder={selectedDateOrder}
        selectedCategory={selectedCategory}
        dateOptions = {dateOptions}
        categoriesOptions= {categoriesOptions}
      />
      <Data
        selectedDateOrder={selectedDateOrder}
        selectedCategory={selectedCategory}
        dateOptions = {dateOptions}
        categoriesOptions= {categoriesOptions}
      />
    </div>
  );
}

export default App;
