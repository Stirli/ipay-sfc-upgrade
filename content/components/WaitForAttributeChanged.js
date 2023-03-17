export function WaitForAttributeChanged(node, attr, callback) {
  const observer = new MutationObserver(observerCallback);
  observer.observe(node, { attributes: true });

  function observerCallback(mutations) {
    for (const mutation of mutations) {
      if (typeof attr === 'function' ? attr(mutation.target) : mutation.attributeName === attr) {
        callback(mutation);
        observer.disconnect();
      }
    }
  }
}
