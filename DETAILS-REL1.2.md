# SPID - Sistema Pubblico di Identità Digitale


## Aggiornamento IDP Sielte ID

#### Versione GET
##### Aggiungere all'elenco IDP dentro il tag <ul id="spid-idp-list-small-root-get"...
```
<li class="spid-idp-button-link">
    <a href="#">
    	<span class="spid-sr-only">Sielte ID</span>
    	<img src="img/spid-idp-sielteid.svg" onerror="this.src='img/spid-idp-sielteid.png'; this.onerror=null;" alt="Sielte ID" />
    </a>
</li>
```

#### Versione POST
##### Aggiungere all'elenco IDP dentro il tag <ul id="spid-idp-list-medium-root-post"...
```
<li class="spid-idp-button-link">
    <button class="idp-button-idp-logo" name="sielte_id" type="submit">
    	<span class="spid-sr-only">Sielte ID</span>
    	<img class="spid-idp-button-logo" src="img/spid-idp-sielteid.svg" onerror="this.src='img/spid-idp-sielteid.png'; this.onerror=null;" alt="Sielte ID" />
    </button>
</li>
```

#### Download immagini Sielte ID
```
https://github.com/italia-it/spid-sp-access-button/blob/master/src/production/img/spid-idp-sielteid.svg
https://github.com/italia-it/spid-sp-access-button/blob/master/src/production/img/spid-idp-sielteid.png
```


## Aggiornamento link

#### Versione GET e POST
##### Modifica del collegamento a "Non hai SPID?"

```
<li class="spid-idp-support-link">
    <a href="http://www.spid.gov.it/richiedi-spid">Non hai SPID?</a>
</li>
```
