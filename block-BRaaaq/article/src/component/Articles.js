import React from "react";
import data from "../data";
import proptypes from "prop-types";

function Articles() {
  console.log(data);
  return (
    <>
      <div className="container article-parent">
        {data.map((elm) => {
          return <Article articleInfo={elm} />;
        })}
      </div>
    </>
  );
}

function Article(props) {
  console.log(props.articleInfo.urlToImage);
  return (
    <>
      <div className="article">
        <img src={props.articleInfo.urlToImage} alt="img" />
        <h2>{props.articleInfo.title}</h2>
      </div>
    </>
  );
}

Article.proptypes = {
  title: proptypes.string.isRequired,
  Image: proptypes.url.isRequired,
};

export default Articles;
