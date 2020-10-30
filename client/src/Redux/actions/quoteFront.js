export const SET_QUOTE = 'SET_QUOTE';
export const setQuote = (quote) => {
    return {
        type: SET_QUOTE,
        payload: quote
    }
}
export const getQuote = () => {
    return async dispatch => {
        const res = await fetch(`/api/quote`)
        if (res.ok) {
            const quote = await res.json();
            dispatch(setQuote(quote));
        }
        return res;
    };
};