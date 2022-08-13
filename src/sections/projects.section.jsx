import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from 'gsap/all'

const ProjectSection = () => {

    const triggerRef = useRef(null)
    const headerRef = useRef(null)
    const descriptionRef = useRef(null)
    const imageRef = useRef(null)
    const lBlockRef = useRef(null)
    const rBlockRef = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "-100px 20%",
              end: "500px top",
              scrub: 0.5,
              markers: false,
            }
        })

        tl.fromTo(headerRef.current, {opacity: 0, xPercent: -100}, {opacity: 1, xPercent: 0})

          .fromTo(descriptionRef.current, {opacity: 0, xPercent: 100}, {opacity: 1, xPercent: 0})
        
          .fromTo(imageRef.current, {opacity: 0, scale:0}, {opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 1)"})

          .fromTo(lBlockRef.current, {xPercent: -115}, {xPercent: 0, duration: 2, ease: "back.out(1.7)"})

          .fromTo(rBlockRef.current, {xPercent: 115}, {xPercent: 0, duration: 2, ease: "back.out(1.7)"})

    }, [])

    return (
        <section>
            <div ref={triggerRef} className="container overflow-hidden">
                <h1 ref={headerRef} className="text-center pb-10 pt-[117px] before:w-[26px] before:h-[26px] before:mr-[30px]">Как именно ты станешь разработчиком</h1>
                <p ref={descriptionRef} className="text-center text-[24px] max-w-[970px] mx-auto">На курсе ты не просто изучаешь теоретический материал. В процессе изучения ты повторяешь за действующим разработчиком, после чего <strong>закрепляешь знания на заданиях и проектах.</strong></p>
                <div className="relative pt-[60px]">
                    <div ref={lBlockRef} className="md:absolute mb-6 md:mb-0 bg-white border border-blue-violet rounded-2xl py-6 px-5 top-[112px] w-full md:max-w-[325px] text-[14px] z-10">
                        <h3 className="text-blue-violet uppercase font-semibold pb-[14px]">2 командныйх проекта</h3>
                        <p className="pb-4">Симуляция комерческого проекта - получаете ТЗ и организовываете командную разработку. Прокачивая навыки для будущей работы.</p>
                        <p><strong>Проекты на тему:</strong></p>
                        <ul>
                            <li>JavaScript плагин "Контекстное меню"</li>
                            <li>Cайт на React, презентующий команду участников</li>
                        </ul>
                    </div>
                    <div ref={rBlockRef} className="md:absolute mb-6 md:mb-0 bg-white right-0 bottom-[120px] lg:bottom-[97px] border border-blue-violet rounded-2xl py-6 px-5 w-full md:max-w-[390px] text-[14px] z-10">
                        <h3 className="text-blue-violet uppercase font-semibold pb-[14px]">Индивидуальные проекты</h3>
                        <p>Чтобы свободно чуствовать себя на позиции junior необходим опыт разработки.</p>
                        <p className="pb-4">Вы создадите 3 проекта изучая материал от простого к сложному:</p>
                        <ol className="list-decimal list-inside">
                            <li>Проект корзина с товарами для интернет-магазина</li>
                            <li>Социальная сеть для поиска и знакомств</li>
                            <li>Дипломный проект на выбранную вами тему:</li>
                        </ol>
                        <ul>
                            <li>Учет доходов и рассходов</li>
                            <li>Бронирование отелей</li>
                            <li>Интернет-магазин или  схожий по сложности проект, которым вы выберите и утвердите с куратором</li>
                        </ul>
                    </div>
                    <figure>
                        <img ref={imageRef} alt="" src="./images/projects_browser.svg" className="mx-auto w-full max-w-[806px]" />
                        <figcaption className="text-center text-[13px] pt-4 pb-[90px]">Проекты учеников</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection
