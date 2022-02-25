import classes from './Post.module.scss';

const Post = (props) => {
	return <div className={classes.post}>{props.children}</div>;
};

export default Post;
