const FOLLOW = 'FOLLOW',
  UNFOLLOW = 'UNFOLLOW',
  SET_USERS = 'SET_USERS'

const initialState = {
  users: [
    // {
    //   id: 1,
    //   isFollowed: false,
    //   imgUrl: 'https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg',
    //   name: 'Alex',
    //   status: 'Catch them all!',
    //   location: {country: 'France', city: 'Paris'}
    // },
    // {
    //   id: 2,
    //   isFollowed: true,
    //   imgUrl: 'https://cat4you.ru/wp-content/uploads/2/0/6/206748a82ce4894a460e2b70981e08f2.jpeg',
    //   name: 'Stephan',
    //   status: 'F*ck my life',
    //   location: {country: 'Germany', city: 'Berlin'}
    // }
  ]
}

const usersReducer = (state = initialState, action) => {
  switch (true) {
    case action.type === FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
            if (user.id === action.userID) {
              return {
                ...user,
                isFollowed: true
              }
            }

            return user
          })
      }
    case action.type === UNFOLLOW:
      return {
        ...state,
        users:
          state.users.map(user => {
            if (user.id === action.userID) {
              return {
                ...user,
                isFollowed: false
              }
            }
            return user
          })
      }
    case action.type === SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }
    default:
      return state
  }

  return state
}

export default usersReducer

export const followAC = (userID) => ( { type: FOLLOW, userID } )
export const unfollowAC = (userID) => ( { type: UNFOLLOW, userID } )
export const setUsersAC = (users) => ( { type: SET_USERS, users } )