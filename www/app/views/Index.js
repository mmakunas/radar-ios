app.views.Index = Ext.extend(Ext.Panel, {
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
    },
    items: [{
        xtype: 'spacer',
    }, {
        xtype: 'button',
        text: 'How ya feelin\'',
        handler: function () {
            Ext.dispatch({
                controller: app.controllers.howyafeelin,
                action: 'status',
                animation: {
                    type: 'slide',
                    direction: 'left'
                }
            });
        }
    }, {
        xtype: 'spacer',
    }, {
        xtype: 'button',
        text: 'F ya!',
        handler: function () {
            Ext.dispatch({
                controller: app.controllers.howyafeelin,
                action: 'shake',
                animation: {
                    type: 'slide',
                    direction: 'left'
                }
            });
        }
    }, {
        xtype: 'spacer',
    }],
});