import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from 'gsap/all'

const statsArray = [
    {value: "293", text: "HD видеоурока длительностью 3 - 15 минут"},
    {value: "6", text: "мероприятий на курсе (Хакатоны, мастер классы, разборы и т.д.)"},
    {value: "193", text: "заданий и тестов для закрепления "}
  ]

const StatSection = () => {

    const triggerRef = useRef(null)
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top 50%",
              end: "+=100px 30%",
              scrub: 0.5, 
              markers: false,
            }
          })

        tl.fromTo(triggerRef.current.querySelectorAll(".stat__item"), {opacity: 0, y: 30}, {opacity: 1, y: 0, stagger: 0.2})

    }, [])
    
    return (
        <section>
            <div ref={triggerRef} className="container">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-20 max-w-[1230px] mx-auto">
                    {
                    statsArray.map(statItem => {
                        return (
                        <div key={statItem.text} className="stat__item flex flex-col xl:flex-row items-center gap-1 lg:gap-4">
                            <h1 className="font-semibold text-orange">{statItem.value}</h1>
                            <p className="text-center md:text-left leading-5">{statItem.text}</p>
                        </div>
                        )
                    })
                    }
                </div>
            </div>
        </section>
    )
}

export default StatSection
