import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(({ targetTime ,remainingTime,onRest },ref) => {
  const lost=remainingTime<=0;
  const dialog=useRef();
  const formatingRemainingTime =(remainingTime/1000).toFixed(2);
  useImperativeHandle(
    ref,
    () => {
      return {
        open(){
          dialog.current.showModal();
        }
      }
    },
    
  )
  return (
    <dialog ref={dialog} className="result-modal" >
      {lost && <h2>You Lost</h2>}
      
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the timer with <strong> {formatingRemainingTime} seconds left.</strong></p>
      <form method="dialog" onSubmit={onRest}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
