const initialState = {
    data: [],
    isLoading: true,
    isFinish: false,
    isError: false,
    statusCode:0,
    errorMessage:'',
    clusterDetail:{}
}

export default (state = initialState, action) => {
    switch (action.type) {
        // case create a new region
        case "GET_CLUSTERS_BY_REGION_PENDING":
            // console.log("pending===>",action.payload);
            return {
                ...state,
                isLoading: true
            }

        case "GET_CLUSTERS_BY_REGION_FULFILLED":
            // console.log("fulfill===>",action.payload.data.clusters);
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                isError: false,
                data: action.payload.data.clusters
            }

        case "GET_CLUSTERS_BY_REGION_REJECTED":
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