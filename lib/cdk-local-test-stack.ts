import cdk = require("@aws-cdk/core");
import lambda = require("@aws-cdk/aws-lambda");
import apigateway = require("@aws-cdk/aws-apigateway");

export class SampleProjectStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        const env = process.env.ENV || "local";

        // Lambda関数
        const sampleLambda = new lambda.Function(this, "sampleLambda", {
            runtime: lambda.Runtime.NODEJS_12_X,
            handler: "index.handler",
            code: lambda.Code.asset("src/lambda/sample"),
            timeout: cdk.Duration.seconds(60),
            environment: {
                ENV: env
            }
        });

        // API Gateway
        const sampleApi = new apigateway.RestApi(this, "sampleApi", {
            restApiName: "sampleApi"
        });

        console.log("UNKO!!!!!!!!!!!!!!!!!!!!");
        const samplesResource = sampleApi.root.addResource("samples");
        const getSamplesIntegration = new apigateway.LambdaIntegration(sampleLambda);
        samplesResource.addMethod("GET", getSamplesIntegration);
    }
}
