import { Accounts } from 'meteor/accounts-base';
import { Router } from 'meteor/iron:router';

Accounts.onLogout(() => {
    Router.go('/');
});

Accounts.onLogin(() => {
    Router.go('studylist');
});
