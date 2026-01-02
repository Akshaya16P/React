import React from "react";
// import CountUp from "react-countup";
// import Tilty from "react-tilty";
// import ReactLogo from './assets/react.svg'; 
// import {ToastContainer, toast} from "react-toastify";
// import { DNA } from "react-loader-spinner";
import Confetti from 'react-confetti';
function Addons() {
    //  const notify = () => toast("Wow so easy!");
    return (
        <>
        {/* <div className="addons-container">
                <DNA
                    visible={true}
                    height="120"
                    width="120"
                    ariaLabel="dna-loading"
                    wrapperClass="dna-wrapper"
                />
                <h2>Loading, please wait...</h2>
            </div> */}
            <Confetti 
            numberOfPieces={1000}
            // gravity={20}
            />
        </>
        // <>
        //   <CountUp
        //     end={100}
        //     duration={5}
        //   />
        // </>
    //      <div className="App">
    //   <Tilty>
    //     <img src={ReactLogo} alt="React Logo" />
    //   </Tilty>
    // </div>
    // <div>
    //     <button onClick={notify}>Notify!</button>
    //     <ToastContainer />
    //   </div>
    
  

    );
}
export default Addons;