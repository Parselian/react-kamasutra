import Navbar from './Navbar'
import { connect } from 'react-redux'

/*const NavbarContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {

          return <Navbar state={store.getState().navbar}/>
        }
      }
    </StoreContext.Consumer>
  )
}*/

const mapStateToProps = (state) => {
  return {
    state: state.navbar
  }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer