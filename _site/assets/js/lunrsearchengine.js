
var documents = [{
    "id": 0,
    "url": "/biol-lab-intro/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "/biol-lab-intro/about",
    "title": "Memoirs, a free minimalist Jekyll blogging theme with modern design",
    "body": "This website is a demonstration to see Memoirs Jekyll theme in action. The theme is compatible with Github pages, in fact even this demo itself is created with Github Pages and hosted with Github.  Get Memoirs for Jekyll → "
    }, {
    "id": 2,
    "url": "/biol-lab-intro/authors",
    "title": "Authors",
    "body": "{% for author in site. authors %}                       {% if author[1]. gravatar %}                {% else %}                {% endif %}                  {% if author[1]. web %}                       {% endif %}          {% if author[1]. twitter %}                      {% endif %}          {% if author[1]. email %}                      {% endif %}                                     {{ author[1]. display_name }}:         {{ author[1]. description }}                {% endfor %}"
    }, {
    "id": 3,
    "url": "/biol-lab-intro/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "/biol-lab-intro/contact",
    "title": "Contact",
    "body": "  Please send your message to {{site. name}}. We will reply as soon as possible!   "
    }, {
    "id": 5,
    "url": "/biol-lab-intro/",
    "title": "Home",
    "body": "  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "/biol-lab-intro/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "/biol-lab-intro/page2/",
    "title": "Home",
    "body": "  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 8,
    "url": "/biol-lab-intro/page3/",
    "title": "Home",
    "body": "  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 9,
    "url": "/biol-lab-intro/%E3%81%93%E3%81%AE%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/",
    "title": "このサイトについて",
    "body": "2021/11/25 - サイトの紹介文。研究室配属までの流れ　など "
    }, {
    "id": 10,
    "url": "/biol-lab-intro/neumol/",
    "title": "神経分子機能研究室",
    "body": "2021/11/24 - 神経分子機能研究室の紹介文 "
    }, {
    "id": 11,
    "url": "/biol-lab-intro/devpro/",
    "title": "発生生物学研究室",
    "body": "2021/11/23 - 発生生物学研究室の紹介文 "
    }, {
    "id": 12,
    "url": "/biol-lab-intro/celgen/",
    "title": "細胞遺伝学研究室",
    "body": "2021/11/22 - 細胞遺伝学研究室の紹介文 "
    }, {
    "id": 13,
    "url": "/biol-lab-intro/molgen/",
    "title": "分子遺伝学研究室",
    "body": "2021/11/21 - 分子遺伝学研究室の紹介文 "
    }, {
    "id": 14,
    "url": "/biol-lab-intro/horcel/",
    "title": "植物発生生理学研究室",
    "body": "2021/11/20 - 植物発生生理学研究室の紹介文 "
    }, {
    "id": 15,
    "url": "/biol-lab-intro/celche/",
    "title": "細胞生化学研究室",
    "body": "2021/11/19 - 細胞生化学研究室の紹介文 "
    }, {
    "id": 16,
    "url": "/biol-lab-intro/evogen/",
    "title": "進化遺伝学研究室",
    "body": "2021/11/18 - 進化遺伝学研究室の紹介文 hello "
    }, {
    "id": 17,
    "url": "/biol-lab-intro/neubio/",
    "title": "神経生物学研究室",
    "body": "2021/11/17 - 神経生物学研究室の紹介文 "
    }, {
    "id": 18,
    "url": "/biol-lab-intro/pladev/",
    "title": "植物環境応答研究室",
    "body": "2021/11/16 - 植物環境応答研究室の紹介文 "
    }, {
    "id": 19,
    "url": "/biol-lab-intro/envmic/",
    "title": "環境微生物学研究室",
    "body": "2021/11/15 - 環境微生物学研究室の紹介文 "
    }, {
    "id": 20,
    "url": "/biol-lab-intro/anieco/",
    "title": "動物生態学研究室",
    "body": "2021/11/14 - 動物生態学研究室の紹介文 "
    }, {
    "id": 21,
    "url": "/biol-lab-intro/plaeco/",
    "title": "植物生態学研究室",
    "body": "2021/11/13 - 植物生態学研究室の紹介文 "
    }, {
    "id": 22,
    "url": "/biol-lab-intro/anisys/",
    "title": "動物系統分類学研究室",
    "body": "2021/11/12 - 動物系統分類学研究室の紹介文 "
    }, {
    "id": 23,
    "url": "/biol-lab-intro/plasys/",
    "title": "植物系統分類学研究室",
    "body": "2021/11/11 - 植物系統分類学研究室の紹介文 "
    }, {
    "id": 24,
    "url": "/biol-lab-intro/muscle/",
    "title": "運動分子生物学研究室【HPS】",
    "body": "2021/11/10 - 運動分子生物学研究室【HPS】の紹介文 "
    }];

var lunr = require('./lib/lunr.js');
require('./lunr.stemmer.support.js')(lunr);
require('./lunr.ru.js')(lunr);
require('./lunr.multi.js')(lunr);

var idx = lunr(function () {


    this.ref('id');
    this.field('title');
    this.field('body');

    this.use(lunr.multiLanguage('en', 'ru'));

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});