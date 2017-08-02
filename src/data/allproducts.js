const allProducts = [
  {
    id: 1,
    name: 'MacBook',
    img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4598/4598800_sd.jpg;maxHeight=1000;maxWidth=1000',
    color: 'Space Gray',
    storage: '256 GB',
    price: '$1299',
    description: 'MacBook delivers more performance in the lightest and thinnest Mac notebook ever. With new seventh-generation Intel Core processors, 12-inch Retina display,¹ a full-size keyboard, force-sensing trackpad, versatile USB-C port, and all-day battery life,º MacBook features big thinking in an impossibly compact form.'
  },
  {
    id: 2,
    name: 'MacBook Pro',
    img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6936/6936477_sd.jpg;maxHeight=1000;maxWidth=1000',
    color: 'Silver',
    storage: '256 GB',
    price: '$1499',
    description: 'The new MacBook Pro is razor-thin, featherlight, and now even faster and more powerful than before. It has the brightest, most colorful Mac notebook display. And it features up to 10 hours of battery life. It’s a notebook built for the work you do every day. Ready to go anywhere a great idea takes you.'
  },
  {
    id: 3,
    name: 'iMac',
    img: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4881/4881400_sd.jpg;maxHeight=1000;maxWidth=1000',
    color: 'Silver',
    storage: '1 TB',
    price: '$1799',
    description: 'iMac performance is at an alltime high with faster Intel Core processors, powerful Radeon Pro 500-series graphics, Thunderbolt 3 (USB-C) connectivity, and stunning Retina 5K displays that shine 43 percent brighter and support one billion colors.'
  },
  {
    id: 4,
    name: 'iPad Pro',
    img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRwxywemEsH48wLB6pClsYiFsLpUST781U6z7SKN40InSK3OWe9YxXejaeZ6B-gNUruFLNPRNZX&usqp=CAE',
    color: 'Space Gray',
    storage: '64 GB',
    price: '$599',
    description: 'Immensely powerful, portable, and capable, the 10.5-inch iPad Pro features a redesigned Retina display that is the most advanced on the planet, while the A10X Fusion chip delivers more power than most PC laptops. ¹ With Apple Pencil, the Smart Keyboard, and iOS—the most advanced mobile operating system—iPad Pro is designed for the world we live in today.'
  },
  {
    id: 5,
    name: 'iPad Air 2',
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTszQeiEzW3aOoH86-LFjaGHaFipiAdJ6mMo5iP5UZf1Bw-0ujI-s_nmQVEAtZMCwARkx38Y_0&usqp=CAE',
    color: 'Gold',
    storage: '128 GB',
    price: '$329',
    description: 'With a gorgeous 9.7-inch Retina display and a design that’s only 6.1mm thin and weighs just 0.96 pounds, iPad Air 2 is as portable as it is capable. It has a powerful A8X chip with 64-bit desktop-class architecture, iSight and FaceTime HD cameras, Touch ID fingerprint sensor, Wi-Fi and LTE connectivity,¹ and up to 10 hours of battery life.² It also includes great apps for productivity and creativity, and powerful features in iOS 9 like multitasking. And there are even more incredible iPad apps available in the App Store.'
  },
  {
    id: 6,
    name: 'iPad Mini 4',
    img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSzJB0oemd91T5AMxCNTWkXIysFYJ_iyeo1SXFmWmEbNQUfmxvU2EXTiHvw9iPIf-Sz4taOo6s&usqp=CAE',
    color: 'Silver',
    storage: '128 GB',
    price: '$399',
    description: "iPad mini 4 has a gorgeous 7.9-inch Retina display, yet it's only 6.1mm thin and weighs just 0.65 pounds, making it small enough to hold in one hand. It has a powerful A8 chip with 64-bit desktop-class architecture, advanced iSight and FaceTime HD cameras, Wi-Fi and LTE connectivity, iCloud, the breakthrough Touch ID fingerprint sensor, and up to 10 hours of battery life. It also includes great apps for productivity and creativity, and powerful new features in iOS 9 like multitasking. And there are even more incredible apps available in the App Store."
  },
  {
    id: 7,
    name: 'iPhone 7 Plus',
    img: 'https://target.scene7.com/is/image/Target/51538924?wid=325&hei=325&qlt=80&fmt=pjpeg',
    color: 'Jet Black',
    storage: '256 GB',
    price: '$34.12 /mo.',
    description: 'iPhone 7 Plus features Dual 12MP cameras for high-resolution zoom and an ƒ/1.8 aperture for great low-light photos and 4K video. Optical image stabilization. A 5.5-inch Retina HD display with wide color and 3D Touch. An A10 Fusion chip for up to 2x faster performance than iPhone 6. Touch ID. Faster LTE. The longest battery life in an iPhone. Immersive stereo sound, splash and water resistant, and iOS 10'
  },
  {
    id: 8,
    name: 'iPhone 7',
    img: 'https://target.scene7.com/is/image/Target/51538722?wid=325&hei=325&qlt=80&fmt=pjpeg',
    color: 'Rose Gold',
    storage: '128 GB',
    price: '$29.14 /mo.',
    description: 'iPhone 7 features an all-new 12MP camera with an ƒ/1.8 aperture for great low-light photos and 4K video. Optical image stabilization. A 4.7-inch Retina HD display with wide color and 3D Touch. An A10 Fusion chip for up to 2x faster performance than iPhone 6. Touch ID. Faster LTE. The longest battery life in an iPhone. Immersive stereo sound, splash and water resistant, and iOS 10.'
  },
  {
    id: 9,
    name: 'iPhone 6s',
    img: 'https://target.scene7.com/is/image/Target/50183573?wid=325&hei=325&qlt=80&fmt=pjpeg',
    color: 'Silver',
    storage: '64 GB',
    price: '$18.70 /mo.',
    description: 'A 4.7-inch Retina HD display with 3D Touch. 7000 series aluminum and stronger cover glass. An A9 chip with 64-bit desktop-class architecture. All new 12MP iSight camera with Live Photos. Touch ID. Faster LTE and Wi-Fi. Long battery life and iOS 10 and iCloud. All in a smooth, continuous unibody design.'
  },
  {
    id: 10,
    name: 'Watch Series 2',
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNtfjo7w2bMdDJEmf6-spjECWiOFNBbMdOWzQR6qBYp4Mwq7Y6OUhoBeaI8jB-fT77v_TTZ0x6&usqp=CAE',
    color: 'Space Gray',
    storage: '32 GB',
    price: '$399',
    description: 'Built-in GPS. Water resistance to 50 meters.¹ A new lightning-fast dual-core processor. And a 2x brighter display for increased visibility in direct sunlight.² Full of features that help you stay active, motivated, and connected, Apple Watch Series 2 is designed for all the ways you move.'
  },
  {
    id: 11,
    name: 'Watch Nike+ Series 2',
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSqWrEn5dmFQvZMbcnXGogQTzv2MT0SX7j8SOZka-_hOALE0yY5nuk9cfglBHX5KzqmipM95Wjf&usqp=CAY',
    color: 'Silver',
    storage: '32 GB',
    price: '$399',
    description: 'Durable, lightweight aluminum cases. New Nike Sport Band. Exclusive Nike watch faces. All the features of Apple Watch Series 2, including built-in GPS, water resistance to 50 meters ¹, a new lightning-fast 2-core processor, 2x brighter display for increased visibility in direct sunlight ², watchOS 3.'
  },
  {
    id: 12,
    name: 'Watch Series 1',
    img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXZSFmlirZY3G3Ib5kOfMUj2RQ_K2rNAoEZ26qQiLDFcmLTHW31Cgoc7jzRrCYyc9CSKzbgAxm&usqp=CAE',
    color: 'Rose Gold',
    storage: '32 GB',
    price: '$269',
    description: 'Track and share your daily physical activity. Measure your workouts. Monitor your health. Stay connected to the people and information you care about most. Now you can do it all even faster than before, thanks to a new dual-core processor.'
  },
  {
    id: 13,
    name: 'TV (4th Generation',
    img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRcL4qVlope-XfgxzraAibBGfeIgsQPljJHsmg_U9o02wvcpQ7iIJpdtMh9Wqe2UWaIBVxEfnA&usqp=CAE',
    color: 'Black',
    storage: '32 GB',
    price: '$149',
    description: "The new Apple TV delivers an all-new experience with Touch and Siri, powerful new hardware, and great content, games, and more on the App Store. The Touch surface on the new Siri Remote offers innovative ways to interact with your TV, creating a connected experience with a screen that's across the room. With Siri, finding something to watch is as easy as just asking. And with apps, Apple TV allows you to customize your TV for personal and shared experiences in the living room."
  },
  {
    id: 14,
    name: 'TV (3rd Generation)',
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRQ_53KDzt65EOfA5BI2b1uCiLcmD_5Xy3DHky3ebQvA4LV1iZPgcZrCP5O490&usqp=CAE',
    color: 'Black',
    storage: '16 GB',
    price: '$89',
    description: 'The Apple TV in Black (MD199LL/A) instantly transforms your home television into a hub for all of the best HD content available. Watch blockbuster movies, hit TV shows, live sports, news, your family photos or listen to music. Using this streamer you can play content from your iOS devices or your MAC right on your own television with AirPlay. All of the content that you really want to watch is now yours in stunning 1080p HD any time you want.'
  }
]

export default allProducts
