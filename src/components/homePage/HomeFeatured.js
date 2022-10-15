import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
//Framer Motion
import { motion, useAnimation } from "framer-motion"
// Styled Components
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeContentSection,
  HomeFeaturedSection,
  FeaturedVideo,
  FeaturedContent,
  FeaturedProjects,
  FeatureColor,
} from "../../styles/homeStyles"
// Scroll Animations
import { useInView } from "react-intersection-observer"

const HomeFeatured = ({ onCursor }) => {
  const [hovered, setHovered] = useState(false)
  const animation = useAnimation()
  const [featured, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeFeaturedSection
      ref={featured}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <Container>
   
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Flex spaceBetween>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="meta"
              >
              </motion.div>
            </Flex>
            <h2 className="featured-title">GPS <br/> <p>Global Positioning System

              </p>
              <span className="arrow">
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                >
                  <path
                    d=""
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </span>
            </h2>
          </FeaturedContent>
          <FeaturedVideo>
            <video
              loop
              autoPlay
              src={require("../../assets/video/0.mp4")}
            ></video>
          </FeaturedVideo>
          <FeatureColor>
            <div className="background">
          <h2 className="color" >The Global Positioning System, originally Navstar GPS, is a satellite-based radionavigation <br/> system owned by the United States government and operated by the United States Space Force.</h2>
          </div>
          </FeatureColor>
        
      </Container>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

      <Container>
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Flex spaceBetween>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="meta"
              >
              </motion.div>
            </Flex>
            <h2 className="featured-title1">ADVANTAGES
              <span className="arrow">
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                >
                  <path
                    d=""
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </span>
            </h2>
          </FeaturedContent>

          <FeaturedVideo>
            <video
              loop
              autoPlay
              src={require("../../assets/video/glitch.mp4")}
            ></video>
          </FeaturedVideo>
          <FeatureColor>
          <h2 className="color" >Technology can be said as the essential part of one’s life not only to an adult but to the student community as well for technology helps in getting to know or gaining knowledge in almost all of the thigs we can think of or have problems with. In school. Our school emphasizes to use technology not extensively but effectively because of the upcoming changes in the world where one who does not know technology may not amount to much in this techno-savvy world.

In classes, we are even taught how the building block of technology was made and how to use them properly so that the people aspiring for higher studies in them can have a stable foundation.
</h2>
<br/>
<br/>
<br/>
          </FeatureColor>
      </Container>
      
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

      <Container>
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Flex spaceBetween>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="meta"
              >
              </motion.div>
            </Flex>
            <h2 className="featured-title3">Internet Access Restrictions 
              <span className="arrow">
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                >
                  <path
                    d=""
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </span>
            </h2>
          </FeaturedContent>

          <FeaturedVideo>
            <video
              loop
              autoPlay
              src={require("../../assets/video/Elec.mp4")}
            ></video>
          </FeaturedVideo>
          <FeatureColor>
          <h2 className="color" >Now to keep students in check our school has to and does have some restrictions while on the internet,
           like our school, with the help of Fortinet monitors the server and restricts the accessibility of sites that are harmful to the 
           educational purposes of students, our school even monitors till which time the network service is on, after which it is cut off like
            during the night.
</h2>
          </FeatureColor>
      </Container>



<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
      <Container>
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Flex spaceBetween>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="meta"
              >
              </motion.div>
            </Flex>
            <h2 className="featured-title4">Use of cloud 

              <span className="arrow">
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                >
                  <path
                    d=""
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </span>
            </h2>
          </FeaturedContent>
          <FeaturedVideo>
            <video
              loop
              autoPlay
              src={require("../../assets/video/afsocial.mp4")}
            ></video>
          </FeaturedVideo>
          <FeatureColor>
          <h2 className="color" >Now taking about the cloud, it is very extensively used in our school 
          with almost all if not all students using it for its ` easy-to-use features. Our school has even 
          set up a mini cloud-based with  server room which works perfectly considering it’s a school-based
           idea on a large platform such as of cloud.
</h2>
          </FeatureColor>
      </Container>
      <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

      <Container>
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Flex spaceBetween>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="meta"
              >
              </motion.div>
            </Flex>
            <h2 className="featured-title5">Health Management

              <span className="arrow">
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                >
                  <path
                    d=""
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </span>
            </h2>
          </FeaturedContent>
          <FeaturedVideo>
            <video
              loop
              autoPlay
              src={require("../../assets/video/meds.mp4")}
            ></video>
          </FeaturedVideo>
          <FeatureColor>
          <h2 className="color" >Now talking about how our school helps us in keeping our
           health in check while extensively using technology, now when we talk about extensively, we 
           are taught that only if required is the main thing keeping us in check if you want to abstain
            from wearing glasses. Now we must know when to stop so that we don’t skip meals and sleep late at night.
</h2>
          </FeatureColor>
      </Container>
      <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

      <Container>
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Flex spaceBetween>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="meta"
              >
              </motion.div>
            </Flex>
            <h2 className="featured-title6">Bonding - parents, Students and teachers

              <span className="arrow">
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                >
                  <path
                    d=""
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </span>
            </h2>
          </FeaturedContent>
          <FeaturedVideo>
            <video
              loop
              autoPlay
              src={require("../../assets/video/interact.mp4")}
            ></video>
          </FeaturedVideo>
          <FeatureColor>
          <h2 className="color" >Now talking about bonding between students and parents, 
          our school being a boarding school, makes it very hard for students to communicate with
           their parents without the help of technology and thus it makes the bonding better. While
            talking about teachers and students, going back to one and a half year ago when covid-19 was
             prevalent we could not do our classes and communicate with teachers without the help of online 
             platforms like Zoom and Microsoft Teams. 
</h2>
          </FeatureColor>
      </Container>

      <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

      <Container>
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Flex spaceBetween>
              <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="meta"
              >
              </motion.div>
            </Flex>
            <h2 className="featured-title7">How best technology brings people together

              <span className="arrow">
                <motion.svg
                  animate={{ x: hovered ? 48 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                >
                  <path
                    d=""
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </span>
            </h2>
          </FeaturedContent>
          <FeaturedVideo>
            <video
              loop
              autoPlay
              src={require("../../assets/video/50-beaches.mp4")}
            ></video>
          </FeaturedVideo>
          <FeatureColor>
          <h2 className="color" >Last summer I remember our school brought a new projector,
           a high-quality theatre type projector, to celebrate the event we were shown a new movie 
           just released on the market, which brought every student and every teacher, including the
            non-residential ones together .
</h2>
          </FeatureColor>
      </Container>
    </HomeFeaturedSection>
    
  )
}

export default HomeFeatured
