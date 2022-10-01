const initialValue = 0

const changeNumber = (state = initialValue, action) => {
    switch(action.type) {
        case 'IN_NUM': return state + 1;
        default: return state;
    }
}

export default changeNumber