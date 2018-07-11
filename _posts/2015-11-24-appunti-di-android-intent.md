---
layout: android
title: Appunti di Android&#58; Intent
category: Informatics
tags: android, intent, mobile
image: android.png
---
Un [Intent](https://developer.android.com/reference/android/content/Intent.html) è un messaggio utilizzato per richiedere un’azione ad un’altra [componente](https://developer.android.com/guide/components/fundamentals.html#Components). Vi sono 3 casi d’uso fondamentali:

*   avviare un’[Activity](https://developer.android.com/reference/android/app/Activity.html);
*   avviare un [Service](https://developer.android.com/reference/android/app/Service.html);
*   inviare un messaggio broadcast.

Ne esistono di due tipi:

*   **espliciti**: specificano la componente da avviare tramite il nome (nome completo della classe) e il sistema la avvia immediatamente. Si usano in genere per avviare una componente della propria applicazione;
*   **impliciti**: non specificano una componente ma dichiarano un’azione generica da compiere che verrà gestita da una componente di un’altra applicazione. Il sistema cerca la componente appropriata da avviare confrontando il contenuto dell’intent ai _filters_ dichiarati nel [Manifest](https://developer.android.com/guide/topics/manifest/manifest-intro.html) delle altre applicazioni. Se più componenti sono compatibili, il sistema mostra una finestra per permettere all’utente di scegliere quale utilizzare.
