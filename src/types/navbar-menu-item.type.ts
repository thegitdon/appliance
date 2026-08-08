export interface NavbarMenuItemType {
    id: string;
    label: string;
    children: NavbarMenuChildItemType[];
}

interface NavbarMenuChildItemType {
    label: string;
    to: string;
}