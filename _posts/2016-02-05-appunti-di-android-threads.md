---
layout: android
title: Appunti di Android&#58; Threads
category: Informatics
tags: android, mobile, threads asynctask
image: android.png
---
Quando viene lanciata un'applicazione, il sistema android crea il **main thread**, anche chiamato **UI thread**, con il compito di gestire gli eventi dell'interfaccia utente. Per evitare [inconvenienti](https://developer.android.com/training/articles/perf-anr.html), non bisogna manipolare l'interfaccia utente da un worker thread: tutte le modifiche alla UI devono avvenire all'interno del main thread.

## Worker threads

Per non bloccare il main thread, nel caso di operazioni non istantanee, si deve utilizzare un thread differente. Per l'acceso agli elementi visivi del main thread da parte degli altri thread, Android fornisce dei metodi appropriati:

*   [Activity.runOnUiThread(Runnable)](https://developer.android.com/reference/android/app/Activity.html#runOnUiThread%28java.lang.Runnable%29);
*   [View.post(Runnable)](https://developer.android.com/reference/android/view/View.html#post%28java.lang.Runnable%29);
*   [View.postDelayed(Runnable, long)](https://developer.android.com/reference/android/view/View.html#postDelayed%28java.lang.Runnable,%20long%29);
*   [AsyncTask.onPostExecute(\<T\> result)](https://developer.android.com/reference/android/os/AsyncTask.html#onPostExecute%28Result%29);

### AsyncTask

La classe [AsyncTask](https://developer.android.com/reference/android/os/AsyncTask.html), semplifica l'esecuzione di worker threads che hanno bisogno di interagire con la UI, permettendo di lavorare in modo asincrono sull'interfaccia utente. Essenzialmente, effettua le operazioni bloccanti in un worker thread e pubblica i risultati nel main thread. Per il corretto utilizzo, bisogna estendere questa classe e implementare il medodo di callback `doInBackground()`, che viene eseguito in una
[pool](https://en.wikipedia.org/wiki/Pool_%28computer_science%29) di background threads. Per aggiornare l'UI, bisogna implementare `onPostExecute()` che, una volta ricevuto il risultato del metodo `doInBackground()`, viene eseguito nel main thread, consentendoci di aggiornare l'UI. A questo punto basta invocare il metodo `execute()` dal main thread per eseguire l'AsyncTask.

#### Altri metodi

*   **onPreExecute()**: viene eseguito nel main thread prima di `doInBackgorund()`;
*   **publishProgress()**: può essere invocato da `doInBackground()` per pubblicare aggiornamenti nel main thread mentre la computazione continua. Ogni chiamata a questo metodo innesca l'esecuzione di `onProgressUpdate()` nel main thread;
*   **onProgressUpdate()**: viene eseguito nel main thread dopo l'invocazione di `publishProgress()`.
*   **onPostExecute()**: viene eseguito nel main thread dopo `doInBackground()`.
