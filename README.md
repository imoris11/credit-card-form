## Credit/Debit Card Component
A simple credit card form styled as a credit card. While I developed this for a project I was working on, [this project](https://github.com/muhammederdem/credit-card-form) inspired me to share this version. 

![](demo.gif)

### How To Use
This is not yet on NPM, thus you can just clone the project. 

Import Card component and pass in an onChange props to listen for form changes.

```

import { Card } from './Components/Cards';

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

