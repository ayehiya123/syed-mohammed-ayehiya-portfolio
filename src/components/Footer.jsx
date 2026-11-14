import { personalInfo, socialLinks, footerContent, academy } from '../data/portfolioData'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Taglines */}
        <div className="flex flex-col space-y-2">
          {footerContent.taglines.map((tagline, index) => (
            <p key={index} className="uppercase">
              {tagline}
            </p>
          ))}
        </div>

        {/* Column 2: Credential & View Work Link */}
        <div className="flex flex-col md:items-center space-y-2">
          <p className="uppercase">{footerContent.credential}</p>
          <a
            href="#projects"
            className="underline hover:text-white transition-colors"
          >
            View Work
          </a>
        </div>

        {/* Column 3: Availability & Current Year */}
        <div className="flex flex-col md:items-end space-y-2">
          <p className="uppercase">Available for opportunities</p>
          <p>{currentYear}</p>
        </div>
      </div>

      {/* Middle: Giant Brand Name */}
      <div className="py-20 md:py-24 overflow-hidden text-center select-none">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase text-[#f4f4f4]">
          {personalInfo.brandName.toLowerCase()}
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-end">
        {/* Column 1: Contact, Copyright & TAP Academy Credit */}
        <div className="flex flex-col space-y-2">
          <a
            href="#contact"
            className="underline hover:text-white transition-colors w-fit"
          >
            Contact
          </a>
          <p className="text-[9px] md:text-[10px] text-white/60">
            {footerContent.copyright}
          </p>
          <p className="text-[9px] md:text-[10px] text-white/60">
            Trained at{' '}
            <a
              href={academy.url}
              target="_blank"
              rel="noopener"
              className="underline hover:text-white transition-colors"
            >
              {academy.name}
            </a>
          </p>
        </div>

        {/* Column 2: Email & Social Icons */}
        <div className="flex flex-col md:items-center space-y-3">
          <a
            href={`mailto:${personalInfo.emails.primary}`}
            className="underline hover:text-white transition-colors"
          >
            {personalInfo.emails.primary}
          </a>
          <div className="flex items-center space-x-4 text-white/80">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Column 3: GitHub Link */}
        <div className="flex flex-col md:items-end space-y-2">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            Explore My GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
