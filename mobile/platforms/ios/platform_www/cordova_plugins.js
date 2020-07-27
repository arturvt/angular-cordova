cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-safariviewcontroller.SafariViewController",
      "file": "plugins/cordova-plugin-safariviewcontroller/www/SafariViewController.js",
      "pluginId": "cordova-plugin-safariviewcontroller",
      "clobbers": [
        "SafariViewController"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-safariviewcontroller": "1.6.0",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-inappbrowser": "4.0.0"
  };
});