document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("iframe-generator-form");
  const urlInput = document.getElementById("url-input");
  const widthInput = document.getElementById("width-input");
  const heightInput = document.getElementById("height-input");
  const iframeContainer = document.getElementById("iframe-container");
  const iframeCode = document.getElementById("iframe-code");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    generateIframe();
  });

  function generateIframe() {
    const url = urlInput.value;
    const width = widthInput.value;
    const height = heightInput.value;

    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.width = width;
    iframe.height = height;
    iframe.style.border = "1px solid #ccc";

    iframeContainer.innerHTML = "";
    iframeContainer.appendChild(iframe);

    const iframeHTML = `<iframe src="${url}" width="${width}" height="${height}" style="border: 1px solid #ccc;"></iframe>`;
    iframeCode.value = iframeHTML;
  }
});