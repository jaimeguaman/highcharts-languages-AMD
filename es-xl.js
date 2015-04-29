/*! 
 * Highcharts language configuration
 * language: Spanish (Latin America)
 * author : Jaime Guaman
 */

(function ( define ) {
    'use strict';

    define([], function (){

        var language = {
            loading: 'Cargando...',
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            shortMonths: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            exportButtonTitle: 'Exportar',
            printButtonTitle: 'Imprimir',
            rangeSelectorFrom: 'Desde',
            rangeSelectorTo: 'Hasta',
            rangeSelectorZoom: 'Periodo',
            downloadPNG: 'Descargar imagen PNG',
            downloadJPEG: 'Descargar imagen JPG',
            downloadPDF: 'Descargar documento PDF',
            downloadSVG: 'Descargar imagen SVG',
            resetZoom: 'Reset',
            resetZoomTitle: 'Reset',
            thousandsSep: '.',
            decimalPoint: ','
        }

        return language;
    });

})( define );