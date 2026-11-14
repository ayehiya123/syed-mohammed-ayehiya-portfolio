import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

const TagCard = ({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) => {
  const [isActive, setIsActive] = useState(false)
  const cardRef = useRef(null)

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!cardRef.current || !containerRef.current) return
    const containerRect = containerRef.current.getBoundingClientRect()
    const cardRect = cardRef.current.getBoundingClientRect()
    const cardTopRelative = cardRect.top - containerRect.top
    const containerHeight = containerRect.height || 1350
    const lineTip = latest * containerHeight

    if (lineTip >= cardTopRelative + 50) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-all duration-700 relative ${className} ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_0_40px_rgba(255,42,42,0.35)]'
          : 'bg-white shadow-xl'
      }`}
    >
      {/* Punched Hole Circle */}
      <div
        className={`w-4 h-4 rounded-full mx-auto mt-2 border transition-colors duration-700 ${
          isActive
            ? 'bg-red-950/40 border-red-300/40 shadow-inner'
            : 'bg-white border-gray-300 shadow-inner'
        }`}
      />

      {/* Inner Rounded Panel */}
      <div
        className={`mt-4 rounded-[1.5rem] p-8 min-h-[220px] transition-colors duration-700 flex flex-col justify-between ${
          isActive ? 'bg-red-700/50 text-white' : 'bg-[#f4f4f4] text-gray-700'
        }`}
      >
        <div>
          <span
            className={`text-5xl font-black italic font-serif leading-none block select-none transition-colors duration-700 ${
              isActive ? 'text-white/30' : 'text-gray-300'
            }`}
          >
            {number}
          </span>
          <h3
            className={`text-2xl font-black tracking-tight mt-3 mb-2 transition-colors duration-700 ${
              isActive ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h3>
        </div>
        <p
          className={`text-sm leading-relaxed transition-colors duration-700 ${
            isActive ? 'text-white/90' : 'text-gray-600'
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

const Services = () => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  const desktopD =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

  const cardPositions = [
    {
      className:
        'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className:
        'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className:
        'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className:
        'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ]

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header Block */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-12 md:mb-0"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-4">
            {skillsContent.badge}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900 tracking-tight relative mb-4">
            {skillsContent.heading}
            <svg
              className="w-8 h-8 text-[#ff2a2a] inline-block ml-2 align-bottom"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            {skillsContent.description}
          </p>
        </div>

        {/* Desktop Animated SVG Guide Path */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Layer 1: Faint Guide Path */}
          <path
            d={desktopD}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          {/* Layer 2: Mask for Progressive Drawing */}
          <mask id="path-mask">
            <motion.path
              d={desktopD}
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>

          {/* Layer 3: Active Black Dashed Path */}
          <path
            d={desktopD}
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile Animated SVG Guide Path */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="10"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength }}
            />
          </mask>
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, idx) => {
            const pos = cardPositions[idx] || cardPositions[0]
            return (
              <TagCard
                key={card.number || idx}
                number={card.number}
                title={card.title}
                text={card.text}
                className={pos.className}
                aosType={pos.aosType}
                aosDelay={pos.aosDelay}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            )
          })}
        </div>

        {/* Handwritten End Note */}
        {skillsContent.endText && (
          <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none pointer-events-none">
            {skillsContent.endText}
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
