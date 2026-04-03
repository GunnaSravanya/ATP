import "./App.css";
import ApiDemo from "./components/ApiDemo.jsx";
import TestRefTypes from "./components/TestRefTypes.jsx";
import Counter from "./components/Counter.jsx";
import Users from "./components/Users.jsx";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import UserForm from "./components/UserForm.jsx";

function App() {
  //state
  //react elements
  return (
    <div>
      <Nav />
      <div className="min-h-screen">
        <Users />
      </div>
      <Footer />
    </div>
  );
}
export default App;
