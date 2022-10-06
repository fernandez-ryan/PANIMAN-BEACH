var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_AFRY_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "AFRY",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AFRY_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13431731.335887, 1606263.991538, 13433223.410337, 1607054.529161]
                            })
                        });
var format_AFRYCONTOUR_2 = new ol.format.GeoJSON();
var features_AFRYCONTOUR_2 = format_AFRYCONTOUR_2.readFeatures(json_AFRYCONTOUR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFRYCONTOUR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AFRYCONTOUR_2.addFeatures(features_AFRYCONTOUR_2);
var lyr_AFRYCONTOUR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AFRYCONTOUR_2, 
                style: style_AFRYCONTOUR_2,
                interactive: true,
    title: 'AFRY CONTOUR<br />\
    <img src="styles/legend/AFRYCONTOUR_2_0.png" /> 0_00<br />\
    <img src="styles/legend/AFRYCONTOUR_2_1.png" /> 1_00<br />\
    <img src="styles/legend/AFRYCONTOUR_2_2.png" /> 2_00<br />\
    <img src="styles/legend/AFRYCONTOUR_2_3.png" /> 3_00<br />\
    <img src="styles/legend/AFRYCONTOUR_2_4.png" /> 4_00<br />\
    <img src="styles/legend/AFRYCONTOUR_2_5.png" /> 5_00<br />\
    <img src="styles/legend/AFRYCONTOUR_2_6.png" /> 6_00<br />\
    <img src="styles/legend/AFRYCONTOUR_2_7.png" /> 7_00<br />\
    <img src="styles/legend/AFRYCONTOUR_2_8.png" /> 8_00<br />\
    <img src="styles/legend/AFRYCONTOUR_2_9.png" /> 9_00<br />'
        });
var format_SOUNDING_3 = new ol.format.GeoJSON();
var features_SOUNDING_3 = format_SOUNDING_3.readFeatures(json_SOUNDING_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOUNDING_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOUNDING_3.addFeatures(features_SOUNDING_3);
var lyr_SOUNDING_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SOUNDING_3, 
                style: style_SOUNDING_3,
                interactive: true,
                title: 'SOUNDING'
            });
var format_AFRYTARGETS_4 = new ol.format.GeoJSON();
var features_AFRYTARGETS_4 = format_AFRYTARGETS_4.readFeatures(json_AFRYTARGETS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AFRYTARGETS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AFRYTARGETS_4.addFeatures(features_AFRYTARGETS_4);
var lyr_AFRYTARGETS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AFRYTARGETS_4, 
                style: style_AFRYTARGETS_4,
                interactive: true,
    title: 'AFRY TARGETS<br />\
    <img src="styles/legend/AFRYTARGETS_4_0.png" /> ADCP<br />\
    <img src="styles/legend/AFRYTARGETS_4_1.png" /> TG<br />\
    <img src="styles/legend/AFRYTARGETS_4_2.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_AFRY_1.setVisible(true);lyr_AFRYCONTOUR_2.setVisible(true);lyr_SOUNDING_3.setVisible(true);lyr_AFRYTARGETS_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AFRY_1,lyr_AFRYCONTOUR_2,lyr_SOUNDING_3,lyr_AFRYTARGETS_4];
lyr_AFRYCONTOUR_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_SOUNDING_3.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', });
lyr_AFRYTARGETS_4.set('fieldAliases', {'field_3': 'field_3', 'X': 'X', 'Y': 'Y', });
lyr_AFRYCONTOUR_2.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': '', 'Text': 'TextEdit', });
lyr_SOUNDING_3.set('fieldImages', {'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', });
lyr_AFRYTARGETS_4.set('fieldImages', {'field_3': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_AFRYCONTOUR_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'inline label', 'Text': 'no label', });
lyr_SOUNDING_3.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', });
lyr_AFRYTARGETS_4.set('fieldLabels', {'field_3': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_AFRYTARGETS_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});