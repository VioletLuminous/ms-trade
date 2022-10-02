var admin = require("firebase-admin");
// const { Timestamp } = require('firebase/firestore/lite');
var serviceAccount = require("../freefire-9bdc6-firebase-adminsdk-82qrq-72e47d1f4b.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://freefire-9bdc6-default-rtdb.firebaseio.com"
});
var fireData = admin.database();

module.exports = (app) => {
    app.post('/register', (req,res,next) => {
        console.log(req.body)
        res.send({
            message : `post ${req.body.email} Hello!`
        })
    })

    app.get('/register', (req,res,next) => {
        console.log(req.body)
        res.send({
            message : `get ${req.body.email} Hello!`
        })
    })


    // post dcid
    app.post('/postDcid', (req,res, next) => {
        let dcid = req.query.dcid;
        console.log(dcid)
        if(dcid != undefined){
            fireData.ref(`msdata/${dcid}/detail/createTime`).once('value', function(snapshot){
                var d = new Date(Date.now());
                if(snapshot.exists()){
                    fireData.ref(`msdata/${dcid}/detail/lastTime`).set(d.toString());
                    res.send({ "api": "postDcid" , message: "update " + dcid })
                }
                else{
                    fireData.ref(`msdata/${dcid}/detail/createTime`).set(d.toString());
                    fireData.ref(`msdata/${dcid}/detail/lastTime`).set(d.toString());
                    res.send({ "api": "postDcid" , message: "create " + dcid })
                }
            })
        }else{
            res.send({ "api": "postDcid" , message: "No dcid" })
        }
    })

    // app.get('/register', (req,res,next) => {
    //     console.log('get', req.body)
    //     res.send({
    //         message : `Send ${req.body.name} Hello!`
    //     })
    // })
}