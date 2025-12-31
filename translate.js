function DO_G_TRANSLATE(langPair) {
  alert("gvg")
  if (langPair === "") return;

  var lang = langPair.split("|")[1];
  var select = document.querySelector("select.goog-te-combo");

  if (!select) {
    setTimeout(function () {
      DO_G_TRANSLATE(langPair);
    }, 500);
    return;
  }

  select.value = lang;
  select.dispatchEvent(new Event("change"));
}
