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
  let stateCopy = {...state}

  switch (true) {
    case action.type === ADD_POST:
      stateCopy.posts = [...state.posts]
      const postsArr = stateCopy.posts
      const post = {
        id: postsArr[postsArr.length - 1].id + 1,
        text: stateCopy.postDraft,
        likesCount: 0
      }
      postsArr.push(post)
      stateCopy.postDraft = ''
      return stateCopy
    case action.type === SAVE_POST_DRAFT:
      stateCopy.postDraft = action.postMessage
      return stateCopy
    default:
      return state
  }

  return state
}

export const addPostActionCreator = () => ({ type: ADD_POST }) //короткий способ записи простых функций
export const savePostActionCreator = (text) => {
  return {
    type: SAVE_POST_DRAFT,
    postMessage: text
  }
}

export default profileReducer