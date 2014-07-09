

var aws = require('./awsConfig.js');
var cloudformation = aws.getCloudFormation();

/**
 * Creates a cloudformation stack
 *
 * Doc: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudFormation.html#createStack-property
 *
 * @param {object} stack_config
 * @param {object} cloudformation_template
 */
exports.createStack = function(stack_config, cloudformation_template, callback){

    // Set the cloudformation template into the stack_config
    stack_config.TemplateBody = JSON.stringify(cloudformation_template);

    // Submit
    cloudformation.createStack(stack_config, function(err, data) {
        if(err){
            //console.log(err, err.stack); // an error occurred
            callback(err)
        }
        else{
            //console.log(data);           // successful response
            callback(null, data);
        }
    });
};

exports.deleteStack = function(stack_name, callback){

    var params = {
        StackName: stack_name
    };

    // Submit
    cloudformation.deleteStack(params, function(err, data) {
        if(err){
            //console.log(err, err.stack); // an error occurred
            callback(err)
        }
        else{
            //console.log(data);           // successful response
            callback(null, data);
        }
    });
};