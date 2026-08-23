export interface NavbarMenuItemType {
    id: string;
    label: string;
    to?: string;
    children?: NavbarMenuChildItemType[];
}

interface NavbarMenuChildItemType {
    label: string;
    to: string;
}