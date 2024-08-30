var mainImg = document.getElementById("mainImg");

var smallImg = document.getElementsByClassName("small-img");

const productName = document.querySelector(".product-name");
const productPrice = document.querySelector(".product-price");
const productDetails = document.querySelector(".product-details");

smallImg[0].onclick = () => {
  mainImg.src = smallImg[0].src;
  productName.innerHTML = `Choco Bite`;
  productPrice.innerHTML = `&#2547; 120`;
  productDetails.innerHTML = `Indulge in the rich, decadent flavor of our Choco Bite! This
          delightful treat features layers of velvety chocolate ganache nestled
          between moist, chocolate sponge cake, all enrobed in a luscious dark
          chocolate coating. Perfectly portioned for a single serving, Choco
          Bite is ideal for satisfying your sweet tooth or sharing with loved
          ones. Enjoy the perfect blend of sweetness and bitterness in every
          bite. Order now to experience a slice of chocolate heaven!`;
};

smallImg[1].onclick = () => {
  mainImg.src = smallImg[1].src;
  productName.innerHTML = `Croissant`;
  productPrice.innerHTML = `&#2547; 190`;
  productDetails.innerHTML = `Experience the flaky, buttery perfection of our Croissant! Baked fresh daily, these classic French pastries feature delicate, golden layers that melt in your mouth with every bite. Our croissants are made with premium ingredients, ensuring a light, airy texture and rich, satisfying taste. Perfect for breakfast, a mid-morning snack, or paired with your favorite coffee, our croissants are a delightful indulgence any time of day. Treat yourself to a taste of Paris with every bite!`;
};

smallImg[2].onclick = () => {
  mainImg.src = smallImg[2].src;
  productName.innerHTML = `Choco Muffins`;
  productPrice.innerHTML = `&#2547; 200`;
  productDetails.innerHTML = `Experience pure chocolate bliss with our Choco Muffins! Baked to perfection, these moist and fluffy muffins are packed with rich cocoa flavor and studded with decadent chocolate chips. Ideal for breakfast, a snack, or dessert, our Choco Muffins offer a delightful burst of sweetness in every bite. Made with the finest ingredients, they promise a melt-in-your-mouth experience that will satisfy any chocolate lover's cravings. Treat yourself to a box today and elevate your muffin game!`;
};

smallImg[3].onclick = () => {
  mainImg.src = smallImg[3].src;
  productName.innerHTML = `Cup Cakes`;
  productPrice.innerHTML = `&#2547; 230`;
  productDetails.innerHTML = `Delight in the whimsical charm of our Cupcake! Each cupcake is a miniature masterpiece, featuring a moist, fluffy base topped with a swirl of creamy, decadent frosting. Available in a variety of flavors and adorned with colorful sprinkles or elegant decorations, our cupcakes are perfect for celebrations, parties, or simply as a sweet treat. Enjoy the perfect balance of texture and taste in every bite. Order now and add a touch of sweetness to your day!`;
};
