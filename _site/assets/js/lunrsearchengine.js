
var documents = [{
    "id": 0,
    "url": "/lab-intro/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "/lab-intro/about",
    "title": "Memoirs, a free minimalist Jekyll blogging theme with modern design",
    "body": "This website is a demonstration to see Memoirs Jekyll theme in action. The theme is compatible with Github pages, in fact even this demo itself is created with Github Pages and hosted with Github.  Get Memoirs for Jekyll → "
    }, {
    "id": 2,
    "url": "/lab-intro/authors",
    "title": "Authors",
    "body": "{% for author in site. authors %}                       {% if author[1]. gravatar %}                {% else %}                {% endif %}                  {% if author[1]. web %}                       {% endif %}          {% if author[1]. twitter %}                      {% endif %}          {% if author[1]. email %}                      {% endif %}                                     {{ author[1]. display_name }}:         {{ author[1]. description }}                {% endfor %}"
    }, {
    "id": 3,
    "url": "/lab-intro/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "/lab-intro/contact",
    "title": "Contact",
    "body": "  Please send your message to {{site. name}}. We will reply as soon as possible!   "
    }, {
    "id": 5,
    "url": "/lab-intro/",
    "title": "Home",
    "body": "  このサイトは生命科学科の学生に向けて公開しています。外部にURL等を公開しないようお願いします。  公開期間： 〜2月4日(金)  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "/lab-intro/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "/lab-intro/page2/",
    "title": "Home",
    "body": "  このサイトは生命科学科の学生に向けて公開しています。外部にURL等を公開しないようお願いします。  公開期間： 〜2月4日(金)  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 8,
    "url": "/lab-intro/page3/",
    "title": "Home",
    "body": "  このサイトは生命科学科の学生に向けて公開しています。外部にURL等を公開しないようお願いします。  公開期間： 〜2月4日(金)  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 9,
    "url": "/lab-intro/%E3%81%93%E3%81%AE%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/",
    "title": "研究室選びのポイント",
    "body": "2021/11/25 - 研究室選びのポイント:  研究室の名前にダマされない     研究室の名前からは想像できないような研究をしていることもありますし、研究室の名前のようなことを本当に研究しているとは限りません。    実際にどのような研究をしているのか     先輩から聞いた話、友達から聞いた噂、今までの授業内容、などの情報だけを当てにしていませんか？研究に関しては先生に直接聞きに行くのが一番です。    研究室で何ができるのか     卒業研究でどのようなことができるのか聞いてみましょう。自分で考えたテーマで研究させてくれる研究室もありますし、大きなテーマに沿ってみんなで協力して研究を進めている研究室もあります。   学外の研究機関から指導を受けられる研究室もあります。   卒研生として配属されたら、どのような研究が可能か、具体的に考えて見ましょう。    研究室の雰囲気も重要です。     本サイトで雰囲気だけでも感じてもらえればと思います。       研究室配属までの流れ:   研究室紹介     各研究室の先輩に直接話を聞けます。    アンケート調査①・②     その時点で各研究室を希望する人数を集計します。    予備調査     アンケート調査の結果や研究室紹介を参考にして、希望の研究室を決定し、提出します。    配属先決定     人数調整などを行い、指導教員の許可をもらった上で配属先が決定します。    Topへ戻る → "
    }, {
    "id": 10,
    "url": "/lab-intro/neumol/",
    "title": "神経分子機能研究室",
    "body": "2021/11/24 - こんにちは。神経分子機能研究室です。私たちはショウジョウバエ、培養細胞、マウスを用いて、脳の病気について研究しています。現在3名の先生、博士3人、修士3人、卒研生4人が所属しています。ゼミでは、研究の進捗状況や、論文の紹介を行います。時間は月曜日と木曜日の10時〜12時です。和気あいあいとした楽しい雰囲気の研究室です。興味がある方は是非一度見学に来てください☺️ 卒研テーマ例:  摂食と細胞内エネルギー代謝に注目した脳アンチエイジング アルツハイマー病など加齢依存性神経変性疾患の発症メカニズム 脳老化と疾患におけるミトコンドリアの役割ゼミの回数:  週２回"
    }, {
    "id": 11,
    "url": "/lab-intro/devpro/",
    "title": "発生生物学研究室（準備中）",
    "body": "2021/11/23 - 準備中です。 "
    }, {
    "id": 12,
    "url": "/lab-intro/celgen/",
    "title": "細胞遺伝学研究室（準備中）",
    "body": "2021/11/22 - 準備中です。 "
    }, {
    "id": 13,
    "url": "/lab-intro/molgen/",
    "title": "分子遺伝学研究室",
    "body": "2021/11/21 -  加藤グループ     B4：1名   D1：1名    得平グループ     B4：4名   M1：4名   M2：1名   D2：1名   得平グループでは、シアノバクテリアを用いて微生物の環境適応機構を分子レベルで解明することを目指して研究を進めています。毎週月曜日の朝10時から12時に論文紹介、研究の進捗報告をするゼミを行っています。コアタイムなどは特にありません。研究室の雰囲気は和やかで、来たい時間に来て実験を行い帰りたい時間に帰ることができます。スケジュールの自由度が高いので、自分で計画をしっかり立てることのできる人に向いている研究室です。 ※加藤先生の研究室に興味がある方は直接アポを取るようお願いします。 卒研テーマ例:  大腸菌における酸化ストレス耐性関連遺伝子の機能解析 (加藤G) ゲノム縮小大腸菌の実験室進化 (加藤G) Anabaena sp. PCC7120におけるレスポンスレギュレーターOrrAをリン酸化するヒスチジンキナーゼの同定 (得平G) Anabaena variabilisにおけるアキネート形成に関与する新規遺伝子の同定 (得平G) 窒素固定型シアノバクテリアを利用した窒素と二酸化炭素からのシアノフィシン生産 (得平G) AzollaとNostoc azollaeの共生メカニズムの解明 (得平G)ゼミの回数:  不定期 (加藤G) 週１回 (得平G)"
    }, {
    "id": 14,
    "url": "/lab-intro/horcel/",
    "title": "植物発生生理学研究室（準備中）",
    "body": "2021/11/20 - 準備中です。 "
    }, {
    "id": 15,
    "url": "/lab-intro/celche/",
    "title": "細胞生化学研究室（準備中）",
    "body": "2021/11/19 - 準備中です。 "
    }, {
    "id": 16,
    "url": "/lab-intro/evogen/",
    "title": "進化遺伝学研究室（準備中）",
    "body": "2021/11/18 - 準備中です。 "
    }, {
    "id": 17,
    "url": "/lab-intro/neubio/",
    "title": "神経生物学研究室（準備中）",
    "body": "2021/11/17 - 準備中です。 "
    }, {
    "id": 18,
    "url": "/lab-intro/pladev/",
    "title": "植物環境応答研究室（準備中）",
    "body": "2021/11/16 - 準備中です。 "
    }, {
    "id": 19,
    "url": "/lab-intro/pladev-narikawa/",
    "title": "植物環境応答研究室 光合成微生物グループ（成川グループ）",
    "body": "2021/11/16 - 植物環境応答研究室光合成微生物グループ（成川グループ）は、今年の4月に発足した新しい研究グループです。 現在はPIの成川以外に、特任助教1名、博士課程学生2名、修士課程学生2名が在籍しています。来年度は、現状、特任助教1名、博士課程学生1名、修士課程学生3名となる予定です。ゼミは月曜日の10時から1-2時間ほど行っています。隔週で鐘ケ江先生のグループと共同での論文ゼミ、合間の週には成川グループ内での研究進捗報告ゼミを行っています。後者は、特に事前に資料を準備する必要はなく、2週間の間に行った実験について、ノートやパソコンを参照しながら報告してもらうスタイルです。 研究室の雰囲気は、その年々のメンバーによって変動すると思うので、一概に言えませんが、PIの成川の方針は「個人主義」です。個別に仲良くするのは自由ですが、みんなで何かをしようというような強い同調圧力のあるような研究室にはしたくないです。 研究としては、光合成微生物であるシアノバクテリアを対象として、「光生物学」という学問分野を土台として、分子レベルから細胞集団レベルまでの階層で、光利用戦略を解明する研究を行っています。将来的には生態レベルの階層での視点も取り入れたいと思っています。また、近年は、上記の研究によって発見したユニークな光センサー群を改変し、分子イメージングやオプトジェネティクス（光遺伝学）に資する蛍光プローブ・光スイッチの開発をする応用的な研究にも取り組んでいます。 卒研テーマ例:  Acaryochloris属のシアノバクテリアの光利用戦略の解明 開環テトラピロール色素を合成する酵素の発見・改変 シアノバクテリオクロム型光受容体の発見・改変ゼミの回数:  週１回"
    }, {
    "id": 20,
    "url": "/lab-intro/envmic/",
    "title": "環境微生物学研究室（準備中）",
    "body": "2021/11/15 - 準備中です。 "
    }, {
    "id": 21,
    "url": "/lab-intro/anieco/",
    "title": "動物生態学研究室（準備中）",
    "body": "2021/11/14 - 準備中です。 "
    }, {
    "id": 22,
    "url": "/lab-intro/plaeco/",
    "title": "植物生態学研究室（準備中）",
    "body": "2021/11/13 - 準備中です。 "
    }, {
    "id": 23,
    "url": "/lab-intro/anisys/",
    "title": "動物系統分類学研究室（準備中）",
    "body": "2021/11/12 - 準備中です。 "
    }, {
    "id": 24,
    "url": "/lab-intro/anisys-adam/",
    "title": "動物系統分類学研究室(Systems behavior lab)",
    "body": "2021/11/12 - こんにちは！Adamラボです！私たちの研究室は、B4 3人、M1 1人　D2 1人 D3 1人　客員研究員 3人　准教授 1人で構成されています！ 半分以上が海外出身の研究者である多国籍なラボです！ ゼミは毎週水曜日の14:00〜1時間ほど行います。また、月に1回、動物生態学研究室とコラボしたセミナーを開催しています。 内容としては、自分の研究の進捗報告がメインで行っています！ 研究室の雰囲気は、自由です。いや、ほんとに自由です。驚くほど自由です。笑 やりたいことがあればいくらでもサポートしてくれる環境は整っていると思います！ 研究の概要としては、社会性昆虫に関する生態学や進化生物学、動物行動学に関する研究や小笠原諸島や沖縄などでの島嶼生物学に関する研究がメインです！ 材料としては、アリやハチなどの社会性昆虫を含む様々な生き物を扱っています。 グリーアノールを扱っている学生もいるので幅広く動物は選べると思います。 詳しく、気になる方は、以下のURLをクリックして読んでみてください！ https://adamcronin. org/ → 卒研テーマ例:  Collective performance in Camponotus ants Immune responsiveness in Lasioglossum bees Biodiversity impacts of invasive Anolis lizards in Ogasawaraゼミ回数:  週１回未満"
    }, {
    "id": 25,
    "url": "/lab-intro/plasys/",
    "title": "植物系統分類学研究室（準備中）",
    "body": "2021/11/11 - 準備中です。 "
    }, {
    "id": 26,
    "url": "/lab-intro/muscle/",
    "title": "運動分子生物学研究室【HPS】（準備中）",
    "body": "2021/11/10 - 準備中です。 "
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