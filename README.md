# SPID - Sistema Pubblico di Identità Digitale
## Repository componenti

Per gestire l’accesso ai servizi pubblici e privati che utilizzano il sistema SPID, si rende necessario, sia per una questione di user experience che di immagine del sistema, la standardizzazione delle interfacce, della comunicazione e dell’utilizzo del logo SPID.

## SPID SP ACCESS BUTTON
Il bottone è disponibile in 4 dimensioni (s / m / l / xl) ed in formato “get” (chiamata ad una pagina esterna con variabile) e “post” (form interna al pulsante). I diversi IDP sono mostrati in ordine random attraverso una piccola funzione javascript che potrebbe essere sostituita attraverso una procedura di randomizzazione lato server. 
La pagina di accesso dovrà essere “mobile first” e utilizzabile su ogni tipologia di dispositivo.

Il sistema richiede Jquery 1.8+.

## Aggiornamento IDP Sielte ID

#### SPID SP BUTTON: VERSIONE GET
##### Aggiungere all'elenco IDP dentro <ul id="spid-idp-list-small-root-get"...
```
<li class="spid-idp-button-link">
    <a href="#"><span class="spid-sr-only">Sielte ID</span><img src="img/spid-idp-sielteid.svg" onerror="this.src='img/spid-idp-sielteid.png'; this.onerror=null;" alt="Sielte ID" /></a>
</li>
```

#### SPID SP BUTTON: VERSIONE POST
##### Aggiungere all'elenco IDP dentro <ul id="spid-idp-list-medium-root-post"...
```
<li class="spid-idp-button-link">
    <button class="idp-button-idp-logo" name="sielte_id" type="submit"><span class="spid-sr-only">Sielte ID</span><img class="spid-idp-button-logo" src="img/spid-idp-sielteid.svg" onerror="this.src='img/spid-idp-sielteid.png'; this.onerror=null;" alt="Sielte ID" /></button>
</li>
```

## Aggiornamento link
#### SPID SP BUTTON: TUTTE LE VERSIONI
##### Modificare il collegamento a "Non hai SPID?"
```
<li class="spid-idp-support-link">
    <a href="http://www.spid.gov.it/richiedi-spid">Non hai SPID?</a>
</li>
```

## Download immagini Sielte ID
```
https://github.com/italia-it/spid-sp-access-button/blob/master/img/spid-idp-sielteid.svg
https://github.com/italia-it/spid-sp-access-button/blob/master/img/spid-idp-sielteid.svg
```
