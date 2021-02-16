function register(){
    const form = document.forms[0];
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(this);

        for (const formElement of formData) {
            console.log(formElement);
        }
    });
}