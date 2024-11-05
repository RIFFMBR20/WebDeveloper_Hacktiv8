let urutHuruf = (stringg) => {
  return [...stringg].sort((a, b) => a.localeCompare(b)).join("");
};

console.log(urutHuruf("Halo"));
