---
title: Creating Keyboard Shortcuts for zsh & Hyper
date: '2020-11-21'
---

## TL;DR

If you're just looking for a solid list of keyboard shortcuts for zsh – [this is a great one](https://github.com/ohmyzsh/ohmyzsh/blob/master/lib/key-bindings.zsh)

I didn't use the list because I found it too exhaustive, but I think it's a good reference!

## Keyboard Shortcuts for Zsh

I just learned that typing `Option + W` will delete the last word you've typed in your Terminal, which is super helpful because I'm constantly mistyping commands, <span role="img" aria-label="facepalm">🤦🏼‍♂️</span> but I'm lazy, so I decided to create my own keyboard shortcut for it

After lots of investigating, I added this line to my `.zshrc` file:

```zsh
bindkey "q" backward-kill-word
```

The `bindkey` command follows the pattern:

```zsh
bindkey "[key sequence]" [command]
```

For example, the keyboard shortcut to map `Control + N` to delete the last character you typed is:

```zsh
bindkey "^N" backward-delete-char
```

## Adding More Shortcuts

To add your own shortcuts, you'll need to find the key sequence and command

To find a key sequence, press `Control + V` followed by a key or key combination

All the available commands can be found [on the zsh website](http://zsh.sourceforge.net/Doc/Release/Zsh-Line-Editor.html#Standard-Widgets), but it's a long list so check the link in the TL;DR section above for a list of common ones!

## Keyboard Shortcuts for Hyper

You can add keyboard shortcuts in Hyper by opening a new tab, pressing `Command + ,`, and adding the following to your `.hyper.js` file:

```js
keymaps: {
  // Example
  'window:devtools': 'cmd+alt+o',
}
```

You can find more shortcuts [here](https://github.com/vercel/hyper/blob/master/app/keymaps/darwin.json)

> These shortcuts are for the Darwin operating system, but there are others for linux and win32!

## P.S

If you're like me and you regret adding all the recommended keybindings, and you're using vim, open your `.zshrc` file, press `Shift + V`, select lines by using `j` and `k`, then press `d` to delete them!

## Cheers 🎉

Thanks for reading! <span role="img" aria-label="smiley face">:~)</span>
