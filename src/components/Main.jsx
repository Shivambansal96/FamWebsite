import "./Main.css";
import image from "./assets/hero.png";

function Main() {

    const imagesrc = "./assets/me.png";
    return(
        <div id="Main">
            <div id="image-para-one">
                {/* <img src={image} alt="family" /> */}
                {/* <img src="https://templatedemo.website.com/remote/imageProxy.cfc?method=viewLibraryImage&d=familywellness&s=MEdNNExVRU1VOEJUTDsxUzI8TldKIFAgIAo%3D&w=940-425" alt="" /> */}

            </div>

            <div id="button-para-two">
                <div className="para-one">
                    <p>Think Health. Think Massage.</p>
                </div>

                <div className="para-two">
                    <p>We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment with us, please call us at 987-654-3210 today!</p>
                </div>

                <div className="button-container">
                    <input type="submit" id="learn-more" value={"LEARN MORE ABOUT US"}/>
                    <input type="submit" id="contact-button" value={"CONTACT US TODAY"}/>
                </div>

            </div>

            <div id="para-para-three">
                <div id="pOne">
                    <p>Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.</p>
                </div>

                <div id="pTwo">
                    <p>We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatments.</p>
                </div>

                <div id="pThree">
                    <p>We welcome you to come explore all the benefits you’ll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland.</p>
                </div>

            </div>
        </div>
    );
}

export default Main;