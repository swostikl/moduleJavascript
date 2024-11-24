// get element by id
const Element = document.getElementById("target");
//adding innerHTML property
Element.innerHTML = `
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    `;
// adding my-list with id=target
Element.classList.add("my-list");
