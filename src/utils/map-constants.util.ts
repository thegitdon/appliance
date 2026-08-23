import type { CityType } from "@/types/city.type";

export class MapConstantsUtil {
    public static readonly CITIES: CityType[] = [
        { name: 'Cali', query: 'Cali, Valle del Cauca, Colombia', color: '#e74c3c' },
        { name: 'Jamundí', query: 'Jamundí, Valle del Cauca, Colombia', color: '#3498db' },
        { name: 'Palmira', query: 'Palmira, Valle del Cauca, Colombia', color: '#2ecc71' },
        { name: 'Yumbo', query: 'Yumbo, Valle del Cauca, Colombia', color: '#f39c12' },
        { name: 'Buenaventura', query: 'Buenaventura, Valle del Cauca, Colombia', color: '#9b59b6' },
    ]
}