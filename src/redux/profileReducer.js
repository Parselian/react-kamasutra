const ADD_POST = 'ADD-POST',
      SAVE_POST_DRAFT = 'SAVE-POST-DRAFT'

const profileReducer = (state, action) => {
  switch (true) {
    case action.type === ADD_POST:
      const postsArr = state.posts
      const post = {
        id: postsArr[postsArr.length - 1].id + 1,
        text: state.postDraft,
        likesCount: 0
      }
      postsArr.push(post)
      state.postDraft = ''
      return state
    case action.type === SAVE_POST_DRAFT:
      state.postDraft = action.postMessage
      return state
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