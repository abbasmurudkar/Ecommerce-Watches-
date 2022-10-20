const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  }
  const span = document.querySelector('span2').innerHTML
  console.log(span)
  const displayrazorpay = async (span) =>{
  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
console.log(res)
  if(!res){
    alert("your are offlibe failed to load razorpay")
  return;
  }
  const options = {
    key: "rzp_test_mNj333YrVgR9NC",
    key_secret: "cYdkhX47xesmmCeGGpKOzyrG",
    currency: "INR",
    amount:150000,
    name: "BROOZ MEALS",
    description: "THANKS FOR PURCHASING",
    image :'../assets/logo1.png',
    handler: function (response) {
      alert(response.razorpay_payment_id)
      alert(response.razorpay_order_id)
      alert("payment successful")
    },
    prefill:{
      name: "ABBAS MURUDKAR"
    },
    notes: {
      address: "Razorpay Corporate Office"
  },
    theme: {
      color: "#3399cc",
  }
  }
  const paymentOnject = new window.Razorpay(options)
  paymentOnject.open()
}