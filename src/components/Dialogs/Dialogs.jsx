import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog"
import Message from "./Message/Message"

const Dialogs = () => {
  let dialogsData = [
    {
      id: 1,
      name:"Dmitry",
      msg:"Hi",
      img:"https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg"
    },
    {
      id: 2,
      name:"Olya",
      msg:"Morning",
      img:"https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg"
    },
    {
      id: 3,
      name:"Sasha",
      msg:"Sorry, i bus...",
      img:"https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg"
    }
  ];

  let messagesData = [
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
  return (
    <div className={classes.dialogs}>
      <h2 className={`section__title ${classes['dialogs__title']}`}>Dialogs</h2>
      <div className={classes['dialogs__list']}>
        <Dialog id={dialogsData[0].id} name={dialogsData[0].name} msg={dialogsData[0].msg} img={dialogsData[0].img}/>
        <Dialog id={dialogsData[1].id} name={dialogsData[1].name} msg={dialogsData[1].msg} img={dialogsData[1].img}/>
        <Dialog id={dialogsData[2].id} name={dialogsData[2].name} msg={dialogsData[2].msg} img={dialogsData[2].img}/>
      </div>
      <div className={classes.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
        <Message message={messagesData[2].message}/>
      </div>
    </div>
  )
}

export default Dialogs