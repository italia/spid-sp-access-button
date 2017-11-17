# SPID - Sistema Pubblico di Identità Digitale


## Aggiornamento IDP Aruba ID

#### Versione GET
##### Aggiungere all'elenco IDP dentro il tag <ul id="spid-idp-list-small-root-get"...
```
<li class="spid-idp-button-link" data-idp="arubaid">
    <a href="#">
    	<span class="spid-sr-only">Aruba ID</span>
    	<img src="img/spid-idp-arubaid.svg" onerror="this.src='img/spid-idp-arubaid.png'; this.onerror=null;" alt="Aruba ID" />
    </a>
</li>
```

#### Versione POST
##### Aggiungere all'elenco IDP dentro il tag <ul id="spid-idp-list-medium-root-post"...
```
<li class="spid-idp-button-link" data-idp="arubaid">
    <button class="idp-button-idp-logo" name="aruba_id" type="submit">
    	<span class="spid-sr-only">Aruba ID</span>
    	<img class="spid-idp-button-logo" src="img/spid-idp-arubaid.svg" onerror="this.src='img/spid-idp-arubaid.png'; this.onerror=null;" alt="Aruba ID" />
    </button>
</li>
```

#### Download immagini Aruba ID
```
https://github.com/italia-it/spid-sp-access-button/blob/master/src/production/img/spid-idp-arubaid.svg
https://github.com/italia-it/spid-sp-access-button/blob/master/src/production/img/spid-idp-arubaid.png
```


## Aggiunta di data-idp su ogni punto elenco

#### Versione GET e POST

Aruba ID:
```
<li class="spid-idp-button-link" data-idp="arubaid">
```
Infocert ID:
```
<li class="spid-idp-button-link" data-idp="infocertid">
```
Poste ID:
```
<li class="spid-idp-button-link" data-idp="posteid">
```
Sielte ID:
```
<li class="spid-idp-button-link" data-idp="sielteid">
```
Tim ID:
```
<li class="spid-idp-button-link" data-idp="timid">
```


## Aggiornamento link

#### Versione GET e POST
##### Modifica dei link per informazioni e supporto

```
<li class="spid-idp-support-link" data-spidlink="info">
    <a href="https://www.spid.gov.it">Maggiori informazioni</a>
</li>
<li class="spid-idp-support-link" data-spidlink="rich">
    <a href="https://www.spid.gov.it/richiedi-spid">Non hai SPID?</a>
</li>
<li class="spid-idp-support-link" data-spidlink="help">
    <a href="https://www.spid.gov.it/serve-aiuto">Serve aiuto?</a>
</li>
```
