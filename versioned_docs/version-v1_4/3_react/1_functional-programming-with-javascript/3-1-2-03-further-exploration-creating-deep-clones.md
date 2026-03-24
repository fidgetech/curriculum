---
title: "📓 3.1.2.3 Further Exploration: Creating Deep Clones"
day: tuesday
id: 3-1-2-3-further-exploration-creating-deep-clones
hide_table_of_contents: true
---

You will not be expected to create deep clones of objects this course section. However, it's still helpful to know how we might go about creating a deep clone instead of a shallow clone.

Modern JavaScript provides a simple way to create deep clones of objects using the `structuredClone` function. This function can handle most data types, including nested objects and arrays. Here's an example of how to use `structuredClone`:

```javascript
const original = {
  name: "Katherine",
  address: {
    city: "Portland",
    zip: "97204"
  }
};

const deepClone = structuredClone(original);

console.log(deepClone);
// Output: { name: 'Katherine', address: { city: 'Portland', zip: '97204' } }
```

In this example, `deepClone` is a deep copy of the `original` object. Changes made to `deepClone` will not affect `original`, and vice versa.

```javascript
deepClone.address.city = "Seattle";
console.log(original.address.city); // Output: "Portland"
console.log(deepClone.address.city); // Output: "Seattle"
```

Note that while `structuredClone` is supported by all modern browsers and Node.js versions 17+, it may not be available in older environments. Another option is to use use third-party libraries like Lodash's `cloneDeep` method.
