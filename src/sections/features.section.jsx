import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all'

const typesOfFeatures = [
    "Skills Upgrade",
    "Strong Hard Skills"
]

const skillsArray = [
    {icon: "./icons/node-js.svg", text: "Научишься понимать терминологию, документацию и писать код на уровне востребованных разрабочиков"},
    {icon: "./icons/nano-technology.svg", text: "Твои знания превратятся в систему, ты не просто изучишь технологии, но и поймешь, как развиваться дальше"},
    {icon: "./icons/web-development.svg", text: "Создашь Fullstack-приложение, которое покажет, что твои навыки выше, чем у стандартного junior"},
    {icon: "./icons/atom.svg", text: "Создашь с помощью фреймворка React визуальную часть приложения: элементы, анимация"},
    {icon: "./icons/node-js.svg", text: "Изучишь NodeJS на достаточном уровне, чтобы связывать frontend и backend"},
    {icon: "./icons/nano-technology.svg", text: "Овладеешь базой, от которой можно отталкиваться и учить любую технологию на JavaScript"},
]

const FeaturesSection = () => {

  const triggerRef = useRef(null)
  const headerRef = useRef(null)
  const skillTypeRef = useRef(null)
  const skill1HeaderRef = useRef(null)
  const skill2HeaderRef = useRef(null)
  const skillsUpgradeRef = useRef(null)
  const strongHardSkillsRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const sectionHeight = triggerRef.current.getBoundingClientRect().height
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "center center",
        end: "+=1900px top",
        scrub: 0.5,
        markers: false,
      }
    })

    const tlSkillChange = gsap.timeline()

    tlSkillChange.fromTo(skill1HeaderRef.current, {opacity: 1, }, {opacity: .5})
      .fromTo(skill2HeaderRef.current, {opacity: .5}, {opacity: 1})
      .fromTo(skillTypeRef.current, {x: 145}, {x: -115})

    tl.fromTo(headerRef.current, {opacity: 0}, {opacity: 1, duration: 3})
      .fromTo(headerRef.current, {y: sectionHeight / 3}, {y: 0, duration: 3})

      .fromTo(skillTypeRef.current, {opacity: 0}, {opacity: 1, duration: 2})
      
      .fromTo(skillsUpgradeRef.current.querySelectorAll(".skills__item"), {opacity: 0, y: '50px'}, {opacity: 1, y: 0, stagger: 2, duration: 6})
      .to(skillsUpgradeRef.current.querySelectorAll(".skills__item"), {opacity: 0, y: '50px', stagger: 2, duration: 6})

      .add(tlSkillChange, ">")

      .fromTo(strongHardSkillsRef.current.querySelectorAll(".skills__item"), {opacity: 0, y: '50px'}, {opacity: 1, y: 0, stagger: 2, duration: 6})
      .to(strongHardSkillsRef.current.querySelectorAll(".skills__item"), {opacity: 0, y: '50px', stagger: 2, duration: 6})
      
      .to(skillTypeRef.current, {opacity: 0, duration: 3})
      .to(headerRef.current, {y: sectionHeight / 3, duration: 3})
      .to(headerRef.current, {opacity: 0, duration: 3})
  }, [])

  return (
    <section>
        <div className="h-screen sticky top-0 p-[30px]">
          <div ref={triggerRef} className="w-full h-full bg-black rounded-[20px] text-white p-[60px]">
            <div className="container">
              <h1 ref={headerRef} className="text-center pb-10 opacity-0">Что тебе даст прохождение курса?</h1>
              
              <div ref={skillTypeRef} className="flex flex-row justify-center gap-8">
                <button ref={skill1HeaderRef} className="skill__type cursor-pointer text-white">
                  <p className="text-[24px] uppercase font-semibold">{typesOfFeatures.at(0)}</p>
                </button>
                <button ref={skill2HeaderRef} className="skill__type cursor-pointer text-white">
                  <p className="text-[24px] uppercase font-semibold">{typesOfFeatures.at(1)}</p>
                </button>
              </div>
              
              <div className="relative mt-[100px]">
                <div ref={skillsUpgradeRef} className="absolute grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {
                    skillsArray.slice(0, 3).map(({icon, text}) => {
                      return <SkillsItem key={text} icon={icon} text={text} />

                    })
                  }
                </div>

                <div ref={strongHardSkillsRef} className="absolute grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {
                    skillsArray.slice(3, 6).map(({icon, text}) => {
                      return <SkillsItem key={text} icon={icon} text={text} />

                    })
                  }
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="h-[2400px]"></div>
    </section>
  )
}

const SkillsItem = ({icon, text}) => {
  return (
    <div className="skills__item flex flex-col items-center justify-start">
      <img alt="" src={icon} className="w-13 h-13 mb-[30px]" />
      <p className="font-normal text-center text-[22px]">{text}</p>
    </div>
  )
}

export default FeaturesSection
