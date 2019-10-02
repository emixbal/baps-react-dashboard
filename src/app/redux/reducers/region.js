const initialState = {
    data: [],
    isLoading: false,
    isFinish: false,
    isError: false,
    statusCode:0,
    errorMessage:'',
    regionDetail:{}
}

export default (state = initialState, action) => {
    switch (action.type) {
        // case create a new region
        case "FETCH_ALL_PENDING":
            return {
                ...state, isLoading: true
            }

        case "FETCH_ALL_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                isError: false,
                data: action.payload.data
            }

        case "FETCH_ALL_REJECTED":
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
                isError: true,
                isLoading: false,
                errorMessage:'server not response',
            }

        // case create a new region
        case "CREATE_PENDING":
            return {
                ...state, isLoading: true
            }

        case "CREATE_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                isError: false,
                regionDetail: action.payload.data
            }

        case "CREATE_REJECTED":
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
                isError: true,
                isLoading: false,
                errorMessage:'server not response',
            }

        // case get detail
        case "GET_DETAIL_PENDING":
            return {
                ...state, isLoading: true
            }

        case "GET_DETAIL_FULFILLED":
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                regionDetail: action.payload.data
            }

        case "GET_DETAIL_REJECTED":
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
                isError: true,
                isLoading: false,
                errorMessage:'server not response',
            }

        default:
            return state
    }
}