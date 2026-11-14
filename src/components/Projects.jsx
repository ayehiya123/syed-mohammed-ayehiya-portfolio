import { projects, socialLinks } from '../data/portfolioData'

const GitHubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const ProjectCard = ({ project, aosDelay }) => {
  const isFlagship = project.isFlagship

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`p-[1px] rounded-2xl transition-all duration-300 ${
        isFlagship
          ? 'bg-gradient-to-r from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/80 hover:via-white/20 hover:to-red-500/60 shadow-[0_0_30px_rgba(255,42,42,0.1)]'
          : 'bg-white/10 hover:bg-white/20'
      }`}
    >
      <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90 flex flex-col justify-between h-full">
        <div>
          {/* Badge Pill */}
          {project.badge && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs uppercase tracking-widest font-bold text-red-400 bg-red-500/10 border border-red-500/20 mb-4 w-fit">
              {project.badge}
            </span>
          )}

          {/* Title & Number Header */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {project.title}
            </h3>
            {project.number && (
              <span className="text-5xl font-black italic font-serif text-white/10 select-none shrink-0 leading-none">
                {project.number}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base mt-3 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Tag Pills */}
          {project.techTags && project.techTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {project.techTags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="rounded-full text-xs font-bold px-3 py-1 bg-white/5 border border-white/10 text-white/80 transition-colors hover:bg-red-500/20 hover:text-white hover:border-red-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-white/10">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-sm transition-all"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          )}

          {project.links?.demo && project.links.demo.trim() !== '' ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] hover:bg-red-600 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-red-600/30"
            >
              <ExternalLinkIcon />
              <span>Live Demo</span>
            </a>
          ) : (
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-disabled="true"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/40 font-semibold text-sm cursor-not-allowed"
            >
              <ExternalLinkIcon />
              <span>Demo Coming Soon</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Centred Header */}
      <div data-aos="fade-up" className="max-w-3xl mx-auto text-center mb-16 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-red-500 text-xs font-bold uppercase tracking-widest mb-4">
          Featured Projects
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
          Work that speaks for itself
        </h2>
        <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto">
          Explore my latest data analysis pipelines, query optimizations, and technical implementations.
        </p>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-6 md:gap-8 max-w-5xl mx-auto relative z-10">
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard
              key={project.id || index}
              project={project}
              aosDelay={(index + 1) * 100}
            />
          ))
        ) : (
          <div
            data-aos="fade-up"
            className="p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-md"
          >
            <p className="text-lg font-bold text-white mb-2">
              Projects in Progress
            </p>
            <p className="text-sm text-white/50 max-w-md mx-auto">
              Exciting data analytics and pipeline projects are currently in development and will be showcased here soon.
            </p>
          </div>
        )}
      </div>

      {/* Explore All Repositories Link */}
      {socialLinks?.github && (
        <div data-aos="fade-up" data-aos-delay="300" className="mt-16 text-center relative z-10">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm transition-all duration-300 hover:border-red-500/40 hover:shadow-[0_0_25px_rgba(255,42,42,0.2)]"
          >
            <GitHubIcon />
            <span>Explore All My Repositories</span>
            <svg
              className="w-4 h-4 fill-none stroke-currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      )}
    </section>
  )
}

export default Projects
