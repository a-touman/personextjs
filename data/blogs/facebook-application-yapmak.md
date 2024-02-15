id: 742abb96-6d27-4863-b515-3542bc94e993
publishedAt: '2007-10-19 23:16:39'
type: halftext
title: Facebook Application Yapmak?
description: ''
slug: /facebook-application-yapmak
image: ''
tags:
  - key: facebook
    name: Facebook
  - key: facebook-application
    name: Facebook Application
  - key: internet
    name: İnternet
  - key: php
    name: PHP
  - key: programlama
    name: Programlama
content: "\n\t\t\t\t<strong>Her yerde facebook, herkeste facebook</strong>\r\n\r\nHatırlıyorum da bir sıralar yonja.com diye bir şey vardı aynen facebook gibi. Fakat bu örnek biraz daha farklı. En azından limitler var (esasında oldukça limit var), en azından İngilizce bilmeyenler pek etkin olamıyor. Bu da (en azından Türk kullanıcıları için) bir eleme demek. Bunun sonucunda da daha farklı bir kullanıcı kitlesi ortaya çıkıyor. Fakat neden bu facebook denen hadise bu kadar popüler oldu? Benzer pek çok komünite hali hazırda vardı? Ama o uygulama (applicationlara uygulama diyeceğim bundan sonra) hazinesi yoktu hiç birinde değil mi?\r\n\r\nEvet, facebook garip bir hızla büyüdü. Kulaktan kulağa denebilir belki ama yaratıcıları şahane bir altyapı ile karşılıyorlardı misafirlerini. Uygulamalar ise en çok dikkat çeken şeyler oldu, zira pek çok komünite sisteminde bu denli kullanıcıya panelini yönetebilme imkanı sunan bir platform yoktu.\r\n\r\n<strong>Peki ya Facebook için uygulama geliştirme?</strong>\r\n\r\n<strong></strong>\r\n\r\nNasıl oluyor da bu denli kalabalık bir uygulama arşivi inşaa edilebilmiş demişsinizdir belki siz de içinizden. Ortaya çıkalı ne kadar oldu da 6000 den fazla uygulama geliştirilebildi?\r\n\r\nElbette bu ortak bir inşaanın sonucu. Paylaşımcı içerikten sonra popüler bir sistem de paylaşımcı inşaa olacak gibi gözüküyor. Elbette daha evvelden denenen bu sistemler Facebook'ta zirve yapmış durumda. Dikkat ederseniz ekstra uygulamaları olmadan Facebook klasik bir arkadaşlık sisteminden farksız.\r\n\r\n<strong>Facebook'un Anatomisi</strong>\r\n\r\n<strong></strong>\r\n\r\nAlıyoruz neşterimizi elimize ve başlıyoruz Facebook yapısını incelemeye.\r\n\r\nFacebook, Left Bar (Sol Menü) ve FaceBook Canvas Pages'ten oluşuyor esasında.\r\n\r\n<img src=\"http://developers.facebook.com/images/anatomy_left_nav.jpg\" alt=\"\" align=\"left\" />\r\n\r\n<strong>Sol menü</strong> eklediğimiz uygulamaların listelendiği güçlü bir menü uygulamasıdır. Facebook Ajax altyapısı kullandığından bu menüde drag and drop özelliği mevcuttur, yani menünüzü kolayca tasarlayabilirsiniz.\r\n\r\n<strong>Canvas Page</strong> kısmı ise uygulamaların koştuğu içerik alanıdır. Bu kısımda bir uygulamaya bağlı tüm işlemler gerçekleştirilir.\r\n\r\nHali hazırda profilinizin detayların listelendiği sayfa da bir canvas sayfadır.\r\n\r\nBunun yanında her uygulamanın bir ana sayfası vardır. Bu kısım sol menüden tıklandığında gelen alandır.\r\n\r\n<img src=\"http://developers.facebook.com/images/anatomy_profile_box.jpg\" alt=\"\" align=\"left\" />\r\n\r\nÇoğu uygulama facebook kullanıcılarının profillerinde gözükür. Bu kısım belki de uygulama geliştiricilerinin en fazla üstünde yoğunlaşması gereken alanlardan biridir. Zira bir uygulamanın hızla yayılması profiller vasıtası ile olur. Bu sebeple bu alan tasarlanırken karışık olmayan fakat ilgi çekici uygulamalar düşünülmelidir.\r\n\r\nElbette bunların yanında pek çok özellik de mevcut. Fakat şimdilik bunları biliyor olmamız yeterli.\r\n\r\nŞimdi geçelim uygulamamızın içine dalmaya.\r\n\r\n<strong>Bir Uygulama Geliştirelim</strong>\r\n\r\n<strong></strong>\r\n\r\nÖncelikle  <a href=\"http://developers.facebook.com/\">http://developers.facebook.com/</a> adresinden <span class=\"itemtitle\" style=\"font-weight: bold\">Get Started </span><span class=\"itemtitle\">kısmına ulaşıp </span><span class=\"itemtitle\" style=\"font-weight: bold\">Add Facebook Developer Application </span><span class=\"itemtitle\">diyerek uygulama geliştiricileri için tasarlanan uygulamayı profilimize yüklemeliyiz. Bundan sonra developer uygulamamıza girip </span><span style=\"font-weight: bold\">Setup New Application </span>diyerek ilk uygulamamızı listemize alabiliriz.\r\n\r\nBu adımdan sonra yapılacak şeyler hayalimizdeki uygulamanın bilgilerini içermektedir. <span class=\"itemtitle\">En önemlileri olan <span style=\"font-weight: bold\">Application Name</span> uygulamamızın ismi, </span><span class=\"itemtitle\"><span style=\"font-weight: bold\">Callback Url</span> uygulamamızın yer alacağı dizinimizdir. Unutulmamalıdır ki facebook kullanıcılarına bir alan vermemektedir. Bu sebeple çalışmalarımızı kendi hostingimiz üzerinden yapmalıyız. </span><span class=\"itemtitle\">Canvas Page URL ise uygulamamızın kısa yolu olacaktır. Akılda kaılıcı ve uygulamamızın ismi ile alakalı bir kısayol olmasına dikkat edilebilir, edilmeyebilir de.</span>\r\n\r\nBir şekilde bu aşamaları geçtikten sonra uygulamanızı listenize ekleyebileceksiniz. Fakat elbette iş çok daha farklı.\r\n\r\nFacebook bildiğimiz mantıkların ötesine geçmiş durumda. Bizlere <span style=\"font-weight: bold\">FBML</span> (Facebook Markup Language), FQL gibi alışık olmadığımız bir çalışma örneği sunuyor. Hatta \"oha adamlar kendi dillerini yazmışlar\" diyorsunuzdur içinizden sanırım.\r\n\r\nBu denli derin bir konuya girip darmadağın olmak istemediğimden kısa kısa özetliyorum. Belki ileride daha ayrıntılı bir döküman hazırlayabiliriz.\r\n\r\nŞimdi bu facebook ile çalışabilmek için iki önemli anahtara ihtiyacımız var. İlki API Key, diğeri ise Secret Key. Bunlar API geçişlerinde Facebook'un uygulamanızı güvenli bir şekilde tanımasına olanak sağlayan köprü anahtarcıklarıdır. Uygulamanızın config dosyasında muhakkak tanımlanmalıdırlar.\r\n<pre class=\"code\">$appapikey = '<span class=\"highlight\">[your api_key]</span>';\r\n\r\n$appsecret = '<span class=\"highlight\">[your secret]</span>';\r\n\r\n$facebook = new Facebook($appapikey, $appsecret);\r\n\r\n$user = $facebook-&gt;require_login();</pre>\r\nŞeklinde facebook uygulamamızı çalıştırabiliriz.\r\n\r\nFakat öncelikle bu classları tanıyacak altyapıyı elde etmemiz gerekli. Eğer ki PHP kullanıcısı iseniz Client Library'niz hazır. <a href=\"http://developers.facebook.com/resources.php\" target=\"_blank\">http://developers.facebook.com/resources.php</a> adresinden edinebilirsiniz. Bundan sonra tek yapmanız gereken ilgili dosyaları include ederek tasarımınızı yapmanız.\r\n\r\n<a href=\"http://developers.facebook.com/step_by_step.php#downloads\" target=\"_blank\">http://developers.facebook.com/step_by_step.php#downloads</a> adresinden  facebook'un developer adaylarına yardım olması amacı ile sunduğu örnek uygulamayı keşfedebilirsiniz.\r\n\r\nŞimdilik bu kadar.\r\n<blockquote><strong>Not:</strong> Facebook Applcation projesi olup yazdırmak isteyenler detayları konuşmak üzere <a href=\"http://www.abdullahonden.com/iletisin/\">iletişim</a> kısmından ulaşabilirler.</blockquote>\r\n<div id=\"budaneki_icon\" style=\"position: absolute; left: 276px; top: 694px; width: 30px; height: 22px; display: block; opacity: 1; z-index: 9999; cursor: pointer; background: url(&quot;data;\"></div>\t\t"