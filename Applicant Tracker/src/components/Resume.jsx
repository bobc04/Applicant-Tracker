export default function Resume() {
    const proficiencies = {
      'Front-end': ['YOUR_FRONTEND_SKILLS_HERE'],
      'Back-end': ['YOUR_BACKEND_SKILLS_HERE'],
      'Tools': ['YOUR_DEVELOPMENT_TOOLS_HERE']
    };
  
    return (
      <section className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Resume</h2>
        
        <div className="mb-6">
          <a
            href="PATH_TO_YOUR_RESUME_PDF"
            download
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Download Resume
          </a>
        </div>
  
        <div className="space-y-6">
          {Object.entries(proficiencies).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-3">{category}</h3>
              <ul className="list-disc list-inside space-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="text-gray-600">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }