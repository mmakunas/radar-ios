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
                    stopWatch();
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
        id: 'theBigButton',
        ui: 'confirm',
        text: 'Click then shake.',
        listeners: {
                'tap': function () {
                    thisButton = this;
                    shakeUser = this.form.getValues(false)['user'];
                    rLogit(shakeUser);
                    startWatch(postShakeToS3);
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
    })],
    addFormToButtons: function () {
        this.getComponent('theBigButton').form = this;
    },
    
    
});