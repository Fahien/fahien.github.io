---
layout: database
title: Appunti di Basi di Dati&#58; Introduzione
category: Informatics
tags: database, dbms, data model
image: database.jpg
excerpt: Questo articolo presenta un ristretto vademecum di nozioni introduttive utili per il corso d’Informatica di <a href="appunti-di-basi-di-dati">Basi di Dati</a>.
---
Questo articolo presenta un ristretto vademecum di nozioni introduttive utili per il corso d’Informatica di [Basi Dati]({{ site.baseurl }}/appunti-di-basi-di-dati).

## Sistema Informatico

Un sistema informativo ha lo scopo di organizzare e gestire delle informazioni. La parte automatizzata di tale sistema prende il nome di sistema informatico.

## Dato e Informazione

Le informazioni nei sistemi informatici vengono rappresentate attraverso dei dati, bit ad esempio. Tali dati di per s&egrave; non hanno alcun significato e per fornire informazioni hanno bisogno di essere interpretati.

## Base di dati

Un Database, o DB, &egrave; una collezione di dati utilizzati per rappresentare le informazioni di un sistema informativo.

## Sistema di gestione di basi di dati

Un Database Management System, o DBMS, &egrave; un sistema software in grado di gestire collezioni di dati che siano *grandi*, *condivise* e *persistenti*.

- **Grandi**: possono avere dimensioni enormi;
- **Condivise**: applicazioni e utenti devono poter accedere a dati comuni, evitando *ridondanza* e possibilit&agrave; di *inconsistenze*. Per garantire un accesso condiviso, un DBMS dispone di un *controllo della concorrenza*.
- **Persistenti**: il tempo di vita non &egrave; limitato a quello delle singole esecuzioni dei programmi che le utilizzano.

Un DBMS deve assicurare *affidabili&agrave;* e *privatezza* dei dati, oltre ad essere *efficiente* ed *efficace*.

- **Affidabilit&agrave;**: il sistema deve conservare intatto il contenuto di una base di dati in casi di malfunzionamenti hardware e software. A tal scopo i DBMS forniscono funzionalit&agrave; di *backup* e *recovery*.
- **Privatezza**: attraverso il riconoscimento degli utenti forniscono determinate azioni possibili sui dati.
- **Efficiente**: capace di svolgere le operazioni utilizzando un insieme di risorse accettabile dell'utente.
- **Efficace**: capace di rendere produttive le attivit&agrave; dell'utente.

## Modello di dati

Un modelli di dati &egrave; un insieme di concetti che descrivono l'organizzazione e la struttura dei dati in modo che risulti comprensibile al calcolatore.

## Modello relazionale

Il modello relazionale permette la definizione dei tipi attraverso il costruttore *relazione* e l'organizzazione dei dati in insiemi di *record* a struttura fissa.

## Relazione

Una relazione viene spesso rappresentata per mezzo di una tabella, le cui righe rappresentano specifici record e le colonne corrispondono ai campi del record; l'ordine delle righe e delle colonne &egrave; sostanzialmente irrilevante.

## Modello gerarchico

Il modello gerarchico &egrave; basato sull'uso di strutture ad albero.

## Modello reticolare

Il modello reticolare &egrave; basato sull'uso dei grafi.

## Modello a oggetti

Il modello a oggetti, evoluzione del modello relazionale, estende il paradigma della programmazione ad oggetti alle basi di dati.

## Modello XML

Il modello XML, rivisitazione del modello gerarchico, presenta i dati insieme alla loro descrizione senza il bisogno di sottostare ad un'unica struttura logica.

## Modelli logici

I modelli dei dati precedentemente elencati sono effettivamente disponibili su DBMS commerciali; essi vengono detti *logici*, per sottolineare il fatto che le strutture utilizzate da questi modelli riflettono una particolare organizzazione (che sia ad alberi, a grafi, a tabelle, o ad oggetti).

## Modelli concettuali

I modelli concettuali sono utilizzati per descrivere i dati in maniera indipendente dalla scelta del modello logico. Tali modelli non sono disponibili su DBMS commerciali. Il loro nome deriva dal fatto che essi tendono a descrivere i *concetti* del mondo reale, piuttosto che i dati per rappresentarli. Essi vengono utilizzati nella fase preliminare del processo di progettazione di una base di dati, per analizzare nel modo migliore la realt&agrave; di interesse, senza *contaminazioni* di tipo realizzativo.

## Schemi e istanze

Nelle basi di dati esiste una parte sostanzialmente invariante nel tempo, detta *schema*, costituita dalle caratteristiche dei dati, e una parte variabile nel tempo, detta *istanza* o *stato* della base di dati, costituita da valori concreti.

Lo *schema di una relazione* &egrave; costituito dalla sua intestazione seguito dai nomi dei suoi attributi; per esempio

```
ALBUM(Artista, NomeAlbum)
```

L'istanza di una relazione &egrave; costituita dall'insieme delle sue righe, variante nel tempo; nell'esempio abbiamo le coppie:

```
Pink Floyd - The Dark Side of the Moon
The Who    - Who's Next
Beatles    - Sgt. Pepper's Lonely Hearts Club Band
```

Si dice anche che lo schema sia la componente *intensionale* della base di dati e che l'istanza sia la componente *estensionale*.

## Livelli di astrazione nei DBMS

- **Schema logico**: descrizione dell'intera base di dati per mezzo del modello logico adottato dal DBMS;
- **Schema interno**: rappresentazione dello schema logico per mezzo di strutture fisiche di memorizzazione;
- **Schema esterno**: descrizione di una porzione della base di dati per mezzo del modello logico. Uno schema esterno pu&ograve; prevedere organizzazioni dei dati diverse rispetto a quelle utilizzate nello schema logico, che riflettono il punto di vista di un particolare utente o insieme di utenti.

## Indipendenza dei dati

L'architettura a livelli garantisce l'indipendenza dei dati, principale propriet&agrave; dei DBMS.

- **Indipendenza fisica**: consente l'interazione con il DBMS in modo indipendente dalla struttura fisica dei dati.
- **Indipendenza logica**: consente di interagire con il livello esterno della base di dati indipendentemente dal livello logico.

## Linguaggi per basi di dati

Questi linguaggi si distinguono in due categorie:

- linguaggi di definizione dei dati o *Data Definition Languages* (DDL), utilizzati per definire gli schemi logici, esterni e fisici e le autorizzazioni per l'accesso.
- linguaggi di manipolazione dei dati o *Data Manipulation Languages* (DML), per l'interrogazione e l'aggiornamento delle istanze di una base di dati.

## Utenti

- **Amministratore**: responsabile della progettazione, controllo e amministrazione della base di dati;
- **Designer e programmatori**: definiscono e realizzano i programmi che accedono alla base di dati, utilizzando il DML;
- **Utenti**: utilizzano la base di dati per le proprie attivit&agrave;. Essi possono essere *finali*, che utilizzano programmi con attivit&agrave; predefinite, o *casuali*, in grado di impiegare linguaggi interattivi per l'accesso e formulare interrogazioni o aggiornamenti ai dati.
