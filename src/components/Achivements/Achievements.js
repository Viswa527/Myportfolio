import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// Import images
import volleyballImg from '../../assets/volleyball.jpg'
import hackathonImg from '../../assets/hackathon1.png'
import secretaryImg from '../../assets/volleyball.jpg'
import chessImg from '../../assets/chess.png'

const achievements = [
  {
    title: 'Inter-College Volleyball Competition Winner',
    description: 'Won the inter-college volleyball competition.',
    image: volleyballImg,
  },
  {
    title: 'Hackathon Winner at JNTUH',
    description: 'Won the hackathon organized at JNTUH.',
    image: hackathonImg,
  },
  {
    title: 'Elected Secretary of the Department',
    description: 'Elected as the secretary of the department.',
    image: secretaryImg,
  },
  {
    title: 'Chess Champion at Age 8',
    description: 'Became a chess champion at the age of 8.',
    image: chessImg,
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
