---
layout: rete
title: Appunti di Rete&#58; Accesso multiplo
category: Informatics
tags: accesso casuale, accesso controllato, accesso multiplo, aloha, canalizzazione, csma, csma/ca, csma/cd, reti di calcolatori
image: binary-world.jpg
---
Nei protocolli ad accesso casuale le stazioni non hanno il controllo del mezzo trasmissivo e il suo utilizzo è conteso. Le stazioni possono verificare lo stato del mezzo in qualsiasi momento e non c'è un ordine stabilito per l'accesso. Si possono verificare casi in cui due o più stazioni provano a spedire contemporaneamente, generando una **collisione** che distrugge o modifica i frames. Tra i protocolli ad accesso casuale vi sono: [ALOHA](https://en.wikipedia.org/wiki/ALOHAnet#ALOHA_protocol); [CSMA](https://en.wikipedia.org/wiki/Carrier_sense_multiple_access); [CSMA/CA](https://en.wikipedia.org/wiki/Carrier_sense_multiple_access_with_collision_avoidance); [CSMA/CD](https://en.wikipedia.org/wiki/Carrier_sense_multiple_access_with_collision_detection).

### Aloha

Il protocollo ALOHA originale viene chiamato ALOHA puro, in cui ogni stazione spedisce un frame quando vuole e, ovviamente, c'è possibilità di collisione. Si fa affidamento, quindi, su un riscontro del destinatario che, se non arriva, fa sì che il mittente rispedisca il frame. Prima di rispedire un frame distrutto a causa di una collisione, le stazioni devono aspettare un tempo casuale, chiamato **tempo di backoff** o T<sub>b</sub>. Dopo un numero massimo di tentativi di ritrasmissione,
K<sub>max</sub>, le stazioni devono desistere e riprovare in un secondo momento.

### CSMA

Il metodo **Carrier Sense Multiple Access** prova a migliorare le prestazioni della rete minimizzando la probabilità di collisione facendo sì che le stazioni controllino lo stato del mezzo trasmissivo prima di inviare dati. Se due stazioni controllano il mezzo e lo trovano libero più o meno nello stesso momento, può comunque verificarsi una collisione se entrambe decidono di trasmettere. Ad ogni modo, esistono tre metodi che possono delineare il comportamento delle stazioni:

*   **1-insistenza**: se il mezzo è occupato, la stazione continua a controllarne lo stato finché non diventa libero per spedire dati immediatamente;
*   **non insistenza**: se il mezzo è libero, la stazione spedisce dati immediatamente, altrimenti aspetta un tempo casuale prima di ripetere la stessa operazione;
*   **p-insistenza**: se il mezzo è occupato, la stazione controlla continuamente lo stato finché non si libera per:
    1.  inviare il frame (con probabilità `p);`
    2.  aspettare (con probabilità `1-p`) per almeno il tempo di propagazione massimo prima di ricontrollare il mezzo. A questo punto se il mezzo è libero riprende dal punto 1, altrimenti opera una procedura di _backoff_.

### CSMA/CD

Il metodo CSMA/CD (collision detection) aggiunge al metodo CSMA un algoritmo per il rilevamento e la gestione delle **collissioni**. Una stazione, durante la trasmissione di un frame, controlla continuamente lo stato del mezzo e se rileva una collisione interrompe immediatamente la trasmissione. Affinché il metodo sia efficace è importante che il tempo di trasmissione minimo di un qualsiasi frame sia almeno il doppio del tempo di propagazione massimo della rete, altrimenti le
stazioni potrebbero non essere in grado di rilevare tutte le collisioni. `T<sub>fr</sub> ≥ 2·T<sub>p</sub>`

### CSMA/CA

Il metodo CSMA/CD perde efficacia in una **rete senza fili**, dove la perdita di energia dei segnali durante la trasmissione può rendere difficoltosa la rilevazione di collisioni. Il protocollo CSMA/CA (collision avoidance) permette di evitare le collisioni attraverso tre strategie:

*   **spaziatura tra i frame**: quando una stazione trova il mezzo libero, prima di trasmettere, aspetta un intervallo di tempo detto _interframe spacing_ (IFS);
*   **finestra di contesa**: una stazione che ha già aspettato il tempo di IFS, deve aspettare ancora per un numero casuale di intervalli. Dopo ogni intervallo, ricontrolla lo stato del mezzo e se lo trova occupato, mette in pausa questo processo per riprenderlo poi quando il mezzo si libera;
*   **riscontri**: garantiscono che il destinatario abbia ricevuto il frame e che non si siano verificate collisioni.

## Accesso controllato

Nei protocolli ad accesso controllato le stazioni si accordano tra loro sull'utilizzo del mezzo trasmissivo. Esistono tre metodi.

*   **Prenotazione**: come suggerisce il nome, le stazioni devono prenotarsi per ottenere un intervallo di tempo nel quale trasmettere.
*   **Sondaggio**: una stazione è designata come primaria e si occupa del controllo del mezzo trasmissivo mentre le stazioni secondarie seguono le sue istruzioni.
*   **Testimone**: le stazioni sono organizzate in un [anello logico](https://en.wikipedia.org/wiki/Token_ring) e l'accesso al mezzo trasmissivo è garantito dal possesso di un testimone, ovvero un particolare frame, che viene fatto circolare.

## Canalizzazione

Nella canalizzazione ciò che viene condiviso tra le stazioni è la **larghezza di banda** del collegamento. Tra i protocolli a canalizzazione vi sono:

*   [FDMA](https://en.wikipedia.org/wiki/Frequency-division_multiple_access), in cui la largezza di banda del canale è suddivisa in bande non contigue che vengono assegnate alle stazioni;
*   [TDMA](https://en.wikipedia.org/wiki/Time_division_multiple_access), in cui il canale è utilizzato a turno dalle stazioni;
*   [FDMA](https://en.wikipedia.org/wiki/Frequency-division_multiple_access), in cui il mezzo trasporta tutte le trasmissioni contemporaneamente, isolate grazie ad un sistema di codifica.
