import { auth,provider } from "../config/firebase";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login =()=>{
    const navigate= useNavigate();

    const signInWithGoogle = async () =>{
       const result = await signInWithPopup(auth, provider);
       console.log(result);
       navigate("/");
    };


   return (
    <div className="userInfo">
        <p>Sign In Wth Google To Continue </p>
        <button onClick={signInWithGoogle}>Sign In With Google </button>
    </div>
   )
}