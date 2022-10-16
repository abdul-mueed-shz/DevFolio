// takes an element object
export function scroll(id) {
  const el = document.getElementById(id);
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function openLink(url) {
  window.open(url, "_blank");
}
