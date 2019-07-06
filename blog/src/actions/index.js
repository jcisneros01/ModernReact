import jsonPlaceholder from '../apis/jasonPlaceholder'
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
   await dispatch(fetchPosts());  

   const ids= _.map(getState().posts, 'userId');
   const uniqIds = _.uniq(ids);
   uniqIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async  dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data })
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get('/users/' + id);

    dispatch({type: 'FETCH_USER', payload: response.data});
};
