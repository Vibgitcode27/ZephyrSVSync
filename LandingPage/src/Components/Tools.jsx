import "../tools.css"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import {useNavigate} from "react-router-dom"
import { Popup } from 'react-typeform-embed';
import { StaticNavBar2 } from "./Navbar2"

const App = () => {
    return (
        <Popup id="EMAaNXeD" size={80}>
            <button>Open Popup</button>
        </Popup>
    );
}
export default function Tools() {
    const navigate = useNavigate();
    return (
        <body>
        <StaticNavBar2/>
        <section className="mainText">
            <h1>All GitHub Tools</h1>
            <p className="p1">Make use of our collection of PDF tools to process digital documents and</p>
            <p className="p2">streamline your workflow seamlessly.</p>
        </section>
        <section className="cards">
            <div className="ThreeCards">
                <div className="card11 card" onClick={() =>navigate("/Gsoc")}>
                    <img className="image" src={image1} alt=""/>
                    <div>
                        <h1>GSoC Repository Tumbler</h1>
                        <p>A tool to find the best GSoC repo, with built in filter search.</p>
                    </div>
                </div>
                <div className="card12 card" onClick={() =>navigate("/Trending")}>
                    <img className="image" src={image2} alt="" />
                    <div>
                        <h1>Trending Repo List</h1>
                        <p>A tool to find the best repos in each category, with built in diverse category filters.</p>
                    </div>
                </div>
                <div className="card13 card" onClick={() =>navigate("/forest")}>
                    <img className="image" src={image3} alt="" />
                    <div>
                        <h1>Forest Farmer</h1>
                        <p>A tool to maintain streaks  by making a dummy commit everyday to your Github account. </p>
                    </div>
                </div>
            </div>
            <div className="TwoCards">
                <div className="card21 card" onClick={() =>navigate("/snake")}>
                    <img className="image" src={image4} alt="" />
                    <div>
                        <h1>Heatmap Snake Generator</h1>
                        <p>Build the awesome snake for your readme, all using a single action file.</p>
                    </div>
                </div>
                <div className="card22 card" onClick={() =>navigate("/resources")}>
                    <img className="image" src={image5} alt="" />
                    <div>
                        <h1>Top Learning Resources</h1>
                        <p>Learn cool stuff from the best, while you build a profile!</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="form">
            <div style={{
                paddingLeft: '725px',
                paddingTop: '20px',
            }}>
            <App style={{
                color: "black",
            }}></App>
                </div>
            <div style={{
                paddingTop: '15px',
                paddingLeft: '310px',
                fontWeight: '20',
                fontSize: '25px',
            }}>
                Have a unique idea and want to get featured on our website. Hurry up and click this button!
            </div>
        </section>
        </body>
    )
}