module.exports = ({ env }) => ({
  auth: {
    secret: "rXBMsgbBygeGNU9QJHOjnA==",
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
});
