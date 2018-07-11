---
layout: devember
title: Devember&#58; Recursive echo Server
category: Informatics
tags: c, devember, echo, recursive, server, socket
image: devemberisnow.png
---
Today I'm going to introduce two useful functions for our network programs, `exso_readln()` and `exso_writen()`, clearly deriving from [these](https://www.informit.com/articles/article.aspx?p=169505&seqNum=9) and used in a [course](https://sites.google.com/a/unisa.it/forciuoli-insegnamenti/home/reti-di-calcolatori) I'm attending at university.

The **exso_readln** function reads a line (a string ending with `\n`) from a socket buffer and automatically adds `\0` at the end. The **exso_writen** function writes _n_ bytes into a socket buffer. See here for more details: [libexso.c](https://github.com/Fahien/exsocket/blob/master/libexso.c).

The [daytime server]({{ site.baseurl }}/2015/12/01/devember-daytime/) presents an **iterative** behaviour, therefore it can serve only one client at a time. To serve more than one client at a time, I should make a recursive server which spawns a _child_ process to manage every incoming connection. This is achieved by calling `fork()`:

```c
pit_t childpid;
if ((childpid = fork()) == 0) {
	close(listenfd);
	server_echo(connfd);
	return 0;
}
```
The child process must close the listening socket before executing its tasks. Meanwhile, the _father_ closes the connected socket and returns waiting for new requests. **Server_echo** is just a function I've made which executes all tasks of the server child process. You can also observe the new read and write functions:

```c
void server_echo(int sockfd) {
	ssize_t n;
	char line[MAXLINE];
	while (1) {
		if ((n = exso_readln(sockfd, line, MAXLINE)) == 0) {
			return; // connection closed by the other end
		}
		exso_writen(sockfd, line, n);
	}
}
```
The complete code can be found on this [repository](https://github.com/Fahien/exsocket).
