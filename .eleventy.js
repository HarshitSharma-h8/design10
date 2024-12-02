module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style/style.css");
  eleventyConfig.addPassthroughCopy("./src/javascript/index.js");
  eleventyConfig.addPassthroughCopy("./src/assets");

  eleventyConfig.addCollection("blogPosts", function (collectionApi) {
    const blogs = require("./src/_data/blogs.json");
    return blogs.map((blog) => {
      return {
        data: blog,
        slug: blog.slug,
      };
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
