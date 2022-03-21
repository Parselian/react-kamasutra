import './App.css'
import Header from "./components/Header/Header"
import NavbarContainer from "./components/Navbar/NavbarContainer"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import News from "./components/News/News"
import UsersContainer from './components/Users/UsersContainer'
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import {BrowserRouter as Router, Route} from "react-router-dom"

// <App />
const App = () => {

  return (
    //ВСЕГДА должен быть ОДИН корневой узел
    // Это не HTML разметка, а JSX разметка (HTML, встроенный в JS)
    <Router>
      <div className="app-wrapper">
        <Header/>
        <NavbarContainer />
        <div className="app-wrapper__content">
          <Route render={ () => <ProfileContainer /> } path="/profile"/>
          <Route render={ () => <DialogsContainer /> } path="/messages"/>
          <Route render={ ()=> <UsersContainer />} path="/users"/>
          <Route component={News} path="/news"/>
          <Route component={Music} path="/music"/>
          <Route component={Settings} path="/settings"/>
        </div>
      </div>
    </Router>
  )
}

export default App
