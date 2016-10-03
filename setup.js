global.HTMLElement = class HTMLElement {
	getAttribute() {}
	hasAttribute() {}
	attachShadow() {}
};

const Elements = {};
global.customElements = {
	define: (name, Element) => {
		Elements[name] = Element;
	}
};

const render = (node) => {
	let innerHTML = '';
	if (Elements[node.nodeName]) {
		const subNode = new Elements[node.nodeName]().render();
		innerHTML = render(subNode);
	} else if (node.childNodes) {
		innerHTML = node.childNodes.map(render).join('');
	} else {
		innerHTML = node.nodeValue;
	}
	return node.nodeName === '#text' ? innerHTML : '<' + node.nodeName + '>' + innerHTML + '</' + node.nodeName + '>';
}

global.render = (elementName) => {
	const node = new Elements[elementName]().render();
	return render(node);
};
