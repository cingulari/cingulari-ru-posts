import markdownIt from "markdown-it";
import pluginWebc from "@11ty/eleventy-plugin-webc";

export default function (eleventyConfig) {

	let options = {
		html: true,
		breaks: true,
		linkify: true,
	};

	eleventyConfig.setLibrary("md", markdownIt(options));
	eleventyConfig.addPlugin(pluginWebc);

  return {
    dir: {
      input: "src",
      output: '/var/www/html/cingulari-ru/posts/',
      includes: '_includes',
      layouts: '_layouts'
    },
  };
};
