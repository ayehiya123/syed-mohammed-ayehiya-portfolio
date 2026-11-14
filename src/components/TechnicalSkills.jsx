import { technicalSkills } from '../data/portfolioData'

const SkillBadge = ({ name }) => {
  return (
    <span className="inline-flex items-center rounded-full px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium transition-colors hover:bg-red-600/20">
      {name}
    </span>
  )
}

const SkillCard = ({ category, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(255,42,42,0.15)] flex flex-col justify-between"
    >
      <div>
        <h3 className="text-lg font-black text-white uppercase tracking-wider pb-3 mb-4 border-b border-white/10">
          {category.title}
        </h3>
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill, sIdx) => (
            <SkillBadge key={sIdx} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

const TechnicalSkills = () => {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background Blurred Red Circles */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Centred Header */}
      <div data-aos="fade-up" className="max-w-3xl mx-auto text-center mb-16 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-red-500 text-xs font-bold uppercase tracking-widest mb-4">
          Technical Stack
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
          My Skillset
        </h2>
        <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto">
          Core technologies, libraries, databases, and development tools I work with.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {technicalSkills.categories.map((category, index) => (
          <SkillCard key={category.title} category={category} index={index} />
        ))}
      </div>
    </section>
  )
}

export default TechnicalSkills
