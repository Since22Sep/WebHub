import React from 'react'
import vg from "../assets/2.webp"

import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
   <>
   <div className="home" id="home">
    <main>
        <h1>WebHub</h1>
        <p>Your Gateway to Web Excellence</p>
    </main>
   </div>

   <div className='home2'>
    <img src={vg} alt="Graphics" />
    <div>
    <p>
    WebHub is a web solutions company that provides comprehensive services for web development, design, and digital marketing. We specialize in creating engaging and user-friendly websites to help businesses succeed online.
   </p>
    </div>
   </div>

   <div className='home3' id='about'>
    <div>
        <h1>Who are we?</h1>
        <p>
        "WebHub is a leading web solutions company dedicated to helping businesses establish a strong online presence. With a team of skilled professionals, we specialize in web development, design, and digital marketing services. Our mission is to deliver innovative and tailored solutions that empower businesses to thrive in the digital landscape.At WebHub, we believe in the power of exceptional web experiences. We take a client-centered approach, working closely with our clients to understand their unique needs, goals, and target audience. By combining our technical expertise, creative design skills, and industry insights, we craft visually stunning, user-friendly websites that drive results.Our comprehensive range of services includes responsive web design, custom web development, e-commerce solutions, content management systems (CMS), search engine optimization (SEO), social media marketing, and more. We stay up-to-date with the latest trends and technologies to ensure our clients receive cutting-edge solutions that enhance their online visibility and user engagement.With a strong commitment to quality and customer satisfaction, we strive to deliver projects on time and within budget. Our transparent communication, attention to detail, and dedication to excellence set us apart as a trusted partner for businesses of all sizes and industries.Whether you're a startup looking to establish your online presence or an established enterprise seeking to enhance your digital strategies, WebHub is here to help you achieve your goals. Join us on the journey to digital success and experience the power of exceptional web solutions."
        </p>
    </div>
   </div>

   <div className="home4" id='brands'>
    <div>
        <h1>Brands</h1>
        <article>
            <div style={{animationDelay: "0.3s"}}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>

            <div style={{animationDelay: "0.5s"}}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>

            <div style={{animationDelay: "0.7s"}}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>

            <div style={{animationDelay: "1s"}}>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
        </article>
    </div>
   </div>
   </>
  )
}

export default Home