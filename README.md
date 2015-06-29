# MetaSetter

Easily and dynamically update document meta tags in clientside applications.


## The Singleton pattern

Whenever you `require('meta-setter')` it will return the same javascript object in all spots. This is known as the [Singleton pattern](http://en.wikipedia.org/wiki/Singleton_pattern).


## Why is this useful?

The MetaSetter object is a simple singleton object that has 3 methods: init, updateMetaTags, and Reset. MetaSetter is extremely useful in client side applications, especially when attaching it to a typical Global App Object `App.metaSetter = require('meta-setter')` that is usually required in other parts of the application. When required you can easily update the document meta tags by simply passing in a spec object, typically a derived property from a model in the application or an object created on the fly and passed through to the updateMetaTags method on 'static' pages within the application. `App.metaSetter.updateMetaTags({});`



## install

```
npm install --save-dev meta-setter
```

## API Reference

### init `MetaSetter.init(obj)`

Initializes the singleton object with a set of default meta tag values

```javascript
var MetaSetter = require('meta-setter');

MetaSetter.init({
	'title': 'Some Default Title',
	'og:title': 'Some Default Open Graph Title',
	'og:description': 'Default Open Graph Description',
	'og:image': 'Default Open Graph Image URL',
	'og:url': window.location.host,
	'og:type': 'website'
});
```

### reset `MetaSetter.reset()`

Resets document meta tags back to the original default states.

<!-- starthide -->
## credits

Created by [@imjakechapman](http://twitter.com/imjakechapman).

## license

MIT
<!-- endhide -->
