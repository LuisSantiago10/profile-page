import { Tag_a } from '../../interface/interface';


export const ListLi = (list:Tag_a) => {
    const { href,text,class_a,class_li } = list;

    return (
        <li className={ class_li }>
            <a href={ href } className={ class_a } >{ text }</a>
        </li>
    )
}
