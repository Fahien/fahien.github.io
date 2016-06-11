---
layout: rete
title: Appunti di Rete&#58; Dispositivi di connessione
category: Informatics
tags: architettura di rete, bridge, dispositivi di connessione, gateway, hub, ripetitore, router, switch
image: binary-world.jpg
---
Per connettere più reti fra loro, vengono usati dei [dispositivi di connessione](https://en.wikipedia.org/wiki/Network_switch) che possono operare in vari strati dell'[architettura di rete](https://en.wikipedia.org/wiki/Internet_layer):

*   **sotto lo strato fisico**: hub passivi;
*   **nello strato fisico**: ripetitori e hub attivi;
*   **nello strato fisico e di collegamento**: bridge;
*   **nello strato fisico, di collegamento e di rete**: router;
*   **in tutti gli strati**: gateway.

**Hub passivi**: si tratta di semplici **connettori** tra cavi. Non amplificano il segnale e non necessitano di alimentazione.

**Ripetitori e Hub attivi**: un segnale che viaggia all'interno di un cavo subisce un'attenuazione nel tempo che mette a rischio l'integrità dei dati. I ripetitori ricevono il segnale prima che si deteriori, lo **rigenerano** e lo inoltrano. Gli hub attivi sono semplicemente ripetitori a più porte, utili in una [topologia a stella](https://en.wikipedia.org/wiki/Star_network).

**Bridge**: un bridge, oltre ad avere le stesse capacità di un ripetitore, può controllare gli indirizzi della sorgente e della destinazione contenuti in un frame e decidere su quale porta inoltrarlo attraverso una [tabella di inoltro](https://en.wikipedia.org/wiki/Forwarding_information_base). In un [bridge trasparente](http://docwiki.cisco.com/wiki/Transparent_Bridging), la tabella di inoltro è costruita automaticamente in base al traffico sulla rete.

**Router**: un [router](https://en.wikipedia.org/wiki/Router_%28computing%29), operando nello strato di rete, può inoltrare i pacchetti in base agli indirizzi logici. Vengono utilizzati normalmente per connettere reti LAN o WAN alla rete Internet.

**Gateway**: un [gateway](https://en.wikipedia.org/wiki/Gateway_%28telecommunications%29) è in grado di leggere e interpretare messaggi da applicazioni, perciò può essere utilizzato per connettere due reti che utilizzano modelli diversi.
