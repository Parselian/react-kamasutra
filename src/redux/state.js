let state = {
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
  },
  dialogsPage: {
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
  },
}

export default state