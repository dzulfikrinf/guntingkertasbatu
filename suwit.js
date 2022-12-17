function pilihankomputer() {
  let komputer = Math.round(Math.random() * 9 + 1);
  if (komputer <= 3) {
    return "batu";
  } else if (komputer > 3 && komputer <= 6) {
    return "kertas";
  } else {
    return "gunting";
  }
}

function rules(player, komputer) {
  if (player == komputer) return "SERI";
  if (player == "gunting") return komputer == "batu" ? "KALAH" : "MENANG";
  if (player == "batu") return komputer == "kertas" ? "KALAH" : "MENANG";
  if (player == "kertas") return komputer == "gunting" ? "KALAH" : "MENANG";
}

function putar() {
  let gambarkomputer = document.getElementById("gambarkomputer");
  let gambar = ["kertas.png", "batu.png", "gunting.png"];
  let i = 0;
  let waktumulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktumulai > 2000) {
      clearInterval;
      return;
    }
    gambarkomputer.src = gambar[i++];
    if (i == gambar.length) i = 0;
  }, 100);
}

let pilihanplayer = document.querySelectorAll("li img");
let skorplayer = 0;
let skorkomputer = 0;

pilihanplayer.forEach(function (pilihan) {
  pilihan.addEventListener("click", function () {
    let pilihankomputerr = pilihankomputer();
    let pilihanplayer = pilihan.id;
    let hasil = rules(pilihanplayer, pilihankomputerr);

    putar();

    setTimeout(function () {
      document.getElementById("gambarkomputer").src = pilihankomputerr + ".png";
      document.getElementById("info").innerHTML = hasil;
      if (hasil == "KALAH") {
        skorkomputer += 1;
      } else if (hasil == "MENANG") {
        skorplayer += 1;
      } else {
        skorkomputer += 0;
      }
      document.getElementById("skorplayer").innerHTML = skorplayer;
      document.getElementById("skorkomputer").innerHTML = skorkomputer;
    }, 2000);
  });
});
