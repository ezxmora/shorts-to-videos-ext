const URIs = document.querySelectorAll('a.ytd-thumbnail[href*="shorts/"]');

for (const uri of URIs) {
  uri.href = uri.href.replace("shorts/", "watch?v=");

  uri.addEventListener("click", (e) => {
    e.preventDefault();

    location.href = uri.href.replace("shorts/", "watch?v=");
  });
}
