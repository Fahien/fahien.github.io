---
layout: android
title: Appunti di Android&#58; Gestione del progetto
category: Informatics
tags: android, mobile, sdk 
image: android.png
---
Il progetto deve avere una struttura specifica per essere compilato e impacchettato correttamente dall'[Android Software Development Kit](https://developer.android.com/sdk/index.html).

Al livello più alto c'è una suddivisione per moduli. Tra i principali:

* **Android application modules**: contengono codice, risorse e impostazioni. Sono questi ad essere trasformati nel file *apk* che viene successivamente installato nei vari dispositivi;
* **test modules**: contengono i test dell'applicazione (in genere il modulo androidTest contiene i test [Junit](https://junit.org);
* **library modules**: contengono codice condiviso da altri progetti. Anche questi durante la compilazione vengono inseriti nell'*apk*;

## Files del progetto

* `build/`: Contiene le *builds* dell'applicazione
* `libs/`: Contiene librerie private
* `src/`: Contiene il codice sorgente
  * `androidTest/`: Contiene la strumentazione per i test
  * `main/java/com.project.app`: Contiene codice java come le *activities*
  * `main/assets/`: Contenitore utile per *game assets*
  * `main/res/`: Contiene le risorse dell'applicazione
    * `anim/`: File XML compilati in *animation objects*
    * `color/`: Files XML che descrivono colori
    * `drawable/`: Files bitmap (PNG, JPEG, o GIF), 9-Patch, e XML  che descrivono forme *Drawables*
    * `mipmap/`: Icone dell'applicazione
    * `layout/`: Files XML compilati in *layouts*
    * `menu/`: Files XML per la definizione dei *menu*
    * `raw/`: Per asset arbitrari. Utile per files *mp3* oppure *ogg*
    * `values/`: Files XML che definiscono valori
    * `xml/`: Altri file xml
  * `AndroidManifest.xml`: File di controllo che descrive la natura dell'applicazione ed ogni sua componente
* `.gitignore/`: Specifica i file che devono essere ignorati da [git](https://git-scm.com)
* `app.iml/`: Modulo *IntelliJ IDEA*
* `build.gradle`: Proprietà customizzabili per il sistema di *build*
* `proguard-rules.pro`: File di impostazioni [ProGuard](https://proguard.sourceforge.net)
