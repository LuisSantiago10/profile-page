import { Contact,Skill } from '../../../data/Data';
import { ListComponent } from '../../../components/List/ListComponent';

export const Profile = () => {
    return (
        <main className='profile'>
            <div className='profile-name'>
                <h1>Hi my is <span>Luis Santiago</span></h1>
                 <h2>Developer web</h2>
            </div>
            <div className='profile-description'>
                <p>
                    I am passionate about developing web and software in general.
                    Responsible, honest and constant in my work, 
                    I consider myself a self-taught. I am person wanting to continue learning new technology and I work very well as a team. 
                </p>
                <p>
                    I’m currently improving my skills with javascript and learning react js and node.js. Contact me at:
                </p>
            </div>
            <div className='profile-icon'>
                <ul className='profile-icon-list list'>
                    {
                        Contact.map( data => (
                                <ListComponent  key = { data.id } {...data} />
                        ))   
                    }
                </ul>
            </div>
            <div className='profile-skills'>
                <h2 className='profile-skills-title'>Skills</h2>
                <ul className='profile-skills-list list'>
                    {
                        Skill.map( data => (
                                <ListComponent  key = { data.id } {...data} />
                        ))   
                    }
                </ul>
            </div>
        </main>
    )
}
