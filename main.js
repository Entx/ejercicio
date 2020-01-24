var map = L.map('mapid').setView([-0.2247332, -78.5179488], 13);
    
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
    //Yavirac
    L.marker([-0.2247332,-78.5179488 ],).addTo(map)
    .bindPopup('Yavirac');
    //Mi casa
    L.marker([-0.312698,-78.550295 ]).addTo(map)
    .bindPopup('Mi casa XD.');  