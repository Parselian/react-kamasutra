import classes from './Dialogs.module.css'
import Dialogs from "./Dialogs"
import React from "react"
import {sendMessageActionCreator, saveMessageDraftActionCreator} from '../../redux/dialogsReducer'

const DialogsContainer = (props) => {
  const state = props.store.getState().dialogsPage

  const sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator())
  }
  const saveMessageDraft = (textMessage) => {
    props.store.dispatch(saveMessageDraftActionCreator(textMessage))
  }

  return <Dialogs saveMessageDraft={saveMessageDraft} sendMessage={sendMessage} dialogs={state.dialogs}
                  messages={state.messages} messageDraft={state.messageDraft}/>
}

export default DialogsContainer