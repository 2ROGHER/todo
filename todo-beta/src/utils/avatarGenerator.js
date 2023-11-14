export const generateAvatar = (username, w, h) => {
    // Obtenemos las iniciales del nombre de usuario
    const initials = username.substring(0, 2);

    // Creamos un elemento SVG
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", w);
    svg.setAttribute("height", h);

    // Creamos un rectángulo para el fondo
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", 0);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", w);
    rect.setAttribute("height", h);
    rect.setAttribute("fill", "white");
    svg.appendChild(rect);

    // Creamos un texto para las iniciales
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", w / 2);
    text.setAttribute("y", h / 2);
    text.setAttribute("font-family", "Arial");
    text.setAttribute("font-weight", "bold");
    text.setAttribute("font-size", 24);
    text.setAttribute("fill", "black");
    text.textContent = initials;
    svg.appendChild(text);

    // Devolvemos el elemento SVG
    return svg;
}