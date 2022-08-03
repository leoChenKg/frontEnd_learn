export default function addTitle(container, titleText) {
  const title = document.createElement('div')
  title.innerText = titleText
  container.appendChild(title)
}
