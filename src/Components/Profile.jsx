import React from 'react';
import '../Style/profile.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'


const Profiles = [
  {
    rating: "4.9 ",
    name: "Prankur Gupta",
    jobProfile: "SDE-2 @Amazon",
    about: "I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role.",
    image:"https://tse2.mm.bing.net/th?id=OIP.EnSPPd3VxBOZFG11dM6CXAHaLH&pid=Api&P=0",
  },
  {
    rating: "5.0",
    name: "Saurav Pal",
    jobProfile: "SDE-2 @Amazon",
    about: "I am a Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space.",
    image:"https://tse1.mm.bing.net/th?id=OIP.tL1dKiGcEl_zmAltMAiCDQHaHa&pid=Api&P=0https://thumbs.dreamstime.com/b/portrait-handsome-man-black-background-serious-looking-dark-shirt-39242715.jpg",
  },
  {
    rating: "5.0",
    name: "Keshav Bathla",
    jobProfile: "Software Engineer @Red Hat",
    about: "Engineer @RedHat | Program Manager'20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner'19 | Mentor GCI",
    image:"https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg",
  },
  {
    rating: "5.0",
    name: "Saumya Singh",
    jobProfile: "Software Developer",
    about: "A curious learner, on a way to become a kickass developer who writes Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer | Coding Instructor",
    image:"https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Linkedin-portraits-2.jpg?fit=800%2C1200&ssl=1",
  },
]
const Profile = () => {

  return (
    <div className='main_content'>
      <Carousel >
      {
        Profiles.map((item) => {
          return (
            <div className='user_card' >
              <div className='left_div'>
                <p className='user_card_left  para_conent'>{item.rating}</p>
                <h1 className='user_card_left heading_conent'>{item.name}</h1>
                <h3 className='user_card_left heading_profile'>{item.jobProfile}</h3>
                <p className='user_card_left heading_about'>{item.about}</p>
                <button className="user_card_left heading_button">Book a Session</button>
              </div>

              <div className='right_div'>
              <div className="semicontainer">
              <div className='image_container'>
                <div className='image_div imgdiv1'><img className='img1 images' src="https://tse2.mm.bing.net/th?id=OIP.EnSPPd3VxBOZFG11dM6CXAHaLH&pid=Api&P=0"/></div>
                <div className='image_div imgdiv2'><img className='img2 images' src="https://thumbs.dreamstime.com/b/portrait-handsome-man-black-background-serious-looking-dark-shirt-39242715.jpg"/></div>
                <div className='image_div imgdiv3'><img className='img3 images' src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg"/></div>
                <div className='image_div imgdiv4'><img className='img4 images' src="https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Linkedin-portraits-2.jpg?fit=800%2C1200&ssl=1"/></div>
            
              </div>
              </div>

              </div>
            </div>
          )
        })
      }
        </Carousel>
    </div>
  )
}

export default Profile
