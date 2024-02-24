  var max      = 5;
  var PudimADS = 5;
  function verImagens() {
    this[0]     = "https://pudimperfeito.50x.com.br/extra/images/1.png";
    this[1]     = "https://pudimperfeito.50x.com.br/extra/images/2.png";
    this[2]     = "https://pudimperfeito.50x.com.br/extra/images/3.png";
    this[3]     = "https://pudimperfeito.50x.com.br/extra/images/4.png";
    this[4]     = "https://pudimperfeito.50x.com.br/extra/images/5.png";


    this.length = PudimADS;
  }
  function verLinks() {
    this[0]     = "https://pudimperfeito.50x.com.br/ebook/";
    this[1]     = "https://pudimperfeito.50x.com.br/ebook/";
    this[2]     = "https://pudimperfeito.50x.com.br/ebook/";
    this[3]     = "https://pudimperfeito.50x.com.br/ebook/";
    this[4]     = "https://pudimperfeito.50x.com.br/ebook/";

	
    this.length = PudimADS;
  }
  var vetImagens = new verImagens();
  var vetLinks  = new verLinks();
  var x = Math.round(Math.random()*max);
  var y    = max / PudimADS;
  for(var cont = 1;cont*y <= max;cont++) {
    if (x <= (cont*y)) {
      document.write("<a href="+vetLinks[cont-1]+" target=_blank><img  src="+vetImagens[cont-1]+" border=0></a>");
      break;
    }
  }
