import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { clearPost, getPostById } from '../../actions/post';
import AwardAstraCoin from '../../components/AwardAstraCoin/AwardAstraCoin';
import Comment from '../../components/Comment/Comment';
import CommentForm from '../../components/CommentForm/CommentForm';
import DashboardNavbar from '../../components/DashboardNavbar/DashboardNavbar';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import PostContent from '../../components/PostContent/PostContent';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import classes from '../../scss/DashboardCommon.module.scss';

const PostView = (props) => {
	document.body.style = 'background: #FAFAFA;';
	const { id } = useParams();

	const [modal, setModal] = useState(false);

	const toggleModal = () => {
		setModal(!modal);
	};

	if (modal) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}

	useEffect(() => {
		props.getPostById(id);

		return () => {
			props.clearPost();
		};
	}, []);

	return (
		<>
			<DashboardNavbar />
			<div className={classes.dashboard}>
				<div className={classes.sidebarWrapper}>
					<LeftSidebar />
				</div>
				<div className={classes.postsWrapper}>
					<div className={classes.postView}>
						{props.post.post && (
							<PostContent
								className={classes.postContent}
								key={props.post.post._id}
								post={props.post.post}
								showActions={true}
								image
								toggleModal={toggleModal}
							/>
						)}
						<hr />
						<CommentForm id={props.post.post?._id} />
						{props.post.post?.comments.map((comment) => (
							<>
								<hr />
								<Comment
									user={props.post.post.user}
									key={comment._id}
									comment={comment}
								/>
							</>
						))}
					</div>
				</div>
				<div className={classes.rightSideWrapper}>
					<RightSidebar />
				</div>
			</div>
			{modal && (
				<AwardAstraCoin
					post={props.post.post}
					key={props.post.post._id}
					id={props.post.post._id}
					singlePost={true}
					toggleModal={toggleModal}
				/>
			)}
		</>
	);
};

PostView.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		post: state.post,
		loading: state.post.loading
	};
};

const mapDispatchToProps = {
	getPostById: getPostById,
	clearPost: clearPost
};

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
