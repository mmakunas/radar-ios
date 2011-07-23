app.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {
        //put instances of cards into app.views namespace
        Ext.apply(app.views, {
           index: new app.views.Index(),
           statusForm: new app.views.StatusForm()
        });
        //put instances of cards into viewport
        Ext.apply(this, {
            items: [
            app.views.index,
            app.views.statusForm
            
            ]
        });
        app.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});