/* ========================================
   VyRA — Vigilancia y Red de Aire
   Air Quality Monitoring App - Mexicali
   ======================================== */

// ============================================================
// DATA: Sensor locations across Mexicali
// ============================================================
const SENSORS = [
    {
        id: 'S01',
        name: 'Módulo Centro Cívico',
        zone: 'Centro Cívico',
        lat: 32.6245,
        lng: -115.4523,
        type: 'industrial'
    },
    {
        id: 'S02',
        name: 'Módulo Río Nuevo',
        zone: 'Río Nuevo',
        lat: 32.6350,
        lng: -115.4680,
        type: 'urban'
    },
    {
        id: 'S03',
        name: 'Módulo Ciudad Industrial',
        zone: 'Ciudad Industrial',
        lat: 32.6050,
        lng: -115.4200,
        type: 'industrial'
    },
    {
        id: 'S04',
        name: 'Módulo González Ortega',
        zone: 'González Ortega',
        lat: 32.6500,
        lng: -115.4900,
        type: 'residential'
    },
    {
        id: 'S05',
        name: 'Módulo Pueblo Sol',
        zone: 'Pueblo Sol',
        lat: 32.6150,
        lng: -115.4850,
        type: 'residential'
    },
    {
        id: 'S06',
        name: 'Módulo Cachanilla',
        zone: 'Cachanilla',
        lat: 32.6320,
        lng: -115.4350,
        type: 'commercial'
    },
    {
        id: 'S07',
        name: 'Módulo Nueva Mexicali',
        zone: 'Nueva Mexicali',
        lat: 32.5950,
        lng: -115.4650,
        type: 'residential'
    },
    {
        id: 'S08',
        name: 'Módulo Progreso',
        zone: 'Progreso',
        lat: 32.6100,
        lng: -115.5100,
        type: 'industrial'
    },
    {
        id: 'S09',
        name: 'Módulo Xochimilco',
        zone: 'Xochimilco',
        lat: 32.6400,
        lng: -115.5050,
        type: 'urban'
    },
    {
        id: 'S10',
        name: 'Módulo Villa Verde',
        zone: 'Villa Verde',
        lat: 32.5850,
        lng: -115.4400,
        type: 'residential'
    },
    {
        id: 'S11',
        name: 'Módulo El Dorado',
        zone: 'Fracc. El Dorado',
        lat: 32.6180,
        lng: -115.4450,
        type: 'residential'
    },
    {
        id: 'S12',
        name: 'Módulo UABC',
        zone: 'Zona UABC',
        lat: 32.6280,
        lng: -115.4780,
        type: 'urban'
    },
    {
        id: 'S13',
        name: 'Módulo Casa de la Cultura Progreso',
        zone: 'Col. Progreso',
        lat: 32.6089,
        lng: -115.5068,
        type: 'urban'
    }
];

// Air corridors connecting sensors (wind dispersion paths)
const CORRIDORS = [
    {
        id: 'C01',
        name: 'Corredor Industrial Norte',
        description: 'Dispersión desde zona industrial hacia el centro',
        from: 'S03',
        to: 'S06',
        waypoints: [[32.6050, -115.4200], [32.6120, -115.4250], [32.6200, -115.4300], [32.6320, -115.4350]],
        type: 'industrial'
    },
    {
        id: 'C02',
        name: 'Corredor Río Nuevo',
        description: 'Canal de dispersión a lo largo del Río Nuevo',
        from: 'S02',
        to: 'S04',
        waypoints: [[32.6350, -115.4680], [32.6380, -115.4750], [32.6420, -115.4820], [32.6500, -115.4900]],
        type: 'river'
    },
    {
        id: 'C03',
        name: 'Corredor Centro-Sur',
        description: 'Flujo de contaminantes del centro hacia zonas residenciales del sur',
        from: 'S01',
        to: 'S07',
        waypoints: [[32.6245, -115.4523], [32.6180, -115.4560], [32.6100, -115.4600], [32.5950, -115.4650]],
        type: 'urban'
    },
    {
        id: 'C04',
        name: 'Corredor Poniente',
        description: 'Dispersión de vientos del poniente hacia Progreso',
        from: 'S09',
        to: 'S08',
        waypoints: [[32.6400, -115.5050], [32.6300, -115.5080], [32.6200, -115.5090], [32.6100, -115.5100]],
        type: 'wind'
    },
    {
        id: 'C05',
        name: 'Corredor Residencial Este',
        description: 'Flujo desde El Dorado hacia Villa Verde',
        from: 'S11',
        to: 'S10',
        waypoints: [[32.6180, -115.4450], [32.6100, -115.4430], [32.5980, -115.4415], [32.5850, -115.4400]],
        type: 'residential'
    },
    {
        id: 'C06',
        name: 'Corredor Universitario',
        description: 'Zona UABC hacia Pueblo Sol por vientos dominantes',
        from: 'S12',
        to: 'S05',
        waypoints: [[32.6280, -115.4780], [32.6230, -115.4800], [32.6190, -115.4825], [32.6150, -115.4850]],
        type: 'urban'
    },
    {
        id: 'C07',
        name: 'Corredor Industrial-Residencial',
        description: 'Dispersión de contaminantes industriales hacia zonas habitacionales',
        from: 'S03',
        to: 'S10',
        waypoints: [[32.6050, -115.4200], [32.6000, -115.4250], [32.5950, -115.4320], [32.5850, -115.4400]],
        type: 'industrial'
    },
    {
        id: 'C08',
        name: 'Corredor Centro Comercial',
        description: 'Cachanilla hacia Centro Cívico por tráfico vehicular',
        from: 'S06',
        to: 'S01',
        waypoints: [[32.6320, -115.4350], [32.6300, -115.4400], [32.6270, -115.4460], [32.6245, -115.4523]],
        type: 'traffic'
    }
];

// AQI categories
const AQI_CATEGORIES = [
    { min: 0, max: 50, label: 'Buena', color: '#00e400', textColor: '#003300', icon: 'fa-smile', advice: 'La calidad del aire es satisfactoria.' },
    { min: 51, max: 100, label: 'Moderada', color: '#ffff00', textColor: '#333300', icon: 'fa-meh', advice: 'Calidad aceptable. Personas sensibles podrían experimentar molestias.' },
    { min: 101, max: 150, label: 'Dañina para Sensibles', color: '#ff7e00', textColor: '#fff', icon: 'fa-frown', advice: 'Grupos sensibles pueden experimentar efectos a la salud.' },
    { min: 151, max: 200, label: 'Dañina', color: '#ff0000', textColor: '#fff', icon: 'fa-sad-tear', advice: 'Todos pueden experimentar efectos a la salud.' },
    { min: 201, max: 300, label: 'Muy Dañina', color: '#8f3f97', textColor: '#fff', icon: 'fa-dizzy', advice: 'Alerta sanitaria. Mayor riesgo para toda la población.' },
    { min: 301, max: 500, label: 'Peligrosa', color: '#7e0023', textColor: '#fff', icon: 'fa-skull-crossbones', advice: 'Alerta sanitaria de emergencia. Evitar actividad al aire libre.' }
];

const CORRIDOR_COLORS = {
    industrial: '#ff7e00',
    river: '#0ea5e9',
    urban: '#ff0000',
    wind: '#48cae4',
    residential: '#00e400',
    traffic: '#ffff00'
};

// ============================================================
// APP STATE
// ============================================================
const state = {
    sensorData: new Map(),
    heatData: new Map(),
    map: null,
    markers: {},
    heatMarkers: {},
    heatCircles: {},
    corridorLines: {},
    zoneCircles: {},
    userMarker: null,
    userLocation: null,
    layers: { sensors: true, corridors: true, heatmap: true, heatwave: true },
    selectedSensor: null,
    windDirection: 0,
    windSpeed: 0,
    temperature: 0,
    updateInterval: null
};

// ============================================================
// UTILITY FUNCTIONS
// ============================================================
function getAQICategory(aqi) {
    return AQI_CATEGORIES.find(c => aqi >= c.min && aqi <= c.max) || AQI_CATEGORIES[AQI_CATEGORIES.length - 1];
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min, max, decimals = 1) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
}

// ============================================================
// HEAT WAVE CATEGORIES & DATA
// ============================================================
const HEAT_CATEGORIES = [
    { min: 0, max: 34, label: 'Normal', color: '#0ea5e9', bg: 'rgba(14,165,233,0.12)', icon: 'fa-check-circle', level: 'low' },
    { min: 35, max: 39, label: 'Precaución', color: '#ffc800', bg: 'rgba(255,200,0,0.15)', icon: 'fa-exclamation-triangle', level: 'moderate' },
    { min: 40, max: 44, label: 'Peligro', color: '#ff7e00', bg: 'rgba(255,126,0,0.15)', icon: 'fa-fire', level: 'high' },
    { min: 45, max: 60, label: 'Extremo', color: '#ff0000', bg: 'rgba(255,0,0,0.15)', icon: 'fa-skull-crossbones', level: 'extreme' }
];

function getHeatCategory(temp) {
    return HEAT_CATEGORIES.find(c => temp >= c.min && temp <= c.max) || HEAT_CATEGORIES[HEAT_CATEGORIES.length - 1];
}

// Generate hourly temperature forecast for a sensor (Mexicali is extremely hot)
function generateHourlyForecast(sensor) {
    const baseTemps = {
        industrial: { min: 32, max: 50 },
        urban: { min: 30, max: 48 },
        residential: { min: 28, max: 46 },
        commercial: { min: 29, max: 47 }
    };
    const range = baseTemps[sensor.type] || baseTemps.urban;

    // Realistic daily temperature curve for Mexicali desert climate
    const hourlyFactors = [
        0.60, 0.57, 0.55, 0.53, 0.52, 0.54, // 00-05 (cool night)
        0.58, 0.65, 0.74, 0.82, 0.89, 0.94,  // 06-11 (morning rise)
        0.97, 1.00, 1.00, 0.98, 0.95, 0.90,  // 12-17 (peak afternoon)
        0.84, 0.78, 0.73, 0.69, 0.65, 0.62   // 18-23 (evening cool)
    ];

    const hours = [];
    for (let h = 0; h < 24; h++) {
        const factor = hourlyFactors[h];
        const temp = range.min + (range.max - range.min) * factor + randomFloat(-2, 2);
        hours.push(parseFloat(temp.toFixed(1)));
    }
    return hours;
}

function generateHeatData(sensor) {
    const hourlyTemps = generateHourlyForecast(sensor);
    const currentHour = new Date().getHours();
    const currentTemp = hourlyTemps[currentHour];
    const maxTemp = Math.max(...hourlyTemps);
    const minTemp = Math.min(...hourlyTemps);
    const humidity = randomFloat(8, 35); // Mexicali low humidity
    const uvIndex = currentHour >= 6 && currentHour <= 18
        ? randomFloat(Math.min(currentHour - 5, 11), Math.min(currentHour, 14))
        : 0;

    // Find safe hours (below 35°C)
    const safeHours = [];
    hourlyTemps.forEach((t, i) => {
        if (t < 35) safeHours.push(i);
    });

    return {
        currentTemp,
        maxTemp,
        minTemp,
        humidity,
        uvIndex: Math.max(0, Math.min(14, uvIndex)),
        hourlyTemps,
        safeHours,
        timestamp: new Date()
    };
}

// Generate safe hours recommendation text
function getSafeHoursRecommendation() {
    const allHeatData = [...state.heatData.values()];
    if (allHeatData.length === 0) return 'Cargando datos...';

    // Average hourly temps across all sensors
    const avgHourly = Array(24).fill(0);
    allHeatData.forEach(d => {
        d.hourlyTemps.forEach((t, i) => {
            avgHourly[i] += t / allHeatData.length;
        });
    });

    const safeRanges = [];
    let rangeStart = null;
    for (let h = 0; h < 24; h++) {
        if (avgHourly[h] < 35) {
            if (rangeStart === null) rangeStart = h;
        } else {
            if (rangeStart !== null) {
                safeRanges.push([rangeStart, h - 1]);
                rangeStart = null;
            }
        }
    }
    if (rangeStart !== null) safeRanges.push([rangeStart, 23]);

    if (safeRanges.length === 0) {
        return 'ALERTA: No se prevén horarios seguros hoy. Evite salir y manténgase hidratado. Busque lugares con aire acondicionado.';
    }

    const rangeTexts = safeRanges.map(r => {
        const from = `${String(r[0]).padStart(2, '0')}:00`;
        const to = `${String(r[1]).padStart(2, '0')}:59`;
        return `${from} — ${to}`;
    });

    return `Horarios seguros para actividad al aire libre: ${rangeTexts.join(', ')}. Fuera de estos horarios, se recomienda permanecer en interiores con hidratación constante.`;
}

// Generate realistic AQI data for a sensor based on type
function generateSensorData(sensor) {
    const baseRanges = {
        industrial: { aqiMin: 80, aqiMax: 220, pm25Min: 30, pm25Max: 120 },
        urban: { aqiMin: 50, aqiMax: 160, pm25Min: 15, pm25Max: 80 },
        residential: { aqiMin: 20, aqiMax: 100, pm25Min: 5, pm25Max: 45 },
        commercial: { aqiMin: 40, aqiMax: 140, pm25Min: 10, pm25Max: 65 }
    };

    const range = baseRanges[sensor.type] || baseRanges.urban;

    // Add some time-based variation (simulating hourly changes)
    const hour = new Date().getHours();
    const hourFactor = (hour >= 7 && hour <= 9) || (hour >= 17 && hour <= 20) ? 1.3 : 1.0; // Rush hours

    const aqi = Math.min(500, Math.round(randomInRange(range.aqiMin, range.aqiMax) * hourFactor));
    const pm25 = Math.min(500, randomFloat(range.pm25Min, range.pm25Max * hourFactor));
    const pm10 = Math.min(604, randomFloat(pm25 * 1.2, pm25 * 2.5));
    const o3 = randomFloat(10, 80);
    const co = randomFloat(0.1, 8.0);
    const no2 = randomFloat(5, 120);

    return {
        aqi,
        pm25,
        pm10,
        o3,
        co,
        no2,
        timestamp: new Date()
    };
}

function showToast(message, type = 'success') {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();

    const icons = { success: 'fa-check-circle', warning: 'fa-exclamation-triangle', danger: 'fa-exclamation-circle' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fas ${icons[type]}"></i> ${message}`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// ============================================================
// MAP INITIALIZATION
// ============================================================
function initMap() {
    state.map = L.map('map', {
        center: [32.6150, -115.4650],
        zoom: 13,
        zoomControl: true,
        attributionControl: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap | VyRA Mexicali',
        maxZoom: 19
    }).addTo(state.map);

    // Move zoom control to bottom-right
    state.map.zoomControl.setPosition('topright');
}

// ============================================================
// MARKERS
// ============================================================
function createMarkerIcon(aqi) {
    const category = getAQICategory(aqi);
    return L.divIcon({
        className: 'custom-marker',
        html: `
            <div class="marker-pulse" style="background:${category.color}"></div>
            <div class="marker-pin" style="background:${category.color}; color:${category.textColor}; border-color:${category.color}">
                ${aqi}
            </div>
        `,
        iconSize: [40, 48],
        iconAnchor: [20, 48],
        popupAnchor: [0, -48]
    });
}

function createPopupContent(sensor, data) {
    const category = getAQICategory(data.aqi);

    // Find corridors that involve this sensor
    const relatedCorridors = CORRIDORS.filter(c => c.from === sensor.id || c.to === sensor.id);

    let corridorHTML = '';
    if (relatedCorridors.length > 0) {
        corridorHTML = `
            <div class="popup-corridors">
                <h4><i class="fas fa-route"></i> Pasillos de Dispersión</h4>
                ${relatedCorridors.map(c => {
                    const fromSensor = SENSORS.find(s => s.id === c.from);
                    const toSensor = SENSORS.find(s => s.id === c.to);
                    const direction = c.from === sensor.id ? 'Hacia' : 'Desde';
                    const target = c.from === sensor.id ? toSensor : fromSensor;
                    return `
                        <div class="popup-corridor-item" data-corridor="${c.id}" style="cursor:pointer">
                            <i class="fas fa-arrow-right"></i>
                            <span><strong>${c.name}</strong> — ${direction} ${target.zone}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    return `
        <div class="popup-content">
            <div class="popup-header">
                <div class="popup-aqi-badge" style="background:${category.color}; color:${category.textColor}">
                    ${data.aqi}
                </div>
                <div>
                    <div class="popup-title">${sensor.name}</div>
                    <div class="popup-zone">${sensor.zone} — ${sensor.type === 'industrial' ? 'Zona Industrial' : sensor.type === 'urban' ? 'Zona Urbana' : sensor.type === 'commercial' ? 'Zona Comercial' : 'Zona Residencial'}</div>
                    <div class="popup-status" style="color:${category.color}">
                        <i class="fas ${category.icon}"></i> ${category.label}
                    </div>
                </div>
            </div>
            <div class="popup-readings">
                <div class="popup-reading">
                    <span class="popup-reading-label">PM2.5</span>
                    <span class="popup-reading-value">${data.pm25}</span>
                </div>
                <div class="popup-reading">
                    <span class="popup-reading-label">PM10</span>
                    <span class="popup-reading-value">${data.pm10}</span>
                </div>
                <div class="popup-reading">
                    <span class="popup-reading-label">O₃</span>
                    <span class="popup-reading-value">${data.o3}</span>
                </div>
                <div class="popup-reading">
                    <span class="popup-reading-label">CO</span>
                    <span class="popup-reading-value">${data.co}</span>
                </div>
            </div>
            <div style="font-size:11px; color:#6b7280; padding:6px 0; border-top:1px solid rgba(0,0,0,0.06)">
                <i class="fas fa-info-circle" style="color:#0ea5e9"></i> ${category.advice}
            </div>
            ${corridorHTML}
        </div>
    `;
}

function addSensorMarkers() {
    SENSORS.forEach(sensor => {
        const data = state.sensorData.get(sensor.id);
        if (!data) return;

        const icon = createMarkerIcon(data.aqi);
        const marker = L.marker([sensor.lat, sensor.lng], { icon })
            .addTo(state.map)
            .bindPopup(createPopupContent(sensor, data), {
                maxWidth: 320,
                className: 'dark-popup'
            });

        marker.on('click', () => {
            state.selectedSensor = sensor.id;
        });

        marker.on('popupopen', () => {
            // Attach corridor click handlers inside popup
            setTimeout(() => {
                document.querySelectorAll('.popup-corridor-item[data-corridor]').forEach(el => {
                    el.addEventListener('click', () => {
                        showCorridorDetail(el.dataset.corridor);
                    });
                });
            }, 100);
        });

        state.markers[sensor.id] = marker;
    });
}

function updateMarkers() {
    SENSORS.forEach(sensor => {
        const data = state.sensorData.get(sensor.id);
        if (!data || !state.markers[sensor.id]) return;

        const icon = createMarkerIcon(data.aqi);
        state.markers[sensor.id].setIcon(icon);
        state.markers[sensor.id].setPopupContent(createPopupContent(sensor, data));
    });
}

// ============================================================
// CORRIDORS (Air Dispersion Paths)
// ============================================================
function addCorridors() {
    CORRIDORS.forEach(corridor => {
        const fromData = state.sensorData.get(corridor.from);
        const toData = state.sensorData.get(corridor.to);
        if (!fromData || !toData) return;

        // Average AQI for the corridor
        const avgAqi = Math.round((fromData.aqi + toData.aqi) / 2);
        const category = getAQICategory(avgAqi);

        // Animated polyline
        const line = L.polyline(corridor.waypoints, {
            color: category.color,
            weight: 4,
            opacity: 0.7,
            dashArray: '12, 8',
            className: 'corridor-line'
        }).addTo(state.map);

        // Tooltip on hover
        line.bindTooltip(`
            <div style="font-family: Inter, sans-serif; padding: 4px;">
                <strong>${corridor.name}</strong><br>
                <span style="font-size:11px; color:#aaa">${corridor.description}</span><br>
                <span style="color:${category.color}; font-weight:700">AQI promedio: ${avgAqi} — ${category.label}</span>
            </div>
        `, {
            sticky: true,
            className: 'corridor-tooltip'
        });

        line.on('click', () => {
            showCorridorDetail(corridor.id);
        });

        state.corridorLines[corridor.id] = line;

        // Add directional arrows along the corridor
        addFlowArrows(corridor, category.color);
    });
}

function addFlowArrows(corridor, color) {
    const points = corridor.waypoints;
    for (let i = 0; i < points.length - 1; i++) {
        const midLat = (points[i][0] + points[i + 1][0]) / 2;
        const midLng = (points[i][1] + points[i + 1][1]) / 2;

        // Calculate angle
        const dx = points[i + 1][1] - points[i][1];
        const dy = points[i + 1][0] - points[i][0];
        const angle = Math.atan2(dx, dy) * (180 / Math.PI);

        const arrowIcon = L.divIcon({
            className: 'flow-arrow',
            html: `<i class="fas fa-chevron-right" style="color:${color}; font-size:12px; transform:rotate(${90 - angle}deg); opacity:0.8"></i>`,
            iconSize: [16, 16],
            iconAnchor: [8, 8]
        });

        L.marker([midLat, midLng], { icon: arrowIcon, interactive: false }).addTo(state.map);
    }
}

function updateCorridors() {
    // Remove old corridors
    Object.values(state.corridorLines).forEach(line => state.map.removeLayer(line));
    state.corridorLines = {};

    // Remove flow arrows
    state.map.eachLayer(layer => {
        if (layer instanceof L.Marker && layer.options.icon && layer.options.icon.options.className === 'flow-arrow') {
            state.map.removeLayer(layer);
        }
    });

    if (state.layers.corridors) {
        addCorridors();
    }
}

// ============================================================
// ZONE CIRCLES (Heatmap-like zones)
// ============================================================
function addZoneCircles() {
    SENSORS.forEach(sensor => {
        const data = state.sensorData.get(sensor.id);
        if (!data) return;

        const category = getAQICategory(data.aqi);
        const circle = L.circle([sensor.lat, sensor.lng], {
            radius: 600,
            fillColor: category.color,
            fillOpacity: 0.12,
            color: category.color,
            weight: 1,
            opacity: 0.3
        }).addTo(state.map);

        state.zoneCircles[sensor.id] = circle;
    });
}

function updateZoneCircles() {
    Object.values(state.zoneCircles).forEach(circle => state.map.removeLayer(circle));
    state.zoneCircles = {};
    if (state.layers.heatmap) {
        addZoneCircles();
    }
}

// ============================================================
// SIDEBAR - Sensor List
// ============================================================
function updateSensorList() {
    const container = document.getElementById('sensorList');
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    const sortedSensors = [...SENSORS].sort((a, b) => {
        const aData = state.sensorData.get(a.id);
        const bData = state.sensorData.get(b.id);
        return (bData?.aqi || 0) - (aData?.aqi || 0);
    });

    const filtered = sortedSensors.filter(s =>
        s.name.toLowerCase().includes(searchTerm) ||
        s.zone.toLowerCase().includes(searchTerm)
    );

    container.innerHTML = filtered.map(sensor => {
        const data = state.sensorData.get(sensor.id);
        if (!data) return '';
        const category = getAQICategory(data.aqi);
        const isAlert = data.aqi > 150;

        return `
            <div class="sensor-item ${isAlert ? 'alert' : ''}" data-sensor="${sensor.id}">
                <div class="sensor-dot" style="background:${category.color}; box-shadow: 0 0 6px ${category.color}"></div>
                <div class="sensor-item-info">
                    <div class="sensor-item-name">${sensor.name}</div>
                    <div class="sensor-item-zone">${sensor.zone}</div>
                </div>
                <div class="sensor-item-aqi" style="color:${category.color}">${data.aqi}</div>
            </div>
        `;
    }).join('');

    // Click handlers
    container.querySelectorAll('.sensor-item').forEach(item => {
        item.addEventListener('click', () => {
            const sensorId = item.dataset.sensor;
            const sensor = SENSORS.find(s => s.id === sensorId);
            if (sensor) {
                // Close sidebar on mobile so the map is visible
                if (isMobile()) {
                    const sidebar = document.querySelector('.sidebar');
                    if (!sidebar.classList.contains('collapsed')) {
                        toggleSidebar();
                    }
                }
                state.map.flyTo([sensor.lat, sensor.lng], 15, { duration: 0.8 });
                state.markers[sensorId]?.openPopup();
            }
        });
    });
}

// ============================================================
// GENERAL AQI DISPLAY
// ============================================================
function updateGeneralAQI() {
    const allAqi = [...state.sensorData.values()].map(d => d.aqi);
    if (allAqi.length === 0) return;

    const avgAqi = Math.round(allAqi.reduce((a, b) => a + b, 0) / allAqi.length);
    const category = getAQICategory(avgAqi);

    document.getElementById('aqiGeneralValue').textContent = avgAqi;
    document.getElementById('aqiGeneralValue').style.color = category.color;
    document.getElementById('aqiGeneralLabel').textContent = category.label;
    document.getElementById('aqiGeneralLabel').style.color = category.color;

    // Position the bar indicator
    const position = Math.min((avgAqi / 300) * 100, 100);
    document.getElementById('aqiBarFill').style.left = `calc(${position}% - 7px)`;
}

// ============================================================
// STATS PANEL
// ============================================================
function updateStats() {
    const entries = [...state.sensorData.entries()];
    if (entries.length === 0) return;

    // Best zone
    const best = entries.reduce((a, b) => a[1].aqi < b[1].aqi ? a : b);
    const bestSensor = SENSORS.find(s => s.id === best[0]);
    const bestCat = getAQICategory(best[1].aqi);
    document.getElementById('bestZone').textContent = bestSensor?.zone || '--';
    document.getElementById('bestZoneAqi').textContent = `AQI: ${best[1].aqi}`;
    document.getElementById('bestZoneAqi').style.color = bestCat.color;

    // Worst zone
    const worst = entries.reduce((a, b) => a[1].aqi > b[1].aqi ? a : b);
    const worstSensor = SENSORS.find(s => s.id === worst[0]);
    const worstCat = getAQICategory(worst[1].aqi);
    document.getElementById('worstZone').textContent = worstSensor?.zone || '--';
    document.getElementById('worstZoneAqi').textContent = `AQI: ${worst[1].aqi}`;
    document.getElementById('worstZoneAqi').style.color = worstCat.color;

    // Wind
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO'];
    state.windDirection = randomInRange(0, 7);
    state.windSpeed = randomFloat(5, 35);
    state.temperature = randomFloat(28, 45);

    document.getElementById('windDirection').textContent = directions[state.windDirection];
    document.getElementById('windSpeed').textContent = `${state.windSpeed} km/h`;
    document.getElementById('windInfo').textContent = `Viento: ${state.windSpeed} km/h ${directions[state.windDirection]}`;
    document.getElementById('tempInfo').textContent = `${state.temperature}°C`;

    // Counts
    document.getElementById('activeSensors').textContent = SENSORS.length;
    document.getElementById('activeCorridors').textContent = CORRIDORS.length;

    // Timestamp
    const now = new Date();
    document.getElementById('lastUpdate').textContent =
        `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
}

// ============================================================
// CORRIDOR DETAIL PANEL
// ============================================================
function showCorridorDetail(corridorId) {
    const corridor = CORRIDORS.find(c => c.id === corridorId);
    if (!corridor) return;

    const fromSensor = SENSORS.find(s => s.id === corridor.from);
    const toSensor = SENSORS.find(s => s.id === corridor.to);
    const fromData = state.sensorData.get(corridor.from);
    const toData = state.sensorData.get(corridor.to);

    if (!fromSensor || !toSensor || !fromData || !toData) return;

    const fromCat = getAQICategory(fromData.aqi);
    const toCat = getAQICategory(toData.aqi);
    const avgAqi = Math.round((fromData.aqi + toData.aqi) / 2);
    const avgCat = getAQICategory(avgAqi);

    document.getElementById('corridorTitle').innerHTML = `<i class="fas fa-route"></i> ${corridor.name}`;

    document.getElementById('corridorBody').innerHTML = `
        <div class="corridor-info-item">
            <i class="fas fa-info-circle"></i>
            <div>
                <div class="info-label">Descripción</div>
                <div class="info-value" style="font-size:13px; font-weight:400; color:#6b7280">${corridor.description}</div>
            </div>
        </div>
        <div class="corridor-info-item">
            <i class="fas fa-chart-line"></i>
            <div>
                <div class="info-label">AQI Promedio del Pasillo</div>
                <div class="info-value" style="color:${avgCat.color}">${avgAqi} — ${avgCat.label}</div>
            </div>
        </div>
        <div class="corridor-info-item">
            <i class="fas fa-shield-alt"></i>
            <div>
                <div class="info-label">Recomendación</div>
                <div class="info-value" style="font-size:12px; font-weight:400; color:#6b7280">${avgCat.advice}</div>
            </div>
        </div>

        <div class="corridor-flow-indicator">
            <div class="corridor-flow-point">
                <div class="zone-name">${fromSensor.zone}</div>
                <div class="zone-aqi" style="color:${fromCat.color}">${fromData.aqi}</div>
            </div>
            <div class="corridor-flow-arrow">
                <i class="fas fa-long-arrow-alt-right"></i>
            </div>
            <div class="corridor-flow-point">
                <div class="zone-name">${toSensor.zone}</div>
                <div class="zone-aqi" style="color:${toCat.color}">${toData.aqi}</div>
            </div>
        </div>

        <div style="margin-top:14px">
            <div class="corridor-info-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                    <div class="info-label">Origen</div>
                    <div class="info-value">${fromSensor.name}</div>
                </div>
            </div>
            <div class="corridor-info-item">
                <i class="fas fa-flag-checkered"></i>
                <div>
                    <div class="info-label">Destino</div>
                    <div class="info-value">${toSensor.name}</div>
                </div>
            </div>
            <div class="corridor-info-item">
                <i class="fas fa-arrows-alt-h"></i>
                <div>
                    <div class="info-label">Dispersión de contaminantes</div>
                    <div class="info-value" style="font-size:12px; font-weight:400; color:#6b7280">
                        PM2.5: ${fromData.pm25} → ${toData.pm25} µg/m³<br>
                        PM10: ${fromData.pm10} → ${toData.pm10} µg/m³<br>
                        O₃: ${fromData.o3} → ${toData.o3} ppb
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('corridorPanel').classList.add('active');

    // Highlight corridor on map
    if (state.corridorLines[corridorId]) {
        state.corridorLines[corridorId].setStyle({ weight: 7, opacity: 1 });
    }

    // Fit map to show corridor
    state.map.fitBounds(L.latLngBounds(corridor.waypoints), { padding: [80, 80] });
}

// ============================================================
// HEAT WAVE UI
// ============================================================
function updateHeatWaveUI() {
    const allHeat = [...state.heatData.entries()];
    if (allHeat.length === 0) return;

    const avgTemp = allHeat.reduce((sum, [, d]) => sum + d.currentTemp, 0) / allHeat.length;
    const category = getHeatCategory(avgTemp);
    const maxOverall = Math.max(...allHeat.map(([, d]) => d.currentTemp));

    const card = document.getElementById('hwAlertCard');
    card.className = `hw-alert-card ${category.level}`;
    document.getElementById('hwAlertLevel').textContent = category.label;
    document.getElementById('hwAlertLevel').style.color = category.color;
    document.getElementById('hwAlertTemp').textContent = `${avgTemp.toFixed(1)}°C promedio · Máx: ${maxOverall.toFixed(1)}°C`;

    const sorted = allHeat
        .map(([id, d]) => ({ sensor: SENSORS.find(s => s.id === id), data: d }))
        .sort((a, b) => b.data.currentTemp - a.data.currentTemp);

    const dangerZones = document.getElementById('hwZonesDanger');
    dangerZones.innerHTML = sorted.slice(0, 6).map(({ sensor, data }) => {
        const cat = getHeatCategory(data.currentTemp);
        const labelBg = cat.level === 'extreme' ? 'rgba(255,0,0,0.2)' :
                        cat.level === 'high' ? 'rgba(255,126,0,0.2)' :
                        cat.level === 'moderate' ? 'rgba(255,200,0,0.2)' : 'rgba(0,180,216,0.2)';
        return `
            <div class="hw-zone-item" style="border-color:${cat.color}" data-sensor="${sensor.id}">
                <i class="fas ${cat.icon}" style="color:${cat.color}; font-size:12px"></i>
                <span>${sensor.zone}</span>
                <span class="zone-label" style="background:${labelBg}; color:${cat.color}">${cat.label}</span>
                <span class="zone-temp" style="color:${cat.color}">${data.currentTemp}°C</span>
            </div>
        `;
    }).join('');

    dangerZones.querySelectorAll('.hw-zone-item').forEach(el => {
        el.addEventListener('click', () => {
            const sensor = SENSORS.find(s => s.id === el.dataset.sensor);
            if (sensor) {
                if (isMobile()) {
                    const sidebar = document.querySelector('.sidebar');
                    if (!sidebar.classList.contains('collapsed')) {
                        toggleSidebar();
                    }
                }
                showHeatDetail(sensor.id);
                state.map.flyTo([sensor.lat, sensor.lng], 15, { duration: 0.8 });
            }
        });
    });

    document.getElementById('heatwaveMax').textContent = `${maxOverall.toFixed(1)}°C`;
    const statusEl = document.getElementById('heatwaveStatus');
    statusEl.textContent = category.label;
    statusEl.style.color = category.color;
}

function showHeatDetail(sensorId) {
    const sensor = SENSORS.find(s => s.id === sensorId);
    const heatData = state.heatData.get(sensorId);
    if (!sensor || !heatData) return;

    const cat = getHeatCategory(heatData.currentTemp);

    const safeText = heatData.safeHours.length > 0
        ? heatData.safeHours.map(h => `${String(h).padStart(2, '0')}:00`).join(', ')
        : 'Sin horarios seguros hoy';

    document.getElementById('hwPanelTitle').textContent = `${sensor.zone} — Ola de Calor`;
    document.getElementById('hwPanelBody').innerHTML = `
        <div class="hw-detail-temp" style="background:${cat.bg}">
            <div class="temp-big" style="color:${cat.color}">${heatData.currentTemp}°C</div>
            <div class="temp-label" style="color:${cat.color}"><i class="fas ${cat.icon}"></i> ${cat.label}</div>
        </div>
        <div class="hw-detail-info">
            <div class="hw-info-row">
                <i class="fas fa-thermometer-full"></i>
                <div>
                    <div class="info-label">Máxima del día</div>
                    <div class="info-value" style="color:#ff4500">${heatData.maxTemp.toFixed(1)}°C</div>
                </div>
            </div>
            <div class="hw-info-row">
                <i class="fas fa-thermometer-empty"></i>
                <div>
                    <div class="info-label">Mínima del día</div>
                    <div class="info-value" style="color:#0ea5e9">${heatData.minTemp.toFixed(1)}°C</div>
                </div>
            </div>
            <div class="hw-info-row">
                <i class="fas fa-tint"></i>
                <div>
                    <div class="info-label">Humedad</div>
                    <div class="info-value">${heatData.humidity}%</div>
                </div>
            </div>
            <div class="hw-info-row">
                <i class="fas fa-sun"></i>
                <div>
                    <div class="info-label">Índice UV</div>
                    <div class="info-value" style="color:${heatData.uvIndex > 8 ? '#ff0000' : heatData.uvIndex > 5 ? '#ff7e00' : '#ffc800'}">${heatData.uvIndex.toFixed(1)} ${heatData.uvIndex > 10 ? '(Extremo)' : heatData.uvIndex > 7 ? '(Muy alto)' : heatData.uvIndex > 5 ? '(Alto)' : '(Moderado)'}</div>
                </div>
            </div>
            <div class="hw-info-row">
                <i class="fas fa-clock"></i>
                <div>
                    <div class="info-label">Horarios seguros (&lt;35°C)</div>
                    <div class="info-value" style="font-size:12px; font-weight:400; color:#6b7280">${safeText}</div>
                </div>
            </div>
            <div class="hw-info-row">
                <i class="fas fa-shield-alt"></i>
                <div>
                    <div class="info-label">Recomendación</div>
                    <div class="info-value" style="font-size:12px; font-weight:400; color:#6b7280">${
                        cat.level === 'extreme' ? 'PELIGRO EXTREMO. No salir al exterior. Riesgo de golpe de calor. Mantenerse hidratado y en lugares con AC.' :
                        cat.level === 'high' ? 'Peligro alto. Limitar actividad al exterior. Usar protección solar y llevar agua.' :
                        cat.level === 'moderate' ? 'Precaución. Evitar esfuerzo físico intenso. Hidratarse frecuentemente.' :
                        'Condiciones normales. Mantenerse hidratado.'
                    }</div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('heatwavePanel').classList.add('active');
}

// ============================================================
// HEAT MARKERS ON MAP
// ============================================================
function updateHeatMarkers() {
    Object.values(state.heatMarkers).forEach(m => state.map.removeLayer(m));
    Object.values(state.heatCircles).forEach(c => state.map.removeLayer(c));
    state.heatMarkers = {};
    state.heatCircles = {};

    if (!state.layers.heatwave) return;

    SENSORS.forEach(sensor => {
        const hd = state.heatData.get(sensor.id);
        if (!hd) return;

        const cat = getHeatCategory(hd.currentTemp);

        const circle = L.circle([sensor.lat, sensor.lng], {
            radius: 500,
            fillColor: cat.color,
            fillOpacity: cat.level === 'extreme' ? 0.18 : cat.level === 'high' ? 0.12 : 0.06,
            color: cat.color,
            weight: cat.level === 'extreme' || cat.level === 'high' ? 2 : 1,
            opacity: 0.3,
            dashArray: '6, 4'
        }).addTo(state.map);

        circle.bindTooltip(`
            <div style="font-family:Inter,sans-serif; padding:4px;">
                <strong>${sensor.zone}</strong><br>
                <span style="color:${cat.color}; font-weight:700; font-size:16px">${hd.currentTemp}°C</span>
                <span style="font-size:11px; color:#aaa"> — ${cat.label}</span><br>
                <span style="font-size:11px; color:#aaa">Máx: ${hd.maxTemp.toFixed(1)}°C · Mín: ${hd.minTemp.toFixed(1)}°C</span>
            </div>
        `, { sticky: true });

        circle.on('click', () => showHeatDetail(sensor.id));
        state.heatCircles[sensor.id] = circle;

        if (cat.level !== 'low') {
            const heatIcon = L.divIcon({
                className: 'heat-marker',
                html: `
                    <div class="heat-marker-ring" style="background:${cat.color}"></div>
                    <div class="heat-marker-inner" style="background:${cat.color}">
                        <i class="fas fa-fire"></i>
                    </div>
                `,
                iconSize: [32, 32],
                iconAnchor: [16, 16]
            });

            const heatMarker = L.marker([sensor.lat + 0.003, sensor.lng + 0.003], {
                icon: heatIcon,
                zIndexOffset: -100
            }).addTo(state.map);

            heatMarker.bindTooltip(`${sensor.zone}: ${hd.currentTemp}°C — ${cat.label}`);
            heatMarker.on('click', () => showHeatDetail(sensor.id));

            state.heatMarkers[sensor.id] = heatMarker;
        }
    });
}

// ============================================================
// SAFE HOURS TIMELINE
// ============================================================
function updateSafeHoursTimeline() {
    const allHeat = [...state.heatData.values()];
    if (allHeat.length === 0) return;

    const avgHourly = Array(24).fill(0);
    allHeat.forEach(d => {
        d.hourlyTemps.forEach((t, i) => {
            avgHourly[i] += t / allHeat.length;
        });
    });

    const currentHour = new Date().getHours();
    const maxTemp = Math.max(...avgHourly);

    const timeline = document.getElementById('safeTimeline');
    const displayHours = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
    if (!displayHours.includes(currentHour)) displayHours.push(currentHour);
    displayHours.sort((a, b) => a - b);

    timeline.innerHTML = displayHours.map(h => {
        const temp = avgHourly[h];
        const cat = getHeatCategory(temp);
        const isCurrent = h === currentHour;
        const statusClass = cat.level === 'extreme' ? 'extreme' :
                           cat.level === 'high' ? 'danger' :
                           cat.level === 'moderate' ? 'caution' : 'safe';
        const barWidth = Math.max(10, (temp / maxTemp) * 100);
        const statusIcon = cat.level === 'low' ? 'fa-check' :
                          cat.level === 'moderate' ? 'fa-exclamation' : 'fa-times';
        const statusBg = cat.level === 'low' ? 'rgba(0,228,0,0.2)' :
                        cat.level === 'moderate' ? 'rgba(255,200,0,0.2)' :
                        cat.level === 'high' ? 'rgba(255,126,0,0.2)' : 'rgba(255,0,0,0.2)';

        return `
            <div class="timeline-row ${statusClass} ${isCurrent ? 'current' : ''}">
                <span class="timeline-hour">${String(h).padStart(2, '0')}:00 ${isCurrent ? '◀' : ''}</span>
                <div class="timeline-bar" style="background:${statusBg}">
                    <div class="timeline-bar-fill" style="width:${barWidth}%; background:${cat.color}"></div>
                </div>
                <span class="timeline-temp" style="color:${cat.color}">${temp.toFixed(0)}°C</span>
                <span class="timeline-status" style="background:${statusBg}; color:${cat.color}">
                    <i class="fas ${statusIcon}"></i>
                </span>
            </div>
        `;
    }).join('');

    document.getElementById('safeRecommendation').innerHTML = `
        <i class="fas fa-info-circle"></i>
        <span>${getSafeHoursRecommendation()}</span>
    `;
}

// ============================================================
// GEOLOCATION
// ============================================================
function initGeolocation() {
    if (!navigator.geolocation) {
        showToast('Geolocalización no disponible en este navegador', 'warning');
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            state.userLocation = { lat: latitude, lng: longitude };
            addUserMarker(latitude, longitude);
            showLocationBanner(latitude, longitude);
            state.map.flyTo([latitude, longitude], 14, { duration: 1.2 });
            showToast('Ubicación detectada correctamente', 'success');
        },
        () => {
            showToast('No se pudo obtener ubicación. Mostrando Mexicali.', 'warning');
        },
        { enableHighAccuracy: true, timeout: 10000 }
    );
}

function addUserMarker(lat, lng) {
    if (state.userMarker) {
        state.map.removeLayer(state.userMarker);
    }

    const userIcon = L.divIcon({
        className: 'user-location-marker',
        html: `
            <div class="user-location-ring"></div>
            <div class="user-location-dot"></div>
        `,
        iconSize: [18, 18],
        iconAnchor: [9, 9]
    });

    state.userMarker = L.marker([lat, lng], { icon: userIcon, zIndexOffset: 1000 })
        .addTo(state.map);

    const nearest = findNearestSensor(lat, lng);
    if (nearest) {
        const data = state.sensorData.get(nearest.sensor.id);
        const heatData = state.heatData.get(nearest.sensor.id);
        const aqiCat = data ? getAQICategory(data.aqi) : null;
        const heatCat = heatData ? getHeatCategory(heatData.currentTemp) : null;

        state.userMarker.bindPopup(`
            <div class="popup-content">
                <div class="popup-header">
                    <div class="popup-aqi-badge" style="background:#0ea5e9; color:white">
                        <i class="fas fa-user"></i>
                    </div>
                    <div>
                        <div class="popup-title">Tu ubicación</div>
                        <div class="popup-zone">Sensor más cercano: ${nearest.sensor.zone} (${nearest.distance.toFixed(1)} km)</div>
                    </div>
                </div>
                ${data ? `
                <div class="popup-readings">
                    <div class="popup-reading">
                        <span class="popup-reading-label">AQI</span>
                        <span class="popup-reading-value" style="color:${aqiCat.color}">${data.aqi}</span>
                    </div>
                    <div class="popup-reading">
                        <span class="popup-reading-label">Calidad</span>
                        <span class="popup-reading-value" style="color:${aqiCat.color}; font-size:12px">${aqiCat.label}</span>
                    </div>
                    ${heatData ? `
                    <div class="popup-reading">
                        <span class="popup-reading-label">Temp.</span>
                        <span class="popup-reading-value" style="color:${heatCat.color}">${heatData.currentTemp}°C</span>
                    </div>
                    <div class="popup-reading">
                        <span class="popup-reading-label">Calor</span>
                        <span class="popup-reading-value" style="color:${heatCat.color}; font-size:12px">${heatCat.label}</span>
                    </div>
                    ` : ''}
                </div>
                ` : ''}
                <div style="font-size:11px; color:#6b7280; padding:6px 0; border-top:1px solid rgba(0,0,0,0.06)">
                    <i class="fas fa-info-circle" style="color:#0ea5e9"></i>
                    Datos basados en el módulo ${nearest.sensor.zone}
                </div>
            </div>
        `, { maxWidth: 300 });
    }
}

function findNearestSensor(lat, lng) {
    let nearest = null;
    let minDist = Infinity;

    SENSORS.forEach(sensor => {
        const dist = haversineDistance(lat, lng, sensor.lat, sensor.lng);
        if (dist < minDist) {
            minDist = dist;
            nearest = { sensor, distance: dist };
        }
    });

    return nearest;
}

function haversineDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function showLocationBanner(lat, lng) {
    const nearest = findNearestSensor(lat, lng);
    const heatData = nearest ? state.heatData.get(nearest.sensor.id) : null;
    const aqiData = nearest ? state.sensorData.get(nearest.sensor.id) : null;

    let message = 'Ubicación detectada';
    if (nearest && aqiData && heatData) {
        const aqiCat = getAQICategory(aqiData.aqi);
        const heatCat = getHeatCategory(heatData.currentTemp);
        message = `Tu zona: ${nearest.sensor.zone} · AQI ${aqiData.aqi} (${aqiCat.label}) · ${heatData.currentTemp}°C (${heatCat.label})`;
    }

    document.getElementById('locationText').textContent = message;
    document.getElementById('locationBanner').classList.add('active');
}

// ============================================================
// LAYER VISIBILITY (with heat wave support)
// ============================================================
function toggleLayer(layerName) {
    state.layers[layerName] = !state.layers[layerName];

    if (layerName === 'sensors') {
        Object.values(state.markers).forEach(marker => {
            if (state.layers.sensors) marker.addTo(state.map);
            else state.map.removeLayer(marker);
        });
    }

    if (layerName === 'corridors') updateCorridors();
    if (layerName === 'heatmap') updateZoneCircles();
    if (layerName === 'heatwave') updateHeatMarkers();
}

// ============================================================
// DATA UPDATE CYCLE
// ============================================================
function generateAllData() {
    SENSORS.forEach(sensor => {
        const existing = state.sensorData.get(sensor.id);
        let data;

        if (existing) {
            // Smooth transition: change by small increments
            const aqiDelta = randomInRange(-15, 15);
            const newAqi = Math.max(5, Math.min(400, existing.aqi + aqiDelta));
            data = {
                aqi: newAqi,
                pm25: Math.max(0, randomFloat(existing.pm25 - 5, existing.pm25 + 5)),
                pm10: Math.max(0, randomFloat(existing.pm10 - 8, existing.pm10 + 8)),
                o3: Math.max(0, randomFloat(existing.o3 - 3, existing.o3 + 3)),
                co: Math.max(0, randomFloat(existing.co - 0.5, existing.co + 0.5)),
                no2: Math.max(0, randomFloat(existing.no2 - 5, existing.no2 + 5)),
                timestamp: new Date()
            };
        } else {
            data = generateSensorData(sensor);
        }

        state.sensorData.set(sensor.id, data);

        // Generate heat data
        state.heatData.set(sensor.id, generateHeatData(sensor));
    });
}

function refreshData() {
    generateAllData();
    updateMarkers();
    updateCorridors();
    updateZoneCircles();
    updateSensorList();
    updateGeneralAQI();
    updateStats();
    updateHeatWaveUI();
    updateHeatMarkers();
    updateSafeHoursTimeline();
}

// ============================================================
// EVENT HANDLERS
// ============================================================
function isMobile() {
    return window.innerWidth <= 768;
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('mobileOverlay');
    sidebar.classList.toggle('collapsed');
    if (isMobile()) {
        if (sidebar.classList.contains('collapsed')) {
            overlay.classList.remove('active');
        } else {
            overlay.classList.add('active');
        }
    }
    setTimeout(() => state.map.invalidateSize(), 350);
}

function setupEventHandlers() {
    // Sidebar toggle
    document.getElementById('sidebarToggle').addEventListener('click', toggleSidebar);
    document.getElementById('menuBtn').addEventListener('click', toggleSidebar);

    // Mobile overlay closes sidebar
    document.getElementById('mobileOverlay').addEventListener('click', () => {
        const sidebar = document.querySelector('.sidebar');
        if (!sidebar.classList.contains('collapsed')) {
            toggleSidebar();
        }
    });

    // Panel toggle
    document.getElementById('panelToggle').addEventListener('click', () => {
        document.getElementById('bottomPanel').classList.toggle('collapsed');
    });

    // Layer toggles
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            toggleLayer(btn.dataset.layer);
        });
    });

    // Modal
    document.getElementById('modalClose').addEventListener('click', () => {
        document.getElementById('modalOverlay').classList.remove('active');
    });
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('modalOverlay')) {
            document.getElementById('modalOverlay').classList.remove('active');
        }
    });

    // Corridor panel close
    document.getElementById('corridorClose').addEventListener('click', () => {
        document.getElementById('corridorPanel').classList.remove('active');
        Object.values(state.corridorLines).forEach(line => {
            line.setStyle({ weight: 4, opacity: 0.7 });
        });
    });

    // Heat wave panel close
    document.getElementById('hwPanelClose').addEventListener('click', () => {
        document.getElementById('heatwavePanel').classList.remove('active');
    });

    // Location banner close
    document.getElementById('locationBannerClose').addEventListener('click', () => {
        document.getElementById('locationBanner').classList.remove('active');
    });

    // Locate button
    document.getElementById('locateBtn').addEventListener('click', () => {
        if (state.userLocation) {
            state.map.flyTo([state.userLocation.lat, state.userLocation.lng], 15, { duration: 0.8 });
            if (state.userMarker) state.userMarker.openPopup();
            showLocationBanner(state.userLocation.lat, state.userLocation.lng);
        } else {
            initGeolocation();
        }
    });

    // Refresh button
    document.getElementById('refreshBtn').addEventListener('click', () => {
        refreshData();
        if (state.userLocation) addUserMarker(state.userLocation.lat, state.userLocation.lng);
        showToast('Datos actualizados correctamente', 'success');
    });

    // Fullscreen
    document.getElementById('fullscreenBtn').addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    // Search
    document.getElementById('searchInput').addEventListener('input', () => {
        updateSensorList();
    });

    // Pollutant filter
    document.getElementById('pollutantFilter').addEventListener('change', (e) => {
        showToast(`Mostrando: ${e.target.options[e.target.selectedIndex].text}`, 'success');
        refreshData();
    });
}

// ============================================================
// CORRIDOR ANIMATION (dashed line flow)
// ============================================================
function animateCorridors() {
    let offset = 0;
    function animate() {
        offset -= 0.5;
        Object.values(state.corridorLines).forEach(line => {
            line.setStyle({ dashOffset: offset });
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// ============================================================
// INITIALIZATION
// ============================================================
function init() {
    // Start sidebar collapsed on mobile
    if (isMobile()) {
        document.querySelector('.sidebar').classList.add('collapsed');
    }

    initMap();
    generateAllData();
    addSensorMarkers();
    addCorridors();
    addZoneCircles();
    updateHeatMarkers();
    updateSensorList();
    updateGeneralAQI();
    updateStats();
    updateHeatWaveUI();
    updateSafeHoursTimeline();
    setupEventHandlers();
    animateCorridors();

    // Request geolocation
    initGeolocation();

    // Auto-refresh every 10 seconds
    state.updateInterval = setInterval(() => {
        refreshData();
    }, 10000);

    showToast('VyRA iniciado — Monitoreando calidad del aire y olas de calor en Mexicali', 'success');
}

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', init);
