import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import state from './redux/state'
import {addPost, savePostDraft, subscriber} from './redux/state'
import App from './App'
import reportWebVitals from './reportWebVitals'

export const rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} savePostDraft={savePostDraft}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree()
subscriber(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
