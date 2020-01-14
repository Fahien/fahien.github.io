---
layout: rete
title: Appunti di Rete&#58; Controllo degli errori nello strato di collegamento
category: Informatics
tags: arq, controllo degli errori, go-back-n arq, selective repeat arq, stop-and-wait, stop-and-wait arq
image: binary-world.jpg
---
**Stop-and-wait ARQ**: Il protocollo [Stop-and-wait ARQ](https://en.wikipedia.org/wiki/Stop-and-wait_ARQ) aggiunge allo **stop-and-wait**, nel quale il mittente dopo aver spedito un frame aspetta il riscontro da parte del destinatario, il meccanismo [Automatic Repeat reQuest](https://it.wikipedia.org/wiki/Automatic_repeat_request) (ARQ) per il controllo degli errori. I frame di dati e di riscontro hanno un campo di 1 bit che descrive il **numero di sequenza**, che quindi può essere `0` o `1`. Il destinatario non spedisce riscontri per i frame danneggiati e quelli ricevuti fuori ordine. Nel momento in cui non riceve il riscontro entro un limite di tempo, il mittente rispedisce il frame. Tale protocollo risulta molto **ineffieciente**: poiché nel canale di comunicazione ci sarà sempre al più un frame, potremmo non utilizzarne a pieno la capacità trasmissiva.

**Go-back-N ARQ**: Il protocollo [Go-back-N ARQ](https://en.wikipedia.org/wiki/Go-Back-N_ARQ) spedisce più di un frame, mantenendo una copia per ognuno nel caso sia necessario rispedirli, prima di riceverne riscontro. Utilizza _m_ bit per il campo del numero di sequenza, per cui variano nell'intervallo [0, 2ᵐ - 1]. Il mittente mantiene una **finestra scorrevole** su questi numeri di ampiezza Sₗₑₙ = 2ᵐ - 1, con due indici: Sₚ per indicare il primo frame ancora in attesa di riscontro e Sₙ per indicare il prossimo frame da spedire. Il destinatario ha invece una finestra di grandezza `1`, poiché a lui interessa un solo frame, che rispetti l'ordine, mentre tutti gli altri vengono scartati.

![Finestra scorrevole del mittente per il Go-back-N ARQ con m = 3]({{ site.baseurl }}/static/images/go-back-n-arq.png)

*Finestra scorrevole del mittente per il Go-back-N ARQ con m = 3*

Quando il timeout per i frame in attesa di riscontro scade, l'indice Sₙ ritorna indietro (go-back) al primo frame senza riscontro. In un canale in cui si verificano spesso degli errori, questo protocollo risulta inefficiente: un frame danneggiato può implicare la rispedizione di molti frame, ovvero un rallentamento della trasmissione.

**Selective Repeat ARQ**: Il protocollo [Selective Repeat ARQ](https://en.wikipedia.org/wiki/Selective_Repeat_ARQ) risolve i problemi del Go-back-N ARQ evitando di rispedire i frame che arrivano fuori ordine, concentrandosi solo su quelli effettivamente danneggiati. Sia la finestra del mittente che quella del destinatario hanno ampiezza di 2ᵐ⁻¹. Questo significa che i frame possono arrivare fuori ordine senza essere scartati dal destinatario.
