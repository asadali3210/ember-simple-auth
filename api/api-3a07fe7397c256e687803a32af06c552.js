YUI.add("yuidoc-meta",function(e){e.YUIDoc={meta:{classes:["AdaptiveStore","ApplicationRouteMixin","AuthenticatedRouteMixin","BaseAuthenticator","BaseAuthorizer","BaseStore","Configuration","CookieStore","DataAdapterMixin","DeviseAuthenticator","DeviseAuthorizer","EphemeralStore","LocalStorageStore","OAuth2BearerAuthorizer","OAuth2ImplicitGrantAuthenticator","OAuth2ImplicitGrantCallbackMixin","OAuth2PasswordGrantAuthenticator","SessionService","SessionStorageStore","ToriiAuthenticator","UnauthenticatedRouteMixin"],modules:["ember-simple-auth_authenticators_base","ember-simple-auth_authenticators_devise","ember-simple-auth_authenticators_oauth2-implicit-grant","ember-simple-auth_authenticators_oauth2-password-grant","ember-simple-auth_authenticators_torii","ember-simple-auth_authorizers_base","ember-simple-auth_authorizers_devise","ember-simple-auth_authorizers_oauth2-bearer","ember-simple-auth_configuration","ember-simple-auth_mixins_application-route-mixin","ember-simple-auth_mixins_authenticated-route-mixin","ember-simple-auth_mixins_data-adapter-mixin","ember-simple-auth_mixins_ouath2-implicit-grant-callback-mixin","ember-simple-auth_mixins_unauthenticated-route-mixin","ember-simple-auth_services_session","ember-simple-auth_session-stores_adaptive","ember-simple-auth_session-stores_base","ember-simple-auth_session-stores_cookie","ember-simple-auth_session-stores_ephemeral","ember-simple-auth_session-stores_local-storage","ember-simple-auth_session-stores_session-storage"],allModules:[{displayName:"ember-simple-auth/authenticators/base",name:"ember-simple-auth_authenticators_base",description:"The base class for all authenticators. __This serves as a starting point for\nimplementing custom authenticators and must not be used directly.__\n\nThe authenticator authenticates the session. The actual mechanism used to do\nthis might, e.g., post a set of credentials to a server and in exchange\nretrieve an access token, initiating authentication against an external\nprovider like Facebook, etc. The details depend on the specific authenticator.\nUpon successful authentication, any data that the authenticator receives and\nresolves via the promise returned from the\n{{#crossLink \"BaseAuthenticator/authenticate:method\"}}{{/crossLink}}\nmethod is stored in the session and can be accessed via the session service\nto be used by the authorizer (see\n{{#crossLink \"BaseAuthorizer/authorize:method\"}}{{/crossLink}}) to e.g.,\nauthorize outgoing requests.\n\nThe authenticator also decides whether a set of data that was restored from\nthe session store (see\n{{#crossLink \"BaseStore/restore:method\"}}{{/crossLink}}) makes up an\nauthenticated session or not.\n\n__Authenticators for an application are defined in the `app/authenticators`\ndirectory__, e.g.:\n\n```js\n// app/authenticators/oauth2.js\nimport OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';\n\nexport default OAuth2PasswordGrantAuthenticator.extend({\n  ...\n});\n```\n\nand can then be used via the name Ember CLI automatically registers for them\nwithin the Ember container.\n\n```js\n// app/components/login-form.js\nexport default Ember.Controller.extend({\n  session: Ember.inject.service(),\n\n  actions: {\n    authenticate: function() {\n      this.get('session').authenticate('authenticator:oauth2');\n    }\n  }\n});\n```"},{displayName:"ember-simple-auth/authenticators/devise",name:"ember-simple-auth_authenticators_devise",description:"Authenticator that works with the Ruby gem\n[devise](https://github.com/plataformatec/devise).\n\n__As token authentication is not actually part of devise anymore, the server\nneeds to implement some customizations__ to work with this authenticator -\nsee [this gist](https://gist.github.com/josevalim/fb706b1e933ef01e4fb6)."},{displayName:"ember-simple-auth/authenticators/oauth2-implicit-grant",name:"ember-simple-auth_authenticators_oauth2-implicit-grant",description:'Authenticator that conforms to OAuth 2\n([RFC 6749](http://tools.ietf.org/html/rfc6749)), specifically the _"Implicit\nGrant Type"_.\n\nUse {{#crossLink "OAuth2ImplicitGrantCallbackMixin"}}{{/crossLink}} in your\nOAuth 2.0 redirect route to parse authentication parameters from location\nhash string into an object.'},{displayName:"ember-simple-auth/authenticators/oauth2-password-grant",name:"ember-simple-auth_authenticators_oauth2-password-grant",description:'Authenticator that conforms to OAuth 2\n([RFC 6749](http://tools.ietf.org/html/rfc6749)), specifically the _"Resource\nOwner Password Credentials Grant Type"_.\n\nThis authenticator also automatically refreshes access tokens (see\n[RFC 6749, section 6](http://tools.ietf.org/html/rfc6749#section-6)) if the\nserver supports it.'},{displayName:"ember-simple-auth/authenticators/torii",name:"ember-simple-auth_authenticators_torii",description:"Authenticator that wraps the\n[Torii library](https://github.com/Vestorly/torii) and thus allows to connect\nany external authentication provider that torii defines a provider for.\n\nIn order to use this authenticator, __the application needs to have the\n[torii addon](https://github.com/Vestorly/torii) installed and must inject\nthe torii service into the authenticator__:\n\n```js\n// app/authenticators/torii.js\nimport ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';\n\nexport default ToriiAuthenticator.extend({\n  torii: Ember.inject.service()\n});\n```"},{displayName:"ember-simple-auth/authorizers/base",name:"ember-simple-auth_authorizers_base",description:'The base class for all authorizers. __This serves as a starting point for\nimplementing custom authorizers and must not be used directly.__\n\nAuthorizers use the session data acquired by an authenticator when\nauthenticating the session to construct authorization data that can, e.g., be\ninjected into outgoing network requests. Depending on the authorization\nmechanism the authorizer implements, that authorization data might be an HTTP\nheader, query string parameters, a cookie, etc.\n\n__The authorizer has to fit the authenticator__ (see\n{{#crossLink "BaseAuthenticator"}}{{/crossLink}})\nas it can only use data that the authenticator acquires when authenticating\nthe session.'},{displayName:"ember-simple-auth/authorizers/devise",name:"ember-simple-auth_authorizers_devise",description:'Authorizer that works with the Ruby gem\n[devise](https://github.com/plataformatec/devise); includes the user\'s token\nand identification from the session data in the `Authorization` HTTP header,\ne.g.,\n\n```\nAuthorization: token="234rtgjneroigne4" email="user@domain.tld"\n```\n\n__As token authentication is not actually part of devise anymore, the server\nneeds to implement some customizations__ to work with this authenticator -\nsee [this gist](https://gist.github.com/josevalim/fb706b1e933ef01e4fb6).'},{displayName:"ember-simple-auth/authorizers/oauth2-bearer",name:"ember-simple-auth_authorizers_oauth2-bearer",description:"Authorizer that conforms to OAuth 2\n([RFC 6749](http://tools.ietf.org/html/rfc6749)); includes the access token\nfrom the session data as a bearer token\n([RFC 6750](http://tools.ietf.org/html/rfc6750)) in the `Authorization`\nheader, e.g.:\n\n```\nAuthorization: Bearer 234rtgjneroigne4\n```"},{displayName:"ember-simple-auth/configuration",name:"ember-simple-auth_configuration",description:"Ember Simple Auth's configuration object.\n\nTo change any of these values, set them on the application's environment\nobject, e.g.:\n\n```js\n// config/environment.js\nENV['ember-simple-auth'] = {\n  baseURL: 'path/to/base/url'\n};\n```"},{displayName:"ember-simple-auth/mixins/application-route-mixin",name:"ember-simple-auth_mixins_application-route-mixin",description:"The mixin for the application route, __defining methods that are called when\nthe session is successfully authenticated (see\n{{#crossLink \"SessionService/authenticationSucceeded:event\"}}{{/crossLink}})\nor invalidated__ (see\n{{#crossLink \"SessionService/invalidationSucceeded:event\"}}{{/crossLink}}).\n\n__Using this mixin is optional.__ The session events can also be handled\nmanually, e.g. in an instance initializer:\n\n```js\n// app/instance-initializers/session-events.js\nexport function initialize(instance) {\n  const applicationRoute = instance.container.lookup('route:application');\n  const session          = instance.container.lookup('service:session');\n  session.on('authenticationSucceeded', function() {\n    applicationRoute.transitionTo('index');\n  });\n  session.on('invalidationSucceeded', function() {\n    applicationRoute.transitionTo('bye');\n  });\n};\n\nexport default {\n  initialize,\n  name:  'session-events',\n  after: 'ember-simple-auth'\n};\n```\n\n__When using the `ApplicationRouteMixin` you need to specify\n`needs: ['service:session']` in the application route's unit test.__"},{displayName:"ember-simple-auth/mixins/authenticated-route-mixin",name:"ember-simple-auth_mixins_authenticated-route-mixin",description:"__This mixin is used to make routes accessible only if the session is\nauthenticated.__ It defines a `beforeModel` method that aborts the current\ntransition and instead transitions to the\n{{#crossLink \"Configuration/authenticationRoute:property\"}}{{/crossLink}} if\nthe session is not authenticated.\n\n```js\n// app/routes/protected.js\nimport AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';\n\nexport default Ember.Route.extend(AuthenticatedRouteMixin);\n```"},{displayName:"ember-simple-auth/mixins/data-adapter-mixin",name:"ember-simple-auth_mixins_data-adapter-mixin",description:"__This mixin can be used to make Ember Data adapters authorize all outgoing\nAPI requests by injecting a header.__ It works with all authorizers that call\nthe authorization callback (see\n{{#crossLink \"BaseAuthorizer/authorize:method\"}}{{/crossLink}}) with header\nname and header content arguments.\n\n__The `DataAdapterMixin` will also invalidate the session whenever it\nreceives a 401 response for an API request.__\n\n```js\n// app/adapters/application.js\nimport DS from 'ember-data';\nimport DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';\n\nexport default DS.JSONAPIAdapter.extend(DataAdapterMixin, {\n  authorizer: 'authorizer:application'\n});\n```\n\n__The `DataAdapterMixin` requires Ember Data 1.13 or later.__"},{displayName:"ember-simple-auth/mixins/ouath2-implicit-grant-callback-mixin",name:"ember-simple-auth_mixins_ouath2-implicit-grant-callback-mixin",description:'__This mixin is used in the callback route when using OAuth 2.0 Implicit\nGrant authentication.__ It implements the\n{{#crossLink "OAuth2ImplicitGrantCallbackMixin/activate:method"}}{{/crossLink}}\nmethod that retrieves and processes authentication parameters, such as\n`access_token`, from the hash parameters provided in the callback URL by\nthe authentication server. The parameters are then passed to the\n{{#crossLink "OAuth2ImplicitGrantAuthenticator"}}{{/crossLink}}'},{displayName:"ember-simple-auth/mixins/unauthenticated-route-mixin",name:"ember-simple-auth_mixins_unauthenticated-route-mixin",description:"__This mixin is used to make routes accessible only if the session is\nnot authenticated__ (e.g., login and registration routes). It defines a\n`beforeModel` method that aborts the current transition and instead\ntransitions to the\n{{#crossLink \"Configuration/routeIfAlreadyAuthenticated:property\"}}{{/crossLink}}\nif the session is authenticated.\n\n```js\n// app/routes/login.js\nimport UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';\n\nexport default Ember.Route.extend(UnauthenticatedRouteMixin);\n```"},{displayName:"ember-simple-auth/services/session",name:"ember-simple-auth_services_session",description:"__The session service provides access to the current session as well as\nmethods to authenticate it, invalidate it, etc.__ It is the main interface for\nthe application to Ember Simple Auth's functionality. It can be injected via\n\n```js\n// app/components/login-form.js\nimport Ember from 'ember';\n\nexport default Ember.Component.extend({\n  session: Ember.inject.service('session')\n});\n```"},{displayName:"ember-simple-auth/session-stores/adaptive",name:"ember-simple-auth_session-stores_adaptive",description:'Session store that persists data in the browser\'s `localStorage` (see\n{{#crossLink "LocalStorageStore"}}{{/crossLink}}) if that is available or in\na cookie (see {{#crossLink "CookieStore"}}{{/crossLink}}) if it is not.\n\n__This is the default store that Ember Simple Auth will use when the\napplication doesn\'t define a custom store.__\n\n__This session store does not work with FastBoot. In order to use Ember\nSimple Auth with FastBoot, configure the\n{{#crossLink "CookieStore"}}{{/crossLink}} as the application\'s session\nstore.__'},{displayName:"ember-simple-auth/session-stores/base",name:"ember-simple-auth_session-stores_base",description:"The base class for all session stores. __This serves as a starting point for\nimplementing custom session stores and must not be used directly.__\n\nSession Stores persist the session's state so that it survives a page reload\nand is synchronized across multiple tabs or windows of the same application."},{displayName:"ember-simple-auth/session-stores/cookie",name:"ember-simple-auth_session-stores_cookie",description:"Session store that persists data in a cookie.\n\nBy default the cookie session store uses a session cookie that expires and is\ndeleted when the browser is closed. The cookie expiration period can be\nconfigured by setting the\n{{#crossLink \"CookieStore/cookieExpirationTime:property\"}}{{/crossLink}}\nproperty. This can be used to implement \"remember me\" functionality that will\neither store the session persistently or in a session cookie depending on\nwhether the user opted in or not:\n\n```js\n// app/controllers/login.js\nexport default Ember.Controller.extend({\n  rememberMe: false,\n\n  _rememberMeChanged: Ember.observer('rememberMe', function() {\n    const expirationTime = this.get('rememberMe') ? (14 * 24 * 60 * 60) : null;\n    this.set('session.store.cookieExpirationTime', expirationTime);\n  }\n});\n```\n\n__Applications that use FastBoot must use this session store by defining the\napplication session store like this:__\n\n```js\n// app/session-stores/application.js\nimport CookieStore from 'ember-simple-auth/session-stores/cookie';\n\nexport default CookieStore.extend();\n```"},{displayName:"ember-simple-auth/session-stores/ephemeral",name:"ember-simple-auth_session-stores_ephemeral",description:"Session store that __persists data in memory and thus is not actually\npersistent__. It does also not synchronize the session's state across\nmultiple tabs or windows as those cannot share memory. __This store is mainly\nuseful for testing and will automatically be used when running tests.__"},{displayName:"ember-simple-auth/session-stores/local-storage",name:"ember-simple-auth_session-stores_local-storage",description:'Session store that persists data in the browser\'s `localStorage`.\n\n__`localStorage` is not available in Safari when running in private mode. In\ngeneral it is better to use the\n{{#crossLink "AdaptiveStore"}}{{/crossLink}} that automatically falls back to\nthe {{#crossLink "CookieStore"}}{{/crossLink}} when `localStorage` is not\navailable.__\n\n__This session store does not work with FastBoot. In order to use Ember\nSimple Auth with FastBoot, configure the\n{{#crossLink "CookieStore"}}{{/crossLink}} as the application\'s session\nstore.__'},{displayName:"ember-simple-auth/session-stores/session-storage",name:"ember-simple-auth_session-stores_session-storage",description:"Session store that persists data in the browser's `sessionStorage`.\n\n__`sessionStorage` is not available in Safari when running in private mode.__\n\n__This session store does not work with FastBoot. In order to use Ember\nSimple Auth with FastBoot, configure the\n{{#crossLink \"CookieStore\"}}{{/crossLink}} as the application's session\nstore.__"}],elements:[]}}})
