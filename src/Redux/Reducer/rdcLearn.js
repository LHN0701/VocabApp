const initialState = {
    lstData: [],
    lstDataFail : [],
}

const rdcLearn = (state = initialState, {type, payload}) => {
switch (type) {
    case "Add":
        return {
            lstData: [...state.lstData, payload],
            lstDataFail: [...state.lstDataFail]
        }

    case "AddFail":
        return {
            lstData: [...state.lstData],
            lstDataFail: [...state.lstDataFail, payload]
        }

    case "Remove":
        return {
            lstData: [],
            lstDataFail: [],
        }

    default:
        return state;
}
}

export default rdcLearn;