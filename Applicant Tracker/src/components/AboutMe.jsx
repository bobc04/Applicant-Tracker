export default function AboutMe() {
    return (
      <section className="max-w-2xl mx-auto">
        <div className="flex items-center space-x-8 mb-8">
          <img
            src="PATH_TO_YOUR_PROFILE_PHOTO"
            alt="YOUR_NAME Profile"
            className="w-48 h-48 rounded-full"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600">
              YOUR_PROFESSIONAL_BIO_HERE - DESCRIBE YOUR BACKGROUND, EXPERTISE, AND WHAT
              MAKES YOU UNIQUE AS A DEVELOPER. INCLUDE YOUR PASSION FOR CODING AND ANY
              RELEVANT EXPERIENCE OR SPECIALIZATIONS.
            </p>
          </div>
        </div>
      </section>
    );
  }