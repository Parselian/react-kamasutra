import './App.css'
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import Profile from "./components/Profile/Profile"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import {BrowserRouter as Router, Route} from "react-router-dom"

// <App />
const App = (props) => {

  return (
    //ВСЕГДА должен быть ОДИН корневой узел
    // Это не HTML разметка, а JSX разметка (HTML, встроенный в JS)
    <Router>
      <div className="app-wrapper">
        <Header/>
        <Navbar state={props.store.getState().navbar}/>
        <div className="app-wrapper__content">
          <Route render={ () => <Profile store={props.store} /> } path="/profile"/>
          <Route render={ () => <DialogsContainer store={props.store} /> } path="/messages"/>
          <Route component={News} path="/news"/>
          <Route component={Music} path="/music"/>
          <Route component={Settings} path="/settings"/>
        </div>
      </div>
    </Router>
  )
}

export default App
