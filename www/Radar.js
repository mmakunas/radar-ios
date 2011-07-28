function rLogit(baz) {
  console.log(baz);
}

function logPosition(position) {
   console.log('lat: ' + position.coords.latitude );
  console.log('long: ' + position.coords.longitude );

}

function logError(error) {
console.log('code: ' + error.code  );
  console.log('message:' + error.message );
}

function postToS3(dataToPost) {

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
                            name: this.form.getValues(false)['user'],
                            data: dataToPost
                        }

                    });

}
