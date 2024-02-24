  var max      = 5;
  var GeanRamosImagens = 5;
  function verImagens() {
    this[0]     = "http://i.imgur.com/DYF2jdR.png?os-primeiros-passos-para-pmes-no-marketing-digital";
    this[1]     = "http://i.imgur.com/I1ftzBU.png?kit-marketing-digital-para-iniciantes";
    this[2]     = "http://i.imgur.com/c2aR7p9.png?fno";
	this[3]     = "http://ad.zanox.com/ppv/images/programs/16773/20150818/BCA2180_pugshaman7_pros_dom_com_699BRL_pt_br_300x250.gif";
	this[4]     = "http://ad.zanox.com/ppv/images/programs/16773/20150818/BCA-1572_Brazil_30__OFF_PT_300x250.gif";
    this.length = GeanRamosImagens;
  }
  function verLinks() {
    this[0]     = "http://vidadeempreendedor.com/lp/os-primeiros-passos-para-pmes-no-marketing-digital.html?utm_source=blog&utm_term=banner300x250";
    this[1]     = "http://vidadeempreendedor.com/lp/kit-marketing-digital-para-iniciantes.html?utm_source=blog&utm_term=banner300x250";
    this[2]     = "http://vidadeempreendedor.com/p/como-montar-um-negocio-na-internet-multiplicavel-3?utm_source=blog&utm_term=banner300x250";
	this[3]     = "http://yxz.com.br/godaddy";
	this[4]     = "http://yxz.com.br/godaddy-30";	
    this.length = GeanRamosImagens;
  } 

  var vetImagens = new verImagens();
  var vetLinks  = new verLinks();
  var x = Math.round(Math.random()*max);
  var y    = max / GeanRamosImagens;
  for(var cont = 1;cont*y <= max;cont++) {
    if (x <= (cont*y)) {
      document.write("<a href="+vetLinks[cont-1]+" target=_blank rel=nofollow><img  src="+vetImagens[cont-1]+" border=0></a>");
      break;
    }
  }