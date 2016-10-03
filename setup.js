// simple mocking to enable usage without building
global.HTMLElement = class HTMLElement {};
const elements = {};
global.customElements = {
	define: (name, element) => {
		elements[name] = element;
	}
};
