import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from 'gsap/all'

const HeaderSection = () => {

    const triggerRef = useRef(null)
    const text1Ref = useRef(null)
    const text2Ref = useRef(null)
    const text3Ref = useRef(null)
    const buttonRef = useRef(null)
    const dots1Ref = useRef(null)
    const dots2Ref = useRef(null)
    const releaseRef = useRef(null)
    const releaseButtonRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(text1Ref.current, {opacity: 0, xPercent: -100}, {opacity: 1, xPercent: 0, duration: 1, ease: "elastic.out(1, 1)"})
        gsap.fromTo(dots1Ref.current, {opacity: 0, scale: 0}, {opacity: 1, scale: 1, delay: .5, duration: .25, ease: "elastic.out(1, 1)"})
        gsap.fromTo(dots2Ref.current, {opacity: 0, scale: 0}, {opacity: 1, scale: 1, delay: .5, duration: .25, ease: "elastic.out(1, 1)"})
        gsap.fromTo(text2Ref.current, {opacity: 0, xPercent: -100}, {opacity: 1, xPercent: 0, delay: .15, duration: 1, ease: "elastic.out(1, 1)"})
        gsap.fromTo(text3Ref.current, {opacity: 0, xPercent: -100}, {opacity: 1, xPercent: 0, delay: .25, duration: 1, ease: "elastic.out(1, 1)"})
        gsap.fromTo(imageRef.current, {xPercent: 100, opacity: 0}, {xPercent: 0, opacity: 1, duration: 2, ease: "elastic.out(1, 1)"})
        gsap.fromTo(buttonRef.current, {scale: 0}, {scale: 1, delay: 0.2, duration: .7, ease: "elastic.out(1, .75)"})
        gsap.fromTo(releaseRef.current, {scale: 0}, {scale: 1, delay: 0.7, duration: .7, ease: "elastic.out(1, .75)"})
        gsap.fromTo(releaseButtonRef.current, {scale: 0}, {scale: 1, delay: 1, duration: .7, ease: "elastic.out(1, .75)"})

    }, [])

    return (
        <section className="w-full h-fit relative overflow-hidden">
            <div ref={triggerRef} className="container relative lg:pt-[100px] pb-[80px]">
                <div className="relative flex flex-col justify-center lg:block py-[67px] px-10 lg:px-0 top-0 left-0 lg:-left-[95px] -right-full bg-blue-violet bg-[url(./assets/header_bg.svg)] bg-bottom bg-no-repeat after:content-[''] after:absolute after:hidden lg:after:block after:bg-blue-violet after:bottom-0 after:left-0 after:right-0 after:top-0 after:translate-x-full text-white lg:rounded-tl-[40px] lg:rounded-bl-[40px] lg:pl-[95px] z-10">
                    <h1 ref={text1Ref} className="font-semibold text-center lg:text-left mb-[20px] xl:mb-[40px]">Профессия <br/> Frontend — разработчик</h1>
                    <h2 ref={text2Ref} className="text-[30px] hidden md:block font-semibold text-center lg:text-left lg:max-w-[547px] xl:max-w-[747px] mb-[26px]">Стань с нуля продвинутым Junior разработчиком за 7 месяцев с знанием технологий больше, чем у других кандидатов</h2>
                    <p ref={text3Ref} className="text-[18px] text-center lg:text-left lg:max-w-[599px] xl:max-w-[699px] mb-[40px] xl:mb-[60px]">Начиная с основ изучишь JavaScript, разберешься с  самыми популярными технологиями, научишься писать Frontend <strong>на фреймворке</strong> и связывать его с Backend. <strong>Навыки после курса оцениваются от 100 т.р.</strong></p>
                    <button ref={buttonRef} className="text-[18px] px-[40px] py-[28px] bg-orange hover:bg-orange-accent rounded-full">Задать вопрос об обучении</button>
                </div>
                <img ref={dots1Ref} alt="" src="./images/background_dots.svg" className="absolute -left-[140px] bottom-[35px] hidden lg:block"/>
            </div>
            <figure className="absolute w-[830px] h-[600px] z-20 left-[60%] bottom-[79px] hidden lg:block">
                <div ref={releaseRef} className="absolute max-w-[396px] px-6 pt-10 pb-[30px] z-10 rounded-3xl bg-white shadow-xl -left-[100px] -bottom-16">
                    <div ref={releaseButtonRef} className="absolute w-[76px] h-[76px] rounded-3xl flex items-center justify-center bg-[#7F76FF] -top-[49px] left-[62px]">
                        <img alt="" src="./images/console.svg" />
                    </div>
                    <span className="text-orange">Обучение</span> для тех, <span className="text-gray">кто готов учиться 10 часов в неделю</span>, <span className="text-orange">чтобы получить результат</span>. Мы даем  <span className="text-gray">необходимые навыки</span> на продвинутом уровне, <span className="text-gray">убирая все лишнее</span>
                </div>
                <img ref={dots2Ref} alt="" src="./images/background_dots2.svg" className="absolute -left-[45px] -top-[45px] fill-blue-violet hidden lg:block"/>
                <img ref={imageRef} alt="" src="./images/header_browser.svg" className="w-full h-full hidden lg:block" />
            </figure>
        </section>
    )
}

export default HeaderSection
