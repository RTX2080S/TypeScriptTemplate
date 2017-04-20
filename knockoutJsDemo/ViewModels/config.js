
require.config({
    paths: {
        "jquery": "/Scripts/jquery-3.1.1",
        "App": "/ViewModels/App"
    }
});

require(['App'], function (App) {
    var app = new App();
});
