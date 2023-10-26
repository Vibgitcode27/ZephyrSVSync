import "../App.css";
// import "../App2.css";
import { useState , useEffect } from "react";
import Spline from '@splinetool/react-spline';
import { StaticNavBar } from "./Navbar";
import Button from '@mui/material/Button';
import { lodge } from "../store/atoms/signUpPop";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// import GlobeComponent from "./GlobeVisualization";
import { useRecoilState , useRecoilValue , useSetRecoilState} from "recoil";

export function LandingPage() {

    const [signuppopup , setSignUpPopup] = useRecoilState(lodge)
    const Dota = [
        {id:0, value:"Apple"},
        {id:1, value:"Mango"},
        {id:2, value:"Lava"}
    ];
    const [wordData , setdata] = useState(Dota[0].value)
    
    const handleClick = (index) =>
    {
        console.log(index);
        const wordSlider = Dota[index].value;
        setdata(wordSlider)
    }
    return (
      <div>
        <StaticNavBar/>
        <section id="hero">
        <div className="hero BigText" >
            <div className="tagDiv">
                <h3 className="tagLine">GitHub, Elevated Simply.</h3>
            </div>
            <h1 id="text1">Elevate Your GitHub Journey!🚀</h1>
            <h1 className="text">Discover, Organize, and Showcase.</h1>
            <p>An online tools collection for Github</p>
        </div>
        <div className="threeD">
            <Spline scene="https://prod.spline.design/8ItJ7yibaevzjiwD/scene.splinecode" />
        </div>
        {/* <div className='button  '>
            <Button variant="outlined" id="getStarted" onClick={() =>
                {
                    setSignUpPopup(!signuppopup)
                }}>Get Started</Button>
        </div> */}
            <div className="textSlider" style={{color : "white"}}>
                <div>{wordData}</div>
                <div className="flexRow" style={{display : "flex" , marginLeft : "10vh" , cursor : "pointer"}}>
                {Dota.map((data , i) =>
                    <h1 key={i} style={{color : "white"}} onClick={() => handleClick(i)}>.</h1>
                    )}
                </div>
            </div>
        </section>

        {/* // Features / tools */}
        <section className="featured">
            <div className="opaque">
                <h1>TOOLS</h1>
                <p>Introducing our Toolkit: A curated suite of powerful utilities designed to streamline your GitHub experience, enhance productivity, and </p>
                <p id="p2">transform the way you interact with repositories. Dive into tools that redefine simplicity and efficiency.</p>
            </div>
            <div className="ag-format-container">
                <div className="ag-courses_box">
                    
                    
                    <div className="ag-courses_item">
                    <a href="#" className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>

                    <div className="ag-courses-item_title">
                    README Generator
                    </div>

                    <div className="ag-courses-item_date-box">
                    <span className="ag-courses-item_date">
                    <ul>
                        <li>Say goodbye to bland READMEs</li>
                        <li>Interactive templates to showcase your projects like a pro.</li>
                    </ul>
                    </span>
                    </div>
                    </a>
                    </div>
                      

                    <div className="ag-courses_item">
                    <a href="#" className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>

                    <div className="ag-courses-item_title">
                    GSOC Projects Hub
                    </div>

                    <div className="ag-courses-item_date-box">
                    <span className="ag-courses-item_date">
                    <ul>
                        <li>Discover the most exciting GSOC projects.</li>
                        <li>Filter by organizations or tech stack and find your perfect match.</li>
                    </ul>
                    </span>
                    </div>
                    </a>
                    </div>

                    <div className="ag-courses_item">
                    <a href="#" className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>

                    <div className="ag-courses-item_title">
                    Personalized Dashboard
                    </div>

                    <div className="ag-courses-item_date-box">
                    <span className="ag-courses-item_date">
                    <ul>
                        <li>All your GitHub data visualized.</li>
                        <li>Track your contributions, pull requests, and more in a sleek interface.</li>
                    </ul>
                    </span>
                    </div>
                    </a>
                    </div>

                    <div className="ag-courses_item">
                    <a href="#" className="ag-courses-item_link">
                    <div className="ag-courses-item_bg"></div>

                    <div className="ag-courses-item_title">
                    Trending Repos
                    </div>

                    <div className="ag-courses-item_date-box">
                    <span className="ag-courses-item_date">
                    <ul>
                        <li>Stay updated with the hottest repositories on GitHub.</li>
                        <li>Customize your feed based on languages or tags of interest.</li>
                    </ul>
                    </span>
                    </div>
                    </a>
                    </div>

            </div>
        </div>
</section> 

<section className="openSourced">
    <h1>We're Open on GitHub!</h1>
    <p>Our commitment to transparency and collaboration is rooted in our code. Access, review, or contribute to our application right on GitHub. We're proud to be a part of the developer community, and we invite you to join us on this journey.</p>
</section>

      </div>
    )
}





















