const initialState = {
    data: [],
    isLoading: false,
    isFinish: false,
    isError: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        // case login
        case "LOGIN_PENDING":
            return {
                ...state, isLoading: true
            }

        case "LOGIN_FULFILLED":
            return {
                ...state,
                isLoading: false, isFinish: true,
                data: action.payload.data.data
            }

        case "LOGIN_REJECTED":
            return {
                ...state, isError: true, isLoading: false
            }

        default:
            return state
    }
}