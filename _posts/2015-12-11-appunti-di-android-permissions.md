---
layout: android
title: Appunti di Android&#58; Permissions
category: Informatics
tags: android, mobile, permissions
image: android.png
---
Per la protezione di dati sensibili ed evitare codice che possa danneggiare l'esperienza utente Android impone delle limitazioni. I [Permissions](http://developer.android.com/guide/topics/security/permissions.html), identificati da un'etichetta, garantiscono l'accesso ad una parte del un dispositivo, che sia sotto forma di dati o funzionalità.

Se un'applicazione necessita di una risorsa protetta, deve dichiararlo attraverso l'elemento `<uses-permission>` opportunamente inserito nel file [Manifest](http://developer.android.com/guide/topics/manifest/manifest-intro.html). Nel momento dell'installazione, l'_installer_ determinerà se garantire o no i permessi controllando l'autorità che ha firmato il certificato dell'applicazione e, in alcuni casi, chiedendo direttamente all'utente. Se il permesso viene garantito l'applicazione può utilizzare la risorsa protetta altrimenti gli accessi a queste risorse semplicemente falliranno senza notificare l'utente.

Un'applicazione può altresì proteggere le proprie componenti attraverso il meccanismo dei permessi.
