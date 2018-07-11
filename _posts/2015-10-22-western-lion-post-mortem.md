---
layout: post
title: Western Lion&#58; Post mortem
category: Informatics
tags: game jam, libgdx, matematica, post mortem, western lion
image: postfeatured.png
---

[Western Lion]({{ site.baseurl }}/western-lion/) è una collezione di due minigiochi in tema **spaghetti western** sviluppata durante la [Spaghetti Western Jam](https://itch.io/jam/spaghetti-western-jam) della durata di un mese organizzata da [IndieVault.it](https://www.indievault.it/). In uno si vestono i panni di *Nessuno*, intento a colpire dei boccali prima che si frantumino sul pavimento, nell’altro quelli di *Jack*, disturbato da una mosca mentre aspetta alla stazione.


## Preparativi

L’idea dei **minigiochi** è nata dal modo frammentario in cui tornavano alla mente le scene dei film spaghetti western visti durante gli anni. Comprendere il modo in cui realizzare questa idea è stato il passo successivo. Il framework [libGDX](https://libgdx.badlogicgames.com/) è stato sicuramente una buona scelta per quanto riguarda la velocità di prototipazione e la portabilità che garantisce. Il **discorso grafico** è stato ridotto ai minimi termini poiché, non essendo il sottoscritto un grafico, si è optato per una palette ad 8 colori, quella della simpaticissima fantasy console [PICO-8](https://www.lexaloffle.com/pico-8.php), e una risoluzione a 160×90 pixels. Per quanto riguarda l’**audio**, la raccolta delle risorse si è risolta in semplici ricerce su [Freesound.org](https://freesound.org/).

<div class="videowrapper"><iframe src="https://www.youtube.com/embed/D_tt83itYA8" frameborder="0" allowfullscreen></iframe></div>

Il primo minigioco, **Jack and the fly**, nasce dal tema dell’*attesa*, protagonista della scena iniziale del film “C’era una volta il West” di Sergio Leone. L’attesa ci fa pensare, ci lascia il tempo per respirare, per riflettere, per apprezzare. Questa sottolineatura ci catapulta in quegli spazi sconfinati e, allo stesso tempo, ci permette di perderci nei piccoli dettagli.

<div class="videowrapper"><iframe src="https://www.youtube.com/embed/BNOn63T56dg" frameborder="0" allowfullscreen></iframe></div>

Il secondo minigioco, **Nobody is drinking**, ricalca una scena de “Il mio nome è Nessuno” di Tonino Valerii, in cui Nessuno, il protagonista, scommette ad un particolare gioco in cui bisogna bere del whiskey, lanciarne il boccale in aria e colpirlo prima che si frantumi al suolo.

In entrambi la chiave per vincere è la **prontezza di riflessi** del giocatore, non a caso ciò che viene registrato nella *classifica dei punteggi* è il tempo impiegato a concluderli.

## Sviluppo

Di seguito sono elencati gli strumenti utilizzati per lo sviluppo di Western Lion:

* [Android Studio](https://developer.android.com/tools/studio/index.html), per la gestione del codice sorgente;
* [The GNU Image Manipulation Program](https://www.gimp.org/), per la creazione dei contenuti grafici;
* [Audacity](https://audacityteam.org/), per la modifica delle risorse audio.

Quantunque gli strumenti adatti semplifichino in maniera rilevante lo sviluppo di un progetto come questo, un’ottima base nel campo della **matematica** e della **fisica** è fondamentale per la realizzazione delle idee che si hanno in mente:

* ll **sistema di riferimento cartesiano** a due dimensioni aiuta a posizionare le immagini al loro giusto posto sullo schermo;
* le **leggi orarie** del moto rettilineo permettono di simulare il movimento degli oggetti, come quello della mosca in *Jack and the Fly* e la caduta dei boccali in *Nobody is drinking*.
* le **funzioni trigonometriche** permettono la creazione di animazioni fluide piacevoli all’occhio come lo *sliding* nella schermata degli obiettivi.

Questi sono solo alcuni esempi delle innumerevoli applicazioni che può avere la matematica nello sviluppo di videogiochi.
