Arbitrary Hotkeys
=================

[![GitHub license](https://img.shields.io/github/license/Yuri-M-Dias/arbitrary-hotkeys.svg)](https://github.com/Yuri-M-Dias/arbitrary-hotkeys/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/release/Yuri-M-Dias/arbitrary-hotkeys.svg)](https://github.com/Yuri-M-Dias/arbitrary-hotkeys/releases/latest)

jQuery plugin that allows you to set arbitrary hotkeys for hyperlinks in your HTML page.

![demonstration_arbitrary-hotkeys](../../wiki/assets/images/demonstration.gif)

Usage
-----

* [**Download the script**](./arbitrary-hotkeys.js) or get the link to the script with CDN [here](https://cdn.rawgit.com/Yuri-M-Dias/arbitrary-hotkeys/master/arbitrary-hotkeys.js)
* Import both ***jQuery*** and ***arbitrary-hotkeys.js*** in your HTML *head*, example:
```javascript
<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="js/arbitrary-hotkeys.js"></script>
```
* Create a HTML tag inside *head* named "***hotkey***" and list the hotkeys you want 
	in this form: <br> `<hotkey key="your_hotkey" targetId="id_of_your_html_hyperlink"></hotkey>` (*a* HTML tag) <br>
	Example:
```html
    <hotkey key="git" targetId="github"></hotkey>
    <hotkey key="goo" targetId="google"></hotkey>
```
For this example of hiperlink in HTML *body*:
```html
<a id="google" href="https://plus.google.com">Google+</a>
<a id="github" href="https://github.com">GitHub</a>
```

* Enjoy!

An **example** of HTML document using ***arbitrary-hotkeys.js***: [Example](https://github.com/gustavosotnas/startpage.rwrt/blob/master/ead.inf.ufg.html)

Troubleshooting
---------------

**Arbitrary Hotkeys doesn't work with *Ctrl*, *Alt* and *Shift* buttons!**

* Arbitrary Hotkeys was made for setting up keystrokes in web pages from strings, like "f", "ja", "trello" with usage inside user's HTML (not in a *script*), and it doesn't support modifiers.

License
-------
Arbitrary Hotkeys is distributed under the terms of the **MIT License**. See the LICENSE file for details.

Bug tracker
-----------
Found a bug? Want to suggest a new feature or improvement? Let us know [here](../../issues) on GitHub!

Authors
-------
 * Yuri Dias – <https://www.linkedin.com/in/yuri-pereira-b5b589a8>
 * Gustavo Moraes – <http://about.me/gustavosotnas>

Arbitrary Hotkeys is reusing code by Christian Brassat and Jukka Svahn:
<https://github.com/crshd/startpage.rwrt/blob/master/js/script.js>

### Pull Request
Contributors are welcome! [Issues - arbitrary-hotkeys](../../issues)
