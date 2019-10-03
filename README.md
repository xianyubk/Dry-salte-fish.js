# Dry-salte-fish.js

这是一个由咸鱼报刊工作室维护的仓库。主要用来把你的JavaScript代码像咸鱼一样腌制，压缩。

由于名字太长，所以下面都简称为“fish.js”。

如果你想帮助我们开发，如果你是咸鱼报刊工作室成员，请创建一个分支，如果你不是，请Fork这个库。


## Getting Started

现在，我们来试一试压缩一下从`<textarea>`获取的代码。

首先，引入`fish.js`。

然后，看看我们从`<textarea>`获取的代码：

```js
function frish(name, color, canSwim) {
    this.name = name;
    this.color = color;
    this.canSwim = canSwim;
    this.hello = function (){
        alert('Hello! My name is '+ this.name + '.');
    }
}

let doodoo = new frish('Doodoo', 'blue', true);
doodoo.hello();
```

然后，使用`dry()`来压缩代码，它会返回：

```js
function frish(name, color, canSwim) { this.name = name; this.color = color; this.canSwim = canSwim; this.hello = function (){ alert('Hello! My name is '+ this.name + '.'); } } let doodoo = new frish('Doodoo', 'blue', true); doodoo.hello();
```

哦吼！被压缩的代码！！！！我们成功压缩了一段代码！！！

这只是简单的"Getting Started"，如果想试试更多的教程，请浏览我们的[Wiki](https://github.com/xianyubk/Dry-salte-fish.js/wiki)。
