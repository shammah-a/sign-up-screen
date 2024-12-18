const email = document.getElementById(`email`)
const password = document.getElementById(`password`)
const username = document.getElementById(`username`)
const form = document.getElementById(`form`)

form.addEventListener(`submit`, function(event){
    // event.preventDefault()

    let userEmail = email.value
    let userPassword = password.value
    let nameOfUser = username.value

    const userDetails = {
        emailOfUser : userEmail,
        passwordOfUser : userPassword,
        userName: nameOfUser
    }

    form.reset()

    console.log(userDetails)
})