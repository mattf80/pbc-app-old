var admin = require("firebase-admin");

var serviceAccount = require("./wine-app-5f24b-firebase-adminsdk-0w4de-2acc73c401.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://wine-app-5f24b.firebaseio.com",
  databaseAuthVariableOverride:{
      uid: "my-service-worker"
  }
});

var db = admin.database();
var ref = db.ref("versions");

// ref.on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });



function addNewVersion(version) {
    return ref.push(version);
}

function getVersions(callback) {
  var versions;

  ref.on("value", function(snapshot) {
    versions = snapshot.val();
    callback(versions);
  });
}

module.exports = {
  addVersion: addNewVersion,
  getVersions: getVersions
} 