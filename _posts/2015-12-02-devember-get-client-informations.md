---
layout: devember
title: Devember&#58; Get Client informations
category: Informatics
tags: c, devember, server, socket
image: devemberisnow.png
---
[Previously]({{ site.baseurl }}/2015/12/01/devember-daytime), the Daytime Server invoked the _accept_ function in this way:

```c
accept(listenfd, (struct sockaddr *) NULL, NULL);
```
We could use this function in all its power by passing as an argument a _sockaddr structure_ which will be filled with informations about the client:

```c
struct sockaddr_in6 cliaddr;
socklen_t clilen;
clilen = sizeof(cliaddr);
bzero(&cliaddr, clilen);
accept(listenfd, (struct sockaddr *) &cliaddr, &clilen);
```
Remember, you can not print the address and port before you convert these informations into the appropriate _host representation_:

```c
inet_ntop(AF_INET6, &cliaddr.sin6_addr, buff, INET6_ADDRSTRLEN);
printf("Serving new client from %s:%d\n", buff, ntohs(cliaddr.sin6_port));
```
The complete code can be found on this [repository](https://github.com/Fahien/exsocket).
