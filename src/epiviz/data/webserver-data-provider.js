/**
 * Created by: Florin Chelaru
 * Date: 10/2/13
 * Time: 11:20 AM
 */

goog.provide('epiviz.data.WebServerDataProvider');

goog.require('epiviz.utils');
goog.require('epiviz.data.DataProvider');
goog.require('epiviz.data.Response');

/**
 * @param {string} [id]
 * @param {string} [serverEndpoint]
 * @constructor
 * @extends epiviz.data.DataProvider
 */
epiviz.data.WebServerDataProvider = function(id, serverEndpoint) {
  epiviz.data.DataProvider.call(this, id || epiviz.Config.DEFAULT_DATA_PROVIDER_ID);

  /**
   * @type {string}
   * @private
   */
  this._serverEndpoint = serverEndpoint || epiviz.data.WebServerDataProvider.DEFAULT_SERVER_ENDPOINT;
};

/**
 * Copy methods from upper class
 */
epiviz.data.WebServerDataProvider.prototype = epiviz.utils.mapCopy(epiviz.data.DataProvider.prototype);
epiviz.data.WebServerDataProvider.constructor = epiviz.data.WebServerDataProvider;

/**
 * @constant
 * @type {string}
 */
epiviz.data.WebServerDataProvider.DEFAULT_SERVER_ENDPOINT = 'data/main.php';

/**
 * @param {epiviz.data.Request} request
 * @param {function(epiviz.data.Response.<*>)} callback
 */
epiviz.data.WebServerDataProvider.prototype.getData = function(request, callback, failCallback) {
  if (request.isEmpty()) { return; }

  if (request.method() == epiviz.data.Request.Method.GET) {
    var query = sprintf('%s?%s', this._serverEndpoint, request.joinArgs());

    epiviz.data.WebServerDataProvider.makeGetRequest(query, function(jsondata) {
      callback(epiviz.data.Response.fromRawObject(jsondata));
    }, function(jqXHR, textStatus, errorThrown) {
      failCallback(jqXHR, textStatus, errorThrown);
    });
  } else {
    epiviz.data.WebServerDataProvider.makePostRequest(this._serverEndpoint, request.joinArgs(), function(jsondata) {
      callback(epiviz.data.Response.fromRawObject(jsondata));
    }, function(jqXHR, textStatus, errorThrown) {
      failCallback(jqXHR, textStatus, errorThrown);
    });
  }
};

/**
 *
 * @param query
 * @param callback
 */
epiviz.data.WebServerDataProvider.makeGetRequest = function(query, callback, failCallback) {
  var request = $.ajax({
    type: "get",
    url: query,
    dataType: "json",
    async: true,
    cache: false,
    processData: true
  });

  // callback handler that will be called on success
  request.done(function (jsonData){
    callback(jsonData);
  });

  // callback handler that will be called on failure
  request.fail(function (jqXHR, textStatus, errorThrown){
    //console.error("The following error occured: " + textStatus, errorThrown);
    failCallback(jqXHR, textStatus, errorThrown);
  });

  // callback handler that will be called regardless
  // if the request failed or succeeded
  request.always(function () {});
};
// epiviz.data.WebServerDataProvider.makeGetRequest = function(query, callback, failCallback) {
//   // var request = $.ajax({
//   //   type: "get",
//   //   url: query,
//   //   async: true,
//   //   cache: false,
//   //   processData: true
//   // });

//   var request = new XMLHttpRequest();
//   request.open("GET", query, false)
//   // callback handler that will be called on success
//   if (query.includes("getWorkspaces")) {
//     request.onload = function(oEvent){
//       data = request.response
//       callback(JSON.parse(data));
//     };
//   } else {
//     request.overrideMimeType('text\/plain; charset=x-user-defined');
//     request.onload = function (oEvent){

//       data = request.response
//       callback(JSON.parse(data));

//       // var byteArray =  new Uint8Array(request.response.length);
//       // if (request.status != 200) return byteArray;
//       // for (var i = 0; i < request.response.length; ++i) {
//       //   // byteArray.push(request.responseText.charCodeAt(i) & 0xff)
//       //   byteArray[i] = request.response.charCodeAt(i);
//       // }
//       // // var byte = new Uint8Array(request.response.data);
//       // var data = msgpack.decode(byteArray);
//       // callback(data);
//     };
//   }

//   // callback handler that will be called on failure
//   request.onerror =function (jqXHR, textStatus, errorThrown){
//     //console.error("The following error occured: " + textStatus, errorThrown);
//     failCallback(jqXHR, textStatus, errorThrown);
//   };

//   request.send(null);
// };

/**
 * @param {string} query
 * @param {Object} postData
 * @param {function} callback
 */
epiviz.data.WebServerDataProvider.makePostRequest = function(query, postData, callback, failCallback) {
  var request = $.ajax({
    type: "post",
    url: query,
    data: postData,
    dataType: "json",
    async: true,
    cache: false,
    processData: true
  });

  // callback handler that will be called on success
  request.done(function (data, textStatus, jqXHR){
    callback(data);
  });

  // callback handler that will be called on failure
  request.fail(function (jqXHR, textStatus, errorThrown){
    console.error("The following error occured: " + textStatus, errorThrown);
    failCallback(jqXHR, textStatus, errorThrown);
  });

  // callback handler that will be called regardless
  // if the request failed or succeeded
  request.always(function () {});
};

// goog.inherits(epiviz.data.WebServerDataProvider, epiviz.data.DataProvider);