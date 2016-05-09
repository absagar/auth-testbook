import { extend } from 'flarum/extend';
import HeaderSecondary from 'flarum/components/HeaderSecondary';
import SettingsPage from 'flarum/components/SettingsPage';

var domain = "http://local.testbook.com";
app.initializers.add('sagar23jan-auth-testbook', function() {
  extend(HeaderSecondary.prototype, 'items', function(items) {
    if (items.has('logIn')){
      var fullPath = domain + "/login?tile=login&redirect_url=" + window.location.pathname;
      items.replace('logIn', <a href={fullPath} className="Button Button--link">LogIn</a>);
    }
    if (items.has('signUp')){
      var fullPath = domain + "/login?tile=signup&redirect_url=" + window.location.pathname;
      items.replace('signUp', <a href={fullPath} className="Button Button--link">SignUp</a>);
    }

  });
  extend(SettingsPage.prototype, 'settingsItems', function(items){
    if (items.has('account')) {
      items.remove('account');
   }
  });

});
