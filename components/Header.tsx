import { ModeToggle } from "./ModeToggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-beige-100/95 dark:bg-brown-900/95 backdrop-blur supports-[backdrop-filter]:bg-beige-100/60 dark:supports-[backdrop-filter]:bg-brown-900/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block text-brown-800 dark:text-beige-100">Mujtaba Hussain Mohammed</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a className="transition-colors hover:text-brown-600 dark:hover:text-beige-400 text-brown-700 dark:text-beige-200" href="#skills">Skills</a>
            <a className="transition-colors hover:text-brown-600 dark:hover:text-beige-400 text-brown-700 dark:text-beige-200" href="#experience">Experience</a>
            <a className="transition-colors hover:text-brown-600 dark:hover:text-beige-400 text-brown-700 dark:text-beige-200" href="#projects">Projects</a>
            <a className="transition-colors hover:text-brown-600 dark:hover:text-beige-400 text-brown-700 dark:text-beige-200" href="#education">Education</a>
            <a className="transition-colors hover:text-brown-600 dark:hover:text-beige-400 text-brown-700 dark:text-beige-200" href="#contact">Contact</a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

