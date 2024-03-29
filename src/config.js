export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "wtc-notes-app-uploads"
      
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://a90uoqc13m.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_nLFYs8pKg",
      APP_CLIENT_ID: "6n0ld82js40amd9f1ulc1rq39s",
      IDENTITY_POOL_ID: "us-east-2:f6146900-368d-4240-9dc4-75f2a8134dc0"
    }
  };