//lowercase
var personName = "Shehla";
console.log("lowercase:", personName.toLowerCase());
// uppercase
console.log("uppercase:", personName.toUpperCase());
// titlecase
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
