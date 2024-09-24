import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// Import images
import cricketImg from '../../assets/cricket.jpg'
import hackathonImg from '../../assets/hackathon1.png'
import chessImg from '../../assets/chess.png'

const achievements = [
  {
    title: 'College Cricket Tournament Winner',
    description: 'College level tornament at district level.',
    image: cricketImg,
  },
  {
      title: 'Chess Champion at Age 15',
      description: 'Became a chess champion at the age of 15.',
      image: chessImg,
  },
  {
    title: 'Hackathon Winner at JNTUK',
    description: 'Won the hackathon organized at JNTUK.',
    image: hackathonImg,
  },

]

const Achievements = () => {
  return (
    <section id="achievements" className="animated-background py-12">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-8">Achievements</h2>
        <Carousel showArrows={true} showThumbs={false}>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg relative"
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Achievements
