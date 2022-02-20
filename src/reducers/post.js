import {
    ADD_POST,
    ADD_COMMENT,
    DELETE_COMMENT,
    DELETE_POST,
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES_POST,
    UPDATE_LIKES_POSTS,
    GET_POST_FETCH,
    GET_POST_SUCCESS,
    SEND_COINS_POST,
    SEND_COINS_POSTS,
} from "../actions/types";

const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {},
};

//eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
            };
        case POST_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case UPDATE_LIKES_POST:
            return {
                ...state,
                post:
                    state.post._id === action.payload.id
                        ? { ...state.post, likes: action.payload.likes }
                        : state.post,
                loading: false,
            };
        case UPDATE_LIKES_POSTS:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post._id === action.payload.id
                        ? { ...post, likes: action.payload.likes }
                        : post
                ),
                loading: false,
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(
                    (post) => post._id !== action.payload.id
                ),
                loading: false,
            };
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts],
                loading: false,
            };
        case GET_POST_FETCH:
            return {
                ...state,
                loading: true,
            };
        case GET_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                post: action.payload,
            };
        case ADD_COMMENT:
            return {
                ...state,
                post: {
                    ...state.post,
                    comments: action.payload,
                },
                loading: false,
            };
        case DELETE_COMMENT:
            return {
                ...state,
                post: {
                    ...state.post,
                    comments: state.post.comments.filter(
                        (comment) => comment._id !== action.payload
                    ),
                },
                loading: false,
            };
        case SEND_COINS_POST:
            return {
                ...state,
                post: {
                    ...state.post,
                    coins: action.payload.coins,
                },
                loading: false,
            };
        case SEND_COINS_POSTS:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post._id === action.payload._id
                        ? { ...post, coins: action.payload.coins }
                        : post
                ),
                loading: false,
            };
        default:
            return state;
    }
}
