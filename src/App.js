import './App.css'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

// <App />
const App = () => {
  return (
    //ВСЕГДА должен быть ОДИН корневой узел
    // Это не HTML разметка, а JSX разметка (HTML, встроенный в JS)
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  )
}

export default App;
