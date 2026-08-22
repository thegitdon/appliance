<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface Municipio {
    nombre: string
    query: string
    color: string
}

const MUNICIPIOS: Municipio[] = [
    { nombre: 'Cali', query: 'Cali, Valle del Cauca, Colombia', color: '#e74c3c' },
    { nombre: 'Jamundí', query: 'Jamundí, Valle del Cauca, Colombia', color: '#3498db' },
    { nombre: 'Palmira', query: 'Palmira, Valle del Cauca, Colombia', color: '#2ecc71' },
    { nombre: 'Yumbo', query: 'Yumbo, Valle del Cauca, Colombia', color: '#f39c12' },
    { nombre: 'Buenaventura', query: 'Buenaventura, Valle del Cauca, Colombia', color: '#9b59b6' },
]

const mapContainer = ref<HTMLDivElement | null>(null)
const loading = ref(true)
const error = ref('')
let map: L.Map | null = null

onMounted(async () => {
    if (!mapContainer.value) return

    map = L.map(mapContainer.value).setView([3.8, -76.6], 9)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
        maxZoom: 19,
    }).addTo(map)

    const bounds = L.latLngBounds([])
    let loadedCount = 0

    for (const m of MUNICIPIOS) {
        try {
            const geojson = await fetchBoundary(m.query)
            console.log(`[${m.nombre}]`, geojson)

            if (!geojson) {
                console.warn(`Sin geometría para ${m.nombre}`)
                continue
            }

            const geoJsonLayer = L.geoJSON(geojson, {
                style: {
                    color: m.color,
                    weight: 2,
                    opacity: 0.9,
                    fillColor: m.color,
                    fillOpacity: 0.35,
                },
                onEachFeature: (_feature, layer) => {
                    layer.bindPopup(`<strong>${m.nombre}</strong><br/>Zona de atención`)
                    layer.bindTooltip(m.nombre, {
                        sticky: true,
                        direction: 'top',
                        offset: [0, -10],
                        className: 'municipio-tooltip',
                    })

                    layer.on({
                        mouseover: (e) => {
                            const l = e.target
                            l.setStyle({
                                weight: 5,           // Borde más grueso
                                fillOpacity: 0.6,    // Más opaco
                                color: m.color,
                            })
                            l.bringToFront()
                        },
                        mouseout: (e) => {
                            geoJsonLayer.resetStyle(e.target)
                        },
                    })
                },
            }).addTo(map)

            bounds.extend(geoJsonLayer.getBounds())
            loadedCount++
        } catch (err) {
            console.error(`Error con ${m.nombre}:`, err)
        }

        await new Promise(r => setTimeout(r, 1100))
    }

    if (loadedCount > 0) {
        map.fitBounds(bounds, { padding: [30, 30] })
    } else {
        error.value = 'No se pudieron cargar los municipios'
    }

    loading.value = false
})

onBeforeUnmount(() => {
    map?.remove()
    map = null
})

async function fetchBoundary(query: string): Promise<GeoJSON.FeatureCollection | null> {
    const url = new URL('https://nominatim.openstreetmap.org/search')
    url.searchParams.set('q', query)
    url.searchParams.set('format', 'geojson')
    url.searchParams.set('polygon_geojson', '1')
    url.searchParams.set('limit', '1')

    const res = await fetch(url.toString(), {
        headers: { 'User-Agent': 'MiAppVue/1.0 (contacto@example.com)' },
    })

    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()

    if (!data.features || data.features.length === 0) return null
    return data as GeoJSON.FeatureCollection
}
</script>

<template>
    <div class="map-wrapper">
        <div ref="mapContainer" class="map-container"></div>
        <div v-if="loading" class="loading">Cargando municipios...</div>
        <div v-if="error" class="error">{{ error }}</div>
    </div>
</template>

<style scoped>
.map-wrapper {
    position: relative;
    width: 100%;
    height: 600px;
}

.map-container {
    width: 100%;
    height: 100%;
    z-index: 0;
}

.loading,
.error {
    position: absolute;
    top: 10px;
    right: 10px;
    background: white;
    padding: 8px 14px;
    border-radius: 6px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.error {
    color: #c0392b;
}
</style>

<style>
/* Estilos del tooltip (fuera de scoped porque Leaflet los inyecta en el body) */
.municipio-tooltip {
    background-color: rgba(0, 0, 0, 0.85);
    color: white;
    border: none;
    border-radius: 6px;
    padding: 8px 14px;
    font-weight: 600;
    font-size: 14px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease;
}

.municipio-tooltip::before {
    border-top-color: rgba(0, 0, 0, 0.85);
}

/* Transición suave para los polígonos */
.leaflet-interactive {
    transition: all 0.2s ease;
}
</style>