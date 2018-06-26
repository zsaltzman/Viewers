Package.describe({
    name: 'ohif:user-keycloak',
    summary: 'OHIF Lesion Tracker Tools',
    version: '0.0.1'
});

Package.onUse(function(api) {
    api.versionsFrom('1.6');

    api.use('ecmascript');
    api.use('standard-app-packages');
    api.use('jquery');
    api.use('stylus');
    api.use('random');
    api.use('service-configuration');

    // Schema for Data Models
    api.use('aldeed:simple-schema');
    api.use('aldeed:collection2');

    // Template overriding
    api.use('aldeed:template-extension@4.0.0');

    // Our custom packages
    api.use('ohif:design');
    api.use('ohif:core');
    api.use('ohif:user');
    api.use('ohif:study-list');

    api.use('clinical:active-entry');
    api.use('mxab:keycloak-oauth');
    api.use('mxab:keycloak-loader');
    api.use('mxab:accounts-keycloak');

    // Load icons
    api.addAssets('assets/user-menu-icons.svg', 'client');

    // Client imports
    api.addFiles('client/index.js', 'client');

    api.addFiles('server/setup.js', 'server');
});
