app.views.ShakeForm = Ext.extend(Ext.form.FormPanel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'F yeah!',
        items: [{
            id: 'cancel',
            text: 'Done',
            ui: 'back',
            listeners: {
                'tap': function () {
                    Ext.dispatch({
                        controller: app.controllers.howyafeelin,
                        action: 'index',
                        animation: {
                            type: 'slide',
                            direction: 'right'
                        }
                    });
                }
            }
        }, {
            xtype: 'spacer'
        }, {
            id: 'submit',
            text: 'Submit',
            ui: 'action'
        }]
    }],
    submitOnAction: false,
    items: [{
        name: 'user',
        label: 'Who are you?',
        xtype: 'selectfield',
        options: [{
            text: 'Jenny',
            value: 'jenny'
        }, {
            text: 'Michael',
            value: 'michael'
        }, {
            text: 'Matt',
            value: 'matt'
        }]
    }, {
        xtype: 'spacer',
        height: '50'
    },
    new Ext.Button({
        ui: 'confirm',
        text: 'Click then shake.'
    })],
    addFormToButtons: function () {
        var toolbar = this.getDockedItems()[0];
        toolbar.getComponent('submit').form = this;
    }
});