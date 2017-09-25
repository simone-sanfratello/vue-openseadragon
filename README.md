# vue-openseadragon

OpenSeaDragon component for Vue.js

https://openseadragon.github.io/

OpenSeaDragon version bundled: **v. 2.3.1**

## Install

````bash
npm i vue-openseadragon --save
````

## Example

````html
<script type="text/javascript" src=".../dist/vue-openseadragon.min.js"></script>

<vue-openseadragon :id="'image-viewer'" 
  :options="{
    tileSources: {
      type: 'image'
      url: 'url-to-image.jpg'
    },
    maxZoomLevel: 5,
    ajaxWithCredentials: true,
    showNavigator: true,
    homeFillsViewer: true,
    navigatorId: 'image-navigator',
    toolbar: 'image-toolbar',
    zoomInButton: 'image-toolbar-zoomin',
    zoomOutButton: 'image-toolbar-zoomout',
    homeButton: 'image-toolbar-reset',
    fullPageButton: 'image-toolbar-fullscreen'
  }">
</vue-openseadragon>
````

See https://openseadragon.github.io/docs/OpenSeadragon.html#.Options for full options

### Todo

- doc i18n, custom messages
  ``:i18n="i18n" :messages="messages"``
- add debug option

## License

The MIT License (MIT)

Copyright (c) 2017 braces lab

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
