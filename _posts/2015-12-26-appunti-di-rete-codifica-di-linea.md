---
layout: rete
title: Appunti di Rete&#58; Codifica di linea
category: Informatics
tags: ami, codifica di linea, nrz, nrz-i, nrz-l, teorema di nyquist
image: binary-world.jpg
---
Attraverso la [codifica di linea](https://en.wikipedia.org/wiki/Line_code) è possibile rappresentare sequenze di **bit** usando segnali digitali. Vi sono cinque categorie di schemi di codifica di linea: [unipolare](https://en.wikipedia.org/wiki/Unipolar_encoding), [polare](https://en.wikipedia.org/wiki/Non-return-to-zero), [bipolare](https://en.wikipedia.org/wiki/Bipolar_encoding), [multilivello](https://en.wikipedia.org/wiki/2B1Q), [multilinea](https://en.wikipedia.org/wiki/MLT-3_encoding).

### Teorema di Nyquist

In un canale senza rumore, questo teorema ci fornisce la massima velocità alla quale possiamo spedire i bit:

> N<sub>max</sub> = 2 × B × log<sub>2</sub> L

dove _B_ è la larghezza di banda ed _L_ è il numero di livelli del segnale usati per rappresentare i dati.

## Schema unipolare NRZ

Lo schema **NRZ** (Non-Return-to-Zero) rappresenta `1` con un voltaggio positivo e `0` con il voltaggio nullo. È chiamato NRZ poiché il segnale non ritorna a zero durante la rappresentazione di ogni bit.

![Codifica NRZ unipolare]({{ site.github.url }}/static/images/nrzunipolar.png)

## Schema polare NRZ

Nella codifica polare, vengono utilizzati due livelli di voltaggio: positivo e negativo. Nella versione **NRZ-L** (Level), un voltaggio positivo rappresenta `0` e un voltaggio negativo rappresenta `1`. Nella versione **NRZ-I** (Invert), il bit è determinato da un cambio del livello del voltaggio: assenza di cambiamento significa `0`, cambiamento rappresenta `1`.

![Codifiche polari NRZ-L e NRZ-I]({{ site.github.url }}/static/images/nrzpolar.png)

## Codifica bipolare AMI

La codifica **AMI** (Alternate Mark Inversion) rappresenta `0` con voltaggio nullo e `1` con voltaggi positivi e negativi che si alternano.

![Codifica polare AMI]({{ site.github.url }}/static/images/ami.png)
