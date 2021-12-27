const SAVE_MESSAGE_DRAFT = 'SAVE-MESSAGE-DRAFT',
      SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {
  switch (true) {
    case action.type === SEND_MESSAGE:
      const message = {
        userID: 1,
        message: state.messageDraft
      }
      state.messages.push(message)
      state.messageDraft = ''
      return state
    case action.type === SAVE_MESSAGE_DRAFT:
      state.messageDraft = action.textMessage
      return state
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