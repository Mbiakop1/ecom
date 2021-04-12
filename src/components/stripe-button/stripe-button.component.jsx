import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; 
    const publishableKey = 'pk_test_51IfE8aFap3r3HQRH9w6j8zk60A9Cjlj5mOsDG2pKhUYosmo8h0GXJmAE3hRDy1h4dj4rqoFbS8JTFYo4tDfWksun002pNTCoH0'
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (

        <StripeCheckout 
        label= 'pay Now'
        name= 'CRWN Clothing Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Nom'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
