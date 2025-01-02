document.addEventListener("DOMContentLoaded", () => {
  const sonOfGod = () => {
    const jesusFilhodeDeus = document.querySelector("#jesusFilhodeDeus");
    jesusFilhodeDeus.addEventListener("click", () => {
        const lyricsSon = document.querySelector("#jesusFilho")
        if(lyricsSon.style.display == "block"){
            lyricsSon.style.display ="none"
        } else{
            lyricsSon.style.display ="block"
        }
    });
  };
  sonOfGod()
});
