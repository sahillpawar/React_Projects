const Hero = () => {
  return (
    <main className="Hero container">
      <div className="hero-content">
        <h1> YOUR FEET DESERVE THE BEST </h1>
        <p> YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
      

        <div className="hero-btn">
            <button> Shop Now </button>
            <button className="b1"> Category </button>
        </div>
        

        <div className="shopping">
            <p> Also Available On</p>
        
            <div className="brand-icon">
            <img src="/images/flipkart.png" href="https://www.flipkart.com" alt="Flipkart"/>   
            <img src="/images/amazon.png" href="https://www.amazon.com" alt="Amazon"/>
            </div>
        </div>
        </div>

      <div className="hero-image">
        <img src="images/shoe_image.png"  alt="No "/>
      </div>
      

      
    </main>
    
  );
};

export default Hero;
