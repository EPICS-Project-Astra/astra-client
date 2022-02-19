// import classes from "./BuyAC.module.scss";
import React from "react";

const CreatePost = () => {
    return (
<>
<div className="card" style={card}>
            <div style={section1}>
              <img className="logo" alt="logo" src="https://1000logos.net/wp-content/uploads/2016/10/Apple_logo_grey.png%22%3E"/>
            </div>

            <div style={section2}>
                <textarea style="height: 20px;   outline:none; border: 0;padding-top: 10%;" placeholder="write an awsome title here" id="w3review" name="w3review" rows="4" cols="50"></textarea>
                <hr/>
                <textarea style="height: 70px;   outline:none; border: 0;" placeholder="Give a description here ... " id="w3review" name="w3review" rows="4" cols="50"></textarea>
                <hr/><br/>

                <div style={section4}/>
                <div style={section5}></div>
                <div style={ section6}><button className="button">Post</button></div>

            </div>

            <div style={section3}>
            </div>
        </div>
</>
    );
};

export default CreatePost;