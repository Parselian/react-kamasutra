import StoreContext from "../../StoreContext"
import Navbar from './Navbar'

const NavbarContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {

          return <Navbar state={store.getState().navbar}/>
        }
      }
    </StoreContext.Consumer>
  )
}

export default NavbarContainer