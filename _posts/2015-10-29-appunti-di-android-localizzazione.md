---
layout: android
title: Appunti di Android&#58; Localizzazione
category: Informatics
tags: android, localizzazione, mobile
image: android.png
---
Quando l'utente avvia un'applicazione, Android seleziona e carica automaticamente le risorse appropriate a seconda della configurazione del dispositivo o, nel caso mancassero, quelle di base.

All'interno del file **res/values/strings.xml** sono memorizzate le stringhe di default ma è possibile specificare delle cartelle per le risorse con diversi _qualificatori_ e creare così risorse alternative. Questi qualificatori possono specificare la lingua.

Ad esempio, per [localizzare](https://it.wikipedia.org/wiki/Localizzazione_%28software%29) il testo in italiano, bisogna creare un file **string.xml** alternativo nella specifica cartella **res/values-it/**.
