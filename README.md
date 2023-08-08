# SPID - Sistema Pubblico di Identità Digitale

## Componenti
Per gestire l’accesso ai servizi pubblici e privati che utilizzano il sistema SPID, si rende necessario, sia per una questione di user experience che di immagine del sistema, la standardizzazione delle interfacce, della comunicazione e dell’utilizzo del logo SPID.


## SPID Sp Access Button
Il pulsante è disponibile in 4 dimensioni (s / m / l / xl) ed in formato “get” (chiamata ad una pagina esterna) e “post” (form interna al pulsante). 

La lista degli IDP è collezionata da una sorgente remota (Registry AgID https://registry.spid.gov.it/entities-idp) e i diversi IDP sono mostrati in ordine random attraverso una funzione javascript.

La pagina di accesso dovrà essere "mobile first" e utilizzabile su ogni tipologia di dispositivo.

Nel progetto è disponibile una pagina di esempio (src/spid-sp-access-button.html)

Il sistema richiede Jquery 1.8+.


## Aggiornamenti

### v1.11 (03/07/2023) - [Accedi ai dettagli delle modifiche](DETAILS-REL1.11.md)
- Aggiunto Intesi Group

### v1.10 (30/05/2023) - [Accedi ai dettagli delle modifiche](DETAILS-REL1.10.md)
- Aggiornato logo Infocert

### v1.9 (17/02/2023) - [Accedi ai dettagli delle modifiche](DETAILS-REL1.9.md)
- Aggiornato logo Etna

### v1.8 (26/01/2023) - [Accedi ai dettagli delle modifiche](DETAILS-REL1.8.md)
- Rimossa struttura directory obsoleta "development"
- Creazione dinamica lista IDP 

### v1.7 (15/07/2022) - [Accedi ai dettagli delle modifiche](DETAILS-REL1.7.md)
- Aggiunto TeamSystem ID
- Aggiunto pulsante SPID da utilizzare in produzione e quello da utilizzare in sviluppo

### v1.6 (19/11/2017) - [Accedi ai dettagli delle modifiche](DETAILS-REL1.6.md)
- Aggiunto Lepida ID
- Aggiunto pulsante SPID da utilizzare in produzione e quello da utilizzare in sviluppo

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
- [Identity Provider Accreditati](https://www.agid.gov.it/it/piattaforme/spid/identity-provider-accreditati)
- [IDP SPID (in formato XML)](https://registry.spid.gov.it/entities?entity_type=idp)
- [IDP SPID (in formato JSON)](https://registry.spid.gov.it/entities-idp?&output=json)

### Metadata singoli IDP SPID
- [Aruba ID](https://loginspid.aruba.it/metadata)
- [Infocert ID](https://identity.infocert.it/metadata/metadata.xml)
- [Intesa ID](https://spid.intesa.it/metadata/metadata.xml) - [cessato il 23/04/2023](https://www.agid.gov.it/it/piattaforme/soggetti-accreditati/intesa-spa-cessato-il-23042023)
- [Lepida ID](https://id.lepida.it/idp/shibboleth)
- [Namirial ID](https://idp.namirialtsp.com/idp/metadata)
- [Poste ID](http://posteid.poste.it/jod-fs/metadata/metadata.xml)
- [Sielte ID](https://identity.sieltecloud.it/simplesaml/metadata.xml)
- [SPIDItalia Register.it](https://spid.register.it/login/metadata)
- [TeamSystem ID](https://spid.teamsystem.com/idp)
- [Tim ID](https://login.id.tim.it/spid-services/MetadataBrowser/idp)
- [Etna ID](https://id.eht.eu/metadata.xml)
- [InfoCamere ID](https://loginspid.infocamere.it/metadata)
- [Intesi ID](https://spid.intesigroup.com/metadata/metadata.xml)
