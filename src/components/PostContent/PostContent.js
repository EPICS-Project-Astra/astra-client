import bag from '../../assets/images/bag.png';
import { Heart, MessageSquare } from 'react-feather';
import { ReactComponent as Astra } from '../../assets/icons/rocket.svg';
import classes from './PostContent.module.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../User/User';
import { connect } from 'react-redux';
import { deletePost, likePost, unlikePost } from '../../actions/post';
import PropTypes from 'prop-types';
import formatNumber from '../../utils/formatNumber';

const PostContent = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(
      props.post.likes.filter((item) => {
        return item.user === props.auth.user?._id;
      }).length > 0
    );
  }, [props.post, props.auth.user]);

  return (
    <div className={props.className}>
      <User id={props.post._id} date={props.post.date} user={props.post.user} />
      <div className={classes.title}>{props.post.title}</div>
      <div className={classes.description}>{props.post.text}</div>
      <div className={classes.image}>
        {props.post.assets.length > 0 && (
          <img src={props.post.assets[0]} alt="bag" className={classes.img} />
        )}
      </div>
      <div className={classes.interaction}>
        <div
          className={isLiked ? classes.liked : classes.disliked}
          onClick={() => {
            setIsLiked(() => {
              !isLiked
                ? props.likePost(props.post._id, props.singlePost)
                : props.unlikePost(props.post._id, props.singlePost);

              return !isLiked;
            });
          }}
        >
          <Heart size={20} />
          <span>{formatNumber(props.post.likes.length)} likes</span>
        </div>
        <Link to={'/post/' + props.post._id} className={classes.comment}>
          <MessageSquare size={20} />{' '}
          <span>{formatNumber(props.post.comments.length)} comments</span>
        </Link>
        <div
          className={classes.astracoin}
          onClick={() => props.toggleModal(props.post._id)}
        >
          <Astra width={20} height={20} />
          <span>{formatNumber(props.post.coins)} astracoins</span>
        </div>
      </div>
    </div>
  );
};

PostContent.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  likePost: PropTypes.func.isRequired,
  unlikePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = {
  likePost: likePost,
  unlikePost: unlikePost,
  deletePost: deletePost
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContent);
