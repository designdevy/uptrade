export const SET_CAT = "SET_CAT";

export const setCategory = (category) => {
    return {
        type: SET_CAT,
        category
    }
}

export const getCategory = () => {
    return async dispatch => {
            const res = await fetch('/api/categories/')
            res.data = await res.json();
            dispatch(setCategory(res.data.category))
            return res;

    }
};

export default function catReducer(state = {}, action) {
    switch (action.type) {
        case SET_CAT:
            return action.categories;
        default:
            return state;
    }
}