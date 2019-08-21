var ClientOAuth2 = require('client-oauth2')

var mrAuth = new ClientOAuth2({
  clientId: 'CLIENT_ID',
  clientSecret: 'CLIENT_SECRET',
  accessTokenUri: 'http://dev.api.ensembl.fr/oauth/v2/token',
  scopes: []
})

mrAuth.credentials.getToken()
    .then(function (user) {
        console.log(user)
    })
