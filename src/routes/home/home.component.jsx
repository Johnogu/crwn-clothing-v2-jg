import { Outlet } from "react-router-dom";
//import "./categories.styles.scss";
//import "./components/category-item/category-item.component";
//import CategoryItem from "./components/category-item/category-item.component";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  return (
    <div>
      <Directory />;
      <Outlet />
    </div>
  );
};

export default Home;
