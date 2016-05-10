// see:
// http://ejohn.org/blog/javascript-micro-templating/

// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();


// Demo data.
$(function(){

  var dataObject = {
    members:[
    {id:1, name:"border", text:"<h1>Даценко Владимир Васильевич</h1>"},
    {id:2, name:"border", text:"<p>Студент группы GoFE3</p>"},
    {id:3, name:"answers", text:"<p>Хочу учить фронтенд потому, что:</p>"},
    {id:4, name:"answers", text:"Всегда интересовался"},
    {id:5, name:"answers", text:"Новое направление развития"},
    {id:6, name:"answers", text:"Хочу в крупную компанию"},
    {id:7, name:"contacts", text:"<p>Мой контактный телефон <br>380633057280</p>"},
    {id:8, name:"fuga", text:"<span>Мой профиль в контакте</span>"},
    {id:9, name:"answers", text:"<a href='https://vk.com/shemar' target='_blank'>vk.com</a>"},
    {id:10, name:"footer", text:"<span>Мой фидбек:</span> <br>"},
    {id:11, name:"footer", text:"<span>Вытянуто из JS</span>"}
    ]
  }; // -> End of dataObject

  var results = document.getElementById("results");
  results.innerHTML = tmpl("item_tmpl", dataObject);

});
