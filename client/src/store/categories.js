export const SET_CAT = 'uptrade/categories/SET_CAT';

export const getCategory = (category) => ({
    type: SET_CAT,
    category,
});

export default function reducer(state = {}, action) {
    switch (action.type) {
        case SET_CAT:
            return action.categories;

        default:
            return state;
    }
}