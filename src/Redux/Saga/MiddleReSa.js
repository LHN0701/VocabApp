import {takeEvery, takeLatest, delay, put, call} from 'redux-saga/effects'

// async function GetDataApi(a) {
//     let res = await fetch(`https://suggest.dunno.ai/api/suggest`,
//     {
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         method: "POST",
//         body: JSON.stringify({dict: "envi", keyword: a, limit: 50})
//     })
//     let dt = await res.json();
//     return dt
// }

function* GetData({type, payload}) {

    yield put({
        type: "Add",
        payload: payload
    })
    return 0;
}

function* GetDataFail({type, payload}) {

    yield put({
        type: "AddFail",
        payload: payload
    })
    return 0;
}

function* Remove({type, payload}) {

    yield put({
        type: "Remove",
        payload: payload
    })
    return 0;
}

function* MiddleReSa() {
    yield takeLatest("ADD_DATA", GetData)
    yield takeLatest("ADD_DATAFAIL", GetDataFail)
    yield takeLatest("REMOVE", Remove)
}

export default MiddleReSa;