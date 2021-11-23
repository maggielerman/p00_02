// purgecss.config.js

module.exports = {
  // Content files referencing CSS classes
  content: ["./dist/**/*.html", "./dist/*.html"],

  // CSS files to be purged in-place
  css: ["./dist/assets/css/*.css"],
};