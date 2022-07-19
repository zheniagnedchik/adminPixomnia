import React from "react";

const Links = (props) => {
  console.log(props);
  const toLink = (link) => {
    document.location.href = link;
  };
  return (
    <div onClick={() => toLink(props.record)}>
      <a>{props.record}</a>
    </div>
  );
};

export default Links;
