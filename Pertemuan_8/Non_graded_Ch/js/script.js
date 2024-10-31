function toggleEdit() {
  let toggleEdit = document.getElementById("form");

  let editSetting = toggleEdit.style.display;

  let tombolEdit = document.getElementById("tombolEdit");

  if (editSetting == "block") {
    toggleEdit.style.display = "none";
    tombolEdit.innerHTML = "Show Edit";
  } else {
    toggleEdit.style.display = "block";
    tombolEdit.innerHTML = "Hide Edit";
  }
}

const form = document.getElementById("form");

const tempatNama = document.getElementById("tempatNama");
const tempatSpesial = document.getElementById("tempatSpesial");
const tempatAvailability = document.getElementById("tempatAvailability");
const tempatUsia = document.getElementById("tempatUsia");
const tempatLokasi = document.getElementById("tempatLokasi");
const tempatPengalaman = document.getElementById("tempatPengalaman");
const tempatEmail = document.getElementById("tempatEmail");

const getNama = document.getElementById("getNama");
const getRole = document.getElementById("getRole");
const getAvailability = document.getElementById("getAvailability");
const getAge = document.getElementById("getAge");
const getLokasi = document.getElementById("getLokasi");
const getYear = document.getElementById("getYear");
const getEmail = document.getElementById("getEmail");

getNama.value = tempatNama.innerText;
getRole.value = tempatSpesial.innerText;
getAvailability.value = tempatAvailability.innerText;
getAge.value = tempatUsia.innerText;
getLokasi.value = tempatLokasi.innerText;
getYear.value = tempatPengalaman.innerText;
getEmail.value = tempatEmail.innerText;

const form2 = document.getElementById("form2");

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  document.getElementById("tempatNama").innerText =
    document.getElementById("getNama").value;
  document.getElementById("tempatSpesial").innerText =
    document.getElementById("getRole").value;
  document.getElementById("tempatAvailability").innerText =
    document.getElementById("getAvailability").value;
  document.getElementById("tempatUsia").innerText =
    document.getElementById("getAge").value;
  document.getElementById("tempatLokasi").innerText =
    document.getElementById("getLokasi").value;
  document.getElementById("tempatPengalaman").innerText =
    document.getElementById("getYear").value;
  document.getElementById("tempatEmail").innerText =
    document.getElementById("getEmail").value;

  form.style.display = "none";
});



