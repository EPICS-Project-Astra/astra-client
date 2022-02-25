import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sticky from 'react-stickynode';
import { getPosts } from '../../actions/post';
import AwardAstraCoin from '../../components/AwardAstraCoin/AwardAstraCoin';
import DashboardNavbar from '../../components/DashboardNavbar/DashboardNavbar';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import Post from '../../components/Post/Post';
import PostContent from '../../components/PostContent/PostContent';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import classes from '../../scss/DashboardCommon.module.scss';

const Dashboard = (props) => {
	document.body.style = 'background: #FAFAFA;';
	const navigate = useNavigate();

	useEffect(() => {
		if (!props.isAuthenticated) {
			return navigate('/login');
		}
		props.getPosts();
	}, []);

	const [modal, setModal] = useState(false);

	const [modalId, setModalId] = useState('');
	const toggleModal = (id) => {
		setModalId(id);
		setModal(!modal);
	};

	if (modal) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}

	return (
		<>
			<Sticky>
				<DashboardNavbar />
			</Sticky>
			<div className={classes.dashboard}>
				<div className={classes.sidebarWrapper}>
					<LeftSidebar />
				</div>
				<div className={classes.postsWrapper}>
					{props.posts.map((post) => (
						<Post key={post._id}>
							<PostContent
								key={post._id}
								post={post}
								showActions={true}
								image
								toggleModal={toggleModal}
							/>
						</Post>
					))}
					{modal && (
						<AwardAstraCoin
							post={props.posts.find(
								(post) => post._id === modalId
							)}
							key={modalId}
							id={modalId}
							singlePost={false}
							toggleModal={toggleModal}
						/>
					)}
				</div>
				<div className={classes.rightSideWrapper}>
					<RightSidebar />
				</div>
			</div>
		</>
	);
};

Dashboard.propTypes = {
	posts: PropTypes.array.isRequired,
	getPosts: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		posts: state.post.posts,
		isAuthenticated: state.auth.isAuthenticated
	};
};

const mapDispatchToProps = {
	getPosts: getPosts
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
