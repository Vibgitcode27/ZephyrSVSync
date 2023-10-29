import "../App.css"
import * as React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SignInPop } from "./SignInPopup";
import { SignUpPop } from "./SignUpPopup";
import { useRecoilState , useRecoilValue , useSetRecoilState} from "recoil";
import { LogInPop } from "../store/atoms/LogInPop";
import { lodge } from "../store/atoms/signUpPop";
import { useEffect } from "react";
import { emailSelector } from "../store/selectors/userEmail";
import Button from '@mui/material/Button';
import { userState } from "../store/atoms/user";
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg"

export function StaticNavBar2()
{
    const userEmail = useRecoilValue(emailSelector)
    const [popup , setPopup] = useRecoilState(LogInPop)
    const [signuppopup , setSignUpPopup] = useRecoilState(lodge)
    const setUser = useSetRecoilState(userState);
    const navigate = useNavigate();
    useEffect(() =>
    {
        AOS.init({duration : 700})
    } ,[])


        return (
            <>
            <div className="navbar" id="navbar2">
                    <h2>
                    <Avatar sx={{ width: 80, height: 80 }} alt="Remy Sharp" src={Logo} />
                    <span>GITBIT</span>
                    </h2>
                </div>
            </>
        )
}




{/* <Spline scene="https://prod.spline.design/cBnRtsxZJ9FhITyx/scene.splinecode" /> */}
          {/* <Spline scene="https://prod.spline.design/LH5tU9Y6IGc2aAVR/scene.splinecode" /> */}
          {/* <Spline style={{ width : "250vh" , height : "auto"}} scene="https://prod.spline.design/LH5tU9Y6IGc2aAVR/scene.splinecode" /> */}
          {/* <Spline scene="https://prod.spline.design/kjWydBzPqCFLhVKK/scene.splinecode" /> */}
          {/* <Spline scene="https://prod.spline.design/kjWydBzPqCFLhVKK/scene.splinecode" /> */}
          {/* <Spline scene="https://prod.spline.design/xKOZAZMJcau8xiSG/scene.splinecode" /> */}