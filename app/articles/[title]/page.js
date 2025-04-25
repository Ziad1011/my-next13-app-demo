function ShowArticlePage(props) {
  return (
    <div>
      <h1 style={{ fontSize: "30px", color: "white" }}>Show Article</h1>
      <p style={{ fontSize: "30px", color: "white" }}>{props.params.title}</p>
    </div>
  );
}

export default ShowArticlePage;
