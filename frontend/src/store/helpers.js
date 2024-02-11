function globalReducer(state, payload) {
    switch (payload.type) {
            case "CHANGE_LANG":
                return { ...state, lang: payload.currentLanguage }
        default:
            return state
    }
}

export {
    globalReducer
}