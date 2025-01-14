import projectsData from "../../data/projectsData";
import Nav from "../Nav/Nav";
import './Projects.css';
function Projects() {
    return (<>
        <Nav />
        <h1 style={{ textAlign: 'center' }}>Projetos</h1>
        <hr />
        {projectsData.map((e) =>
            <body>
                <div key={e.id} className="container">
                    <div className="project-card">
                        <h1>{e.title}</h1>
                        <h2>{e.subtitle}</h2>
                        <div className="images-container">
                            <img className="project-images" src={e.images[0]} alt={e.alt} />
                            <img className="project-images" src={e.images[1]} alt={e.alt} />
                        </div>
                        <a href={e.link}>
                            <div className="link-button">
                                Link Github
                                <img src={'../src/assets/images/logo/github-repo.svg'} />
                            </div>
                        </a>
                    </div>
                </div>
            </body>
        )}
    </>
    );
}

export default Projects;