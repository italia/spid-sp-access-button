# SPID - Sistema Pubblico di Identità Digitale

## Aggiornamento IDP Lepida ID

#### Versione GET
##### Aggiungere all'elenco IDP dentro il tag <ul id="spid-idp-list-small-root-get"...
```
<li class="spid-idp-button-link" data-idp="lepidaid">
	<a href="#"><span class="spid-sr-only">Lepida ID</span><img src="img/spid-idp-lepidaid.svg" onerror="this.src='img/spid-idp-lepidaid.png'; this.onerror=null;" alt="Lepida ID" /></a>
</li>
```

#### Versione POST
##### Aggiungere all'elenco IDP dentro il tag <ul id="spid-idp-list-medium-root-post"...
```
<li class="spid-idp-button-link" data-idp="lepidaid">
	<button class="idp-button-idp-logo" name="lepida_id" type="submit"><span class="spid-sr-only">Lepida ID</span><img class="spid-idp-button-logo" src="img/spid-idp-lepidaid.svg" onerror="this.src='img/spid-idp-lepidaid.png'; this.onerror=null;" alt="Lepida ID" /></button>
</li>
```

#### Download immagini Lepida ID
```
https://github.com/italia-it/spid-sp-access-button/blob/master/src/production/img/spid-idp-lepidaid.svg
https://github.com/italia-it/spid-sp-access-button/blob/master/src/production/img/spid-idp-lepidaid.png
```
