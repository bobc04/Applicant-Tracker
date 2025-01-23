export default function Footer() {
    const socialLinks = [
      {
        name: 'Rick\'sGitHub_',
        url: 'https://github.com',
      },
      
      {
        name: 'Rick\'s LinkedIn_',
        url: 'https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo',
      },
      {
        name: 'Stack Overflow',
        url: 'https://stackoverflow.com',
      }
    ];
  
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  }