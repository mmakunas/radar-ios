Ext.regApplication({
    name: 'app',
    launch: function() {
       this.launched = true;
        this.mainLaunch();
    },
    mainLaunch: function() {
        //if (!device || !this.launched) {
        //    return;
        //}
        this.views.viewport = new this.views.Viewport();
    }
});
//Ext.regApplication({
//    defaultRenderTarget: 'viewport',
//    tabletStartupScreen: 'tablet_startup.png',
//    phoneStartupScreen: 'phone_startup.png',
//    icon: 'icon.png',
//    glossOnIcon: false,
//
//    name: 'app',
//    launch: function () {
//        this.views.viewport = new this.views.Viewport();
//    }
//});
