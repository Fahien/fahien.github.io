---
layout: android
title: Appunti di Android&#58; Layout
category: Informatics
tags: android, layout, mobile, toast, view, viewgroup
image: android.png
---
Un _layout_ rappresenta la struttura visiva di un’**interfaccia utente** e si può definire in due modi:

* **XML**: Android fornisce un vocabolario XML che corrisponde alle classi della [View](http://developer.android.com/reference/android/view/package-summary.html).
* **Runtime**: si possono creare oggetti [View](http://developer.android.com/reference/android/view/View.html) e [ViewGroup](http://developer.android.com/reference/android/view/ViewGroup.html) (manipolandone le proprietà) programmaticamente.

Possiamo utilizzare uno o entrambi questi metodi per la dichiarazione e la gestione dell’interfaccia grafica della nostra applicazione. Ad esempio, potremmo dichiarare dei layout di base in XML, includendo gli elementi che appariranno a schermo e le loro proprietà, dopodiché aggiungere codice che possa modificare _runtime_ lo stato di tali elementi sullo schermo.

Il vantaggio nell’utilizzo dei files XML è la **separarazione** della presentazione dell’applicazione dal codice che ne controlla il comportamento. La descrizione dell’interfaccia grafica è esterna al codice dell’applicazione, garantendoci la possibilità di modificarla e riadattarla senza la necessità di modificare e ricompilare il codice sorgente. Ad esempio, si potrebbero creare layouts XML per schermi di grandezza o orientamento differenti, o per lingue differenti. In più, dichiarare il
layout in XML rende più semplice la visualizzazione della struttura dell’interfaccia utente e ne semplifica il _debugging_.

## View

La geometria di una View è quella di un rettangolo e ha una posizione, espressa in una coppia di valori, **left** e **top**, e due dimensioni, espresse in **width** e **height**. L’unità di misura per la posizione e la dimensione è il pixel. Una View attualmente possiede comunque due coppie di width e height. Nella prima coppia si chiamano _measured width_ e _measured height_ e definiscono quando grande dev’essere la View all’interno del suo genitore. La seconda coppia è rappresentata
semplicemente da _width_ e _height_, ovvero _drawing width_ e _drawing height_, e definiscono l’attuale grandezza della View a schermo, nel momento in cui viene disegnata.

Disegnare il layout è un processo composto da due fasi: **fase di misurazione** e **fase di layout**. La fase di misurazione è implementata in [measure(int, int)](http://developer.android.com/reference/android/view/View.html#measure%28int,%20int%29) ed è un _traversal top-down_ dell’albero delle View in cui ognuna calcola la proprie dimensioni. La seconda fase avviene in [layout(int, int, int,
int)](http://developer.android.com/reference/android/view/View.html#layout%28int,%20int,%20int,%20int%29), anche questa top-down, in cui ogni genitore è responsabile del posizionamento di tutti i suoi figli usando le grandezze computate durante la fase di misurazione.

## ViewGroup

##### Linear Layout

Si tratta di un ViewGroup che allinea i suoi figli **orizzontalmente** o **verticalmente** (_android:orientation_).

##### Relative Layout

ViewGroup che mostra i figli in posizioni **relative**. La posizione di ogni View può essere specificata in relazione ai fratelli (_left-of_, _below_, …) o al genitore (_bottom_, _left_, _center_, …).

##### List View

ViewGroup che mostra una **lista scorrevole** di elementi. Gli elementi della lista vengono inseriti in modo automatico utilizzando un [Adapter](http://developer.android.com/reference/android/widget/Adapter.html), che prende il contenuto da una sorgente (come un _array_ o un _database_), converte ogni elemento in una View e la inserisce nella lista.

##### Grid View

ViewGroup che mostra degli elementi in una **griglia scorrevole**. Gli elementi vengono inseriti in modo automatico da un Adapter.

##### Adapter View

Quando il contenuto del layout è **dinamico** o non predeterminato, si può usare una sottoclasse di [AdapterView](http://developer.android.com/reference/android/widget/AdapterView.html) per popolare _runtime_ il layout. Una sottoclasse di AdapterView utilizza un Adapter per fissare dati al layout. Un Adapter si comporta come un mediatore tra la sorgente dati e il layout AdapterView: l’Adapter riceve i dati e converte ogni occorrenza in una View che può essere aggiunta al layout
AdapterView. Android fornisce alcune sottoclassi di Adapter utili a seconda dei casi:

* **ArrayAdapter**: si utilizza quando la sorgente dati è un _array_. Di default, ArrayAdapter crea una View per ogni elemento dell’array, invocandone il metodo toString() e piazzandone il contenuto in una [TextView](http://developer.android.com/reference/android/widget/TextView.html).

```java
ArrayAdapter<String> adapter = new ArrayAdapter<>(
    this, android.R.layout.simple_list_item1, myStringArray);
ListView listView = (ListView) findViewById(R.id.listview);
listView.setAdapter(adapter)
```
* **SimpleCursorAdapter**: si utilizza quando i dati provengono da un [Cursor](http://developer.android.com/reference/android/database/Cursor.html). Bisogna specificare un layout da utilizzare per ogni riga del Cursor e quali colonne debbano essere inserite in quale View del layout.

## Toast

Un toast fornisce un semplice **feedback** a proposito di un’operazione in un piccolo _popup_. Occupa solo la quantità di spazio richiesta dal messaggio e l’Activity corrente rimane visibile ed interattiva. Svaniscono automaticamente dopo un _timeout_. Si crea attraverso il metodo statico [Toast.makeText()](http://developer.android.com/reference/android/widget/Toast.html#makeText%28android.content.Context,%20int,%20int%29) che prende tre parametri (context, messaggio e durata) e si mostra a
schermo attraverso il metodo **show()**.

```java
Toast.makeText(context, "text", Toast.LENGTH_SHORT)
```

Si può riposizionare attraverso il metodo [setGravity()](http://developer.android.com/reference/android/widget/Toast.html#setGravity%28int,%20int,%20int%29) che accetta tre parametri (Gravity constant, x offset, y offset).

```java
toast.setGravity(Gravity.TOP|Gravity.LEFT, 0, 0);
```

È altresì possibile creare un layout personalizzato per le notifiche toast in XML, passandolo al toast tramite il metodo **setView(View)**.
