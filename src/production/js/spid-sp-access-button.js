/*

Questo file è un de-offuscamento / de-minificazione del file
spid-sp-access-button.min.js. Non si tratta del file originale ma di un lavoro
di reverse engineering, il cui obiettivo è comprendere cosa faccia questo
codice (non volete certo inserire del codice nelle vostre applicazioni senza
averlo prima letto, no?).

Per poter arrivare allo stesso risultato potete usare CyberChef con la funzione
"JavaScript beautify" e successivamente cercare il senso delle varie lettere.

*/

jQuery && function (jQuery) {
    // Mostra il popup al click (evt è l'evento) oppure tramite chiamata
    // manuale (in questo caso evt è NULL ed il secondo parametro è il
    // bottone)
    // Funzione minificata: i(i, n)
    function show(evt, objButtonParam) {
        var objButton = evt ? jQuery(this) : objButtonParam;
        var spidButton = jQuery(objButton.attr('spid-idp-button'));
        var spidButtonIsOpen = objButton.hasClass('spid-idp-button-open');
        if (evt) {
            if (jQuery(evt.target).hasClass('spid-idp-button-ignore'))
                return;
            evt.preventDefault(), evt.stopPropagation();
        } else if (objButton !== objButtonParam.target && jQuery(objButtonParam.target).hasClass('spid-idp-button-ignore'))
            return;
        hide(), spidButtonIsOpen || objButton.hasClass('spid-idp-button-disabled') || (objButton.addClass('spid-idp-button-open'), spidButton.data('spid-idp-button-trigger', objButton).show(), redraw(), spidButton.trigger('show', {
            spidIDPButton: spidButton,
            trigger: objButton
        }));
    }

    // Nasconde il popup. Funzione minificata: s(i)
    function hide(objButtonParam) {
        var objButton = objButtonParam ? jQuery(objButtonParam.target).parents().addBack() : null;
        if (objButton && objButton.is('.spid-idp-button')) {
            if (!objButton.is('.spid-idp-button-menu'))
                return;
            if (!objButton.is('A'))
                return;
        }
        jQuery(document).find('.spid-idp-button:visible').each(function () {
            var spidButton = jQuery(this);
            spidButton.hide().removeData('spid-idp-button-trigger').trigger('hide', { spidIDPButton: spidButton });
        }), jQuery(document).find('.spid-idp-button-open').removeClass('spid-idp-button-open');
    }

    // Ridisegna il CSS del popup adattandolo. Funzione minificata: e()
    function redraw() {
        var spidButton = jQuery('.spid-idp-button:visible').eq(0);
        var spidTrigger = spidButton.data('spid-idp-button-trigger');
        var xoffset = spidTrigger ? parseInt(spidTrigger.attr('data-horizontal-offset') || 0, 10) : null;
        var yoffset = spidTrigger ? parseInt(spidTrigger.attr('data-vertical-offset') || 0, 10) : null;

        if (0 !== spidButton.length && spidTrigger) {
            if (spidButton.hasClass('spid-idp-button-relative')) {
                spidButton.css({
                    left: spidButton.hasClass('spid-idp-button-anchor-right') ? spidTrigger.position().left - (spidButton.outerWidth(!0) - spidTrigger.outerWidth(!0)) - parseInt(spidTrigger.css('margin-right'), 10) + xoffset : spidTrigger.position().left + parseInt(spidTrigger.css('margin-left'), 10) + xoffset,
                    top: spidTrigger.position().top + spidTrigger.outerHeight(!0) - parseInt(spidTrigger.css('margin-top'), 10) + yoffset
                });
            } else {
                spidButton.css({
                    left: spidButton.hasClass('spid-idp-button-anchor-right') ? spidTrigger.offset().left - (spidButton.outerWidth() - spidTrigger.outerWidth()) + xoffset : spidTrigger.offset().left + xoffset,
                    top: spidTrigger.offset().top + spidTrigger.outerHeight() + yoffset
                });
            }
        }
    }
    jQuery.extend(jQuery.fn, {
        spidIDPButton: function (action, n) {
            switch (action) {
            case 'show':
                return show(null, jQuery(this)), jQuery(this);
            case 'hide':
                return hide(), jQuery(this);
            case 'attach':
                return jQuery(this).attr('spid-idp-button', n);
            case 'detach':
                return hide(), jQuery(this).removeAttr('spid-idp-button');
            case 'disable':
                return jQuery(this).addClass('spid-idp-button-disabled');
            case 'enable':
                return hide(), jQuery(this).removeClass('spid-idp-button-disabled');
            }
        }
    }), jQuery(document).on('click.spid-idp-button', '[spid-idp-button]', show), jQuery(document).on('click.spid-idp-button', hide), jQuery(window).on('resize', redraw);
}(jQuery);