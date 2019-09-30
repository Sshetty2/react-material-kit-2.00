// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
  aws_project_region: 'us-east-2',
  aws_cognito_identity_pool_id:
    'us-east-2:41f785ff-2883-4083-875c-ad258ca5d4dd',
  aws_cognito_region: 'us-east-2',
  aws_user_pools_id: 'us-east-2_rzhdw0X9V',
  aws_user_pools_web_client_id: '3prjepg9rkns3s97bpd6npvm06',
  oauth: {
    domain: 'api71a268b6-71a268b6-api.auth.us-east-2.amazoncognito.com',
    scope: [
      'phone',
      'email',
      'openid',
      'profile',
      'aws.cognito.signin.user.admin'
    ],
    redirectSignIn: 'http://localhost:4545/',
    redirectSignOut: 'http://localhost:4545/',
    responseType: 'code'
  },
  federationTarget: 'COGNITO_USER_POOLS',
  aws_appsync_graphqlEndpoint:
    'https://6uvygco75rbaxk3rulwuchxoh4.appsync-api.us-east-2.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-2',
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS'
};

export default awsmobile;
