<><script src="https://cdn.jsdelivr.net/npm/ol@7.4.0/dist/ol.js"></script><script>

    const map = new ol.Map({target}: 'map',
    layers: [
    new ol.layer.Tile({source}: new ol.source.OSM(),
    }),
    ],
    view: new ol.View({center}: ol.proj.fromLonLat([32.8597, 39.9334]), // Ankara coordinates
    zoom: 8,
    }),
    });
</script></>