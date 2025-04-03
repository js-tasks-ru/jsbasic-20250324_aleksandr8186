function checkSpam(str) {
  
  const searchItem1 = "1xBet";
  const searchItem2 = "XXX";

  let spam1 = str.toLowerCase().includes(searchItem1.toLowerCase());
  let spam2 = str.toLowerCase().includes(searchItem2.toLowerCase());

  return spam1 || spam2

}
