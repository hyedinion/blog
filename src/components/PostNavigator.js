import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import twemoji from "twemoji";

const Wrapper = styled.div`
  background: ${props => props.theme.colors.whiteSmoke};
  padding: 2em ${props => props.theme.sideSpace.contentLarge};
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 30px ${props => props.theme.sideSpace.contentSmall};
  }
`;

const PostCardWrapper = styled.div`
  .post-card-link {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    padding: 15px;
    background: #fff;
    border-radius: 5px;
    color: ${props => props.theme.colors.blackLight};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    &:hover {
      background: ${props => props.theme.colors.graygreen};
    }
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      padding: 10px;
    }
  }
`;
const PostCardEmoji = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 80px;
  height: 80px;
  background: ${props => props.theme.colors.whiteSmoke};
  border-radius: 4px;
  font-size: 50px;
  img {
    width: 55px;
    height: 55px;
  }
`;
const PostCardContent = styled.div`
  width: calc(100% - 80px);
  padding-left: 15px;
  h5 {
    margin: 0;
    font-size: 1.1em;
    font-weight: 600;
    line-height: 1.45;
    color: ${props => props.theme.colors.base};
  }
  time {
    display: block;
    margin-bottom: 0.1em;
    letter-spacing: 0.05em;
    font-size: 0.8em;
    color: ${props => props.theme.colors.gray};
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding-left: 15px;
    h5 {
      font-size: 1em;
    }
  }
`;

const RelatedPostCard = ({ node }) => {
  const title = node.frontmatter.title || node.slug;
  const emoji = twemoji.parse(node.frontmatter.emoji || "🐱", {
    folder: "svg",
    ext: ".svg"
  });

  return (
    <PostCardWrapper>
      <Link to={`/${node.frontmatter.category}/${node.id}`} className="post-card-link">
        <PostCardEmoji dangerouslySetInnerHTML={{ __html: emoji }} />
        <PostCardContent>
          <h5>{title}</h5>
          <time>{node.frontmatter.date}</time>
        </PostCardContent>
      </Link>
    </PostCardWrapper>
  );
};

const PostNavigator = ({ pageContext }) => {
    const { previous, next } = pageContext;
    let content = [];

    if (next) content.push(<RelatedPostCard key={next.slug} node={next} />);
    if (previous) content.push(<RelatedPostCard key={previous.slug} node={previous} />);

    if (content.length < 1) return null;
   
    return <Wrapper>{content}</Wrapper>;
};

export default PostNavigator;