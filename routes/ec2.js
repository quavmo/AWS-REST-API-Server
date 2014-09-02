/**
 * Routes for EC2 endpoint
 *
 */
var ec2 = require('../lib/AWS/ec2.js');

/**
 * Query describeInstances interface
 *
 * @param req
 * @param res
 */
exports.describeInstances = function(req, res){

    console.log('ec2 describeInstances');

    try {
        var params = JSON.parse(req.body.params);
    }catch(e){
        res.json(400, {error:"invalid json"});
    }

    ec2.describeInstances(params, function(err, data){
        if(err){
            console.log(err);
            res.json(400, err);
        }else{
            console.log(data);
            res.json(200, data);
        }
    });
};