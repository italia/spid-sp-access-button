# SPID - Sistema Pubblico di Identità Digitale

## Aggiornamento IDP Intesa ID

#### Versione GET
##### Aggiungere all'elenco IDP dentro il tag <ul id="spid-idp-list-small-root-get"...
```
<li class="spid-idp-button-link" data-idp="intesaid">
    <a href="#">
    	<span class="spid-sr-only">Intesa ID</span>
    	<img src="img/spid-idp-intesaid.svg" onerror="this.src='img/spid-idp-intesaid.png'; this.onerror=null;" alt="Intesa ID" />
    </a>
</li>
```

#### Versione POST
##### Aggiungere all'elenco IDP dentro il tag <ul id="spid-idp-list-medium-root-post"...
```
<li class="spid-idp-button-link" data-idp="intesaid">
    <button class="idp-button-idp-logo" name="intesa_id" type="submit">
    	<span class="spid-sr-only">Intesa ID</span>
    	<img class="spid-idp-button-logo" src="img/spid-idp-intesaid.svg" onerror="this.src='img/spid-idp-intesaid.png'; this.onerror=null;" alt="Intesa ID" />
    </button>
</li>
```

#### Download immagini Intesa ID
```
https://github.com/italia-it/spid-sp-access-button/blob/master/src/production/img/spid-idp-intesaid.svg
https://github.com/italia-it/spid-sp-access-button/blob/master/src/production/img/spid-idp-intesaid.png
```
