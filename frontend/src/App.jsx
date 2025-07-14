import { useDispatch } from "react-redux";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useEffect } from "react";
import { asynccurrentuser } from "./store/actions/userActions";
import { asyncloadproducts } from "./store/actions/productActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynccurrentuser());
    dispatch(asyncloadproducts());
  }, []);
  return (
    <div className="w-full h-full px-5 overflow-auto">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
