import { extend } from 'flarum/extend';
import HeaderSecondary from 'flarum/components/HeaderSecondary';
import SettingsPage from 'flarum/components/SettingsPage';
import LogInModal from 'flarum/components/LogInModal';

var domain = window.location.hostname;
var loginPath = domain + "/login?tile=login&redirect_url=" + window.location.pathname;
var signupPath = domain + "/login?tile=signup&redirect_url=" + window.location.pathname;

app.initializers.add('sagar23jan-auth-testbook', function() {
  extend(HeaderSecondary.prototype, 'items', function(items) {
    if (items.has('logIn')){
      items.replace('logIn', <a href={loginPath} className="Button Button--link">LogIn</a>);
    }
    if (items.has('signUp')){
      items.replace('signUp', <a href={signupPath} className="Button Button--link">SignUp</a>);
    }
  });
  extend(SettingsPage.prototype, 'settingsItems', function(items){
    if (items.has('account')) {
      items.remove('account');
    }
  });
  LogInModal.prototype.content = function(){
    return([
      <div className="Modal-body">
        <div className="Form-group">
          <a href={loginPath} className="FormControl">LogIn</a>
        </div>
        <div className="Form-group">
          <a href={signupPath} className="FormControl">SignUp</a>
        </div>
      </div>,
      <div className="Modal-footer">
        You need to have a Testbook account in order to participate here.
      </div>
    ]);
  };

});
