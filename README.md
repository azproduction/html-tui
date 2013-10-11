# html-cli

HTML to TUI (Text user interface) renderer. It is like TurboVision but in pure HTML, CSS and JavaScript

## Example

```
 Left   File   Command   Options   Right                                          
┌<─/var/log/nginx─────────────────────v>┐┌<─~/Documents/html-cli───────────────v>┐
│       Name        │ Size │   MTime    ││       Name        │ Size │   MTime    │
│/..                │  4096│Nov 16 22:24││/..                │UP-DIR│Oct 11 20:30│
│/debian            │  4096│Nov 16 22:24││/.idea             │   340│Oct 12 00:59│
│ Makefile          │  4096│Nov 16 22:24││/lib               │   170│Oct 11 23:59│
│                                       ││ Makefile          │  4096│Nov 16 22:24│
│                                       ││                                       │
│                                       ││                                       │
│                                       ││                                       │
└───────────────────────────────────────┘└───────────────────────────────────────┘
~/Documents/html-cli$ node index.js                                               
                                                                                  
 1Help   2Menu   3View   4Edit   5Copy   6RenMov 7Mkdir  8Delete 9PullDn 10Quit   
```
