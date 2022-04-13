export default (state = { isLoading: false, lists: [] }, action) => {
    switch (action.type) {

        case "START_LOADING":
            return { ...state, isLoading: true };
        case "END_LOADING":
            return { ...state, isLoading: false };

        case "FETCH_ALL":
            return { ...state, lists: action.payload };
        case "ADD_NEW_LIST":
            return {
                ...state, lists: [...state.lists, action.payload]
            };
        case "UPDATE_LIST":
            // const newList = lists.filter(list=>list.id!=action.payload.id);
            for (let i = 0; i < state.lists.length; i++) {
                if (state.lists[i].id == action.payload.id)
                    state.lists[i] = action.payload
            }
            return { ...state, lists: [...state.lists] };

        case "DELETE_LIST":
            return { ...state, lists: [...state.lists.filter(list => list.id != action.payload)] };
        default:
            return state;
    }

}