const ADD_POST = 'ADD-POST'
      SAVE_POST_DRAFT = 'SAVE-POST-DRAFT'
      SAVE_MESSAGE_DRAFT = 'SAVE-MESSAGE-DRAFT'
      SEND_MESSAGE = 'SEND-MESSAGE'

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
    switch (true) {
      case action.type === ADD_POST:
        const postsArr = this._state.profilePage.posts
        const post = {
          id: postsArr[postsArr.length - 1].id + 1,
          text: this._state.profilePage.postDraft,
          likesCount: 0
        }
        postsArr.push(post)
        this._state.profilePage.postDraft = ''
        this._subscriber()
        break
      case action.type === SAVE_POST_DRAFT:
        this._state.profilePage.postDraft = action.postMessage
        this._subscriber()
        break
      case action.type === SEND_MESSAGE:
        const message = {
          userID: 1,
          message: this._state.dialogsPage.messageDraft
        }
        this._state.dialogsPage.messages.push(message)
        this._state.dialogsPage.messageDraft = ''
        this._subscriber()
        break
      case action.type === SAVE_MESSAGE_DRAFT:
        this._state.dialogsPage.messageDraft = action.textMessage
        this._subscriber()
        break
      default:
        console.error('Requested function does not exist!')
        return
    }
  },

  subscribe(observer) {
    this._subscriber = observer
  }
}
export default store

export const addPostActionCreator = () => ({ type: ADD_POST }) //короткий способ записи простых функций
export const savePostActionCreator = (text) => {
  return {
    type: SAVE_POST_DRAFT,
    postMessage: text
  }
}
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const saveMessageDraftActionCreator = (message) => (
  {
    type: SAVE_MESSAGE_DRAFT,
    textMessage: message
  }
)