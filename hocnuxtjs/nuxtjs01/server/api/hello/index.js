export default defineEventHandler((event) => {
  const allHeaders = getRequestHeaders(event);
  const apiKey = allHeaders["x-api-key"];
  const query = getQuery(event);

  // const cookie = parseCookies(event);
  // console.log(cookie);
  // setResponseHeader(event, "x-secret", "ok123");
  // setResponseHeader(event, "Set-Cookie", "email=111@111;path=/;max-age=3600");

  // setCookie(event, "age", 32, {
  //   path: "/",
  //   httpOnly: true,
  //   maxAge: 3600,
  // });

  return {
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
    apiKey,
    query,
  };
});
