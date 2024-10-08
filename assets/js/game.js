let kesirli = Number (prompt("indirim yüzdesini girin"))
let indirimSayısı = Number (prompt("Ürünün fiyatını girin"))
  let indirim = (indirimSayısı )  * ((kesirli / 100)) 
 let miktar = (indirimSayısı - indirim)
alert("indirimli fiyat " + miktar  + "tl");
