/**
 * Attach a watch event handler.
 * @param {EventTarget} watch
 * @param {function} watcher
 */
function watcher(watch, watcher) {
    watch.addEventListener("watch", function(evt) {
        watcher(this, evt.changes);
    });
}

module.exports = watcher;
