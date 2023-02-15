const btn = document.querySelectorAll("body button");

btn.forEach(function (pil) {
  pil.addEventListener("click", function () {
    let namebtn = pil.getAttribute("name");
    geserCek(namebtn);
  });
});

function geserCek(nbtn) {
  const table = document.querySelectorAll("." + nbtn);
  if (table[0].disabled == true) {
    autoNext(0, nbtn);
  } else {
    table[0].select();
  }

  for (let i = 0; i < table.length; i++) {
    table[i].addEventListener("input", function () {
      if (i == table.length - 1) {
        var concatString = catString(nbtn);
        submitString(concatString, nbtn, table);
      } else if (
        i == table.length - 2 &&
        table[table.length - 1].disabled == true
      ) {
        var concatString = catString(nbtn);
        submitString(concatString, nbtn, table);
      } else {
        autoNext(i, nbtn);
        var concatString = catString(nbtn);
        submitString(concatString, nbtn, table);
      }
    });
  }
}

function autoNext(i, cn) {
  let d = document.querySelectorAll("." + cn);
  if (d[i + 1].disabled == true) {
    d[i + 2].select();
  } else {
    d[i + 1].select();
  }
}

// concat input to string
function catString(cn) {
  var concat = "";
  let d = document.querySelectorAll("." + cn);
  for (let i = 0; i < d.length; i++) {
    concat += d[i].value;
  }
  return concat;
}

// modif jawaban
function submitString(concat, tipe, tabel) {
  if (concat.toUpperCase() == "MACTHA" && tipe == "m1") {
    pengulanganTabel(tabel);
  } else if (concat.toUpperCase() == "DUA" && tipe == "d1") {
    pengulanganTabel(tabel);
  } else if (concat.toUpperCase() == "TURU" && tipe == "d2") {
    pengulanganTabel(tabel);
  } else if (concat.toUpperCase() == "HEART" && tipe == "m2") {
    pengulanganTabel(tabel);
  } else if (concat.toUpperCase() == "PELANGI" && tipe == "d3") {
    pengulanganTabel(tabel);
  } else if (concat.toUpperCase() == "NOV" && tipe == "m3") {
    pengulanganTabel(tabel);
  }
}

function pengulanganTabel(table) {
  for (let j = 0; j < table.length; j++) {
    table[j].disabled = true;
  }
}

