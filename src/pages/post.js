import React from "react";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="post">
      <h1 className="post-title">{post.fields.title}</h1>
      <span className="post-date">{post.fields.date}</span>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
      fields {
        title
        date
      }
    }
  }
`;
