---
layout: rete
title: Appunti di Rete&#58; Commutazione
category: Informatics
tags: commutazione, commutazione di circuito, commutazione di pacchetto, switching
image: binary-world.jpg
---
La commutazione, o **switching**, è un metodo conveniente per la connessione dei nodi in reti molto grandi, nel quale vengono usati dei nodi speciali, chiamati _switch_, connessi tra di loro, in grado di creare connessioni tra due o più stazioni connesse agli switch. Le reti a commutazioni si dividono in tre categorie: [commutazione di circuito](https://en.wikipedia.org/wiki/Circuit_switching), [commutazione di pacchetto](https://en.wikipedia.org/wiki/Packet_switching) e [commutazione di messaggio](https://en.wikipedia.org/wiki/Message_switching).

## Reti a commutazione di circuito

Una rete a commutazione di circuito consiste di un insieme di switch connessi tra loro tramite collegamenti divisi in più canali grazie al [multiplexing](https://en.wikipedia.org/wiki/Multiplexing). La comunicazione tra due stazioni richiede tre fasi:

*   **Instaurazione della connessione**, in cui viene individuato un _cammino_ sui collegamenti tra gli switch e per ogni collegamento viene riservato un canale.
*   **Trasferimento dati**, in cui l'insieme di canali dedicati alla connessione restano ad essa dedicate e indisponibili per altre connessioni;
*   **Chiusura della connessione**, in cui una stazione invia un segnale particolare a tutti gli switch coinvolti per liberare le risorse occupate.

L'utilizzo della commutazione di circuito in una rete di computer non è il massimo in termini di **efficienza**: potremmo avere lunghi periodi di inattività in cui non c'è trasferimento di dati, ovvero spreco delle risorse dedicate alla connessione. Tuttavia, il **ritardo** è minimo: poiché il cammino è dedicato in fase di instaurazione della connessione, i dati scorrono senza fermarsi ad ogni switch.

## Reti a commutazione di pacchetto

In una rete del genere, i dati devono essere divisi in pacchetti gestiti indipendentemente tra loro, chiamati **datagram**, di grandezza variabile o fissa a seconda del protocollo utilizzato. Gli switch in una rete a datagram sono anche chiamati **router**. Un messaggio può essere suddiviso in più datagram che possono viaggiare su cammini differenti e raggiungere la destinazione in ordine diverso da quello di spedizione o perdersi o essere eliminati per mancanza di risorse nella rete. Le reti a datagram sono **senza connessione**, ovvero gli switch non mantengono informazioni riguardo lo stato della connessione. Non esiste fase di instaurazione né di chiusura della connessione. Per sapere come instradare i datagram, gli switch mantengono delle [tavole di routing](https://en.wikipedia.org/wiki/Routing_table) dinamiche e aggiornate periodicamente. In termini di **efficienza** sono migliori delle reti a commutazione di circuito: le risorse vengono allogate solo quando ci sono pacchetti da trasferire. Il **ritardo** invece può essere maggiore: ogni pacchetto potrebbe seguire dei cammini più lunghi o dover aspettare negli switch prima di essere inoltrato.
