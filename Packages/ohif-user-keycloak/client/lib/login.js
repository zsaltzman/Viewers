import { Meteor } from 'meteor/meteor';
import { OHIF } from 'meteor/ohif:core';

OHIF.user.login = params => {
    return new Promise((resolve, reject) => {
        console.warn('loginWithMeteorKeycloak 1 ');
        Meteor.loginWithMeteorKeycloak(params.username, params.password, error => {
            console.warn('loginWithMeteorKeycloak 2 ');
            if (error) {
                return reject(error);
            }

            resolve();
        });
    });
};
