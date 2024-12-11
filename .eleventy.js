// import service from './src/_data/services.json' ;
export default function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["md", "njk", "html"]);
  eleventyConfig.addPassthroughCopy("./src/style/style.css");
  eleventyConfig.addPassthroughCopy("./src/javascript/index.js");
  eleventyConfig.addPassthroughCopy("./src/assets");

 

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
