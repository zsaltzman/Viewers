import { Meteor } from 'meteor/meteor';
import { Router } from 'meteor/iron:router';

Router.onBeforeAction(function() {
    // Check if user is signed in
    if (!Meteor.userId() && !Meteor.loggingIn()) {
        this.render('entrySignIn');
    } else {
        this.next();
    }
}, {
    except: ['entrySignIn', 'entrySignUp', 'forgotPassword', 'resetPassword']
});
