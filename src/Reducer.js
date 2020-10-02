import { users } from './data.json'

export const initialState = {
    users: users,
    user: null,
    userToUpdate: null,
    updateElementVisible: false,
    chooseImgProfile: false,
    addUserVisible: false,
    movieInfo: {}
}

const reducer = (state, action) => {
    let user
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.user]
            }
        case "SELECT_USER":
            return {
                ...state,
                user: getUser(action.id)
            }
        case "UPDATE_USER":
            state.users[getIndexOfUser(action.id)] = { ...action.userUpdated, "watchedMovies": getUser(action.id).watchedMovies, "myList": getUser(action.id).myList }
            return {
                ...state
            }
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            }
        case "SET_USER_TO_UPDATE":
            return {
                ...state,
                userToUpdate: action.id === -1 ? null : getUser(action.id)
            }
        case "SET_UPDATE_ELEMENT_VISIBLE":
            return {
                ...state,
                updateElementVisible: action.visible
            }
        case "SET_CHOOSE_PICTURE_VISIBLE":
            return {
                ...state,
                chooseImgProfile: action.visible
            }
        case "SET_PROFILE_IMAGE":
            state.userToUpdate.image = action.image
            return {
                ...state
            }
        case "SET_ADD_USER_VISIBLE":
            return {
                ...state,
                addUserVisible: action.visible
            }
        case "SET_MOVIE_INFO":
            return {
                ...state,
                movieInfo: action.movie
            }
        case "ADD_TO_WATCHED":
            user = getUser(state.user.id)
            if (!state.user.watchedMovies.find(movie => movie.id === action.movie.id)) {
                user.watchedMovies = [...user.watchedMovies, action.movie]
            }
            return {
                ...state,
                user: user
            }
        case "ADD_TO_MYLIST":
            user = getUser(state.user.id)
            if (!state.user.myList.find(movie => movie.id === action.movie.id)) {
                user.myList = [...user.myList, action.movie]
            }
            return {
                ...state,
                user: user
            }
        default:
            return state
    }
    function getUser(id) {
        return state.users.find(user => user.id === id)
    }
    function getIndexOfUser(id) {
        return state.users.indexOf(getUser(id))
    }
}
export default reducer