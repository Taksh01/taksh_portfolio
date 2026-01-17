export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b-2 border-black z-50">
      <div className="max-w-7xl mx-auto px-2 py-3 flex justify-between items-center">
        {/* Logo / Name */}
        <a
          href="#home"
          className="font-bold text-xl tracking-tight hover:text-black/70 transition-colors"
        >
          Taksh Shah
        </a>

        {/* Links */}
        <div className="flex gap-8 items-center text-sm font-medium uppercase tracking-wider">
          <a href="#home" className="hover:text-black/60 transition-colors">
            Home
          </a>
          <a href="#services" className="hover:text-black/60 transition-colors">
            Services
          </a>
          <a href="#projects" className="hover:text-black/60 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-black/60 transition-colors">
            Contact
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
