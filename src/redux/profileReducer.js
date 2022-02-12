const ADD_POST = 'ADD-POST',
  SAVE_POST_DRAFT = 'SAVE-POST-DRAFT'

const initialState = {
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
}

const profileReducer = (state = initialState, action) => {
  switch (true) {
    case action.type === ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts[state.posts.length - 1].id + 1,
            text: state.postDraft,
            likesCount: 0
          }
        ],
        postDraft: ''
      }
    case action.type === SAVE_POST_DRAFT:
      return {
        ...state,
        postDraft: action.postMessage
      }
    default:
      return state
  }

  return state
}

export const addPostActionCreator = () => ({type: ADD_POST}) //короткий способ записи простых функций
export const savePostActionCreator = (text) => {
  return {
    type: SAVE_POST_DRAFT,
    postMessage: text
  }
}

export default profileReducer