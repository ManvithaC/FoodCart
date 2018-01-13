export const SELECTED_ITEM = 'SELECTED_ITEM';
export const REMOVED_ITEM = 'REMOVED_ITEM';


export function selecteditem(newItem) {
    return {
        type : SELECTED_ITEM,
        newItem                                // this is same as newItem : newItem in ES6
    }
}

export function doneTodo(changed) {
    return {
        type : REMOVED_ITEM,
        changed
    }
}
