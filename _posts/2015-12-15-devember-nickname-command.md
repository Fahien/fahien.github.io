---
layout: devember
title: Devember&#58; Nickname command
category: Informatics
tags: c, chat, command, nickname, server, socket 
image: devemberisnow.png
---
After transforming the server in a [chat room](http://www.fahien.me/2015/12/14/devember-improved-echo-server), I thought it was a good idea to add a command to set your nickname. So, when a client connects, the server expects to receive a message starting with `/nickname` followed by the _actual nickname_:

```c
#define MAXNICK 32
// ...
char nicknames[FD_SETSIZE][MAXNICK];
// Processing the ith client
if (nicknames[i][0] == 0) {
    if (strncmp(buff, "/nickname", 9) == 0) {
        sscanf(buff, "/nickname %s\n", nicknames[i]);
        sprintf(buff, "%s has joined the chat\n", nicknames[i]);
    } else {
        sprintf(buff, "Error, expecting /nickname \n");
        exso_writen(client[i], buff, strlen(buff));
        continue;
    }
}
```
If the nickname is already set, it is added to the _beginning_ of the message to be broadcast:

```c
char temp[MAXLINE];
sprintf(temp, "%s: %s", nicknames[i], buff);
sprintf(buff, "%s", temp);
// ...
for (i = 0; i < FD_SETSIZE; i++) {
    if (sockfd == client[i] || client[i] == -1) {
        continue;
    }
    if (exso_writen(client[i], buff, strlen(buff)) < 0) {
        perror("exso_writen");
    }
}
```
Finally, when a client logs off, the nickname will _reset_:

```c
// If there are no characters to read
if (n == 0) {
    close(sockfd);
    FD_CLR(sockfd, &allset);
    client[i] = -1;
    bzero(nicknames[i], MAXNICK);
}
```
The complete code can be found on this [repository](https://github.com/Fahien/exsocket).
