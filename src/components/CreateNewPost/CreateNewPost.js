import axios from 'axios';
import { useState } from 'react';
import { Film, Image, Send } from 'react-feather';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addPost } from '../../actions/post';
import Avatar from '../Avatar/Avatar';
import classes from './CreateNewPost.module.scss';

const Create = (props) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const uploadImage = async () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'projectastra');
    data.append('cloud_name', 'doirwoc6h');
    try {
      const result = await axios.post(
        'https://api.cloudinary.com/v1_1/doirwoc6h/image/upload',
        data
      );
      return result.data.url;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const handlePost = async (e) => {
    e.preventDefault();

    const imageURL = await uploadImage();

    console.log('df', imageURL);

    const formData = {
      title,
      text,
      assets: imageURL ? [imageURL] : []
    };

    props.addPost(formData);

    navigate('/dashboard');
  };

  return (
    <>
      <form className={classes.parent1} onSubmit={handlePost}>
        <div className={classes.child1}>
          <Avatar size={40} />
        </div>
        <div className={classes.child2}>
          <div className={classes.fieldDiv}>
            <input
              type="text"
              className={classes.textField0}
              placeholder="Write an awesome title here...."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {/* <hr className={classes.createhr}></hr> */}
            <input
              type="textarea"
              className={classes.textField1}
              placeholder="Give a description here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className={classes.bottom}>
            <hr className={classes.createhr}></hr>
            <div className={classes.subnav}>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
              {/* <div className={classes.subnavico}>
                <Image size={27} />
              </div> */}
              <div className={classes.subnavbut}>
                <button type="submit" className={classes.buttoncnp}>
                  <Send size={20} className={classes.icon} />
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

const mapDispatchToProps = {
  addPost
};

export default connect(null, mapDispatchToProps)(Create);
