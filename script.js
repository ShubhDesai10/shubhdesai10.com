document.addEventListener("DOMContentLoaded", () => {
    const div = document.querySelector(".text");
    const text = "Shubh Desai"
    const typingSpeed = 90;
    const deletingSpeed = 50;
    const pause = 1200;

    let i = 0;
    let checkDelete = false;

    function nameTypingEffect(){
        //Typing Effect
        if (!checkDelete) {
            div.textContent = text.slice(0, i++);
            if (i > text.length) {
                setTimeout(() => (checkDelete = true), pause);
            }
        }
        //Deleting Effect
        else{
            div.textContent = text.slice(0, i--);
            if (i < 0) {
                checkDelete = false;
                i = 0;
            }
        }
        
        if (checkDelete) {
            setTimeout(nameTypingEffect, deletingSpeed);
        }
        else {
            setTimeout(nameTypingEffect, typingSpeed);
        }
    }
    nameTypingEffect()
});