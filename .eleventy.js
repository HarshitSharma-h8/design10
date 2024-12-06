// import service from './src/_data/services.json' ;
export default function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["md", "njk", "html"]);
  eleventyConfig.addPassthroughCopy("./src/style/style.css");
  eleventyConfig.addPassthroughCopy("./src/javascript/index.js");
  eleventyConfig.addPassthroughCopy("./src/assets");

  // eleventyConfig.addCollection("blogPosts", function (collectionApi) {
  //   const blogs = require("./src/_data/blogs.json");
  //   return blogs.map((blog) => {
  //     return {
  //       data: blog,
  //       slug: blog.slug,
  //     };
  //   });
  // });

  // eleventyConfig.addCollection("ourServices", function (collectionApi) {
  //   const Services = service;
  //   return Services.map((service) => {
  //     return {
  //       data: service,
  //       slug: service.name,
  //     };
  //   });
  // });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
