document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector(".envelope")
    const nameElement = document.getElementById("name")
    const messageElement = document.getElementById("message")
    const senderElement = document.getElementById("sender")

    // Personaliza estos valores
    const recipientName = "Fer"
    const message = "Fer, nunca habia este tipo de cosas por alguien mas, pero te quiero agradecer por armarte de valor ese dia que mandaste mensaje. Nunca imagine que ese hola se iba a convertir en algo tan bonito, y que iba a conocer a alguien tan especial como tu. Te quiero desear un muy feliz 21vo cumpleaños, espero que disfrutes mucho tu dia y lo pases con las personas que mas quieres. Me gustas y te quiero muchisimo y eso aumenta con cada dia que pasa y te conozco mas. Gracias por ser tan especial y por hacerme tan feliz, te quiero mucho Fer ❤️❤️❤️."
    const senderName = "Edson"

    nameElement.textContent = recipientName
    messageElement.textContent = message
    senderElement.textContent = senderName

    envelope.addEventListener("click", () => {
        envelope.classList.toggle("open")
    })
})