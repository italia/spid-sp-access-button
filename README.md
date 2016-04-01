# SPID - Sistema Pubblico di Identità Digitale
## Repository componenti

Per gestire l’accesso ai servizi pubblici e privati che utilizzano il sistema SPID, si rende necessario, sia per una questione di user experience che di immagine del sistema, la standardizzazione delle interfacce, della comunicazione e dell’utilizzo del logo SPID.

## SPID SP Button
Il bottone è disponibile in 4 dimensioni (s / m / l / xl) ed in formato “get” (chiamata ad una pagina esterna con variabile) e “post” (form interna al pulsante). I diversi IDP sono mostrati in ordine random attraverso una piccola funzione javascript che potrebbe essere sostituita attraverso una procedura di randomizzazione lato server. 
La pagina di accesso dovrà essere “mobile first” e utilizzabile su ogni tipologia di dispositivo.

Il sistema richiede richiede Jquery 1.8+ e contiene parti di codice di jQuery Bootstrap-style Dropdowns (https://github.com/claviska/jquery-dropdown).