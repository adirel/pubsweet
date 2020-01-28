module.exports = {
  transport: {
    sendmail: false,
    port: 1025,
    tls: { rejectUnauthorized: false },
    auth: {
      user: 'user',
      pass: 'pass',
    },
  },
}
