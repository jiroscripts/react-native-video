"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  useEvent: true,
  useVideoPlayer: true,
  VideoView: true,
  VideoPlayer: true
};
Object.defineProperty(exports, "VideoPlayer", {
  enumerable: true,
  get: function () {
    return _VideoPlayer.VideoPlayer;
  }
});
Object.defineProperty(exports, "VideoView", {
  enumerable: true,
  get: function () {
    return _VideoView.default;
  }
});
Object.defineProperty(exports, "useEvent", {
  enumerable: true,
  get: function () {
    return _useEvent.useEvent;
  }
});
Object.defineProperty(exports, "useVideoPlayer", {
  enumerable: true,
  get: function () {
    return _useVideoPlayer.useVideoPlayer;
  }
});
var _useEvent = require("./core/hooks/useEvent.js");
var _useVideoPlayer = require("./core/hooks/useVideoPlayer.js");
var _Events = require("./core/types/Events.js");
Object.keys(_Events).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Events[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Events[key];
    }
  });
});
var _VideoView = _interopRequireDefault(require("./core/video-view/VideoView.js"));
var _VideoPlayer = require("./core/VideoPlayer.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
//# sourceMappingURL=index.js.map