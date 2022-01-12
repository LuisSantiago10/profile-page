import { AiFillGithub,AiFillLinkedin,AiFillHtml5 } from 'react-icons/ai';
import { FaGitAlt,FaNode,FaReact } from 'react-icons/fa';
import { DiJavascript1,DiCss3Full,DiPhp } from 'react-icons/di';

interface ConfigComponent {
    data :{
        component: string,
        size:number
    }
}

const types = {
    github: 'AiFillGithub',
    linkedi: 'AiFillLinkedin',
    html: 'AiFillHtml5',
    git:'FaGitAlt',
    node: 'FaNode',
    react: 'FaReact',
    javascript: 'DiJavascript1',
    css: 'DiCss3Full',
    php: 'DiPhp'
}

export const LayoutIconsReact = (data:ConfigComponent) => {
    const { component,size } = data.data;
    switch (component) {
        case types.github: return <AiFillGithub size={size}/>;
        case types.html: return <AiFillHtml5 size={size}/>;
        case types.git: return <FaGitAlt size={size}/>;
        case types.node: return <FaNode size={size}/>;
        case types.react: return <FaReact size={size}/>;
        case types.javascript: return <DiJavascript1 size={size}/>;
        case types.css: return <DiCss3Full size={size}/>;
        case types.php: return <DiPhp size={size}/>;
        default: return <AiFillLinkedin size={size}/>
    }
}
