---
layout: post
title: "Maintainable Informational Websites in Node.js"
description: ""
category: Software
tags: ["freelance", "informational website", "node", "javascript"]
---
{% include JB/setup %}

## How to build a stable site with a JavaScript server

It's an easy assumption that using a language like JavaScript for a server only applies to applications that need fast computation. However, I find there are a few benefits beyond speed that help with building simple informational sites. Here's a quick rundown on how I use includes, templating, and caching to speed up development, maintainability, and page load times with Node.js.
<!--more-->

## Includes

When I use includes in a Node.js project, I create a "boilerplate" layout which applies to all pages on the site. I use the `ejs-locals` plugin. Here's an example:

```javascript
<!DOCTYPE html>
<html lang="en" class="bg-home <%=page%>">
  <head>
    <title>WebSite Name | <%=pageName%></title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href='img/favicon.ico'/>
    <link rel='stylesheet' href='css/main.css' />
    <link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css' />
  </head>

  <body>
    <div class="container">
      <div class="tabs">
        <div class="logo"></div>
        <div class="right">
          <a class="tab <%-(page == '')? 'active':'' -%>" href="/">HOME</a>
          <a class="tab <%-(page == 'page2')? 'active':'' -%>" href="/page2">PAGE 2</a>
        </div>
      </div>
      <div class="content">
        <%-body -%>
      </div>
      <div class="footer">
        <a href="mailto:info@example.org"><i class="fa fa-envelope"></i> info@example.org</a>
      </div>
    </div>
  </body>
</html>
```

Each label enclosed by <%- -%> tags describes another resource. This sets up a nice flow for the entire site, without having to repeatedly update the structure each time a minor detail needs changing.

## Templating

Templates build off of includes by defining which resources are replaced. For example, if a certain page requires JavaScript resources, you can list them all without including them across the entire site. Make sure to set up your `view options` in app.js:

```javascript
self.initializeServer = function() {
        self.createRoutes();
        self.app = express();
        self.app.engine('ejs', require('ejs-locals'));
        self.app.set('view engine', 'ejs');
        self.app.set('view options', { layout: "boilerplate" });
        self.app.set('views', __dirname + '/templates');
        self.app.use(express.bodyParser());
        self.app.use(express.methodOverride());
        self.app.use(express.compress());
        self.app.use(express.favicon( __dirname + '/favicon.ico'));
        self.app.use(express.static(path.join(__dirname, 'public')));
        self.app.get('/*', self.get_routes['/*']);
    }
```

## Caching

Another way to speed up page load times is to pre-load the templated pages into memory. As another example, I've used Jade as my markup language, and I call `Jade.compile` on each page before the app fully starts. This way, the client doesn't wait for the template, it just gets the response.

```javascript
var navigation = [
  { url: "/*", uri: "home", title: "Home Page" }
];

var templates = [];

var getTemplate = function (filename) {
  var template = fs.readFileSync(__dirname + '/views/' + filename + '.jade', 'utf8');
  return jade.compile(template, {filename: __dirname + '/views/' + filename + '.jade', pretty: true});
};

for(var i=0; i<navigation.length; i++) {
  templates[i] = getTemplate(navigation[i].uri);
}

var render = function(req, res, index) {
  res.send(templates[index]({title: navigation[index].title}));
};
```

Then, I define each route with the template that it will return.

## Tradeoffs

Using includes, templating, or caching come with their own downsides. If you have to learn a templating framework, this is a time cost you should consider. Using includes doesn't make sense if your website is only one page. Allowing pages to be cached in memory wouldn't provide much benefit if the templates are quick to compile. Overall though, if you're creating a simple website, try making it even easier to maintain with these methods.
