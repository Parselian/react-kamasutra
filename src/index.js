import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = {
  dialogs: [
    {
      id: 1,
      name: "Dmitry",
      msg: "Hi",
      img: "https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg"
    },
    {
      id: 2,
      name: "Olya",
      msg: "Morning",
      img: "https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg"
    },
    {
      id: 3,
      name: "Sasha",
      msg: "Sorry, i bus...",
      img: "https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg"
    }
  ],
  messages: [
    {
      userID: 1,
      message: "Hi"
    },
    {
      userID: 1,
      message: "Morning"
    },
    {
      userID: 1,
      message: "How are you?"
    },
  ]
}

let profile = {
  posts: [
    {
      text: "Post lorem 1",
      likesCount: 9
    },
    {
      text: "Post lorem 2",
      likesCount: 3
    },
    {
      text: "Post lorem 3",
      likesCount: 0
    }
  ]
}

ReactDOM.render(
  <React.StrictMode>
    <App profilePage={profile} dialogsPage={dialogs} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
