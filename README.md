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
Le modifiche al branch master del repository devono essere recepite automaticamente da tutti i service provider che hanno provveduto ad implementare la versione dinamica del bottone SPID (Rif. Avviso SPID n.42)


## Metadata IDP SPID
### Metadata con tutti gli IDP SPID
- [Identity Provider Accreditati](https://www.agid.gov.it/it/piattaforme/spid/identity-provider-accreditati)
- [IDP SPID (in formato XML)](https://registry.spid.gov.it/entities?entity_type=idp)
- [IDP SPID (in formato JSON)](https://registry.spid.gov.it/entities-idp?&output=json)
