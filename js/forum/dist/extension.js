'use strict';

System.register('sagar23jan/auth-testbook/main', ['flarum/extend', 'flarum/components/HeaderSecondary', 'flarum/components/SettingsPage'], function (_export, _context) {
  var extend, HeaderSecondary, SettingsPage, domain;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsHeaderSecondary) {
      HeaderSecondary = _flarumComponentsHeaderSecondary.default;
    }, function (_flarumComponentsSettingsPage) {
      SettingsPage = _flarumComponentsSettingsPage.default;
    }],
    execute: function () {
      domain = "http://local.testbook.com";

      app.initializers.add('sagar23jan-auth-testbook', function () {
        extend(HeaderSecondary.prototype, 'items', function (items) {
          if (items.has('logIn')) {
            var fullPath = domain + "/login?tile=login&redirect_url=" + window.location.pathname;
            items.replace('logIn', m(
              'a',
              { href: fullPath, className: 'Button Button--link' },
              'LogIn'
            ));
          }
          if (items.has('signUp')) {
            var fullPath = domain + "/login?tile=signup&redirect_url=" + window.location.pathname;
            items.replace('signUp', m(
              'a',
              { href: fullPath, className: 'Button Button--link' },
              'SignUp'
            ));
          }
        });
        extend(SettingsPage.prototype, 'settingsItems', function (items) {
          if (items.has('account')) {
            items.remove('account');
          }
        });
      });
    }
  };
});