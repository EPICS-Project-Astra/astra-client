import { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';
import Avatar from '../Avatar/Avatar';
import classes from './CommentForm.module.scss';

const CommentForm = (props) => {
	const [comment, setComment] = useState('');

	const handleComment = (e) => {
		e.preventDefault();
		const formData = {
			text: comment
		};
		props.addComment(props.id, formData);
		setComment('');
	};

	return (
		<form className={classes.commentBox} onSubmit={handleComment}>
			<div className={classes.header}>
				<Avatar />
				<input
					type="text"
					placeholder="Add a public comment..."
					value={comment}
					onChange={(e) => setComment(e.target.value)}
				/>
			</div>
			<div className={classes.footer}>
				<button type="submit">COMMENT</button>
			</div>
		</form>
	);
};

const mapDispatchToProps = {
	addComment: addComment
};

export default connect(null, mapDispatchToProps)(CommentForm);
