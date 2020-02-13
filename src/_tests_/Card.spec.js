import React from "react";
import { shallow } from "enzyme";
import Card from "../Components/Cards";
import { formatCardNumber, checkCardType } from "../functions";

describe("Card component tests", () => {
  const details = card => {
    it("should have an empty card details", () => {
      expect(card.cardNumber).toEqual("");
      expect(card.cardName).toEqual("");
      expect(card.cvv).toEqual("");
      expect(card.expiryDate).toEqual("");
    });
  };
  const wrapper = shallow(<Card onChange={details} />);

  it("should have a card number input field", () => {
    expect(wrapper.find("input.card_number")).toHaveLength(1);
  });

  it("should have a card holder input field", () => {
    expect(wrapper.find("input.card_holder")).toHaveLength(1);
  });

  it("should have an expiry date input field", () => {
    expect(wrapper.find("input.expiry_date")).toHaveLength(1);
  });

  it("should have a cvv input field", () => {
    expect(wrapper.find("input.cvv")).toHaveLength(1);
  });

  describe("Tests functions used to format card number and check type", () => {
    describe("Tests for complete card", () => {
      const card = "4213 3432 2343 4323";
      const { number, complete } = formatCardNumber(card);

      it("should be complete", () => {
        expect(complete).toEqual(true);
        //16+3 spaces
        expect(number.length).toEqual(19);
      });

      let cardType = checkCardType(card);

      it(" should be a visa card", () => {
        expect(cardType).toEqual("visa");
      });
    });

    let card = "5213 3432 2343 4323";

    it("should be a mastercard", () => {
      let cardType = checkCardType(card);
      expect(cardType).toEqual("mc");
    });

    it("should be incomplete", () => {
      const card = "5234 3432 2323";
      const { number, complete } = formatCardNumber(card);
      expect(number.length).toEqual(14);
      expect(complete).toEqual(false);
    });

    it("should match input value", () => {
      const card = "5234 3432 2323";
      const { number } = formatCardNumber(card);
      expect(number).toEqual(card);
    });
  });
});
