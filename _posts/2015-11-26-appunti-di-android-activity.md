---
layout: android
title: Appunti di Android&#58; Activity
category: Informatics
tags: activity, activity lifecycle, activity state, android, backstack, mobile
image: android.png
---
Gestire il [ciclo di vita delle activities](https://developer.android.com/intl/pt-br/reference/android/app/Activity.html#ActivityLifecycle) implementando i metodi di _callback_ è cruciale per lo sviluppo di una applicazione robusta e flessibile.

Un’Activity può essere in tre stati:

*   **Resumed**: l’Activity è mostrata a schermo e gode del _focus_ dell’utente (tale stato è chiamato anche _running_).
*   **Paused**: un’altra Activity è mostrata e ha il focus mentre quella in pausa è ancora visibile. In questo stato può essere chiusa dal sistema in casi di poca memoria disponibile.
*   **Stopped**: l’Activity è completamente oscurata da un’altra e può essere chiusa dal sistema nel caso servisse memoria.

<figure markdown="1" class="text-center">

[![Activity Lifecycle]({{ site.github.url }}/static/images/activitylifecycle.png)]({{ site.github.url }}/static/images/activitylifecycle.png)

</figure>

## Salvare lo stato di un’Activity

Quando un’Activity viene messa in pausa o fermata, lo stato viene conservato, ovvero l’istanza continua a risiedere nella memoria.

Quando il sistema distrugge l’Activity per recuperare memoria non si può ripristinarne lo stato e qualora l’utente ritorni sui suoi passi l’istanza dev’essere [ricreata](https://developer.android.com/training/basics/activity-lifecycle/recreating.html). L’utente, non sapendo che il sistema ha prima distrutto l’Activity e poi l’ha ricreata, si aspetta di ritrovarla così come l’aveva lasciata. In queste situazioni, le informazioni sullo stato dell’Activity vengono preservate implementando
il callback method **onSaveInstanceState()**.

Il sistema invoca questo metodo prima di rendere l’Activity passibile di distruzione. Come parametro abbiamo un [Bundle](https://developer.android.com/reference/android/os/Bundle.html), nel quale vengono salvate le informazioni sotto forma di coppie chiave-valore, usando metodi come _putString()_ e _putInt()_. Quindi, il processo dell’applicazione termina e l’utente torna su quest’Activity, il sistema la ricrea e passa l’oggetto Bundle al metodo _onCreate()_ e _onRestoreInstanceState()_. Da
questi due metodi, si possono estrarre le informazioni sullo stato salvate precedentemente. Se non ci sono informazioni da ripristinare, il Bundle passato è _null_.

## Back Stack

Le activities sono memorizzate in uno _stack_, ovvero il [back stack](https://developer.android.com/guide/components/tasks-and-back-stack.html), nell’ordine in cui sono state aperte. Quando l’Activity corrente dà via ad un’altra, la nuova viene inserita in cima allo stack e ottiene il focus. L’Activity precedente rimane nello stack, ma è ferma. Quando l’utente preme il pulsante **back**, l’Activity corrente viene rimossa dalla cima dello stack (e terminata) e l’Activity precedente riprende il
focus. Questo stack opera quindi secondo il paradigma _last in, first out_.
