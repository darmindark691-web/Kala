const WORKER = "https://icy-sky-45df.darmindark691.workers.dev";

const form = document.getElementById("uploadForm");
const feed = document.getElementById("feed");
const status = document.getElementById("status");

form.onsubmit = async (e) => {
  e.preventDefault();

  status.innerText = "Uploading...";

  const fd = new FormData(form);

  const res = await fetch(WORKER, {
    method: "POST",
    body: fd
  });

  const data = await res.json();

  if (data.url) {
    addImage(data.url);
    status.innerText = "✅ Published";
  } else {
    status.innerText = "❌ Upload failed";
  }
};

function addImage(url) {
  const img = document.createElement("img");
  img.src = url;
  feed.prepend(img);
}
