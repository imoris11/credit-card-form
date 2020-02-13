## Credit/Debit Card Component

A simple credit card form styled as a credit card. While I developed this for a project I was working on, [this project](https://github.com/muhammederdem/credit-card-form) inspired me to share this version.

![](demo.gif)

### How To Use

Import Card component and pass in an onChange props to listen for form changes.

```

import Card from 'react-atm-cards';

function App() {
  const cardDetails = (card) => {
    console.log(card)
    /*
    {
        cardName: "Richard Igbiriki"
        cardNumber: "5312 2145 7687 8854"
        cardType: "mc"
        cvv: "222"
        expiryDate: "01/23"
    }

    */
  }

  return (
    <>
      <Card
        onChange={cardDetails}
       />
    </>
  );
}

```

### Accepted Props

Below are the accepted props for the Card component.

| Prop              | Type     | Description                                                                               | Required | Default Value         |
| ----------------- | -------- | ----------------------------------------------------------------------------------------- | -------- | --------------------- |
| onChange          | Function | A callback function to listen for form changes.                                           | True     | Not Applicable        |
| cardStyles        | Object   | Styles to be applied to the card div. This will override default styles.                  | False    | ''                    |
| numberStyles      | Object   | Styles to be applied to the card number input element. This will override default styles. | False    | ''                    |
| nameStyles        | Object   | Styles to be applied to the card holder input element. This will override default styles. | False    | ''                    |
| validityStyles    | Object   | Styles to be applied to the expiry date input element. This will override default styles. | False    | ''                    |
| cvvStyles         | Object   | Styles to be applied to the cvv input element. This will override default styles.         | False    | ''                    |
| numberPlaceholder | String   | Placeholder text for card number                                                          | False    | '0000 0000 0000 0000' |
| namePlaceholder   | String   | Placeholder text for card holder.                                                         | False    | 'John Doe'            |

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
