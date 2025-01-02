document.addEventListener("DOMContentLoaded", () => {
    const articleFunction = () => {
      const input = document.querySelector("input");
      const svg = document.querySelector("svg");
      const articles = document.querySelectorAll("article");
  
      svg.addEventListener("click", () => {
        const searchText = input.value.toLowerCase().trim();
  
        articles.forEach(article => {
          
          const articleClasses = Array.from(article.classList).join(" ").toLowerCase();
  
          
          const articleTitle = article.querySelector("h2")?.textContent.toLowerCase();
  
          
          const matches =
            articleClasses.includes(searchText) || (articleTitle && articleTitle.includes(searchText));
  
          
          article.style.display = matches ? "block" : "none";
        });
      });
  
      // Inicializa o AOS (se aplicável)
      AOS.init();
    };
  
    articleFunction();
  });
  