import './Skills.css';
import skillsData from '../../data/skills';

//Exibe Card com as skills.
function Skills() {
    return (
        <>
            <div id='skills-container'>
                {skillsData.map((e, key) => (
                    //Gera card para cada elemento da lista.
                    <div className='skills-card' key={key} style={{ backgroundColor: e.color + '10' }}>
                        <img src={e.image} alt={e.alt} className='skills-image' />
                        <span className='badge' style={{ backgroundColor: e.color + '70', color: e.color }}>
                            {e.name}
                        </span>
                    </div>
                ))}
            </div >
        </>
    );
}

export default Skills;