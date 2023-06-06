var Cryptoapis = require('cryptoapis');

var defaultClient = Cryptoapis.ApiClient.instance;
// Configure API key authorization: ApiKey
var ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = ac5cd106fdbf5f6a0e53b8e919295b46ea398eae
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix['x-api-key'] = "Token"

var api = new Cryptoapis.AssetsApi()
var assetId = 5b1ea92e584bf50020130612; // {String} Defines the unique ID of the specific asset.
var opts = {
  'context': yourExampleString // {String} In batch situations the user can use the context to correlate responses with requests. This property is present regardless of whether the response was successful or returned as an error. `context` is specified by the user.
};
api.getAssetDetailsByAssetID(assetId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});