import { useState, useCallback } from "react";
import "./App.css";
import Data from "./components/Data";
import TopBar from "./components/TopBar";
import Header from "./components/Header";

function App() {
  const [selectedDateOrder, setSelectedDateOrder] = useState("");
  const [selectedCategory, setselectedCategory] = useState("");

  const dateOptions = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const categoriesOptions = ["", "c1", "c2", "c3", "c5", "c6", "c7"];
  const filterDateLabel = "Start date";
  const filterCategoriesLabel = "Category";

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
        dateOptions={dateOptions}
        categoriesOptions={categoriesOptions}
        filterDateLabel={filterDateLabel}
        filterCategoriesLabel={filterCategoriesLabel}
      />
      <Data
        selectedDateOrder={selectedDateOrder}
        selectedCategory={selectedCategory}
        dateOptions={dateOptions}
        categoriesOptions={categoriesOptions}
      />
    </div>
  );
}

export default App;
