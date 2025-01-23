export default function Portfolio() {
    const projects = [
        {
            title: 'PROJECT_1_Flux_Capacitor',
            image: 'https://doyouremember.com/wp-content/uploads/2018/05/flux-capacitor.jpg',
            deployed: 'https://doyouremember.com/wp-content/uploads/2018/05/flux-capacitor.jpg',
            github: 'https://github.com/flux-capacitor/flux-capacitor'
        },
        {
            title: 'PROJECT_2_Infinity_Stones',
            image: 'https://i.pinimg.com/736x/75/c0/7f/75c07f1424e644cc47cea61861608d89.jpg',
            deployed: 'https://i.pinimg.com/736x/75/c0/7f/75c07f1424e644cc47cea61861608d89.jpg',
            github: 'https://github.com/topics/infinity-stones'
        },
        // ADD 4 MORE PROJECT OBJECTS FOLLOWING THE SAME STRUCTURE
        {
            title: 'PROJECT_3_Vibranium',
            image: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/a/aa/AAoU_Vibranium_Concept.png/revision/latest?cb=20161227225416',
            deployed: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/a/aa/AAoU_Vibranium_Concept.png/revision/latest?cb=20161227225416',
            github: 'https://github.com/sarathm09/vibranium'
        },
        {
            title: 'PROJECT_4_Silly_Putty',
            image: 'https://4.bp.blogspot.com/-8bx9s-qt_AM/UBArTBu8k4I/AAAAAAAAAGQ/X6zPQ5URBdA/s1600/putty.JPG',
            deployed: 'https://4.bp.blogspot.com/-8bx9s-qt_AM/UBArTBu8k4I/AAAAAAAAAGQ/X6zPQ5URBdA/s1600/putty.JPG',
            github: 'https://github.com/alidursen/silly-putty'
        },
        {
            title: 'PROJECT_5_Men_Who_Stare_at_Goats',
            image: 'https://archeravenue.net/wp-content/uploads/2019/09/menstaregoats.jpg',
            deployed: 'https://archeravenue.net/wp-content/uploads/2019/09/menstaregoats.jpg',
            github: 'https://github.com/glamp/sample-moniker-documents/blob/master/movies/men_who_stare_at_goats%2C_the.txt'
        },
        {
            title: 'PROJECT_6_MK_Ultra',
            image: 'https://allthatsinteresting.com/wordpress/wp-content/uploads/2017/10/lsd-adminster.jpg',
            deployed: 'https://allthatsinteresting.com/wordpress/wp-content/uploads/2017/10/lsd-adminster.jpg',
            github: 'https://github.com/corolla-johnson/mkultra'
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