import classes from './Dialogs.module.css'
import Dialogs from "./Dialogs"
import React from "react"
import StoreContext from '../../StoreContext'
import {sendMessageActionCreator, saveMessageDraftActionCreator} from '../../redux/dialogsReducer'

const DialogsContainer = () => {
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
}

export default DialogsContainer