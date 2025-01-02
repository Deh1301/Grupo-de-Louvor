document.addEventListener("DOMContentLoaded", () => {
    const lugarSecreto = () => {
      const lugar = document.querySelector("#lugarSecreto");
      lugar.addEventListener("click", () => {
          const lyricsSecret = document.querySelector("#lgSecreto")
          if(lyricsSecret.style.display == "block"){
              lyricsSecret.style.display ="none"
          } else{
              lyricsSecret.style.display ="block"
          }
      });
    };
    lugarSecreto()
  });
  