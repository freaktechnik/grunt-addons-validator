# grunt-addons-validator

[![Greenkeeper badge](https://badges.greenkeeper.io/freaktechnik/grunt-addons-validator.svg)](https://greenkeeper.io/)

> Check an extension for validity

Using the same validator as AMO this plugin validates a directory or xpis that
form an extension.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-addons-validator --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-addons-validator');
```

## The "validate_addon" task

### Overview
In your project's Gruntfile, add a section named `validate_addon` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  validate_addon: {
    your_target: {
      files: {
        src: 'location/of/your/extension'
      }
    }
  }
});
```

### Usage Examples

```js
grunt.initConfig({
  validate_addon: {
    options: {},
    files: {
      src: ['my-extenion.xpi', 'src/'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
