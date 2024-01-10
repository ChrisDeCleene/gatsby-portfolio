import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I have years of experience developing projects with JavaScript, HTML, CSS, React.JS and other frameworks, as well as WordPress. In addition, I have experience with full-stack web development technologies and frameworks listed on my about page.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `I have designed websites for companies, including e-commerce stores and landing pages. I am extremely comfortable working with design tools such as Figma and Canva or building website design, logos, and images from scratch.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "digital marketing",
    text: `I have the skills to improve a website's traffic by leveraging crucial digital marketing practices. My expertise includes Search Engine Optimization (SEO), Email Marketing, Content Marketing, and Social Media Marketing.`,
  },
]

export default services
