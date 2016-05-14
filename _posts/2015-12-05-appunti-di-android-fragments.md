---
layout: android
title: Appunti di Android&#58; Fragments
category: Informatics
tags: android, fragments, mobile
image: android.png
---
I [Fragments](http://developer.android.com/guide/components/fragments.html) rappresentano parte dell'interfaccia utente. Se ne possono combinare di molteplici in una singola [Activity](http://www.fahien.me/2015/11/26/appunti-di-android-activity) per costruire dei pannelli multipli e sono di facile riuso.

Un Fragment può sempre essere inserito in un'Activity e il suo ciclo di vita è direttamente collegato ad essa. Ad ogni modo, mentre l'Activity è in esecuzione, i fragments si possono manipolare in modo indipendente, aggiungendoli o rimuovendoli.

Quando si aggiunge un Fragment al [layout](http://www.fahien.me/2015/11/05/appunti-di-android-layout) di un'Activity, questo risiede in una **ViewGroup** all'interno della _view hierarchy_ dell'Activity. Comunque, ogni Fragment definisce il proprio layout.

I fragments servono principlamente al supporto di un'interfaccia utente più dinamica e flessibile su schermi larghi, come quelli dei tablet. Dividendo il layout di un'Activity, diventa più agevole la modifica della visuale a tempo di esecuzione.

Per esempio, un'applicazione di news può utilizzare un Fragment per mostrare sulla sinistra una lista di articoli e un'altro Fragment per visualizzare l'articolo sulla destra. Entrambi i fragments appaiono in un sola Activity, fianco a fianco, ed ognuno ha il proprio ciclo di vita. Quindi, invece di utilizzare un'Activity per la lista di articoli e un'altra per la lettura dell'articolo, l'utente può selezionare l'articolo e leggerlo all'interno di una sola Activity.
