const dev = {
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-qr3sppwzkxcs"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://api.willpilgrim.me/dev"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_u22aWGtx3",
    APP_CLIENT_ID: "47ie0ne9bcdi24jd3pjlg1b4br",
    IDENTITY_POOL_ID: "ap-southeast-2:5921d49b-f48c-4812-870f-7ee429f607eb"
  }
};

const prod = {
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-czbadpi0ppf"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://api.willpilgrim.me/prod"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_soQfqlWRN",
    APP_CLIENT_ID: "3pk8n0s3ff935gjuhtee2krf6k",
    IDENTITY_POOL_ID: "ap-southeast-2:22948e86-caf8-410a-9f9d-dd3b6068c313"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};