import React from 'react';
import {PaymentElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {

    return (
        <form>
            <div className={`mx-16 md:mx-8 mt-12`}>
            <PaymentElement id={`kak bg-blue-500`}/>
            </div>
            <button>Pay Now</button>
        </form>
    );
};

export default CheckoutForm;