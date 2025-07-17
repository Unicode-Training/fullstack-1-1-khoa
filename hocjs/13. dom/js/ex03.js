const btnEl = document.querySelector(".btn");
const contentEl = document.querySelector(".content");
const content = contentEl.innerHTML;
btnEl.addEventListener("click", function () {
  //   console.log(contentEl.innerHTML);
  //   console.log(contentEl.innerText);
  //   console.log(contentEl.textContent);
  //   console.log(contentEl.outerHTML);
  //   contentEl.innerHTML = `<b>Xin chào anh em</b>`;
  //   contentEl.innerText = `<b>Xin chào anh em</b>`;
  //   contentEl.textContent = `Xin chào anh em   `;
  //   contentEl.outerHTML = `<h2>Chào mừng anh em</h2>`;
  if (contentEl.innerHTML) {
    contentEl.innerHTML = "";
    this.innerText = "Hiện";
  } else {
    contentEl.innerHTML = content;
    this.innerText = "Ẩn";
  }
});
