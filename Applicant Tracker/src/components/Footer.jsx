export default function Footer() {
    const socialLinks = [
      {
        name: 'GitHub',
        url: 'YOUR_GITHUB_PROFILE_URL',
        icon: 'github'
      },
      {
        name: 'LinkedIn',
        url: 'YOUR_LINKEDIN_PROFILE_URL',
        icon: 'linkedin'
      },
      {
        name: 'Stack Overflow',
        url: 'YOUR_STACKOVERFLOW_PROFILE_URL',
        icon: 'stack-overflow'
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