---
layout: rete
title: Appunti di Rete&#58; Protocolli di routing
category: Informatics
tags: bgp, ospf, rip, routing
image: binary-world.jpg
---
I protocolli di routing permettono ai router di una rete di comunicare tra loro per l'aggiornamento delle tavole di routing. Vi sono protocolli per il routing **intradominio** (Routing Information Protocol, Open Shortest Path First) e **interdominio** (Border Gateway Protocol).

## Routing basato sul vettore delle distanze

Nel [routing basato sul vettore delle distanze](https://en.wikipedia.org/wiki/Distance-vector_routing_protocol), ogni nodo mantiene un vettore delle distanze minime dagli altri nodi. All'inizio, i nodi conoscono solo la distanza che li separa dai nodi a cui sono direttamente collegati, tuttavia, attraverso la condivisione della tavole di routing con i nodi vicini, possono scoprire la topologia dell'intera rete. Il [Routing Information Protocol](https://en.wikipedia.org/wiki/Routing_Information_Protocol) (RIP) è basato sul vettore delle distanze ed è _semplice_ poiché assume che il costo di un passaggio da un hop ad un altro sia unitario.

## Routing basato sullo stato dei collegamenti

Nel [routing basato sullo stato dei collegamenti](https://en.wikipedia.org/wiki/Link-state_routing_protocol), ogni nodo costruisce la propria tavola di routing basandosi sull'intera rete, interpretata come un grafo, attraverso l'[algoritmo di Dijkstra](https://en.wikipedia.org/wiki/Dijkstra's_algorithm). All'inizio, ogni nodo ha una conoscenza parziale della rete, ovvero conosce solo i collegamenti di cui fa parte, e condivide queste informazioni con gli altri nodi attraverso dei pacchetti, denominati Link State Packet (LSP). Il protocollo [Open Shortest Path First](https://en.wikipedia.org/wiki/Open_Shortest_Path_First) è basato sullo stato dei collegamenti.

## Routing basato sul vettore dei cammini

Il routing interdominio è basato sul [vettore dei cammini](https://en.wikipedia.org/wiki/Path_vector_protocol), nel quale i vari sistemi autonomi hanno un nodo **portavoce** che condivide la propria tavola di routing con il sistema autonomo vicino. Tale tavola di routing conterrà le possibili destinazioni associate al cammino per raggiungerle tra i sistemi autonomi. Il [Border Gateway Protocol](https://en.wikipedia.org/wiki/Border_Gateway_Protocol) è basato sul vettore dei cammini.
