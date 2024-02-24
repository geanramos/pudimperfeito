  var max      = 18;
  var PudimADS = 18;
  function verImagens() {
    this[0]     = "https://pudimperfeito.50x.com.br/extra/images/1.jpg";
    this[1]     = "https://pudimperfeito.50x.com.br/extra/images/2.jpg";
    this[2]     = "https://pudimperfeito.50x.com.br/extra/images/3.jpg";
    this[3]     = "https://pudimperfeito.50x.com.br/extra/images/4.jpg";
    this[4]     = "https://pudimperfeito.50x.com.br/extra/images/5.jpg";
    this[5]     = "https://pudimperfeito.50x.com.br/extra/images/6.jpg";
    this[6]     = "https://pudimperfeito.50x.com.br/extra/images/7.jpg";
    this[7]     = "https://pudimperfeito.50x.com.br/extra/images/8.jpg";
    this[8]     = "https://pudimperfeito.50x.com.br/extra/images/10.jpg";
    this[9]     = "https://pudimperfeito.50x.com.br/extra/images/11.jpg";
    this[10]     = "https://pudimperfeito.50x.com.br/extra/images/12.jpg";
    this[11]     = "https://pudimperfeito.50x.com.br/extra/images/13.jpg";
    this[12]     = "https://pudimperfeito.50x.com.br/extra/images/14.jpg";
    this[13]     = "https://pudimperfeito.50x.com.br/extra/images/15.jpg";
    this[14]     = "https://pudimperfeito.50x.com.br/extra/images/16.jpg";
    this[15]     = "https://pudimperfeito.50x.com.br/extra/images/17.jpg";
	this[16]     = "https://pudimperfeito.50x.com.br/extra/images/18.jpg";
	this[17]     = "https://pudimperfeito.50x.com.br/extra/images/19.jpg";

    this.length = PudimADS;
  }
  function verLinks() {
    this[0]     = "https://pudimperfeito.50x.com.br/ebook/";
    this[1]     = "https://pudimperfeito.50x.com.br/ebook/";
	this[2]     = "https://pudimperfeito.50x.com.br/ebook/";
	this[3]     = "https://pudimperfeito.50x.com.br/ebook/";
	this[4]     = "https://pudimperfeito.50x.com.br/ebook/";
	this[6]     = "https://pudimperfeito.50x.com.br/ebook/";
	this[7]     = "https://pudimperfeito.50x.com.br/ebook/";
	this[8]     = "https://pudimperfeito.50x.com.br/ebook/";
	this[9]     = "https://pudimperfeito.50x.com.br/ebook/";
	this[10]     = "https://pudimperfeito.50x.com.br/ebook/";
	this[11]     = "https://pudimperfeito.50x.com.br/ebook/";
	this[12]     = "https://pudimperfeito.50x.com.br/ebook/";
	this[13]     = "https://pudimperfeito.50x.com.br/ebook/";
	this[14]     = "https://pudimperfeito.50x.com.br/ebook/";
	this[15]     = "https://pudimperfeito.50x.com.br/ebook/";
	this[16]     = "https://pudimperfeito.50x.com.br/ebook/";
	this[17]     = "https://pudimperfeito.50x.com.br/ebook/";
	
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