document.addEventListener("DOMContentLoaded", () => {
    let swiper = new Swiper(".swiper", {

        direction:'horizontal',
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });  
    document.addEventListener('keydown', (event) => {
        if(event.key === 'ArrowRight'){
            swiper.slideNext();
        }else if(event.key === 'ArrowLeft'){
            swiper.slidePrev();
        }
    })

    const gameInput = document.getElementById("gameInput");

    gameInput.addEventListener("keypress", (event) => {
        if(event.key === "Enter") {
            let searcGame = gameInput.value.trim().toUpperCase()
            switch(searcGame){
                case "MARIO":
                    gameInput.value = "";
                    swiper.slideTo(0);
                    break
                case "POKEMON":
                    gameInput.value = "";
                    swiper.slideTo(1);
                    break
                case "ZELDA":
                    gameInput.value = "";
                    swiper.slideTo(2);
                    break
                case "DONKEY KONG":
                    gameInput.value = "";
                    swiper.slideTo(3);
                    break
                default:
                    alert(`Jogo ${searcGame} não foi encontrado`);
                    gameInput.value = "";
                    break
            }
        } 
    })

})


const loginBtn = document.getElementById("login-btn");
const modal = document.querySelector(".modal-login-container");
const modalContent = document.querySelector(".modal-login");

loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = modal.style.display === "flex" ? "none" : "flex";
    modalContent.style.animation = modal.style.display === "flex" ? "modalAnimation 0.5s ease-in-out" : "none";
});

window.addEventListener("click", (event) => {
    if(event.target == modal) {
        modal.style.display = "none";
        modalContent.style.animation = "none";
    }
});


let menu = document.querySelector(".hamburger");

menu.addEventListener("click", () => {
    document.querySelector(" header nav ul").classList.add('active');
    document.querySelector("header nav").addEventListener("click", () => {
        document.querySelector("header nav ul").classList.remove('active');
        document.querySelector(".hamburger input").checked = false;
    })
})
   
