addEventListener("message", function (event) {
  const total = event.data; // event.data -> untuk mendapatkan data
  for (let i = 0; i < total; i++) {
    postMessage(i);
  }
});
