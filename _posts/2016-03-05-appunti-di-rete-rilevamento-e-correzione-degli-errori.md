---
layout: rete
title: Appunti di Rete&#58; Rilevamento e correzione degli errori
category: Informatics
tags: codici a parità, codici ciclici, codici crc, codici di hamming, codici lineari, codifica a blocchi, distanza di hamming, errore a raffica, errore singolo, ridondanza
image: binary-world.jpg
---
Un segnale spedito su un mezzo trasmissivo può subire delle alterazioni e provocare un'errata interpretazione dei bit da parte del ricevitore. Si parla di **errore singolo** quando solo un bit è corrotto e **errore a raffica** quando l'alterazione riguarda più di un bit. Gli schemi di rilevazione degli errori si basano sulla tecnica della **ridondanza** che consiste nella spedizione di bit aggiuntivi.

## Codifica a blocchi

La [codifica a blocchi](https://en.wikipedia.org/wiki/Block_code) suddivide i dati in blocchi di `k` bit, chiamati _parole sorgenti_. A questi si aggiungono _r_ bit ridondanti per ottenere blocchi lunghi `n=k+r`, chiamati _parole codice_. Date `2ᵏ` parole sorgenti e `2ⁿ` parole codice, è facile intuire che `2ⁿ-2ᵏ` parole codice risultano inutilizzate.

## Distanza di Hamming

La [distanza di Hamming](https://it.wikipedia.org/wiki/Distanza_di_Hamming) tra due parole della stessa lunghezza è data dal numero di posizioni nelle quali i bit corrispondenti differiscono. Dato un insieme di parole, la **distanza di Hamming minima** (`dₘᵢₙ`) è la più piccola delle distanze di Hamming fra tutte le possibili coppie. Un codice a blocchi garantisce la rilevazione degli errori solo nel caso in cui l'alterazione abbia coinvolto al più `dₘᵢₙ-1` bit, cosicché la parola originale non sia stata trasformata in un'altra parola codice valida. Inoltre, garantisce la correzione degli errori nel caso in cui l'alterazione abbia coinvolto al più `(dₘᵢₙ-1)/2` bit, cosicché la parola alterata sia _vicina_ solo all'originale.

## Codici lineari

Un [codice lineare](https://en.wikipedia.org/wiki/Linear_code) è una codifica a blocchi in cui l'operazione di [XOR](https://en.wikipedia.org/wiki/Exclusive_or) tra due parole codice valide risulta in un'altra parola codice valida.

## Codici a parità

Nei [codici a parità](https://en.wikipedia.org/wiki/Parity_bit), parole sorgenti di `k` bit vengono trasformate in parole codice di `n=k+1` bit, il cui bit addizionale chiamato **bit di parità** è selezionato in modo tale da rendere sempre pari il numero di `1` nella parola codice. Per questi codici, `dₘᵢₙ` equivale a `2`.

## Codici di Hamming

I [codici di Hamming](https://en.wikipedia.org/wiki/Hamming_code) sono una famiglia di codici lineari per la correzione degli errori con `dₘᵢₙ=3`. Per costruire un codice di Hamming, si parte dal numero di bit ridondanti `m≥3` per ottenere `n=2ᵐ-1` e `k=n-m`. Con `m=3`, ed `n=7` e `k=4`, otteniamo un codice di Hamming `C(7,4)` con `dₘᵢₙ=3`.

Il codificatore calcola i bit di controllo:

```
r₀ = a₂ + a₁ + a₀
r₁ = a₃ + a₂ + a₁
r₂ = a₁ + a₀ + a₃
```

Il decodificatore calcola la sindrome:

```
s₀ = b₂ + b₁ + b₀ + q₀
s₁ = b₃ + b₂ + b₁ + q₁
s₂ = b₁ + b₀ + b₃ + q₂
```

## Codici ciclici

Un [codice ciclico](https://en.wikipedia.org/wiki/Cyclic_code) è un codice lineare in cui la rotazione di qualsiasi parole codice valida risulta in un'altra parola codice valida.

## Codici CRC

I codici CRC ([Cyclic Redundancy Check](https://en.wikipedia.org/wiki/Cyclic_redundancy_check)) sono una famiglia di codici ciclici per la correzione degli errori utilizzati nelle reti LAN e WAN. Il modulo di codifica prende in input una parola di `k` bit, vi accoda `n-k` bit di valore `0`, ne calcola il modulo con un _divisore_ grande `n-k+1` per ottenere quei `n-k` bit che concatena alla parola sorgente ed ottenere infine la parola codice da spedire. All'altro capo, un modulo di decodifica calcola il modulo della parola codice ricevuta con il _divisore_ per ottenere la cosiddetta _sindrome_. Una sindrome con tutti `0` vuol dire nessun errore di trasmissione rilevato.
