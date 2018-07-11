---
layout: rete
title: Appunti di Rete&#58; Protocollo Internet
category: Informatics
tags: datagram, internet, ipv4, ipv6
image: binary-world.jpg
---
Internet è una rete a [datagram](https://en.wikipedia.org/wiki/Datagram) che opera la commutazione dei pacchetti nello strato di rete, utilizzando **indirizzi IP**. Offre un servizio di comunicazione senza connessione e consegna **best-effort**. Mentre lo strato di collegamento permette scambi di pacchetti tra due nodi, lo strato di rete permette scambi di pacchetti tra due **host**.

## IPv4

L'intestazione di un datagram IPv4 ha una lunghezza variabile ed è composta dai seguenti campi:

*   **Versione**: 4 bit, per cui vale `0100`.
*   **Lunghezza intestazione**: misurata in 4 byte, 4 bit. Vale `0101` quanto la lunghezza è di 20 byte in assenza di opzioni, vale `1111` quando la lunghezza è massima.
*   **Servizi**: 8 bit, nell'interpretazione iniziale i primi 3 bit rappresentano la priorità, i successivi 4 il tipo di servizio richiesto, mentre l'ultimo è inutilizzato. Quando i 3 bit più a destra non valgono zero, l'interpretazione diventa quella dei [servizi differenziati](https://en.wikipedia.org/wiki/Differentiated_services).
*   **Lunghezza totale**: 16 bit, misurata in byte, quindi la lunghezza massima è 2¹⁶-1 = 65535 byte. Questo campo è fondamentale quando il protocollo dello strato sottostante inserisce byte di padding in coda al datagram.
*   **Identificativo**: 16 bit, serve ad identificare univocamente il datagram e non viene modificato in caso di frammentazione.
*   **Flag**: 3 bit, il primo è riservato, il secondo blocca la frammentazione, il terzo segnala che non si tratta dell'ultimo pacchetto di un datagram frammentato.
*   **Offset**: 13 bit, misurato in 8 byte, specifica la posizione del frammento rispetto all'intero datagram.
*   **Time to live**: 8 bit, di default `00100000`. Indica il numero massimo di router che può attraversare prima di essere eliminato.
*   **Protocollo**: 8 bit, protocollo dello strato superiore di cui si incapsulano i dati.
*   **Somma di controllo**: 16 bit, dipende solo dall'intestazione, utile per la rilevazione di errori. L'intera intestazione viene suddivisa in blocchi da 16 bit che vengono sommati tra loro. Il risultato della somma viene complementato e inserito in questo campo.
*   **Indirizzo IP del mittente**: 32 bit.
*   **Indirizzo IP della destinazione**: 32 bit.
*   **Opzioni**: da 0 a 20 byte, maggiori informazioni a questo [link](https://www.iana.org/assignments/ip-parameters/ip-parameters.xhtml).

## IPv6

L'intestazione di base di un datagram IPv6 ha una lunghezza fissa di 40 byte ed è composta dai seguenti campi:

*   **Versione**: 4 bit, per cui vale `0110`.
*   **Priorità**: 4 bit, definisce le priorità tra datagram della stessa sorgente.
*   **Etichetta di flusso**: 24 bit, combinata all'indirizzo della sorgente identifica univocamente quello che prende il nome di **flusso di dati**, ovvero una sequenza di pacchetti che condividono caratteristiche quali sorgente, destinazione, priorità e opzioni. È utilizzata soprattutto dai router per velocizzare la gestione dei datagram.
*   **Lunghezza del carico**: 16 bit, misurata in byte, include sia i dati che le opzioni, può arrivare fino a 65535 byte.
*   **Prossima intestazione**: 8 bit, definisce l'intestazione successiva, che può riferirsi ad un'opzione o al pacchetto incapsulato nel datagram.
*   **Limite di hop**: 8 bit, ha le stesse funzionalità del campo **TTL** del protocollo IPv4.
*   **Indirizzo IP del mittente**: 128 bit.
*   **Indirizzo IP della destinazione**: 128 bit.
