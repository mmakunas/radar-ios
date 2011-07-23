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
                    //this.form.updateRecord(this.record, true);
                    //console.log(this.form.getValues(false)['user']);
                    navigator.geolocation.getCurrentPosition(
                                        function(position) {
                                        Ext.Ajax.request({
                        url: 'http://169.254.229.158:8080/radar/api/',
                        success: function (response, opts) {
                            console.log('success ' + response.status);
                        },
                        failure: function (response, opts) {
                            console.log('server-side failure with status code ' + response.status);
                        },
                        params: {
                              name: this.form.getValues(false)['user'],
                              data: JSON.stringify({
                                  user : this.form.getValues(false)['user'],
                                  what : this.form.getValues(false)['what'],
                                  how : this.form.getValues(false)['how'],
                                  lat:  position.coords.latitude,
                                  long: position.coords.longitude
                                  
                                  })
                              }
                            
                    });
                    }, 
                                        null, 
                                         null);
                    
                    Ext.dispatch({
                        controller: app.controllers.howyafeelin,
                        action: 'index',
                        //id: this.record.getId(),
                        animation: {
                            type: 'slide',
                            direction: 'right'
                        }
                    });
                }
            }
        }]
    }],
    submitOnAction: false,
    items: [{
        name: 'user',
        label: 'Who are you',
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