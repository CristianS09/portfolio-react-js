import './Skills.css';
import skillsData from '../../data/skillsData';

//Exibe as Skills
function Skills() {
    return (
        <>
            <h1>Skills</h1>
            <hr />
            <div className='skills-container'>
                {skillsData.map((e) => <img key={e.id} className='skills-image' src={e.image} alt={e.alt} />)}
            </div>
        </>
    );
}

export default Skills;