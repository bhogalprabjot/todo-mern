export default (lists = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "ADD_NEW_LIST":
            return [...lists, action.payload];
        case "UPDATE_LIST":
            // const newList = lists.filter(list=>list.id!=action.payload.id);
            for (let i = 0; i < lists.length; i++) {
                if (lists[i].id == action.payload.id)
                    lists[i] = action.payload
            }
            return [...lists];

        case "DELETE_LIST":
            return [...lists.filter(list => list.id != action.payload)]
        default:
            return lists;
    }

}