import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(({ targetTime ,remainingTime,onRest },ref) => {
  const lost=remainingTime<=0;
  const score=Math.round((1-remainingTime/(targetTime*1000))*100)
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
  return createPortal(
    <dialog ref={dialog} className="result-modal" >
      {lost && <h2>You Lost</h2>}
      {!lost && <h2>You Score : {score}</h2>}
      
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the timer with <strong> {formatingRemainingTime} seconds left.</strong></p>
      <form method="dialog" onSubmit={onRest}>
        <button>Close</button>
      </form>
    </dialog>
    ,
    document.getElementById('modal')
  );
});

export default ResultModal;
