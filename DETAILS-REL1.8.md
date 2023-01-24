# SPID - Sistema Pubblico di Identità Digitale

## Aggiornamento - creazione lista dinamica degli IDP

#### Aggiornamento della pagna HTML di esempio

Rimozione dello scipt di ordinamento
Rimozione delle lista statica degli IDP ed aggiunta dei bottoni con placeholder per lista dinamica

es. versione GET
```
    <a href="#" class="italia-it-button italia-it-button-size-m button-spid" spid-idp-button="#spid-idp-button-medium-get" aria-haspopup="true" aria-expanded="false">
        <span class="italia-it-button-icon"><img src="img/spid-ico-circle-bb.svg" onerror="this.src='img/spid-ico-circle-bb.png'; this.onerror=null;" alt="" /></span>
        <span class="italia-it-button-text">Entra con SPID</span>
    </a>
    <div id="spid-idp-button-medium-get" class="spid-idp-button spid-idp-button-tip spid-idp-button-relative">
        <ul id="spid-idp-list-medium-root-get" class="spid-idp-button-menu" data-spid-remote aria-labelledby="spid-idp">
            <li><a class="dropdown-item" href="https://www.spid.gov.it">Maggiori informazioni</a></li>
            <li><a class="dropdown-item" href="https://www.spid.gov.it/richiedi-spid">Non hai SPID?</a></li>
            <li><a class="dropdown-item" href="https://www.spid.gov.it/serve-aiuto">Serve aiuto?</a></li>
        </ul>
    </div>
```


es. versione POST
```
    <form name="spid_idp_access" action="#" method="post">
        <input type="hidden" name="param_001" value="" />
        <input type="hidden" name="param_002" value="" />
        <input type="hidden" name="param_003" value="" />
        <a href="#" class="italia-it-button italia-it-button-size-m button-spid" spid-idp-button="#spid-idp-button-medium-post" aria-haspopup="true" aria-expanded="false">
            <span class="italia-it-button-icon"><img src="img/spid-ico-circle-bb.svg" onerror="this.src='img/spid-ico-circle-bb.png'; this.onerror=null;" alt="" /></span>
            <span class="italia-it-button-text">Entra con SPID</span>
        </a>
        <div id="spid-idp-button-medium-post" class="spid-idp-button spid-idp-button-tip spid-idp-button-relative">
            <ul id="spid-idp-list-medium-root-post" class="spid-idp-button-menu"  data-spid-remote aria-labelledby="spid-idp">
            </ul>
                <li><a class="dropdown-item" href="https://www.spid.gov.it">Maggiori informazioni</a></li>
                <li><a class="dropdown-item" href="https://www.spid.gov.it/richiedi-spid">Non hai SPID?</a></li>
                <li><a class="dropdown-item" href="https://www.spid.gov.it/serve-aiuto">Serve aiuto?</a></li>
            </div>
    </form>
```

#### Aggiunta dello script spid-idps.js

Aggiunto lo script che crea l'elemento <li> dinamicamente leggendo un file JSON da una URL oppure da una lista pre-impostata in caso di problemi nel dowload del JSON.




#### Crediti

Il sistema di importazione degli IDPS è ripreso dal progetto [Satosa-Saml2SPID](https://github.com/italia/Satosa-Saml2Spid/)

