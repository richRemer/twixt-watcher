twixt-watcher Function
======================

```js
var Watch = require("twixt-watch"),
    watcher = require("twixt-watch");
    obj = Watch({});

watch(obj, function(obj, changes) {
    var was, is;

    for (var prop in changes) {
        was = changes[prop];
        is = obj[prop];
        console.log(prop, "changed from", was, "to", is);
    }
});
```

