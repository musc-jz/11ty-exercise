const { DateTime } = require("luxon")

module.exports = function(eleventyConfig) {  // Return the configuration object
  
  eleventyConfig.addPassthroughCopy("./src/style.css"); // Copy assets folder to output  
  eleventyConfig.addPassthroughCopy("./src/assets"); // Copy assets folder to output

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
}