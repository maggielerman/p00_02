const util  = require('util');
const Image = require("@11ty/eleventy-img");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const fs = require('fs');
const Cache = require("@11ty/eleventy-cache-assets");
const filters = require('./src/utils/filters.js');
const transforms = require('./src/utils/transforms.js');
const shortcodes = require('./src/utils/shortcodes.js');
const iconsprite = require('./src/utils/iconsprite.js');
const htmlmin = require('./src/utils/minify-html.js');

const CleanCSS = require("clean-css");
const purgeCssPlugin = require("eleventy-plugin-purgecss");



async function videoShortcode(src, alt, sizes, classes,) {
  let metadata = await Image(src, {
    widths: [400],
    formats: ["webp"],
    urlPath: "/videos/responsive",
    outputDir: "dist/videos/responsive",
    loop: true,
    animated: true,
    useCache: true,
  });

  let imageAttributes = {
    alt,
    class: classes,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}

async function imageShortcode(src, alt, sizes, cls, style) {
  let metadata = await Image(src, {
    widths: [ 800, 1200],
    formats: ["jpeg", "webp", "png"],
    urlPath: "/images/responsive",
    outputDir: "dist/images/responsive",
   
  });

  let imageAttributes = {
    alt,
    class: cls,
    style,
    sizes,
    loading: "lazy",
    decoding: "async",
  };
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
    // Filters
    Object.keys(filters).forEach((filterName) => {
        eleventyConfig.addFilter(filterName, filters[filterName])
    })

    // Transforms
    Object.keys(transforms).forEach((transformName) => {
        eleventyConfig.addTransform(transformName, transforms[transformName])
    })

    // Shortcodes
    Object.keys(shortcodes).forEach((shortcodeName) => {
        eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName])
    })

    // Icon Sprite
    eleventyConfig.addNunjucksAsyncShortcode('iconsprite', iconsprite)

    //deepmerge!
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addFilter("filterTagList", tags => {
    // should match the list in tags.njk
    return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
  })

  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });
    return [...tagSet];
  });

  eleventyConfig.addFilter("limit", function (arr, limit) {
  return arr.slice(0, limit);
  });


    //image shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("video", videoShortcode);
  eleventyConfig.addLiquidShortcode("video", videoShortcode);
  eleventyConfig.addJavaScriptFunction("video", videoShortcode);

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);


  // plugins
  eleventyConfig.addPlugin(pluginRss);

  // Layout aliases for convenience
  eleventyConfig.addLayoutAlias('default', 'layouts/layout.njk');
  eleventyConfig.addLayoutAlias('conf', 'layouts/conf.njk');
  eleventyConfig.addLayoutAlias('base', 'layouts/resume-base.njk');
  eleventyConfig.addLayoutAlias('resume', 'layouts/resume.njk');

  // a debug utility
  eleventyConfig.addFilter('dump', obj => {
    return util.inspect(obj)
  });
  
    // Icon Sprite
  
  eleventyConfig.addNunjucksAsyncShortcode('iconsprite', require("./src/utils/iconsprite.js") );
  // grab excerpts and sections from a file
  eleventyConfig.addFilter("section", require("./src/utils/grabSection.js") );

  // compress and combine js files
  eleventyConfig.addFilter("jsmin", require("./src/utils/minify-js.js") );

   eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  if (process.env.NODE_ENV == "production") {
  eleventyConfig.addPlugin(purgeCssPlugin, {
      config: "./purgecss.config.js",
      quiet: false,
    });
  }
  eleventyConfig.addWatchTarget("./src/site/assets/css/");

// eleventyConfig.addPlugin(purgeCssPlugin, {
//       config: "./purgecss.config.js",
//       quiet: false,
//     });
  // minify the html output when running in prod
  if (process.env.NODE_ENV == "production") {
    eleventyConfig.addTransform("htmlmin", require("./src/utils/minify-html.js") );
  }
  // eleventyConfig.addTransform("htmlmin", require("./src/utils/minify-html.js") );

  // static assets to pass through
  eleventyConfig.addPassthroughCopy("./src/site/images");
  eleventyConfig.addPassthroughCopy("./src/site/assets/js");
  eleventyConfig.addPassthroughCopy("./src/site/admin");


 eleventyConfig.addNunjucksFilter('keys', function (value) {
    return Object.keys(value)
  })

  eleventyConfig.addNunjucksFilter('fmtPrice', function (price) {
    return parseFloat(price).toFixed(2)
  })

  eleventyConfig.addNunjucksFilter('dateDisplay', function (date) {
    return date.toISOString()
  })

  eleventyConfig.addNunjucksFilter('isPreorder', function (tags) {
    return tags.some(t => t === 'Preorder')
  })

  eleventyConfig.addNunjucksFilter('filterFrontpage', function (colls) {
    return colls.filter(coll => coll.handle !== 'frontpage')
  })

  eleventyConfig.addNunjucksFilter('prepend', function (value, pre) {
    return `${pre}${value}`
  })

  eleventyConfig.addNunjucksFilter('productImage', function (product) {
    return product && product.images.edges[0] && product.images.edges[0].node.originalSrc
  })

  eleventyConfig.addNunjucksFilter('collectionImage', function (collection) {
    return collection && collection.image && collection.image.originalSrc
  })

  eleventyConfig.addNunjucksFilter('firstValue', function (values) {
    return values.find((val) => {
      return val !== null && val !== '' && val !== undefined
    })
  })

  eleventyConfig.addNunjucksFilter('forFrontpage', function (products) {
    return products.filter(prod => prod.collections.edges.some(n => n.node.handle === 'frontpage'))
  })

  eleventyConfig.addNunjucksFilter('prodOptions', function (nodes) {
    return nodes.reduce((opts, node) => {
      node.node.selectedOptions.forEach((opt) => {
        if (opts[opt.name]) {
          opts[opt.name].add(opt.value)
        } else {
          opts[opt.name] = new Set([opt.value])
        }
      })
      return opts
    }, {})
  })

  eleventyConfig.addCollection('collections', collection => {
    return collection.getFilteredByGlob('_collections/*.md')
  })
  // eleventyConfig.addPassthroughCopy({"./src/admin": "./admin"});

  //browserSync settings
  eleventyConfig.setBrowserSyncConfig({
      callbacks: {
        ready: function(err, browserSync) {
          const content_404 = fs.readFileSync('dist/404.html');

          browserSync.addMiddleware("*", (req, res) => {
            // Provides the 404 content without redirect.
            res.write(content_404);
            res.end();
          });
        },
      },
      syncscroll: false,
      ui: false,
      ghostMode: false
    });

  return  {
    dir: {
      input: "src/site",
      includes: "_includes",
      output: "dist",
      data: "_data",
      feeds: "feeds",
    },
    passthroughFileCopy: true,
    templateFormats : ["njk", "md"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
  };
};