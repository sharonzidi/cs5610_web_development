const defaultState = [
    ['',''],
    ['','']
];

export default function gameReducer(
    state = defaultState, action
) {
    if (action.type === 'boardClick') {
        const value = state[action.x][action.y];
        if (value === '') {
            state[action.x][action.y] = ' ';
        } else {
            state[action.x][action.y] = '';
        }
        return [...state];
    }
    return state;
}