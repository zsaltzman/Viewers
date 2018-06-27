import { Meteor } from 'meteor/meteor';
import { Router } from 'meteor/iron:router';

Router.waitOn(function() {
    return [
        Meteor.subscribe('user.services.keycloak'),
    ];
}, { except: ['userLogin', 'entrySignUp', 'forgotPassword', 'resetPassword'] });

Router.onBeforeAction(function() {
    // Check if user is signed in
    if (!Meteor.userId() && !Meteor.loggingIn()) {
        this.render('userLogin');
    } else {
        this.next();
    }
}, {
    except: ['userLogin', 'entrySignUp', 'forgotPassword', 'resetPassword']
});
