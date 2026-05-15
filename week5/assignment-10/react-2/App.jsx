import "./App.css";
import Users from "./components/Users.jsx";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";

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
