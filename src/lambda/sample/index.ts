import { JsonSchemaType } from "@aws-cdk/aws-apigateway";

export async function handler(event: any, context: any): Promise<ResponseText> {
  console.log(event);

  const body: BodyJSON = { message: 'てすとだよ' }

  return {
    statusCode: 200,
    body: JSON.stringify(body)
  };
}

export interface ResponseText {
  statusCode: number,
  body: string
};

export interface BodyJSON {
  message: string
};