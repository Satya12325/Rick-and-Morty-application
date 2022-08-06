import "./App.css";
import Header from "./Components/Header";
import { Home } from "./Pages/Home";
import { Footer } from "./Components/Footer";
import { Router } from "./Routs/Router";
export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Router />
      <Footer />
    </div>
  );
}
