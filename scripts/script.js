let button = document.getElementById('alert')
button.addEventListener('click', () => {
    document.getElementById('cars').scrollIntoView({ behavior: "smooth" })
})

let scrollButons = document.getElementsByClassName('scroll-button');
for (let i = 0; i < scrollButons.length; i++) {
    scrollButons[i].addEventListener('click', () => {
        document.getElementById('price').scrollIntoView({ behavior: "smooth" })
        document.getElementById('car-name').value = document.getElementsByClassName('car-item-title')[i].textContent;
    })
}

function Validate(id) {
    let element = document.getElementById(id);
    if (element.value == "") {
        element.classList.toggle('price-input-alert');
        setTimeout(() => {
            element.classList.toggle('price-input-alert');
        }, 1000);
        return false;
    }
    return true;
}

let validation = document.getElementById('price-form-validation');
validation.addEventListener('click', () => {
    let validName = Validate("name");
    let validPhone = Validate("phone");
    let validCarName = Validate("car-name");
    if (validPhone && validCarName && validName) {
        alert("Спасибо за заявку, с вами свяжутся в ближайшее время!")
    }
})

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 50) + 'px,' + ((event.clientY * 0.3) / 50) + 'px, 0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.333 * window.pageYOffset) + 'px';
    })
});


