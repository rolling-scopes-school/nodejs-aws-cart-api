import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { ConfigService } from '@nestjs/config';

export function ddbDocClient(
  configService: ConfigService,
): DynamoDBDocumentClient {
  const prefix = configService.get('NODE_ENV') !== 'production' ? 'TEST_' : '';

  const config = {
    region: configService.get(`${prefix}AWS_REGION`),
    endpoint: configService.get(`${prefix}DYNAMO_DB_URL`),
    credentials: {
      accessKeyId: configService.get(`${prefix}DYNAMO_DB_ACCESS_KEY_ID`),
      secretAccessKey: configService.get(
        `${prefix}DYNAMO_DB_SECRET_ACCESS_KEY`,
      ),
    },
  };

  const client = new DynamoDB(config);

  return DynamoDBDocumentClient.from(client);
}
