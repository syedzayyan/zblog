import Head from 'next/head'
import AnimateText from "../components/Home/AnimateText"
import Image from "next/image";
import HeadTag, {picURL} from "../components/HeadTag"
export default function Home() {
  return (
    <div>
      <HeadTag title = "Syed Zayyan Masud" 
          desc = "This is Syed Zayyan Masud's personal website and blog. I write my thoughts and sometimes opinions down here"
          imgURL = {picURL}
      />
      <h1>
        <AnimateText copy="SYED ZAYYAN MASUD" role="heading">    
            Hi, I AM 
            SYED ZAYYAN MASUD  
        </AnimateText></h1>
        <h2 style = {{textAlign:"center"}}>
            I AM A PHARMACOLOGY STUDENT, AND I LIKE TO MAKE MUSIC AND WEBSITES
          </h2>
          <div className = "extra-text-container">
            <p>I am currently a 3rd year undergraduate at Queen Mary University of London. When I am not busy learning to 
              make drugs, I make websites, like the one you are on. 
            </p>
            <div className = "div-image-border">
              <Image className = "div-image-border" alt="a picture of syed zayyan" objectFit="contain" layout="fill" src = "/img/profile.jpg"/>
            </div>
            <p>
              Here are my socials and CV
            </p>
          <ul>
            <li className = "list-home"><a target="_blank" rel="noreferrer" className = "link-text" href = "https://www.linkedin.com/in/zayyan-masud-5988ba19b/">LinkedIn</a></li>
            <li className = "list-home"><a target="_blank" rel="noreferrer" className = "link-text" href = "https://github.com/syedzayyan">Github</a></li>
            <li className = "list-home"><a target="_blank" rel="noreferrer" className = "link-text" href= "mailto:masudzayyan@gmail.com">Mail</a></li>
            <li className = "list-home"><a target="_blank" rel="noreferrer" className = "link-text" href = "https://docs.google.com/document/d/1FAt274s_4wJd9DnU8dL12rubgD6SguCT85uorMfyKgA/edit?usp=sharing">CV</a></li>
          </ul>
          </div>
        <style>{`
          .extra-text-container{
            font-size:1.5rem;
            text-align:center;
          }
          .list-home{
            list-style: none;
          }
          .div-image-border{
            background-color:black;
            border:10px solid black;
            border-radius: 60%;
            margin: 0 auto;
            position:relative;
            height:300px;
            width:300px;
          }
          .link-text{
            color:var(--text-secondary);
            text-decoration:none;
          }
          .link-text:hover{
            color:#ff7eee;
          }
        `}</style>
    </div>
  )
}
