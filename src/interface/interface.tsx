interface ConfigLi {
    id: number,
    class_li: string,
    href: string
}

export interface Tag_a extends ConfigLi{
    class_a: string,
    text: string | number 
}

export interface IconReact extends ConfigLi{
    component: string
    size:number,
}