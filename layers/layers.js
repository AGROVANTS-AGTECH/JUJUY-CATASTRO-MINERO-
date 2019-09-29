var wms_layers = [];


        var lyr_Googlestreet_0 = new ol.layer.Tile({
            'title': 'Google street',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PROVINCIAS_1 = new ol.format.GeoJSON();
var features_PROVINCIAS_1 = format_PROVINCIAS_1.readFeatures(json_PROVINCIAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCIAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCIAS_1.addFeatures(features_PROVINCIAS_1);
var lyr_PROVINCIAS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROVINCIAS_1, 
                style: style_PROVINCIAS_1,
                interactive: false,
                title: '<img src="styles/legend/PROVINCIAS_1.png" /> PROVINCIAS'
            });
var format_JUJUY_MANIFESTACIONES_2 = new ol.format.GeoJSON();
var features_JUJUY_MANIFESTACIONES_2 = format_JUJUY_MANIFESTACIONES_2.readFeatures(json_JUJUY_MANIFESTACIONES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JUJUY_MANIFESTACIONES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JUJUY_MANIFESTACIONES_2.addFeatures(features_JUJUY_MANIFESTACIONES_2);
var lyr_JUJUY_MANIFESTACIONES_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JUJUY_MANIFESTACIONES_2, 
                style: style_JUJUY_MANIFESTACIONES_2,
                interactive: true,
                title: '<img src="styles/legend/JUJUY_MANIFESTACIONES_2.png" /> JUJUY_MANIFESTACIONES'
            });
var format_JUJUY_SERVIDUMBRE_3 = new ol.format.GeoJSON();
var features_JUJUY_SERVIDUMBRE_3 = format_JUJUY_SERVIDUMBRE_3.readFeatures(json_JUJUY_SERVIDUMBRE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JUJUY_SERVIDUMBRE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JUJUY_SERVIDUMBRE_3.addFeatures(features_JUJUY_SERVIDUMBRE_3);
var lyr_JUJUY_SERVIDUMBRE_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JUJUY_SERVIDUMBRE_3, 
                style: style_JUJUY_SERVIDUMBRE_3,
                interactive: true,
                title: '<img src="styles/legend/JUJUY_SERVIDUMBRE_3.png" /> JUJUY_SERVIDUMBRE'
            });
var format_JUJUY_MINA_4 = new ol.format.GeoJSON();
var features_JUJUY_MINA_4 = format_JUJUY_MINA_4.readFeatures(json_JUJUY_MINA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JUJUY_MINA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JUJUY_MINA_4.addFeatures(features_JUJUY_MINA_4);
var lyr_JUJUY_MINA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JUJUY_MINA_4, 
                style: style_JUJUY_MINA_4,
                interactive: true,
                title: '<img src="styles/legend/JUJUY_MINA_4.png" /> JUJUY_MINA'
            });
var format_JUJUY_CATEO_5 = new ol.format.GeoJSON();
var features_JUJUY_CATEO_5 = format_JUJUY_CATEO_5.readFeatures(json_JUJUY_CATEO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JUJUY_CATEO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JUJUY_CATEO_5.addFeatures(features_JUJUY_CATEO_5);
var lyr_JUJUY_CATEO_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JUJUY_CATEO_5, 
                style: style_JUJUY_CATEO_5,
                interactive: true,
                title: '<img src="styles/legend/JUJUY_CATEO_5.png" /> JUJUY_CATEO'
            });
var format_JUJUY_CANTERAS_6 = new ol.format.GeoJSON();
var features_JUJUY_CANTERAS_6 = format_JUJUY_CANTERAS_6.readFeatures(json_JUJUY_CANTERAS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JUJUY_CANTERAS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JUJUY_CANTERAS_6.addFeatures(features_JUJUY_CANTERAS_6);
var lyr_JUJUY_CANTERAS_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JUJUY_CANTERAS_6, 
                style: style_JUJUY_CANTERAS_6,
                interactive: true,
                title: '<img src="styles/legend/JUJUY_CANTERAS_6.png" /> JUJUY_CANTERAS'
            });

lyr_Googlestreet_0.setVisible(true);lyr_PROVINCIAS_1.setVisible(true);lyr_JUJUY_MANIFESTACIONES_2.setVisible(true);lyr_JUJUY_SERVIDUMBRE_3.setVisible(true);lyr_JUJUY_MINA_4.setVisible(true);lyr_JUJUY_CATEO_5.setVisible(true);lyr_JUJUY_CANTERAS_6.setVisible(true);
var layersList = [lyr_Googlestreet_0,lyr_PROVINCIAS_1,lyr_JUJUY_MANIFESTACIONES_2,lyr_JUJUY_SERVIDUMBRE_3,lyr_JUJUY_MINA_4,lyr_JUJUY_CATEO_5,lyr_JUJUY_CANTERAS_6];
lyr_PROVINCIAS_1.set('fieldAliases', {'Objeto': 'Objeto', 'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'SAG': 'SAG', });
lyr_JUJUY_MANIFESTACIONES_2.set('fieldAliases', {'objectid': 'objectid', 'expediente': 'expediente', 'tipo': 'tipo', });
lyr_JUJUY_SERVIDUMBRE_3.set('fieldAliases', {'objectid': 'objectid', 'expediente': 'expediente', 'tipo': 'tipo', });
lyr_JUJUY_MINA_4.set('fieldAliases', {'objectid': 'objectid', 'expediente': 'expediente', 'tipo': 'tipo', });
lyr_JUJUY_CATEO_5.set('fieldAliases', {'objectid': 'objectid', 'expediente': 'expediente', 'tipo': 'tipo', });
lyr_JUJUY_CANTERAS_6.set('fieldAliases', {'objectid': 'objectid', 'expediente': 'expediente', 'tipo': 'tipo', });
lyr_PROVINCIAS_1.set('fieldImages', {'Objeto': 'TextEdit', 'FNA': 'TextEdit', 'GNA': 'TextEdit', 'NAM': 'TextEdit', 'SAG': 'TextEdit', });
lyr_JUJUY_MANIFESTACIONES_2.set('fieldImages', {'objectid': 'TextEdit', 'expediente': 'TextEdit', 'tipo': 'TextEdit', });
lyr_JUJUY_SERVIDUMBRE_3.set('fieldImages', {'objectid': 'TextEdit', 'expediente': 'TextEdit', 'tipo': 'TextEdit', });
lyr_JUJUY_MINA_4.set('fieldImages', {'objectid': 'TextEdit', 'expediente': 'TextEdit', 'tipo': 'TextEdit', });
lyr_JUJUY_CATEO_5.set('fieldImages', {'objectid': 'TextEdit', 'expediente': 'TextEdit', 'tipo': 'TextEdit', });
lyr_JUJUY_CANTERAS_6.set('fieldImages', {'objectid': 'TextEdit', 'expediente': 'TextEdit', 'tipo': 'TextEdit', });
lyr_PROVINCIAS_1.set('fieldLabels', {'Objeto': 'no label', 'FNA': 'no label', 'GNA': 'no label', 'NAM': 'no label', 'SAG': 'no label', });
lyr_JUJUY_MANIFESTACIONES_2.set('fieldLabels', {'objectid': 'no label', 'expediente': 'header label', 'tipo': 'inline label', });
lyr_JUJUY_SERVIDUMBRE_3.set('fieldLabels', {'objectid': 'no label', 'expediente': 'header label', 'tipo': 'inline label', });
lyr_JUJUY_MINA_4.set('fieldLabels', {'objectid': 'no label', 'expediente': 'header label', 'tipo': 'inline label', });
lyr_JUJUY_CATEO_5.set('fieldLabels', {'objectid': 'no label', 'expediente': 'header label', 'tipo': 'inline label', });
lyr_JUJUY_CANTERAS_6.set('fieldLabels', {'objectid': 'no label', 'expediente': 'header label', 'tipo': 'inline label', });
lyr_JUJUY_CANTERAS_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});