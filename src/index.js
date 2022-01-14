import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import store from './redux/redux-store'
import App from './App'
import reportWebVitals from './reportWebVitals'
import StoreContext from './StoreContext'

export const rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
