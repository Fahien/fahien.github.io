---
layout: android
title: Appunti di Android&#58; Storage options
category: Informatics
tags: database, external storage, internal storage, network connection, preferences, shared preferences, sqlite, storage options
image: android.png
---
Android fornisce varie opzioni per il salvataggio dei dati. La scelta di quale utilizzare dipende da bisogni specifici quali la privacy, la condivisione con altre applicazioni o la quantità di spazio richiesto.

## Shared preferences

La classe [SharedPreferences](http://developer.android.com/reference/android/content/SharedPreferences.html) fornisce un framework per il salvataggio e il caricamento di coppie key-value di tipi primitivi (boolean, float, int, long e String) che persisteranno nell'intera sessione utente, anche nel caso in cui l'applicazione venga terminata. Per ottenerne un'istanza si utilizza uno di questi due metodi:

*   [getSharedPreferences(String, int)](http://developer.android.com/reference/android/content/Context.html#getSharedPreferences%28java.lang.String,%20int%29): nel caso servano più file identificati da un nome, specificato come primo parametro;
*   [getPreferences(int)](http://developer.android.com/reference/android/app/Activity.html#getPreferences%28int%29): nel caso serva solo un file.

Per scrivere dei valori bisogna invocare il metodo [edit()](http://developer.android.com/reference/android/content/SharedPreferences.html#edit%28%29) per ottenere uno [SharedPreferences.Editor](http://developer.android.com/reference/android/content/SharedPreferences.Editor.html), aggiungere i valori attraverso i metodi **put** (putBoolean(), putString(), ...) e fare il commit dei nuovi valori invocando il metodo [commit()](http://developer.android.com/reference/android/content/SharedPreferences.Editor.html#commit%28%29):

```java
preferences.edit().putBoolean("silentMode", silentMode).commit();
```

Per leggere i valori, basta invocare i metodi **get** (getBoolean(), getString(), ...):

```java
preferences.getBoolean("silentMode", false);
```

## Internal storage

È possibile salvare dati direttamente nella **memoria interna**, che di default sono accessibili solo dalla propria applicazione e rimossi quando viene disinstallata. Invocando il metodo [openFileOutput(String, int)](http://developer.android.com/reference/android/content/Context.html#openFileOutput%28java.lang.String,%20int%29) con il nome del file e la modalità operativa, si ottiene un [FileOutputStream](http://developer.android.com/reference/java/io/FileOutputStream.html), nel quale scrivere tramite [write(...)](http://developer.android.com/reference/java/io/FileOutputStream.html#write%28byte[],%20int,%20int%29) e poi chiudere con [close()](http://developer.android.com/reference/java/io/FileOutputStream.html#close%28%29):

```java
FileOutputStream fos = openFileOutput("nomefile", Context.MODE_PRIVATE);
fos.write("ciao".getBytes());
fos.close();
```

## External storage

Ogni dispositivo Android ha a disposizione una **memoria esterna**, rimovibile o no, che si può utilizzare per salvare file pubblici e modificabili dall'utente. Per poter leggere o scrivere sulla memoria esterna, la propria applicazione deve godere dei permessi di lettura (`READ_EXTERNAL_STORAGE`) o scrittura (`WRITE_EXTERNAL_STORAGE`).

## Database

Android fornisce supporto completo per [SQLite](https://www.sqlite.org/). Ogni database creato sarà accessibile tramite nominativo da qualsiasi classe dell'applicazione, ma non dall'esterno. Il metodo raccomandato per la creazione di un nuovo database SQLite consiste nella creazione di una sottoclasse di [SQLiteOpenHelper](http://developer.android.com/reference/android/database/sqlite/SQLiteOpenHelper.html) e l'_override_ del metodo [onCreate(SQLiteDatabase)](http://developer.android.com/reference/android/database/sqlite/SQLiteOpenHelper.html#onCreate%28android.database.sqlite.SQLiteDatabase%29), nel quale eseguire comandi per la creazione delle tabelle. Per leggere e scrivere, si usano [getWritableDatabase()](http://developer.android.com/reference/android/database/sqlite/SQLiteOpenHelper.html#getWritableDatabase%28%29) e [getReadableDatabase()](http://developer.android.com/reference/android/database/sqlite/SQLiteOpenHelper.html#getReadableDatabase%28%29) che restituiscono un oggetto [SQLiteDatabase](http://developer.android.com/reference/android/database/sqlite/SQLiteDatabase.html). Le query si effettuano attraverso il metodo `SQLiteDatabase.query(...)` che accetta vari parametri, come la tabella da interrogare, proiezione, selezione, colonne, raggruppamento e altro. Ogni query SQLite restituisce un [Cursor](http://developer.android.com/reference/android/database/Cursor.html) che punta alle righe restituite dalla query, ovvero un meccanismo attraverso il quale navigare nel risultato della query per leggere righe e colonne.

## Network connection

È altresì possibile salvare e caricare i dati dai propri servizi web usando la rete. Per queste operazioni si utilizzano le classi definite all'interno dei package **java.net.*** e **android.net.***.
