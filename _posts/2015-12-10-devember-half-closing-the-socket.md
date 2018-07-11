---
layout: devember
title: Devember&#58; Half-closing the socket
category: Informatics
tags: c, client, devember, shutdown, socket
image: devemberisnow.png
---
In the wake of the [previous post]({{ site.baseurl }}/2015/12/09/devember-io-multiplexing-using-select), another way to improve the robustness of the client code is by shutting down the _write half_ of the connection once all reading operations from _standard input_ end. This is performed by calling the **shutdown** function:

```c
char stdineof = 0;
// ...
if (FD_ISSET(fileno(fp), &readset)) {
	if (fgets(sendline, MAXLINE, fp) == NULL) {
		stdineof = 1;
		shutdown(sockfd, SHUT_WR);
		FD_CLR(fileno(fp), &readset);
		continue;
	}
	if (exso_writen(sockfd, sendline, strlen(sendline)) < 0) {
		perror("exso_writen");
		return -1;
	}
}
```
The complete code can be found on this [repository](https://github.com/Fahien/exsocket).
