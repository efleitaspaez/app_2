function register() {
   
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const repassword = document.getElementById("repassword").value;
    

        if (!username) {
        alert("Debe ingresar un nombre de usuario.");
        return;
        }
    
        if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
        }
    
        if (password !== repassword) {
            alert("Las contraseñas no coinciden.");
        return;
        }
    
        const xhr = new XMLHttpRequest();

        xhr.open("POST", "/register");
    
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({
            username,
            password
        }));
    
r
        xhr.onload = function() {
            if (xhr.status === 200) {

            alert("El registro se realizó correctamente.");
        } else {

            alert("Ocurrió un error al registrar el usuario.");
        }
        };
    }
    