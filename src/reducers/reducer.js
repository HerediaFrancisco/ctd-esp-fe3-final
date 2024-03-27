export const reducer = (state, action) => {
    switch(action.type) {
        case 'GET_LIST':
            return {...state, listOdon: action.payload}
        case 'GET_DETAIL':
            return {...state, detailOdon: action.payload}
        case 'ADD_FAV':
                return {...state, favs: [...state.favs, action.payload]
                }
        case 'THEME':
            return {...state, theme: state.theme === 'dark' ? 'light' : 'dark'}
    }
}