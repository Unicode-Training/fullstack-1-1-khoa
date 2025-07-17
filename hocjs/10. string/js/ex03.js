let content = `<h2>ABC Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta beatae saepe. Unde nostrum magnam doloremque at porro sunt eius illum, placeat laborum excepturi molestias provident officiis corporis? Iste tempora sunt quas fugit harum perferendis similique ad, doloribus et amet soluta adipisci sapiente temporibus ea, eligendi illum eum aliquid dicta, quia molestiae. Dignissimos corrupti facilis nisi aspernatur voluptate! Nostrum debitis rerum officia. Omnis vitae, labore possimus nam obcaecati reiciendis laborum maiores, dolores tenetur exercitationem molestias itaque repudiandae nesciunt harum, sunt adipisci atque. Et porro earum voluptatum ullam voluptatem, illo voluptatibus doloribus beatae quas laudantium explicabo tempore deserunt. Asperiores, fuga recusandae. ABC Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta beatae saepe. Unde nostrum magnam doloremque at porro sunt eius illum, placeat laborum excepturi molestias provident officiis corporis? Iste tempora sunt quas fugit harum perferendis similique ad, doloribus et amet soluta adipisci sapiente temporibus ea, eligendi illum eum aliquid dicta, quia molestiae. Dignissimos corrupti facilis nisi aspernatur voluptate! Nostrum debitis rerum officia. Omnis vitae, labore possimus nam obcaecati reiciendis laborum maiores, dolores tenetur exercitationem molestias itaque repudiandae nesciunt harum, sunt adipisci atque. Et porro earum voluptatum ullam voluptatem, illo voluptatibus doloribus beatae quas laudantium explicabo tempore deserunt. Asperiores, fuga recusandae.</h2>`;
let keyword = "Lorem";
let position = content.toLowerCase().indexOf(keyword.toLowerCase());
let newContent = "";
while (position !== -1) {
  newContent +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>`;
  content = content.slice(position + keyword.length);
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
}
document.body.innerHTML = newContent + content;
