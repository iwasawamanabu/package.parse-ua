export const parseUA = (() => {
  const UA = typeof navigator !== "undefined" ? navigator.userAgent : "";
  if (UA === "undefined") return {};
  
  console.log(UA);

})();

module.exports = parseUA;