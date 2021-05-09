import { useState, useCallback } from "react";
import "./App.css";
import Data from "./components/Data";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Workout from "./components/Workout";
import {BrowserRouter, Route } from "react-router-dom";

function App() {
  const [selectedDateOrder, setSelectedDateOrder] = useState("");
  const [selectedCategory, setselectedCategory] = useState("");
  const [selectedWorkout, setSelectedWorkout] = useState();

  const dateOptions = [
    "",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr"
  ];
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

  const getWorkspaceId = useCallback(id => {
    console.log("clicked Id", id);
    setSelectedWorkout(id);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path = "/data">
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
            getWorkspaceId={getWorkspaceId}
          />
        </Route>
        <Route exact path={"/" + selectedWorkout} component={Workout} />
      </BrowserRouter>
    </div>
  );
}

export default App;
