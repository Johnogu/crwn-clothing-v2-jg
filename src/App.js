//import "./categories.styles.scss";
//import "./components/category-item/category-item.component";
//import CategoryItem from "./components/category-item/category-item.component";
//import Directory from "./components/directory/directory.component";

import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
