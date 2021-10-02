import React from "react";
import { useState, useCallback } from "react";
import "./App.css";
import Data from "./components/Data";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Workout from "./components/Workout";
import { Route, BrowserRouter } from "react-router-dom";

const Context = React.createContext();

function App() {
  const [selectedDateOrder, setSelectedDateOrder] = useState("");
  const [selectedCategory, setselectedCategory] = useState("");
  const [selectedWorkoutObject, setSelectedWorkoutObject] = useState({});
  const [selectedPage, setSelectedPage] = useState(1);

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
  }, []);

  const callbackCategories = useCallback(filter => {
    setselectedCategory(filter);
  }, []);

  const getWorkspaceId = useCallback(object => {
    setSelectedWorkoutObject(object);
  }, []);

  const getSelectedPage = useCallback(pageNumber => {
    setSelectedPage(pageNumber);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path={"/data/" + selectedPage}>
          <TopBar
            
            callbackCategories={callbackCategories}
            categoriesOptions={categoriesOptions}
            filterCategoriesLabel={filterCategoriesLabel}
            selectedCategory={selectedCategory}
            // data to be passed to Filter
            dateOptions={dateOptions}
            callbackDate={callbackDate}
            selectedDateOrder={selectedDateOrder}
            filterDateLabel={filterDateLabel}
          />
          <Data
            selectedDateOrder={selectedDateOrder}
            selectedCategory={selectedCategory}
            dateOptions={dateOptions}
            categoriesOptions={categoriesOptions}
            getWorkspaceId={getWorkspaceId}
            selectedPage={selectedPage}
            getSelectedPage={getSelectedPage}
          />
        </Route>
        <Route
          exact
          path={"/" + selectedWorkoutObject.index}
          component={() => (
            <Workout data={selectedWorkoutObject} selectedPage={selectedPage} />
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
