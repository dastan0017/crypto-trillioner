module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4b578b0a1fd024c5d9384c59cb94237a'),
  },
});
