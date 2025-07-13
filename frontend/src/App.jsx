import { useDispatch } from "react-redux";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useEffect } from "react";
import { asynccurrentuser } from "./store/actions/userActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynccurrentuser());
  }, []);
  return (
    <div className="w-screen h-screen">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
