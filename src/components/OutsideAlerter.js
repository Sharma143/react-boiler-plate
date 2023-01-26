import React, { useRef, useEffect } from "react";

function useOutsideAlerter(ref, closeModal) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if(typeof closeModal !== "undefined") closeModal()
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.closeModal);

  return <div ref={wrapperRef}>{props.children}</div>;
}

export default OutsideAlerter;
