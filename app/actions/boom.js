import {push} from 'react-router-redux'

export function boom(cb) {
    return (dispatch, getState) => {
        dispatch(push('/end/:0'))
    };
};