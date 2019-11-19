
const initialState = {
    login: false
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                login: true
            }
    }
    return state
};