// import service from './src/_data/services.json' ;

import dotenv from "dotenv";
import MarkdownIt from "markdown-it";

dotenv.config();

export default function (eleventyConfig) {

  const markdownItInstance = MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  });
  eleventyConfig.setLibrary("md", markdownItInstance);
  eleventyConfig.addFilter("markdown", (content) => {
    return markdownItInstance.render(content || "");
  });

  eleventyConfig.setTemplateFormats(["md", "njk", "html"]);
  eleventyConfig.addPassthroughCopy("src/style");
  eleventyConfig.addPassthroughCopy("src/javascript");

  eleventyConfig.addWatchTarget("./src/style/");
  eleventyConfig.addWatchTarget("./src/javascript/");

  eleventyConfig.addPassthroughCopy("./src/assets");

  // dotenv
  eleventyConfig.addGlobalData("env", process.env);

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
