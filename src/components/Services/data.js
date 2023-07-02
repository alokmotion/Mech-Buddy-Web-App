export const data = [
	{
	  title: 'Services By Slot Booking',
	  description: 'We Offer A Way To Book Your Service Slot In Advance. You Can Also Schedule Your Service With Us And Get It Done In Time.',
	  image: require('../../images/Appointment.svg').default,
	  btnlabale:  'Book Now',
	},
	{
	  title: 'On The Spot Servicing',
	  description: 'Just Call Us And We Will Send Our Expert Technicians Over To Your Location Within 50 Km For A Quick And Convenient Service At An Affordable Price.',
	  image: require('../../images/spotService.svg').default,
	  btnlabale:  'Order Now',
	},
	{
	  title: 'Spares And Accessories',
	  description: 'Servicing Is Just A Part We Do, Spare Parts? Absolutely!! Great Quality At Affordable Prices. With Us, You Can Find All The Best Parts And Accessories You Need For Your Car, Bike From Legit Stores In A Fair Price.',
	  image: require('../../images/Accessories1.svg').default,
	  btnlabale:  'Order Now',
	},
	{
	  title: 'Modification',
	  description: 'With Our Help, You Can Get Your Vehicle Customized And Modified According To Your Own Need With The Help Of Our Best Team. From Getting Your Enfield A New Bobber Look To Giving Your SUV A Luxury Touch.',
	  image: require('../../images/Modification.svg').default,
	  btnlabale:  'Order Now',
	},
	{
	  title: 'Convert To EV',
	  description: 'Change Any 2-wheeler Petrol Based Vehicle Into EV With Our Help. Call Us At 123-4567-890 Or Visit Our Website To Get It Done.',
	  image: require('../../images/ev.svg').default,
	  btnlabale:  'Order Now',
	},
	{
	  title: 'Refurbished Spares And Accessories',
	  description: 'We Offer The Best Quality Refurbished Spare Available In The Market At One Place. You Can Check This Wide Range Of Refurbished Spares Available On Our Website And Make It Yours With Just A Few Clicks.',
	  image: require('../../images/Refurbished.svg').default,
	  btnlabale:  'Order Now',
	},
  ];
  
  export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnSelect: false,
	accessibility: false,
	responsive: [
	  {
		breakpoint: 1280,
		settings: {
		  slidesToShow: 2,
		},
	  },
	  {
		breakpoint: 900,
		settings: {
		  slidesToShow: 1,
		},
	  },
	],
  };
  