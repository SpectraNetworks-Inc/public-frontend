
module.exports = {
    auth0: {
        domain: "spectranetworks.us.auth0.com",
        client_id: "GHJxMWmXlSXfFF4J4oEv066z8vrplGdX",
        redirect_uri: window.location.origin,
        useRefreshTokens: true,
        cacheLocation: 'localstorage',
        audience: "https://spectranetworks.us.auth0.com/api/v2/",
    }
}