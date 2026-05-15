"use client"
import { ArticleWithIntro } from "@/components/section-with-intro"
import { slideInProps } from "@/lib/animation"
import { motion } from "motion/react"

// Setting this outside of the component will make sure the animation only plays once during the session.
export default function AboutMe() {
  return (
    <ArticleWithIntro title="About Me" id="aboutme">
      <motion.div {...slideInProps(0)}>
        <motion.p {...slideInProps(1)}>
          Hey there! I'm Kyle Grenier, a graduate of Bradley University and an immersive technology developer for The
          Aerospace Corporation based in South California.
        </motion.p>
        <motion.p {...slideInProps(2)}>
          Ever since I was young, I have loved technology in all aspects, from robotics and science fiction to computers
          and programming. I'm the go-to IT person in my house, and as a triplet, I am definitely the most curious of
          the three.
        </motion.p>
        <motion.p {...slideInProps(3)}>
          It was in elementary school that I started tinkering around with game development in GameMaker, and in middle
          school more advanced programming and the Unity game engine. For the longest time, I've known that I wanted to
          go into the video game development industry. I love seeing my work evolve over time and the reactions people
          have when playing my games.
        </motion.p>
        <motion.p {...slideInProps(4)}>
          Although programming is my specialty, I also enjoy creating electronic music in my free time.
        </motion.p>
      </motion.div>
    </ArticleWithIntro>
  )
}
