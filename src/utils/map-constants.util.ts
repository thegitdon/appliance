import type { CityType } from "@/types/city.type";

export class MapConstantsUtil {

    public static readonly MAP_BOUNDARY_FOLDER_PATH = '/map-boundary';

    public static readonly CITIES: CityType[] = [
        { name: 'Cali', color: '#e74c3c', geojsonFile: 'cali.geojson' },
        { name: 'Jamundí', color: '#3498db', geojsonFile: 'jamundi.geojson' },
        { name: 'Palmira', color: '#2ecc71', geojsonFile: 'palmira.geojson' },
        { name: 'Yumbo', color: '#f39c12', geojsonFile: 'yumbo.geojson' },
        { name: 'Buenaventura', color: '#9b59b6', geojsonFile: 'buenaventura.geojson' },
    ]
}