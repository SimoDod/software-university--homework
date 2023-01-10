function getArticleGenerator(articles) {
  let divEl = document.getElementById("content");
  return () => {
    let currentArticle = articles.shift();
    if (currentArticle) {
      let newArticle = document.createElement("article");
      newArticle.textContent = currentArticle;
      divEl.appendChild(newArticle);
    }
  };
}
