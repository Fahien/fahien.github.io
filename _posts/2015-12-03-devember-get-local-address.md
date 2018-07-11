---
layout: devember
title: Devember&#58; Get the local address
category: Informatics
tags: c, devember, local, socket
image: devemberisnow.png
---
[Yesterday]({{ site.baseurl }}/2015/12/02/devember-get-client-informations), we have seen how the server can retrieve the client address. Let's see today how an host can get the local address through the _getsockname_ function.

```c
struct sockaddr_in6 cliaddr;
socklen_t clilen = sizeof(cliaddr);
bzero(&cliaddr, clilen);
if (getsockname(sockfd, (struct sockaddr *) &cliaddr, &clilen) < 0) {
    perror("getsockname");
    return -1;
}
```
Then we convert the IPv6 address and port into the appropriate _host representation_ and can print:

```c
char clistr[INET6_ADDRSTRLEN];
inet_ntop(AF_INET6, &cliaddr.sin6_addr, clistr, INET6_ADDRSTRLEN);
printf("The current address is %s:%d\n", clistr, ntohs(cliaddr.sin6_port));
```
The complete code can be found on this [repository](https://github.com/Fahien/exsocket).
