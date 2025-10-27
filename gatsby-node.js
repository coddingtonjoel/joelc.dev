const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    // Define a template for blog post
    const blogPost = path.resolve(`./src/templates/post-template.js`);

    // Get all markdown blog posts sorted by date
    const result = await graphql(
        `
            {
                allMarkdownRemark(
                    sort: { fields: [frontmatter___date], order: DESC }
                ) {
                    nodes {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                        }
                    }
                }
            }
        `
    );

    if (result.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            result.errors
        );
        return;
    }

    const posts = result.data.allMarkdownRemark.nodes;

    // Create blog posts pages
    // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
    // `context` is available in the template as a prop and as a variable in GraphQL

    if (posts.length > 0) {
        posts.forEach(post => {
            if (post.fields !== null) {
                createPage({
                    path: `blog${post.fields.slug}`,
                    component: blogPost,
                    context: {
                        slug: post.fields.slug,
                        title: post.frontmatter.title,
                    },
                });
            }
        });
    }
};

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark` && node.fileAbsolutePath) {
        const relativePath = createFilePath({
            node,
            getNode,
            basePath: `posts`,
        });

        createNodeField({
            name: `slug`,
            node,
            value: relativePath,
        });
    }
};

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
        rules: [
        {
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        }
        ]
    }
  })
}