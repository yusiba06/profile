var lang =
  window.navigator.languages ||
  window.navigator.language ||
  window.navigator.userLanguage ||
  window.navigator.browserLanguage;
if (lang != "ja") {
  location.href = "https://yusiba06.pages.dev/index.en.html";
}
