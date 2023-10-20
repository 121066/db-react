function getRequest() {
  let controller;
  controller && controller.abort();
  controller = new AbortController();
  fetch("https://dbyxs.xyz:8002/goods/list", {
    signal: controller.signal,
    method: "post",
  }).then((res) => {
    return res.json();
  });
}
