module.exports = {
  'pubsweet-server': {
    db: {
      database: 'starter',
    },
    baseUrl: `http://localhost:4000`,
    morganLogFormat:
      ':method :url :status :graphql[operation] :res[content-length] :response-time ms',
  },
  dbManager: {
    username: 'admin',
    password: 'password',
    email: 'admin@example.com',
    admin: true,
  },
}
