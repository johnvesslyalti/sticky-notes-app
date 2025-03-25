function addText() {
    const container = document.getElementById("textareaContainer");

    const wrapper = document.createElement("div");
    wrapper.classList.add("textarea-wrapper");

    const textarea = document.createElement("textarea");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "✖";
    deleteBtn.onclick = function () {
        container.removeChild(wrapper);
    }
    wrapper.appendChild(textarea);
    wrapper.appendChild(deleteBtn);
    container.appendChild(wrapper);
}