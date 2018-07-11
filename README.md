# SPID - Sistema Pubblico di Identità Digitale

## SPID Smart Button è in fase di sviluppo e a breve sostituirà lo SPID SP Access Button

## Componenti
Per gestire l’accesso ai servizi pubblici e privati che utilizzano il sistema SPID, si rende necessario, sia per una questione di user experience che di immagine del sistema, la standardizzazione delle interfacce, della comunicazione e dell’utilizzo del logo SPID.


## SPID Sp Access Button
Il pulsante è disponibile in 4 dimensioni (s / m / l / xl) ed in formato “get” (chiamata ad una pagina esterna) e “post” (form interna al pulsante). I diversi IDP sono mostrati in ordine random attraverso una piccola funzione javascript che potrebbe essere sostituita attraverso una procedura di randomizzazione lato server.
La pagina di accesso dovrà essere "mobile first" e utilizzabile su ogni tipologia di dispositivo.

Il pulsante è disponibile nella versione da utilizzare in produzione (production) e nella versione da utilizzare in sviluppo (development).

Il sistema richiede Jquery 1.8+.


## Struttura del file system
```
spid-sp-access-button/
│
├── src/
│   ├── development
│   │   ├── spid-sp-access-button.html
│   │   ├── css
│   │   │   ├── spid-sp-access-button.min.css
│   │   ├── img
│   │   │   ├── spid-ico-circle-bb.png
│   │   │   ├── spid-ico-circle-bb.svg
│   │   │   ├── spid-idp-arubaid.png
│   │   │   ├── spid-idp-arubaid.svg
│   │   │   ├── spid-idp-infocertid.png
│   │   │   ├── spid-idp-infocertid.svg
│   │   │   ├── spid-idp-intesaid.png
│   │   │   ├── spid-idp-intesaid.svg
│   │   │   ├── spid-idp-namirialid.png
│   │   │   ├── spid-idp-namirialid.svg
│   │   │   ├── spid-idp-posteid.png
│   │   │   ├── spid-idp-posteid.svg
│   │   │   ├── spid-idp-sielteid.png
│   │   │   ├── spid-idp-sielteid.svg
│   │   │   ├── spid-idp-spiditalia.png
│   │   │   ├── spid-idp-spiditalia.svg
│   │   │   ├── spid-idp-timid.png
│   │   │   ├── spid-idp-timid.svg
│   │   ├── js
│   │   │   ├── jquery.min.js
│   │   │   ├── spid-sp-access-button.min.js
│   ├── development
│   │   ├── spid-sp-access-button.html
│   │   ├── css
│   │   │   ├── spid-sp-access-button.min.css
│   │   ├── img
│   │   │   ├── spid-ico-circle-bb.png
│   │   │   ├── spid-ico-circle-bb.svg
│   │   │   ├── spid-idp-arubaid.png
│   │   │   ├── spid-idp-arubaid.svg
│   │   │   ├── spid-idp-infocertid.png
│   │   │   ├── spid-idp-infocertid.svg
│   │   │   ├── spid-idp-intesaid.png
│   │   │   ├── spid-idp-intesaid.svg
│   │   │   ├── spid-idp-namirialid.png
│   │   │   ├── spid-idp-namirialid.svg
│   │   │   ├── spid-idp-posteid.png
│   │   │   ├── spid-idp-posteid.svg
│   │   │   ├── spid-idp-sielteid.png
│   │   │   ├── spid-idp-sielteid.svg
│   │   │   ├── spid-idp-spiditalia.png
│   │   │   ├── spid-idp-spiditalia.svg
│   │   │   ├── spid-idp-timid.png
│   │   │   ├── spid-idp-timid.svg
│   │   ├── js
│   │   │   ├── jquery.min.js
│   │   │   ├── spid-sp-access-button.min.js
```

## Aggiornamenti

### v1.5 (17/11/2017) - [Accedi ai dettagli delle modifiche](DETAILS-REL1.5.md)
- Aggiunto Intesa ID
- Aggiunto pulsante SPID da utilizzare in produzione e quello da utilizzare in sviluppo

### v1.4 (26/06/2017) - [Accedi ai dettagli delle modifiche](DETAILS-REL1.4.md)
- Aggiunto Namirial ID
- Aggiunto SPIDItalia Register.it

### v1.3 (05/02/2017) - [Accedi ai dettagli delle modifiche](DETAILS-REL1.3.md)
- Aggiunto ARUBA ID
- Aggiunta data-idp su punti elenco
- Modifica link per informazioni e supporto

### v1.2 (19/09/2016) - [Accedi ai dettagli delle modifiche](DETAILS-REL1.2.md)
- Aggiunto SIELTE ID
- Correzione link su dropdown

### v1.1 (01/04/2016)
- Correzione css per compatibilità pulsante
- Modifica loghi POSTE ID e TIM ID

### v1.0 (01/04/2016)


## Metadata IDP SPID
### Metadata con tutti gli IDP SPID
- [IDP SPID](https://registry.spid.gov.it/metadata/idp/spid-entities-idps.xml)

### Metadata singoli IDP SPID
- [Aruba ID](https://loginspid.aruba.it/metadata)
- [Infocert ID](https://identity.infocert.it/metadata/metadata.xml)
- [Intesa ID](https://spid.intesa.it/metadata/metadata.xml)
- [Namirial ID](https://idp.namirialtsp.com/idp/metadata)
- [Poste ID](http://posteid.poste.it/jod-fs/metadata/metadata.xml)
- [Sielte ID](https://identity.sieltecloud.it/simplesaml/metadata.xml)
- [SPIDItalia Register.it](https://spid.register.it/login/metadata)
- [Tim ID](https://login.id.tim.it/spid-services/MetadataBrowser/idp)
