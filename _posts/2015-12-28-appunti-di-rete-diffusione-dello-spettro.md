---
layout: rete
title: Appunti di Rete&#58; Diffusione dello spettro
category: Informatics
tags: diffusione dello spettro, dsss, fhss, sequenza di barker, spread spectrum
image: binary-world.jpg
---
[Spread Spectrum](https://en.wikipedia.org/wiki/Spread_spectrum) (diffusione dello spettro) i segnali di varie sorgenti vengono combinati con l'obiettivo di evitare intercettazioni e interferenze. Tali tecniche si basano sulla **ridondanza**, espandendo la banda originale in una molto più grande.

## Frequency Hopping Spread Spectrum

La [FHSS](https://en.wikipedia.org/wiki/Frequency-hopping_spread_spectrum) (diffusione dello spettro tramite salti di frequenza) utilizza delle **frequenze portanti**, selezionate in maniera pseudocasuale, modulate dal segnale originale. Una terza parte non ha modo di sapere su quali frequenze vengono trasmessi i dati ed è difficile impedire la trasmissione poiché bisognerebbe creare interferenza su molte frequenze.

## Direct Sequence Spread Spectrum

la [DSSS](https://en.wikipedia.org/wiki/Direct-sequence_spread_spectrum) (diffusione dello spettro tramite sequenza diretta) sostituisce ad ogni bit del segnale originale una **wordcode** di _n_ bit, attraverso un codice di diffusione. La [sequenza di Barker](https://en.wikipedia.org/wiki/Barker_code), per cui _n_ equivale a 11, è il codice di diffusione utilizzato dalle Wireless LAN. La largezza di banda necessaria è quindi 11 volte superiore.
