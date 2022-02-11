const SAVE_MESSAGE_DRAFT = 'SAVE-MESSAGE-DRAFT',
      SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  const stateCopy = {...state}

  switch (true) {
    case action.type === SEND_MESSAGE:
      const message = {
        userID: 1,
        message: stateCopy.messageDraft
      }
      stateCopy.messages = [...state.messages]
      stateCopy.messages.push(message)
      stateCopy.messageDraft = ''
      return stateCopy
    case action.type === SAVE_MESSAGE_DRAFT:
      stateCopy.messageDraft = action.textMessage
      return stateCopy
    default:
      return state
  }

  return state
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const saveMessageDraftActionCreator = (message) => (
  {
    type: SAVE_MESSAGE_DRAFT,
    textMessage: message
  }
)

export default dialogsReducer