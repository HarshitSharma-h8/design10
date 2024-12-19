// import service from './src/_data/services.json' ;

import dotenv from 'dotenv';

dotenv.config();

export default function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["md", "njk", "html"]);
  eleventyConfig.addPassthroughCopy("./src/style/style.css");
  eleventyConfig.addPassthroughCopy("./src/javascript/index.js");
  eleventyConfig.addPassthroughCopy("./src/assets");
  // dotenv 
  eleventyConfig.addGlobalData("env", process.env);

 

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
