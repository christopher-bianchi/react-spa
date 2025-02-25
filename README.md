# react-spa
A single page web application using React.


# Prerequisites
## Tools
- Install [Git](https://github.com/git-guides/install-git).
- Install [Docker](https://docs.docker.com/docker-for-mac/install/).


#  Installation  Steps:
1) `git clone https://github.com/christopher-bianchi/react-spa.git`
2) `cd react-spa`
3) `make local-setup`
4) `make run` (the command will print out a local URL to use)


# Development
`make run` will run a dev server with a volume mount for hot reloading.

## Code Formatting
```sh
make run-format
```

## Code Linting
```sh
make run-lint
```

## Interactive Terminal
```sh
# create an interactive session to run `npm` commands.
make run-terminal
```
