import classes from './Dialogs.module.css'
import Dialogs from "./Dialogs"
import React from "react"
import { connect } from 'react-redux'
import {sendMessageActionCreator, saveMessageDraftActionCreator} from '../../redux/dialogsReducer'

/*const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state = store.getState().dialogsPage
          const sendMessage = () => {
            store.dispatch(sendMessageActionCreator())
          }
          const saveMessageDraft = (textMessage) => {
            store.dispatch(saveMessageDraftActionCreator(textMessage))
          }

          return <Dialogs saveMessageDraft={saveMessageDraft} sendMessage={sendMessage} dialogs={state.dialogs}
                          messages={state.messages} messageDraft={state.messageDraft}/>
        }
      }

    </StoreContext.Consumer>
  )
}*/

const mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
    messageDraft: state.dialogsPage.messageDraft
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveMessageDraft: (textMessage) => {
      dispatch(saveMessageDraftActionCreator(textMessage))
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer