Ext.data.ProxyMgr.registerType("statusstorage", Ext.extend(Ext.data.Proxy, {
    create: function (operation, callback, scope) {},
    read: function (operation, callback, scope) {
        Ext.Msg.alert('model read', 'ya', Ext.emptyFn);
    },
    update: function (operation, callback, scope) {
        operation.setStarted();
        Ext.Msg.alert('model read', 'ya', Ext.emptyFn);
        operation.setCompleted();
        operation.setSuccessful();
    },
    destroy: function (operation, callback, scope) {}
}));

app.models.Status = Ext.regModel("app.models.Status", {
    fields: [{
        name: "user",
        type: "string"
    }],
    proxy: {
        type: "statusstorage"
    }

});
app.stores.status = new Ext.data.Store({
    model: "app.models.Status"
});