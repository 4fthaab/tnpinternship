
const btn = document.getElementById("btn");
const input = document.getElementById("textInput");
const box = document.getElementById("box");
const form = document.getElementById("form");

btn.addEventListener("click", () => {
    console.log("Button Clicked");
});

btn.addEventListener("dblclick", () => {
    console.log("Button Double Clicked");
});

btn.addEventListener("mousedown", () => {
    console.log("Mouse Down");
});

btn.addEventListener("mouseup", () => {
    console.log("Mouse Up");
});

box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "lightblue";
    console.log("Mouse Over Box");
});

box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "lightgray";
    console.log("Mouse Out Box");
});

input.addEventListener("input", (e) => {
    console.log("Typing:", e.target.value);
});

input.addEventListener("focus", () => {
    console.log("Input Focused");
});

input.addEventListener("blur", () => {
    console.log("Input Blurred");
});

input.addEventListener("change", () => {
    console.log("Input Changed");
});

document.addEventListener("keydown", (e) => {
    console.log("Key Down:", e.key);
});

document.addEventListener("keyup", (e) => {
    console.log("Key Up:", e.key);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form Submitted");
});

window.addEventListener("resize", () => {
    console.log("Window Resized");
});

window.addEventListener("scroll", () => {
    console.log("Scrolling...");
});