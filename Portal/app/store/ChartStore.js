/*
 * File: app/store/ChartStore.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.ChartStore', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            storeId: 'MyJsonStore',
            proxy: {
                type: 'ajax',
                url: 'resources/data/chart.json',
                reader: {
                    type: 'json'
                }
            },
            fields: [
                {
                    name: 'name'
                },
                {
                    name: 'sp500'
                },
                {
                    name: 'djia'
                }
            ]
        }, cfg)]);
    }
});