function displayViews() {
  const viewCount = updateViews()
  document.getElementById('views').innerHTML = viewCount;
}

function updateViews() {
  let views = 0
  views += 1
  return views
}

window.onload = displayViews;
