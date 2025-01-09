import markdownIt from "markdown-it";

export default (eleventyConfig) => {
  eleventyConfig.setLibrary(
    "md",
    markdown({
      html: true,
      breaks: true,
      linkify: true,
    })
  );

  eleventyConfig.amendLibrary("md", (library) => {
    library.use(markdownAttrs);
    library.use(markdownAnchor, {
      level: 2,
      tabIndex: false,
      slugify: (s) => slugify(s),
    });
    library.use(markdownContainer, "callout", {
      render: function (tokens, i) {
        return tokens[i].nesting === 1 ? `<aside class="callout">` : `</aside>`;
      },
    });
  });
};