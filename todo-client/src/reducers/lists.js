export default (lists = [], action) => {
    switch(action.type){
        case "FETCH_ALL":
            return action.payload;
        case "ADD_NEW_LIST":
            return [...lists, action.payload];
        default:
            return lists;
    } 
    
}