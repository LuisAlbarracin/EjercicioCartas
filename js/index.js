const login = document.getElementById('login')

login.addEventListener("click", function(e){
    e.preventDefault()
    let usuario = document.getElementById('usuario').value
    let password = document.getElementById('password').value

    console.log(usuario + " " + password)

    if(usuario === 'admin' && password === '1234'){
        localStorage.setItem("nombreUsuario", usuario);
        window.location.href = 'poker.html'
    }
    else{
        const alerta = document.getElementById('mensaje')
        alerta.innerHTML = 'Usuario y Contraseñas no Validos'
    }
})