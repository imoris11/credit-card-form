const formatCardNumber = (cardNumber) => {
    let noSpacesNumber = cardNumber.replace(/ /g,'');
    //Split strings into sets of 4
    let set1, set2, set3, set4 = '';
    set1 = noSpacesNumber.substring(0,4);
    if (set1.length ===4 && noSpacesNumber.length > 4){
      set1 += ' ';
    }

    set2 = noSpacesNumber.substring(4,8);
    if (set2.length === 4 && noSpacesNumber.length > 8){
      set2 += ' ';
    }

    set3 = noSpacesNumber.substring(8,12);
    if (set3.length === 4 && noSpacesNumber.length > 12){
      set3 += ' ';
    }

    set4 = noSpacesNumber.substring(12,16);
    let complete = false;
    const number = set1 + set2 + set3 + set4;
    if(set4.length === 4)  complete = true;
    return { number, complete }
}

const checkCardType = (cardNumber) => {
    //Detect card type using initials
    // mc, starts with - 51 to 55
    // v, starts with - 4
    let cardType = '';
    if (cardNumber[0] === '4') cardType = 'visa';
    let num = Number(cardNumber.substring(0,2));
    if ( num >= 51 && num < 55 ) cardType='mc';
    return cardType;
  }

  export {
      formatCardNumber,
      checkCardType
  }