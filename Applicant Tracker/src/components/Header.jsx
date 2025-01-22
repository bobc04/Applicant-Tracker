export default function Header({ currentSection, setCurrentSection }) {
    const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];
  
    return (
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">YOUR_FULL_NAME</h1>
          <nav>
            <ul className="flex space-x-4">
              {sections.map((section) => (
                <li key={section}>
                  <button
                    onClick={() => setCurrentSection(section)}
                    className={`px-3 py-2 rounded ${
                      currentSection === section
                        ? 'bg-blue-500'
                        : 'hover:bg-gray-700'
                    }`}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  