import { Tag_a,IconReact } from '../interface/interface';

const menu_class_li:string = "nav-menu-item";
const menu_class_a:string = "nav-menu-link nav-link";
const skill_class_li:string = "profile-skills-item item";
const profile_icon_class_li:string = "profile-icon-item item";

export const Menu:Tag_a[] = [
    { id: 0, href: "#profile",class_li:menu_class_li,class_a:menu_class_a,text:"Profile"},
    { id: 1, href: "#apis",class_li:menu_class_li,class_a:menu_class_a,text:"API used" },
    { id: 2, href: "#app2",class_li:menu_class_li,class_a:menu_class_a,text:"App2" },
    { id: 3, href: "#app3",class_li:menu_class_li,class_a:menu_class_a,text:"App3" },
];

export const Skill:IconReact[] = [
    { id:0,href:'', size:40,class_li:skill_class_li,component:"AiFillHtml5"},
    { id:1,href:'', size:40,class_li:skill_class_li,component:"DiCss3Full" },
    { id:2,href:'', size:40,class_li:skill_class_li,component:"DiJavascript1" },
    { id:3,href:'', size:40,class_li:skill_class_li,component:"FaReact" },
    { id:4,href:'', size:40,class_li:skill_class_li,component:"FaGitAlt" },
    { id:5,href:'', size:40,class_li:skill_class_li,component:"FaNode" },
    { id:6,href:'', size:40,class_li:skill_class_li,component:"DiPhp" },
];

export const Contact:IconReact[] = [
    { id: 0, href: "https://github.com/LuisSantiago10", size: 40,class_li:profile_icon_class_li,component:"AiFillGithub"},
    { id: 1, href: "https://www.linkedin.com/in/luis-santiago-8b58b015b/", size: 40,class_li:profile_icon_class_li,component:"AiFillLinkedin" }
]