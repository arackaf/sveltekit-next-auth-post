import { SvelteKitAuth } from '@auth/sveltekit';
import GoogleProvider from '@auth/core/providers/google';
import {
	GOOGLE_AUTH_CLIENT_ID,
	GOOGLE_AUTH_SECRET,
	AMAZON_ACCESS_KEY,
	AMAZON_SECRET_KEY,
	DYNAMO_AUTH_TABLE,
	AUTH_SECRET
} from '$env/static/private';

import { DynamoDB, type DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { DynamoDBAdapter } from '@auth/dynamodb-adapter';
import type { Adapter } from '@auth/core/adapters';

const dynamoConfig: DynamoDBClientConfig = {
	credentials: {
		accessKeyId: AMAZON_ACCESS_KEY,
		secretAccessKey: AMAZON_SECRET_KEY
	},

	region: 'us-east-1'
};

const client = DynamoDBDocument.from(new DynamoDB(dynamoConfig), {
	marshallOptions: {
		convertEmptyValues: true,
		removeUndefinedValues: true,
		convertClassInstanceToMap: true
	}
});

const auth = SvelteKitAuth({
	providers: [
		GoogleProvider({
			clientId: GOOGLE_AUTH_CLIENT_ID,
			clientSecret: GOOGLE_AUTH_SECRET
		})
	],

	adapter: DynamoDBAdapter(client, { tableName: DYNAMO_AUTH_TABLE }) as Adapter,

	session: {
		maxAge: 60 * 60 * 24 * 365,
		strategy: 'jwt'
	},

	secret: AUTH_SECRET
});

export const handle = auth.handle;
