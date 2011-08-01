app.views.StatusForm = Ext.extend(Ext.form.FormPanel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'How Ya Feelin\'?',
        items: [{
            id: 'cancel',
            text: 'Cancel',
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
            ui: 'action',
            listeners: {
                'tap': function () {
                    thisView = this;
                    navigator.geolocation.getCurrentPosition(function (position) {
                        Ext.Ajax.request({
                            url: 'http://50.19.215.109:8080/radar/api/',
                            success: function (response, opts) {
                                console.log('success ' + response.status);
                                Ext.dispatch({
                                    controller: app.controllers.howyafeelin,
                                    action: 'index',
                                    animation: {
                                        type: 'slide',
                                        direction: 'right'
                                    }
                                });
                            },
                            failure: function (response, opts) {
                                console.log('server-side failure with status code ' + response.status);
                                Ext.dispatch({
                                    controller: app.controllers.howyafeelin,
                                    action: 'index',
                                    animation: {
                                        type: 'slide',
                                        direction: 'right'
                                    }
                                });
                            },
                            params: {
                                name: thisView.form.getValues(false)['user'] + '-feeling',
                                data: JSON.stringify({
                                    user: thisView.form.getValues(false)['user'],
                                    what: thisView.form.getValues(false)['what'],
                                    how: thisView.form.getValues(false)['how'],
                                    lat: position.coords.latitude,
                                    long: position.coords.longitude

                                })
                            }

                        })
                    }, logError, { maximumAge: 6000000, timeout: 5000, enableHighAccuracy: true });



                }
            }
        }]
    }],
    submitOnAction: false,
    items: [{
        name: 'user',
        label: 'Who are you?',
        xtype: 'selectfield',
        options: allUsers
    }, {
        name: 'what',
        label: 'What are you doing?',
        xtype: 'textareafield',

    }, {
        name: 'how',
        label: 'How ya feelin\'?',
        xtype: 'selectfield',
        options: [{
            text: ':)',
            value: '1'
        }, {
            text: ':|',
            value: '0'
        }, {
            text: ':(',
            value: '-1'
        }]

    }],
    addFormToButtons: function () {
        var toolbar = this.getDockedItems()[0];
        toolbar.getComponent('submit').form = this;
    }
});