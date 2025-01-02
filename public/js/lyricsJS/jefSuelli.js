document.addEventListener("DOMContentLoaded", () => {
  const acendeOutra = () => {
    const acende = document.querySelector("#acendeOutra");
    acende.addEventListener("click", () => {
      const lyricsAcende = document.querySelector("#acende");
      if (lyricsAcende.style.display == "block") {
        lyricsAcende.style.display = "none";
      } else {
        lyricsAcende.style.display = "block";
      }
    });
  };
  acendeOutra();
  const preElement = acende
  const content = preElement.innerHTML;

  const formattedContent = content.replace(
    /\b([A-G](#|b)?m?\d?\/?[A-G]?[#b]?)\b/g,
    '<span class="marcacao">$1</span>'
  );

  preElement.innerHTML = formattedContent;
});
