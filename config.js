System.config({
  "paths": {
    "*": "*.js",
    "app/*": "app/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "build": [
      "github:components/jquery@2.1.3/jquery",
      "npm:underscore@1.7.0/underscore",
      "npm:process@0.10.0/browser",
      "github:systemjs/plugin-css@0.1.0/css",
      "github:components/jquery@2.1.3",
      "npm:underscore@1.7.0",
      "npm:process@0.10.0",
      "github:systemjs/plugin-css@0.1.0",
      "github:jspm/nodelibs-process@0.1.0/index",
      "github:jspm/nodelibs-process@0.1.0",
      "npm:backbone@1.1.2/backbone",
      "npm:backbone@1.1.2",
      "app/test",
      "app/app"
    ]
  }
});

System.config({
  "map": {
    "backbone": "npm:backbone@1.1.2",
    "css": "github:systemjs/plugin-css@0.1.0",
    "jquery": "github:components/jquery@2.1.3",
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "npm:backbone@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.0",
      "underscore": "npm:underscore@1.7.0"
    }
  }
});

