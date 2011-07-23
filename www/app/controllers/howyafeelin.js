app.controllers.howyafeelin = new Ext.Controller({
        index: function(options) {
        app.views.viewport.setActiveItem(
        app.views.index, options.animation
        );
    },
    
    status: function(options) {
        app.views.statusForm.addFormToButtons();
        app.views.viewport.setActiveItem(
        app.views.statusForm, options.animation
        );
    }
});