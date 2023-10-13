var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_18069151GPStaxi_1 = new ol.format.GeoJSON();
var features_18069151GPStaxi_1 = format_18069151GPStaxi_1.readFeatures(json_18069151GPStaxi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18069151GPStaxi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18069151GPStaxi_1.addFeatures(features_18069151GPStaxi_1);
var lyr_18069151GPStaxi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_18069151GPStaxi_1, 
                style: style_18069151GPStaxi_1,
                interactive: true,
                title: '<img src="styles/legend/18069151GPStaxi_1.png" /> 18069151 GPS taxi'
            });
var format_18069151Recorridos_2 = new ol.format.GeoJSON();
var features_18069151Recorridos_2 = format_18069151Recorridos_2.readFeatures(json_18069151Recorridos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18069151Recorridos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18069151Recorridos_2.addFeatures(features_18069151Recorridos_2);
var lyr_18069151Recorridos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_18069151Recorridos_2, 
                style: style_18069151Recorridos_2,
                interactive: true,
                title: '<img src="styles/legend/18069151Recorridos_2.png" /> 18069151 Recorridos'
            });
var format_Camaras18069151_3 = new ol.format.GeoJSON();
var features_Camaras18069151_3 = format_Camaras18069151_3.readFeatures(json_Camaras18069151_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camaras18069151_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camaras18069151_3.addFeatures(features_Camaras18069151_3);
var lyr_Camaras18069151_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Camaras18069151_3, 
                style: style_Camaras18069151_3,
                interactive: true,
    title: 'Camaras 18069151<br />\
    <img src="styles/legend/Camaras18069151_3_0.png" /> Emancipación 5130 (1)<br />\
    <img src="styles/legend/Camaras18069151_3_1.png" /> Emancipación 5130 (2)<br />\
    <img src="styles/legend/Camaras18069151_3_2.png" /> Emancipación 5137<br />\
    <img src="styles/legend/Camaras18069151_3_3.png" /> Pasaje 140, 4994<br />'
        });
var format_Avistamientosporcamaras_4 = new ol.format.GeoJSON();
var features_Avistamientosporcamaras_4 = format_Avistamientosporcamaras_4.readFeatures(json_Avistamientosporcamaras_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Avistamientosporcamaras_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Avistamientosporcamaras_4.addFeatures(features_Avistamientosporcamaras_4);
var lyr_Avistamientosporcamaras_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Avistamientosporcamaras_4, 
                style: style_Avistamientosporcamaras_4,
                interactive: true,
    title: 'Avistamientos por camaras<br />\
    <img src="styles/legend/Avistamientosporcamaras_4_0.png" /> Emancipación 5130 (1)<br />\
    <img src="styles/legend/Avistamientosporcamaras_4_1.png" /> Emancipación 5130 (2)<br />\
    <img src="styles/legend/Avistamientosporcamaras_4_2.png" /> Emancipación 5137<br />\
    <img src="styles/legend/Avistamientosporcamaras_4_3.png" /> Pasaje 140, 4994<br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_18069151GPStaxi_1.setVisible(true);lyr_18069151Recorridos_2.setVisible(true);lyr_Camaras18069151_3.setVisible(true);lyr_Avistamientosporcamaras_4.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_18069151GPStaxi_1,lyr_18069151Recorridos_2,lyr_Camaras18069151_3,lyr_Avistamientosporcamaras_4];
lyr_18069151GPStaxi_1.set('fieldAliases', {'fid': 'fid', 'Intersección': 'Intersección', 'Fecha': 'Fecha', 'Hora': 'Hora', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_18069151Recorridos_2.set('fieldAliases', {'fid': 'fid', 'Detalle': 'Detalle', });
lyr_Camaras18069151_3.set('fieldAliases', {'fid': 'fid', 'Detalle': 'Detalle', 'Avistamientos': 'Avistamientos', });
lyr_Avistamientosporcamaras_4.set('fieldAliases', {'fid': 'fid', 'Camara': 'Camara', 'Hora': 'Hora', 'Sentido': 'Sentido', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_18069151GPStaxi_1.set('fieldImages', {'fid': 'TextEdit', 'Intersección': 'TextEdit', 'Fecha': 'TextEdit', 'Hora': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_18069151Recorridos_2.set('fieldImages', {'fid': 'TextEdit', 'Detalle': 'TextEdit', });
lyr_Camaras18069151_3.set('fieldImages', {'fid': 'TextEdit', 'Detalle': 'TextEdit', 'Avistamientos': 'TextEdit', });
lyr_Avistamientosporcamaras_4.set('fieldImages', {'fid': 'TextEdit', 'Camara': 'TextEdit', 'Hora': 'TextEdit', 'Sentido': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_18069151GPStaxi_1.set('fieldLabels', {'fid': 'no label', 'Intersección': 'no label', 'Fecha': 'no label', 'Hora': 'no label', });
lyr_18069151Recorridos_2.set('fieldLabels', {'fid': 'no label', 'Detalle': 'no label', });
lyr_Camaras18069151_3.set('fieldLabels', {'fid': 'no label', 'Detalle': 'no label', 'Avistamientos': 'no label', });
lyr_Avistamientosporcamaras_4.set('fieldLabels', {'fid': 'no label', 'Camara': 'header label', 'Hora': 'no label', 'Sentido': 'no label', });
lyr_Avistamientosporcamaras_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});