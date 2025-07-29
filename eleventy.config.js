import markdownIt from "markdown-it";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {

    let options = {
        html: true,
        breaks: true,
        linkify: true,
    };

    eleventyConfig.setLibrary("md", markdownIt(options));
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {      
        formats: ["auto"],
        widths: [250, 500, 750],
        sharpOptions: {
            animated: true,        
        },
        htmlOptions: {
            imgAttributes:
            {
                loading: "lazy",
                decoding: "async",        
            },
        },
        pictureAttributes: {},
        fallback: "largest",
    });
    eleventyConfig.addPassthroughCopy('./src/main.css');
    eleventyConfig.addPassthroughCopy('./src/img');    
    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "_site",
            includes: '_includes',
            },
    };
};
