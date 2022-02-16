import { useEffect, useRef } from "react";
import { useState } from "react";
import useClickOutside from "../../utils/useClickOutside";

function DropDownLink(props) {
    const [isVisible, setIsVisible] = useState(false);

    const menuRef = useRef(null);
    const [listening, setListening] = useState(false);

    useEffect(useClickOutside(listening, setListening, menuRef, setIsVisible));

    return (
        <div
            ref={menuRef}
            className={props.className}
            onClick={() => {
                setIsVisible((prevState) => !prevState);
            }}
        >
            {props.children}
            {isVisible && props.DropDown}
        </div>
    );
}

export default DropDownLink;
