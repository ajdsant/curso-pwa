//#region service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(res => console.log('service worker cargado', res))
        .catch(err => console.log('service worker no cargado', err));
} else {
    console.log('No puedes usar el service worker')
}

//#endregion
//#region listeners
$(document).ready(function() {
    $('#menu a').click(function(e) {
        e.preventDefault();
        //scroll suavizado
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });
        return false;
    });
});
////#endregion