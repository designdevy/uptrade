'use strict';
let imgArr = ["https://external-preview.redd.it/fN_i7hB1aHKRqo_wWwDRN8bbAETLkk8LRKdrwzmeerQ.jpg?auto=webp&s=dfd14a6d798d048c421fd81d3ec9a39e96b5f7f6", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/881189c2-19cc-4b0c-a987-a85792344f89/air-force-1-07-lv8-mens-shoe-LxqPHT.jpg", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fc3cd55a-0210-40cd-b688-354f68a01a6a/rhyodomo-gore-tex-mens-shoe-BfLQPq.jpg", "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/6ceea824-0b6b-4298-8f22-dc128cb41140/react-metcon-mens-training-shoe-1G703V.jpg", "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/74ce70a0a73b4708ab09ab820185646c_9366/Floatride_Fuel_Run_Women's_Running_Shoes_White_FX3544_01_standard.jpg", "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/74ba278fed5f48138b9babc700c09f43_9366/Zig_Kinetica_Edge_Shoes_Green_FV3836_01_standard.jpg", "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/53b6f403df414226bd55ab7a0113703b_9366/Zig_Kinetica_Shoes_Blue_FW5292_01_standard.jpg", "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/c2125051216f40bba844abce002ca2f0_9366/Classics_Shorts_Blue_GK3063_01_standard.jpg", "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/fa435ce61e80423d8590abbf0103301b_9366/Running_Essentials_Leggings_Blue_FU1445_01_standard.jpg", "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/93c1205edaac44328fceab96003bb188_9366/Epic_Lightweight_Training_Shorts_Burgundy_FU2902_01_standard.jpg", "https://assets.reebok.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/be5ed055f8f14e239337abca0148cfc4_9366/United_By_Fitness_Woven_Pants_Blue_FT0085_01_standard.jpg", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f19025e7-348d-416f-b817-dfa332d3fc71/sportswear-tech-fleece-mens-full-zip-hoodie-5ZtTtk.jpg", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/18ef0b36-8dbc-459a-8602-8c86e57038fe/sportswear-mens-t-shirt-xHSzPm.jpg", "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1604021663000", "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MY6K2_VW_34FR+watch-40-alum-spacegray-nc-6s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1599111241000,1599523448000", "https://c1.neweggimages.com/ProductImageCompressAll1280/A1CZ_1_202004241927364157.jpg", "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6355/6355483_sd.jpg;maxHeight=640;maxWidth=550", "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427952_sd.jpg;maxHeight=640;maxWidth=550"]
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {img: imgArr[0], title: "Leprechaun Flute", description: "This here is a leprechaun flute, passed down from generation to generation, from my great great grandfather who's Irish.", category: ['On Sale', 'Lower than anywhere else', 'Rare Find', 'Antiques/Vintage'], price: 300000.00, user_id: 1 },
      {img: imgArr[1], title: "Nike Air Force 1 '07 LV8", description: "From sanded leather that's smoother than backboard glass to bold, NBA-inspired detailing, the Nike Air Force 1 '07 LV8 is everything you know best: crisp overlays, bold accents and the perfect amount of flash to make you shine. Its padded, low-cut collar adds heritage comfort while metal accents deliver an exclamation.", category: ['On Sale', 'Mens', 'Shoes'], price: 100.00, user_id: 1 },
      {img: imgArr[2], title: "Nike Rhyodomo GORE-TEX", description: "Day in and day out, from city streets to snow-covered parks, the Nike Rhyodomo GORE-TEX lives to move. Forged from heavy-duty leather coated in a water repellent GORE-TEX finish and featuring large lugs for traction, it merges everyday utility with style. The thick, padded collar and ventilated sides add to the comfort while rounded laces and metal clasps top off your look.", category: ['On Sale', 'Mens','Shoes'], price: 140.00, user_id: 1 },
      {img: imgArr[3], title: "Nike React Metcon", description: "The Nike React Metcon takes the stability and traction from the training original and pairs it with Nike's most comfortable cushioning. Tackle high-impact and lifting workouts with a light, breathable upper and durable grip to keep you going.", category: ['On Sale', 'Mens', 'Shoes'], price: 140.00, user_id: 1 },
      {img: imgArr[4], title: "FLOATRIDE FUEL RUN WOMEN'S RUNNING SHOES", description: "Clock your daily miles in these women's neutral running shoes. The breathable mesh upper is reinforced with TPU for extra durability and support. The lightweight midsole puts a layer of soft, plush cushioning between your feet and the pavement.", category: ['On Sale', 'Womens', 'Shoes'], price: 100.00, user_id: 1 },
      {img: imgArr[5], title: "ZIG KINETICA EDGE SHOES", description: "A utilitarian design inspires these Zig Kinetica Edge Shoes. Bungee cord laces and outdoor details give them an overbuilt, rugged look. Energy-returning cushioning feels springy and responsive to propel you forward. A zigzag design on the midsole provides a standout look.", category: ['On Sale', 'Womens', 'Shoes'], price: 100.00, user_id: 1 },
      {img: imgArr[6], title: "ZIG KINETICA SHOES", description: "The concept of visualizing energy inspires these Zig Kinetica Shoes. Explosive color amplifies their look. A multicolored design contained within a translucent zigzag midsole gives them a disruptive, bold style. The revolutionary cushioning propels you forward with springy responsiveness and an energy-returning feel.", category: ['On Sale', 'Womens', 'Shoes'], price: 100.00, user_id: 1 },
      {img: imgArr[7], title: "Navy Shorts", description: "RETRO-INSPIRED RIPSTOP SHORTS MADE OF RECYCLED POLYESTER", category: ['Womens', 'Bottoms'], price: 40.00, user_id: 1 },
      {img: imgArr[8], title: "Blue Leggings", description: "Running leggings that keep you dry and cool.", category: ['Womens', 'Bottoms'], price: 50.00, user_id: 1 },
      {img: imgArr[9], title: "Burgundy Shorts", description: "They shorts.", category: ['Mens', 'Bottoms'], price: 40.00, user_id: 1 },
      {img: imgArr[10], title: "Blue Jogging Pants", description: "These men's slim-fitting training pants are made of a mix of materials for a sleek, textured look.", category: ['Mens', 'Bottoms'], price: 50.00, user_id: 1 },
      {img: imgArr[11], title: "Nike Sportswear Tech Fleece", description: "The Nike Sportswear Tech Fleece Full-Zip Hoodie is made with a double-sided spacer fabric for added warmth without extra weight. A slightly taller collar fit in the hood helps keep you dry in cold, wet weather.", category: ['Mens', 'Tops'], price: 130.00, user_id: 1 },
      {img: imgArr[12], title: "Authentic Tee", description: "Moving athletes forward from day 1, the Nike Sportswear T-Shirt keeps it real while setting you up with reliable comfort for everyday wear.", category: ['Mens', 'Tops'], price: 20.00, user_id: 1 },
      {img: imgArr[13], title: "iPhone 12 Pro", description: "Brand new iPhone 12 Pro", category: ['Cell Phones & Smart Watches'], price: 999.98, user_id: 1 },
      {img: imgArr[14], title: "Space Gray Aluminum Case with Braided Solo Loop", description: "This is a brand new, barely used", category: ['Cell Phones & Smart Watches'], price: 449.98, user_id: 1 },
      {img: imgArr[15], title: "Hisense 55HG8 55'' H8G Series Quantum 4K", description: "The H8 is enhanced by Quantum Dot technology, raising the bar for picture-quality. Experience richer colors, more detail, better brightness, and smoother motion.", category: ['TV & Video'], price: 569.98, user_id: 1 },
      {img: imgArr[16], title: "Samsung - 28 Cu. Ft. French Door Refrigerator", description: "CoolSelect Pantry™ - Fingerprint Resistant Stainless Steel", category: ['Refridgeration'], price: 1799.99, user_id: 1 },
      {img: imgArr[17], title: "Samsung - 4.5 cu. ft. 10-Cycle Front Load Washer", description: "Front Load Washer with Vibration Reduction Technology+ - Fingerprint Resistant Black Stainless Steel", category: ['Washer/Dryer'], price: 599.99, user_id: 1 },
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
