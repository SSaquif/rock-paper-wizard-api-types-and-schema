# Rock Paper Wizard API Types and Schema

<!--toc-->

<!--stoptoc-->

> Folder structure to be decided
> Let's just get things working first

## NPM publishing

> Will move this to it's own repo or gist

- npm link and publish should not interfere with each other as per this [stacko answer](https://stackoverflow.com/questions/36043423/how-can-i-switch-between-a-linked-npm-dependency-in-development-and-an-install)
- [publishing to npm: quick vid Matt P](https://www.youtube.com/watch?v=eh89VE3Mk5g)
- [npm link](https://www.youtube.com/watch?v=ooWJMd_1WjU)

### NPM link

Npm link is a way to test your package locally without having to publish it to npm.

- It creates a symlink in the global folder to your package.
- Then you can link your project to that symlink using the package name.
- This way you can test your package in a real project without having to publish it to npm after every change.

In your package folder:

```bash
npm link
```

In your project folder:

```bash
npm link your-package-name
```

### NPM unlink

To remove the symlink:

```bash
npm unlink your-package-name
```

Sometimes I have to unlink and link again in the Server folder to get the changes to take effect.
Need to figure out why this is happening.

The error I get is something related to CommonJS and ESM modules but that doesn't seem to be the actual issue.
