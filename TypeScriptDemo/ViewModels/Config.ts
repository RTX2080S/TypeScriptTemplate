import { App } from "./App";

requirejs.config({
    paths: {
        "jquery": "/Scripts/jquery-3.1.1",
        "App": "/ViewModels/App"
    }
});

var app = new App();
