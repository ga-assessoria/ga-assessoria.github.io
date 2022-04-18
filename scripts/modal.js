let Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

let centralParkMail;

const NEXT = 'next';
const PREVIOUS = 'prev';
const GALLERY_FULL_URL = '/images/gallery-images-full/';

function handleGalleryPictureChange(direction){
    const photoComponent = document.getElementById('selected-photo');
    const currentPhoto = parseInt(photoComponent.src.match(/gallery-+[0-9]/g)[0].replace('gallery-', ''));

    if(direction.toLowerCase() === NEXT){
        if(currentPhoto === 18){
            photoComponent.src = GALLERY_FULL_URL + `gallery-${1}.jpg`
        }else{
            photoComponent.src = GALLERY_FULL_URL + `gallery-${currentPhoto + 1}.jpg`
        }
    }
    if(direction.toLowerCase() === PREVIOUS){
        if(currentPhoto === 1){
            photoComponent.src = GALLERY_FULL_URL + `gallery-${18}.jpg`
        }else{
            photoComponent.src = GALLERY_FULL_URL + `gallery-${currentPhoto - 1}.jpg`
        }
    }

}

function handleGalleryModalClick (photoUrl){
    const blackout =  document.querySelector('.blackout-img');
    blackout.style.display = 'block';

    const photoWrapper =  document.querySelector('.photo-wrapper');
    photoWrapper.style.display = 'flex';

    const photo =  document.querySelector('.photo');
    photo.src = photoUrl;

    const carouselGallery = document.querySelector('#carouselExampleControls');
    carouselGallery.classList.add('hidden-block');
}

function handleGalleryModalClose (){
    const blackout =  document.querySelector('.blackout-img');
    blackout.style.display = 'none';
    
    const photoWrapper =  document.querySelector('.photo-wrapper');
    photoWrapper.style.display = 'none';

    const carouselGallery = document.querySelector('#carouselExampleControls');
    carouselGallery.classList.remove('hidden-block');
}

function handleContactModalClick (isCentralPark){
    console.log('Chegou no parametro: ', isCentralPark);
    centralParkMail = isCentralPark;
    const blackout =  document.querySelector('.blackout-img');
    blackout.style.display = 'block';

    const contactWrapper =  document.querySelector('.contact-wrapper');
    contactWrapper.style.display = 'flex';
}

function handleContactModalClose (){
    const blackout =  document.querySelector('.blackout-img');
    blackout.style.display = 'none';
    
    const contactWrapper =  document.querySelector('.contact-wrapper');
    contactWrapper.style.display = 'none';
}

function sendEmail() {
    const customerMail = document.getElementById('email').value;
    const customerPhone = document.getElementById('phone').value;
    const customerName = document.getElementById('name').value;
    const customerMessage = document.getElementById('message').value;

    if(!customerMail || !customerName || !customerMessage) return;

    const toMail = (centralParkMail) ? 'tinho1990@gmail.com' : 'rodrigo.gemini3@gmail.com';
    console.log(toMail);
	Email.send({
        Host: "",
        Username : "",
        Password : "",
        To : toMail,
        From : "",
        Subject : "Contato via Site Central Park Plaza Shopping",
        Body : `Olá, um novo contato foi gerado a partir do site Central Park Plaza Shopping \n
        Nome: ${customerName} \n
        E-mail: ${customerMail} \n
        Telefone: ${customerPhone} \n
        Mensagem: ${customerMessage} \n
        \n
        *Essa mensagem é automática, favor não responder.`,
	}).then(
		message => alert("Sua mensagem foi enviada com sucesso.")
	);
}