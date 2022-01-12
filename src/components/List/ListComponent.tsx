import { IconReact } from '../../interface/interface';
import { LayoutIconsReact } from '../../pages/profile/section/LayoutIconsReact';

export const ListComponent = (list:IconReact) => {
    const { class_li,size,component,href} = list;

    const OpenWindosTap = (url:string) =>{
        if (url !== '') {
            window.open(url,"_blank");
        }
    }
    return (
        <li className={ class_li } onClick={ () => OpenWindosTap(href) }>
            <LayoutIconsReact data={{component,size}} />
        </li>
    )
}