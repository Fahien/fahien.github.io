---
layout: rete
title: Appunti di Rete&#58; Risoluzione degli indirizzi
category: Informatics
tags: arp, bootp, dhcp, rarp, risoluzione degli indirizzi
image: binary-world.jpg
---
È possibile ottenere l'indirizzo logico che corrisponde ad un indirizzo fisico e viceversa, attraverso i protocolli per la risoluzione degli indirizzi.

## Address Resolution Protocol

L'[Address Resolution Protocol](https://en.wikipedia.org/wiki/Address_Resolution_Protocol) (ARP) permette ad un nodo di scoprire l'indirizzo fisico associato ad un particolare indirizzo logico. Tali richieste vengono inviate in **broadcast**, mentre la risposta in unicast dall'unico nodo che corrisponde all'indirizzo logico.

## Reverse Address Resolution Protocol

Il [Reverse Address Resolution Protocol](https://en.wikipedia.org/wiki/Reverse_Address_Resolution_Protocol) (RARP) permette ad un nodo che conosce il proprio indirizzo fisico di trovare il proprio indirizzo logico. Tale protocollo è **obsoleto** ed è sostituito da BOOTP e DHCP.

## Bootstrap Protocol

Il [Bootstrap Protocol](https://en.wikipedia.org/wiki/Bootstrap_Protocol) (BOOTP) funziona nello strato delle applicazioni e si basa su un nodo della rete locale chiamato **relay agent** che conosce l'indirizzo IP del server BOOTP. Non è dinamico, poiché per le associazioni tra gli indirizzi si basano su tabelle statiche gestite manualmente dall'amministratore.

## Dynamic Host Configuration Protocol

Il [Dynamic Host Configuration Protocol](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) (DHCP) permette l'allocazione **sia statica che dinamica** degli indirizzi IP ed è compatibile con BOOTP. Un server che utilizza questo protocollo ha un database per la memorizzazioni delle associazioni statiche tra indirizzi fisici e logici e un database che contiene indirizzi logici che possono essere assegnati dinamicamente.
