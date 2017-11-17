# SPID - Sistema Pubblico di Identità Digitale

## Aggiornamento IDP Namirial ID / SPIDItalia Register.it

#### Versione GET
##### Aggiungere all'elenco IDP dentro il tag <ul id="spid-idp-list-small-root-get"...
```
<li class="spid-idp-button-link" data-idp="namirialid">
    <a href="#">
    	<span class="spid-sr-only">Namirial ID</span>
    	<img src="img/spid-idp-namirialid.svg" onerror="this.src='img/spid-idp-namirialid.png'; this.onerror=null;" alt="Namirial ID" />
    </a>
</li>
<li class="spid-idp-button-link" data-idp="spiditalia">
    <a href="#">
    	<span class="spid-sr-only">SPIDItalia Register.it</span>
    	<img src="img/spid-idp-spiditalia.svg" onerror="this.src='img/spid-idp-spiditalia.png'; this.onerror=null;" alt="SpidItalia" />
    </a>
</li>
```

#### Versione POST
##### Aggiungere all'elenco IDP dentro il tag <ul id="spid-idp-list-medium-root-post"...
```
<li class="spid-idp-button-link" data-idp="namirialid">
    <button class="idp-button-idp-logo" name="namirial_id" type="submit">
    	<span class="spid-sr-only">Namirial ID</span>
    	<img class="spid-idp-button-logo" src="img/spid-idp-namirialid.svg" onerror="this.src='img/spid-idp-namirialid.png'; this.onerror=null;" alt="Namirial ID" />
    </button>
</li>
<li class="spid-idp-button-link" data-idp="spiditalia">
    <button class="idp-button-idp-logo" name="spiditalia" type="submit">
    	<span class="spid-sr-only">SPIDItalia Register.it</span>
    	<img class="spid-idp-button-logo" src="img/spid-idp-spiditalia.svg" onerror="this.src='img/spid-idp-spiditalia.png'; this.onerror=null;" alt="SpidItalia" />
    </button>
</li>
```

#### Download immagini Namirial ID e SPIDItalia Register.it
```
https://github.com/italia-it/spid-sp-access-button/blob/master/src/production/img/spid-idp-namirialid.svg
https://github.com/italia-it/spid-sp-access-button/blob/master/src/production/img/spid-idp-namirialid.png
https://github.com/italia-it/spid-sp-access-button/blob/master/src/production/img/spid-idp-spiditalia.svg
https://github.com/italia-it/spid-sp-access-button/blob/master/src/production/img/spid-idp-spiditalia.png
```
