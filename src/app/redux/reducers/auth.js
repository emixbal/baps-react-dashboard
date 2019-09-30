const initialState = {
    data: [],
    isError:false,
    statusCode:'',
    errorMessage:'',
    isLoading: false,
    isFinish: false,
    isNetworkError: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        // case login
        case "LOGIN_PENDING":
            return {
                ...state, isLoading: true
            }

        case "LOGIN_FULFILLED":
            localStorage.setItem('tokenType', action.payload.data.type);            
            localStorage.setItem('token', action.payload.data.token);
            localStorage.setItem('refreshToken', action.payload.data.refreshToken);
            return {
                ...state,
                isLoading: false,
                isFinish: true,
            }

        case "LOGIN_REJECTED":            
            if(typeof(action.payload.response)!=='undefined'){
                return {
                    ...state,
                    statusCode:action.payload.response.status,
                    errorMessage:action.payload.response.data.message,
                    isError: true,
                    isLoading: false
                }
            }
            return {
                ...state,
                isNetworkError: true,
                isLoading: false
            }

        default:
            return state
    }
}