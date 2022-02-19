import axios from "axios";
import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES_POST,
    UPDATE_LIKES_POSTS,
    DELETE_POST,
    ADD_POST,
    ADD_COMMENT,
    DELETE_COMMENT,
    GET_POST_FETCH,
    GET_POST_SUCCESS,
    SEND_COINS_POST,
    SEND_COINS_POSTS,
} from "./types";
import { showAlert } from "./alert";

//get posts
export const getPosts = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/posts");
        dispatch({ type: GET_POSTS, payload: res.data });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

//like post
export const likePost =
    (post_id, type = "multiple") =>
    async (dispatch) => {
        try {
            const res = await axios.put(`/api/posts/${post_id}/likes`);
            type === "multiple"
                ? dispatch({
                      type: UPDATE_LIKES_POSTS,
                      payload: { id: post_id, likes: res.data },
                  })
                : dispatch({
                      type: UPDATE_LIKES_POST,
                      payload: { id: post_id, likes: res.data },
                  });
        } catch (err) {
            const errors = err.response.data.errors;

            if (errors) {
                errors.forEach((error) =>
                    dispatch(showAlert(error.msg, "danger"))
                );
            }

            dispatch({
                type: POST_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status,
                },
            });
        }
    };

//unlike post
export const unlikePost =
    (post_id, type = "multiple") =>
    async (dispatch) => {
        try {
            const res = await axios.put(`/api/posts/${post_id}/unlike`);
            type === "multiple"
                ? dispatch({
                      type: UPDATE_LIKES_POSTS,
                      payload: { id: post_id, likes: res.data },
                  })
                : dispatch({
                      type: UPDATE_LIKES_POST,
                      payload: { id: post_id, likes: res.data },
                  });
        } catch (err) {
            const errors = err.response.data.errors;

            if (errors) {
                errors.forEach((error) =>
                    dispatch(showAlert(error.msg, "danger"))
                );
            }

            dispatch({
                type: POST_ERROR,
                payload: {
                    msg: err.response.statusText,
                    status: err.response.status,
                },
            });
        }
    };
//add post
export const addPost = (formData) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify(formData);
    try {
        const res = await axios.post("/api/posts", body, config);
        dispatch({ type: ADD_POST, payload: res.data });
        dispatch(showAlert("Post added.", "success"));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(showAlert(error.msg, "danger")));
        }

        dispatch({
            type: POST_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

//get post by ID
export const getPostById = (post_id) => async (dispatch) => {
    try {
        dispatch({ type: GET_POST_FETCH });
        const res = await axios.get(`/api/posts/${post_id}`);
        dispatch({ type: GET_POST_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

//add comment to post
export const addComment = (post_id, formData) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify(formData);
    try {
        const res = await axios.post(
            `/api/posts/${post_id}/comments`,
            body,
            config
        );
        dispatch({ type: ADD_COMMENT, payload: res.data });
        dispatch(showAlert("Comment added.", "success"));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(showAlert(error.msg, "danger")));
        }

        dispatch({
            type: POST_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

//delete comment from post
export const deleteComment = (post_id, comment_id) => async (dispatch) => {
    try {
        const res = await axios.delete(
            `/api/posts/${post_id}/comments/${comment_id}`
        );
        dispatch({ type: DELETE_COMMENT, payload: comment_id });
        dispatch(showAlert("Comment removed.", "success"));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(showAlert(error.msg, "danger")));
        }

        dispatch({
            type: POST_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

//delete post
export const deletePost = (post_id) => async (dispatch) => {
    try {
        const res = await axios.delete(`/api/posts/${post_id}`);
        dispatch({ type: DELETE_POST, payload: { id: post_id } });
        dispatch(showAlert("Post removed.", "success"));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(showAlert(error.msg, "danger")));
        }

        dispatch({
            type: POST_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

export const sendCoins = (post_id, coins, singlePost) => async (dispatch) => {
    try {
        const coinsNo = parseInt(coins);
        function isFloat(n) {
            return coins.indexOf(".") !== -1 ? true : false;
        }
        if (
            coinsNo < 0 ||
            coinsNo === 0 ||
            isNaN(coinsNo) ||
            isFloat(coinsNo)
        ) {
            return dispatch(showAlert("Invalid coins number", "danger"));
        }
        const res = await axios.put("/api/posts/" + post_id + "/coins", {
            coins: coinsNo,
        });
        singlePost
            ? dispatch({ type: SEND_COINS_POST, payload: res.data })
            : dispatch({ type: SEND_COINS_POSTS, payload: res.data });
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(showAlert(error.msg, "danger")));
        }
        dispatch({
            type: POST_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};
