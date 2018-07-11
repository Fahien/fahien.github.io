---
layout: devember
title: Devember&#58; Kill the zombies
category: Informatics
tags: c, signal, socket, zombies
image: devemberisnow.png
---
In the [previous post]({{ site.baseurl }}/2015/12/05/devember-recursive-echo-server), we have seen the server spawning child processes to handle multiple incoming connections at the same time. However, we must not forget to handle these processes when they end otherwise they will remain in memory as _zombies_.

When a child process terminates, the operating system sends a `SIGCHLD` signal to the father which by default do not do anything. To remove the zombies (dead child processes), the father must register a handler function for the `SIGCHLD` signal:

```c
if (signal(SIGCHLD, handle_zombies) < 0) {
	perror("signal");
	return -1;
}
```

Below it's shown the handler function. By calling the **waitpid** function with `-1` as first parameter, the father process waits for the termination of any one of its children. The `stat` variable will contain information about the exit status.

```c
void handle_zombies(int signo) {
    pid_t pid;
    int stat;

    while ((pid = waitpid(-1, &stat, WNOHANG)) > 0) {
        printf("Child %d terminated with exit status %d\n", pid, stat);
    }
}
```

The complete code can be found on this [repository](https://github.com/Fahien/exsocket).
