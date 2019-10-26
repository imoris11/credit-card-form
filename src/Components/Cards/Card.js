import React, { useState, useRef, useEffect } from 'react'
import { formatCardNumber as formatCard, checkCardType } from '../../functions';
const Card = (props) => {
    const [ card, setCard ] = useState({ cardName:'', cardNumber:'', expiryDate:'', cvv:'', cardType:'' });
    const [added, setAdded ] = useState(false);
    const cardNumberRef = useRef(null);
    const cardNameRef = useRef(null);
    const cvvRef = useRef(null);
    //Format Expiry Date
    const fixDate = (expiryDate) => {
        //add / in date if length == 2
        if (expiryDate.length === 2 && !added){
          expiryDate += '/';
          updateExpiryDate(expiryDate);
        }else if (expiryDate.length > 2){
          setAdded(true);
          updateExpiryDate(expiryDate);
        }else if (expiryDate.length <= 1){
          updateExpiryDate(expiryDate);
          setAdded(false);
        }else{
          updateExpiryDate(expiryDate);
        }
      }

      const updateExpiryDate = (expiryDate) => {
        let cardInfo = {...card};
          cardInfo.expiryDate = expiryDate;
          setCard(cardInfo);
          if (expiryDate.length === 5 ) cvvRef.current.focus();
      }
    
      //Format card number using length (can use regEx)
      const formatCardNumber = (cardNumber) => {
         const {number, complete } = formatCard(cardNumber);
         if(complete) cardNameRef.current.focus();
        
        //Check card type (currently visa or mastercard only)
        const cardType = checkCardType(cardNumber);

        let cardInfo = {...card};
        cardInfo.cardNumber = number;
        cardInfo.cardType = cardType
        setCard(cardInfo);
      }

      

      const handleChange = (e) => {
          let cardInfo = {...card};
          cardInfo[e.target.name] = e.target.value;
          setCard(cardInfo)
      }

      useEffect(()=> {
        cardNumberRef.current.focus();
      }, []);

      props.onChange(card);
    return (
        
        <>
            <div className="card">
               
                <input ref={cardNumberRef} onChange={(e) => formatCardNumber(e.target.value)} value={card.cardNumber} name="cardNumber" placeholder="0000 0000 0000 0000" className="card_number" />
                
                <div className='container'>
                <div className="card_name">
                    <label className="card_label" labelfor="name"> Card Holder
                    </label>
                    <input ref={cardNameRef} onChange={handleChange} name="cardName" placeholder="John Doe" className="card_holder" />
                </div>
                <div className="card_info">
                <label className="card_label" labelfor="name"> VALID THRU
                    </label>
                    <input maxLength={5} onChange={(e) => fixDate(e.target.value)} value={card.expiryDate} name="expiryDate" placeholder="00/00" className="expiry_date" />
                    <label className="card_label" labelfor="name"> CVV
                    </label>
                    <input ref={cvvRef} onChange={handleChange} maxLength={3} name="cvv" placeholder="000" className="cvv" />
                </div>
                <div className='card_logo'>
                {card.cardType === 'visa' && <img alt="visa logo" style={{width:30, height:30}}  src={require('../../assets/images/visa.png')} /> }
                {card.cardType === 'mc' && <img alt="mastercard logo" style={{width:30, height:30}} src={require('../../assets/images/mc.jpg')} /> }
                </div>
                </div>
            </div>
        </>
    )
}

export default Card;
