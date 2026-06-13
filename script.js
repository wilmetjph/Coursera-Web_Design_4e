function addContent() {
	const div = document.createElement('div');
	const node = document.createTextNode("More content");
	div.appendChild(node);

	const element = document.getElementById("content");
	element.appendChild(div);
}