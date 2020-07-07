import { call,put,takeLatest,select } from "redux-saga/effects";

const query = state => state.query


//WORKER SAGA
export function* makingApiCall() {
    try {
        const input_query = yield select(query)
        const response = yield call(fetch,`https://itunes.apple.com/search?term=${input_query}`)
        const data = yield response.json()
        if(data.resultCount!==0){
            yield put({type:"API_CALL", payload: data.results}) 
        } else {
            yield put({type:"API_ERROR"})
        }
        
    } catch(e){
        console.log(e.message,"error")
        yield put({type:"API_ERROR"})
    }
}



//WATCHER SAGA
export function* makeApiCall() {
    yield takeLatest('SEARCH', makingApiCall)
}