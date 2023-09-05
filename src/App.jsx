import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./component/MyNav";
import Footer from "./component/footer";
import Welcome from "./component/Welcome";
import AllTheBooks from "./component/AllTheBooks";
function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <Footer />
    </div>
  );
}

export default App;
