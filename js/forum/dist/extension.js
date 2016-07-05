'use strict';

System.register('absagar/auth-testbook/main', ['flarum/extend', 'flarum/components/HeaderPrimary', 'flarum/components/HeaderSecondary', 'flarum/components/SettingsPage', 'flarum/components/LogInModal'], function (_export, _context) {
  "use strict";

  var extend, HeaderPrimary, HeaderSecondary, SettingsPage, LogInModal, domain, loginPath, signupPath;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsHeaderPrimary) {
      HeaderPrimary = _flarumComponentsHeaderPrimary.default;
    }, function (_flarumComponentsHeaderSecondary) {
      HeaderSecondary = _flarumComponentsHeaderSecondary.default;
    }, function (_flarumComponentsSettingsPage) {
      SettingsPage = _flarumComponentsSettingsPage.default;
    }, function (_flarumComponentsLogInModal) {
      LogInModal = _flarumComponentsLogInModal.default;
    }],
    execute: function () {
      domain = window.location.protocol + "//" + window.location.hostname;
      loginPath = domain + "/login?tile=login&redirect_url=" + window.location.pathname;
      signupPath = domain + "/login?tile=signup&redirect_url=" + window.location.pathname;


      app.initializers.add('absagar-auth-testbook', function () {

        extend(HeaderPrimary.prototype, 'items', function (items) {
          items.add('discuss', m(
            'a',
            { href: '/discuss', className: 'Button Button--flat' },
            'Discuss'
          ));
        });

        extend(HeaderSecondary.prototype, 'items', function (items) {
          if (items.has('logIn')) {
            items.replace('logIn', m(
              'a',
              { href: loginPath, className: 'Button Button--link' },
              'LogIn'
            ));
          }
          if (items.has('signUp')) {
            items.replace('signUp', m(
              'a',
              { href: signupPath, className: 'Button Button--link' },
              'SignUp'
            ));
          }
        });
        extend(SettingsPage.prototype, 'settingsItems', function (items) {
          if (items.has('account')) {
            items.remove('account');
          }
        });
        LogInModal.prototype.content = function () {
          return [m(
            'div',
            { className: 'Modal-body' },
            m(
              'div',
              { className: 'Form-group' },
              m(
                'a',
                { href: loginPath, className: 'FormControl' },
                'LogIn'
              )
            ),
            m(
              'div',
              { className: 'Form-group' },
              m(
                'a',
                { href: signupPath, className: 'FormControl' },
                'SignUp'
              )
            )
          ), m(
            'div',
            { className: 'Modal-footer' },
            'You need to have a Testbook account in order to participate here.'
          )];
        };
      });
    }
  };
});