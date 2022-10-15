import React, { useEffect } from "react"
//Scroll Observer
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
//Styled Components
import { Container } from "../../styles/globalStyles"
import { Content, HomeContentSection,  HomeFeaturedSection,
  FeaturedVideo,
  FeaturedContent,
  FeaturedProjects,
  FeatureColor, FeatureColor1,} from "../../styles/homeStyles"

const HomeContent = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeContentSection
      ref={contentRef}
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
        <Content >
          <FeatureColor1>
          <div className="background">
          <div className="color">
        Our school motto states that we <br/>
          “ Building Citizens Beyond Boundaries “<br/>  and that is one of the
           main things why <br/>the students are
           taught how to use technology <br/>more effectively while not hampering <br/>any of our
            day to day life to prepare <br/>them for the upcoming struggle in life.
            </div>
            </div>
            </FeatureColor1>
        </Content>
      </Container>
      
    </HomeContentSection>
  )
}

export default HomeContent
