---
layout: rete
title: Appunti di Rete&#58; Ethernet
category: Informatics
tags: ethernet, ieee 802
image: binary-world.jpg
---
La tecnologia [Ethernet](https://en.wikipedia.org/wiki/Ethernet) è utilizzata dalla stragrande maggioranza delle reti LAN. Lo **standard IEEE 802** definisce per le reti Ethernet un solo sottostrato MAC e varie specifiche per lo strato fisico a seconda dell'implementazione.

## Frame Ethernet

Un frame Ethernet è suddiviso in sette campi:

*   **Preambolo**: 7 byte, alternanza di `0` e `1`;
*   **Delimitatore**: 1 byte, `10101011`;
*   **Indirizzo destinatione**: 6 byte, indirizzo ethernet;
*   **Indirizzo mittente**: 6 byte, indirizzo ethernet;
*   **Lunghezza o tipo**: 2 byte, specifica la lunghezza o il tipo dei dati trasportati;
*   **Dati**: provenienti dal protocollo superiore, da minimo 46, per un corretto funzionamento del metodo [CSMA/CD](https://en.wikipedia.org/wiki/Carrier_sense_multiple_access_with_collision_detection), a 1500 byte;
*   **CRC**: codice a ridondanza ciclica per il rilevamento degli errori.

## Indirizzi Ethernet

Tutte le interfacce di rete Ethernet hanno un indirizzo codificato nell'hardware di 6 byte, ovvero 12 cifre esadecimali (`06:01:4B:01:02:2C`). Se il bit meno significativo del primo byte vale `1` allora si tratta di un indirizzo di **gruppo** (`01:01:4B:06:02:2C`). L'indirizzo di **broadcast** è formato da tutti `1` (`FF:FF:FF:FF:FF:FF`).
