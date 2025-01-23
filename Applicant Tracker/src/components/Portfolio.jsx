export default function Portfolio() {
    const projects = [
        {
            title: 'PROJECT_1_Flux_Capacitor',
            image: 'https://doyouremember.com/wp-content/uploads/2018/05/flux-capacitor.jpg',
            deployed: 'https://doyouremember.com/wp-content/uploads/2018/05/flux-capacitor.jpg',
            github: 'https://doyouremember.com/wp-content/uploads/2018/05/flux-capacitor.jpg'
        },
        {
            title: 'PROJECT_2_TITLE',
            image: 'PATH_TO_PROJECT_2_IMAGE',
            deployed: 'URL_TO_DEPLOYED_PROJECT_2',
            github: 'URL_TO_PROJECT_2_GITHUB_REPO'
        },
        // ADD 4 MORE PROJECT OBJECTS FOLLOWING THE SAME STRUCTURE
        {
            title: 'PROJECT_3_TITLE',
            image: 'PATH_TO_PROJECT_1_IMAGE',
            deployed: 'URL_TO_DEPLOYED_PROJECT_1',
            github: 'URL_TO_PROJECT_1_GITHUB_REPO'
        },
        {
            title: 'PROJECT_4_TITLE',
            image: 'PATH_TO_PROJECT_1_IMAGE',
            deployed: 'URL_TO_DEPLOYED_PROJECT_1',
            github: 'URL_TO_PROJECT_1_GITHUB_REPO'
        },
        {
            title: 'PROJECT_5_TITLE',
            image: 'PATH_TO_PROJECT_1_IMAGE',
            deployed: 'URL_TO_DEPLOYED_PROJECT_1',
            github: 'URL_TO_PROJECT_1_GITHUB_REPO'
        },
        {
            title: 'PROJECT_6_TITLE',
            image: 'PATH_TO_PROJECT_1_IMAGE',
            deployed: 'URL_TO_DEPLOYED_PROJECT_1',
            github: 'URL_TO_PROJECT_1_GITHUB_REPO'
        },
    ];
    return (
        <section>
            <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <div className="flex space-x-4">
                                <a
                                    href={project.deployed}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}