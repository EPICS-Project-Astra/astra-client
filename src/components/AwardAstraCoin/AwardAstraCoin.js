import React, { useState } from "react";
import classes from "./AwardAstraCoin.module.scss";
import { ReactComponent as Astra } from "../../assets/icons/rocket.svg";
import { X, XCircle } from "react-feather";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { sendCoins } from "../../actions/post";

const AwardAstraCoin = (props) => {
    const [coins, setCoins] = useState(0);

    const handleCoins = async (e) => {
        e.preventDefault();
        const error = await props.sendCoins(props.id, coins, props.singlePost);
        if (!error) {
            props.toggleModal(props.id);
        }
    };

    return (
        <>
            <div className={classes.modal}>
                <div
                    onClick={() => props.toggleModal(props.id)}
                    className={classes.overlay}
                ></div>
                <form className={classes.modalContent} onSubmit={handleCoins}>
                    <div className={classes.username}>
                        <span className={classes.title}>Receiver username</span>
                        <span className={classes.content}>Username</span>
                    </div>

                    <div className={classes.balance}>
                        <span className={classes.title}>Your balance</span>
                        <span className={classes.content}>
                            <div className={classes.text}>12000</div>
                            <Astra height={20} width={20} />
                        </span>
                    </div>
                    <div className={classes.bottom}>
                        <span className={classes.input}>
                            <input
                                type="text"
                                placeholder="Enter Amount"
                                value={coins}
                                onChange={(e) => setCoins(e.target.value)}
                            />
                        </span>
                        <button type="submit" className={classes.award}>
                            <Astra height={20} width={20} />
                            <div className={classes.text}>Award</div>
                        </button>
                    </div>

                    {props.alert && (
                        <span className={classes.errorDiv}>
                            <XCircle />
                            <div>{props.alert}</div>
                        </span>
                    )}

                    <div
                        className={classes.closeModal}
                        onClick={() => props.toggleModal(props.id)}
                    >
                        <X />
                    </div>
                </form>
            </div>
        </>
    );
};

AwardAstraCoin.propTypes = {
    alert: PropTypes.string,
    toggleModal: PropTypes.func.isRequired,
    sendCoins: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
    return {
        alert: state.alert.payload?.msg,
    };
};
const mapDispatchToProps = {
    sendCoins: sendCoins,
};

export default connect(mapStateToProps, mapDispatchToProps)(AwardAstraCoin);
