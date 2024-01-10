import React from "react"
import {
  FaGithubSquare,
  FaLinkedin,
  FaDev,
  FaCodepen,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/ChrisDeCleene",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/chris-decleene/",
  },
  {
    id: 3,
    icon: <FaDev className="social-icon"></FaDev>,
    url: "https://dev.to/chrisdecleene",
  },
  {
    id: 4,
    icon: <FaCodepen className="social-icon"></FaCodepen>,
    url: "https://codepen.io/chrisdecleene",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/aBoyChristopher",
  },
]

export default data
