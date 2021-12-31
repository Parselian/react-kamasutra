import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import navbarReducer from './navbarReducer'

let rerenderEntireTree

let store = {
  _state:  {
    navbar: {
      friends: [
        {
          id: 1,
          img: "https://volonter61.ru/800/600/https/oir.mobi/uploads/posts/2020-01/1579279425_13-17.jpg",
          name: "Ivan"
        },
        {
          id: 2,
          img: "https://volonter61.ru/800/600/https/oir.mobi/uploads/posts/2020-01/1579279425_13-17.jpg",
          name: "Maria"
        },
        {
          id: 3,
          img: "https://volonter61.ru/800/600/https/oir.mobi/uploads/posts/2020-01/1579279425_13-17.jpg",
          name: "Alex"
        }
      ]
    },
    profilePage: {
      postDraft: '',
      posts: [
        {
          id: 1,
          text: "Post lorem 1",
          likesCount: 9
        },
        {
          id: 2,
          text: "Post lorem 2",
          likesCount: 3
        },
        {
          id: 3,
          text: "Post lorem 3",
          likesCount: 0
        }
      ]
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Dmitry",
          msg: "message 1",
          img: "https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg"
        },
        {
          id: 2,
          name: "Olya",
          msg: "message 1",
          img: "https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg"
        },
        {
          id: 3,
          name: "Sasha",
          msg: "Sorry, i bus...",
          img: "https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg"
        }
      ],
      messageDraft: '',
      messages: [
        {
          userID: 1,
          message: "message 1"
        },
        {
          userID: 1,
          message: "message 2"
        },
        {
          userID: 1,
          message: "message 3"
        },
      ]
    },
  },
  _subscriber() {
    console.log('subscriber doesn`t exist!')
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.navbar = navbarReducer(this._state.navbar, action)

    this._subscriber()
  },

  subscribe(observer) {
    this._subscriber = observer
  }
}
export default store