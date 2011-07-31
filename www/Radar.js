function rLogit(baz) {
    console.log(baz);
}

function logPosition(position) {
    console.log('lat: ' + position.coords.latitude);
    console.log('long: ' + position.coords.longitude);

}

function logError(error) {
    console.log('code: ' + error.code);
    console.log('message:' + error.message);
}

function postToS3(theUser, dataToPost) {
    Ext.Ajax.request({
        url: 'http://50.19.215.109:8080/radar/api/',
        success: function (response, opts) {
            console.log('success ' + response.status);
        },
        failure: function (response, opts) {
            console.log('server-side failure with status code ' + response.status);
        },
        params: {
            name: theUser,
            data: JSON.stringify(dataToPost)
        }

    })
}


// The watch id references the current `watchAcceleration`
var watchID = null;
var shakeUser = null;

// Start watching the acceleration
function startWatch(onSuccess) {

    // Update acceleration every 3 seconds
    var options = {
        frequency: 500
    };

    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

// Stop watching the acceleration
//

function stopWatch() {
    if (watchID) {
        navigator.accelerometer.clearWatch(watchID);
        watchID = null;
        shakeUser = null;
    }
}

// onError: Failed to get the acceleration
//

function onError() {
    rLogit('onError!');
}

function postShakeToS3(acceleration) {
    navigator.geolocation.getCurrentPosition(function (position) {
        rLogit(shakeUser);
        postToS3(shakeUser, {
            user: shakeUser,
            lat: position.coords.latitude,
            long: position.coords.longitude,
            acc_x: acceleration.x,
            acc_y: acceleration.y,
            acc_z: acceleration.z,
            acc_timestamp: acceleration.timestamp}
            );
            stopWatch();
        }, logError);
        

    }