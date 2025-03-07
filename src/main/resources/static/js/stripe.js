const stripe = Stripe('pk_test_51QwZiyLS5xoMxvRNS6Jf4SWvoIYJ9xNC1fZ6W5WFaigIrflmIYQLUlY2idw3ZFdiyexy8xXDOYaE4Yf9WqjpJjcc00Xy2rgGdT');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});


