export interface SectionContentType {
    id: string;
    titulo: string;
    parrafos: string[];
    icono: IconPropsType;
}

interface IconPropsType {
    class: string;
    styles?: string;
}
