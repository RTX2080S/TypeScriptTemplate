define(["require", "exports", "./App"], function (require, exports, App_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    requirejs.config({
        paths: {
            "jquery": "/Scripts/jquery-3.1.1",
            "App": "/ViewModels/App"
        }
    });
    var app = new App_1.App();
});
