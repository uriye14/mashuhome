// English translations for all recipes
// Maps recipe id (number) to English translation object
const recipesEn = {
  2: {
    title: "Banana Oatmeal Porridge",
    category: "Breakfast",
    desc: "Ripe bananas bring natural sweetness and loads of nutrition — the kids' favorite way to start the morning.",
    difficulty: "Easy",
    ingredients: [
      "Rolled oats 120g",
      "Ripe bananas 2",
      "Milk 400ml",
      "Honey 1 tbsp",
      "Ground cinnamon a pinch",
      "Crushed walnuts to taste"
    ],
    steps: [
      { title: "Add ingredients", desc: "Pour the oats and milk into the bowl. Peel the bananas and drop them in whole — no need to slice them first." },
      { title: "Cook", desc: "90°C, speed 2, cook for 8 minutes. The bananas will soften and melt into the oats on their own." },
      { title: "Blend and season", desc: "Add honey and blend at speed 4 for 30 seconds. Blend longer if you prefer a smoother texture." },
      { title: "Serve", desc: "Spoon into bowls, sprinkle with crushed walnuts and a pinch of cinnamon. Enjoy right away." }
    ]
  },
  5: {
    title: "Pumpkin Brown Rice Congee",
    category: "Breakfast",
    desc: "Sweet, tender pumpkin paired with brown rice — a wholesome, low-calorie congee that's gentle on the stomach and great for kids and the elderly alike.",
    difficulty: "Easy",
    ingredients: [
      "Pumpkin 300g, peeled and cut into chunks",
      "Brown rice 150g, soaked for 2 hours",
      "Water 1200ml",
      "Rock sugar 2–3 pieces",
      "Goji berries a small handful"
    ],
    steps: [
      { title: "Prep", desc: "Soak the brown rice for 2 hours. Peel the pumpkin and cut into 2cm chunks." },
      { title: "Add everything", desc: "Put the soaked brown rice, pumpkin chunks, water, and rock sugar into the bowl." },
      { title: "Slow cook", desc: "100°C, speed 1, cook for 30 minutes. The pumpkin will naturally soften and dissolve into the congee." },
      { title: "Serve", desc: "Ladle into bowls and garnish with a few goji berries. Serve warm." }
    ]
  },
  14: {
    title: "Five-Grain Porridge",
    category: "Breakfast",
    desc: "A blend of whole grains blitzed into a smooth, warming porridge — nourishing and satisfying on cold winter mornings.",
    difficulty: "Easy",
    ingredients: [
      "White rice 50g",
      "Black rice 30g",
      "Millet 30g",
      "Rolled oats 20g",
      "Peanuts 20g",
      "Water 800ml",
      "Rock sugar to taste"
    ],
    steps: [
      { title: "Prep", desc: "Rinse all grains thoroughly. Soak for 2 hours if time allows." },
      { title: "Add everything", desc: "Pour the soaked grains and water into the Thermomix." },
      { title: "Slow cook", desc: "100°C, speed 1, cook for 20 minutes until all grains are fully soft." },
      { title: "Blend into porridge", desc: "Gradually increase from speed 5 to speed 10 and blend for 1 minute." },
      { title: "Sweeten and serve", desc: "Add rock sugar and stir at speed 3 until dissolved. Drink while hot." }
    ]
  },
  3: {
    title: "Tomato Egg Pasta",
    category: "Main Dish",
    desc: "A homestyle tomato pasta that's tangy, sweet, and satisfying — simple ingredients that the whole family will love.",
    difficulty: "Easy",
    ingredients: [
      "Pasta 250g",
      "Fresh tomatoes 4",
      "Eggs 3",
      "Garlic 3 cloves",
      "Olive oil 2 tbsp",
      "Tomato paste 1 tbsp",
      "Salt and sugar to taste",
      "Fresh basil leaves a small handful"
    ],
    steps: [
      { title: "Cook the pasta", desc: "Bring a large pot of salted water to a boil. Cook the pasta according to package directions. Drain and set aside." },
      { title: "Sauté garlic", desc: "Add garlic and chop at speed 5. Add olive oil and sauté at 100°C, speed 1 for 3 minutes." },
      { title: "Make the tomato sauce", desc: "Chop the tomatoes and add them along with the tomato paste, salt, and a pinch of sugar. Cook at 100°C, speed 2 for 12 minutes until the sauce thickens." },
      { title: "Add the eggs", desc: "Beat the eggs and slowly pour them in. Stir gently at 80°C, speed 2 for 3 minutes until the eggs are just set." },
      { title: "Toss and serve", desc: "Add the cooked pasta and toss to coat. Scatter fresh basil on top and serve hot." }
    ]
  },
  15: {
    title: "Tomato Beef Noodle Soup",
    category: "Main Dish",
    desc: "A rich, deeply flavorful broth, fall-apart tender beef, and tangy-sweet tomatoes — a bowl of noodles that silences the whole table.",
    difficulty: "Medium",
    ingredients: [
      "Beef brisket 400g, cut into large chunks",
      "Tomatoes 3, cut into wedges",
      "Garlic 3 cloves",
      "Ginger 2 slices",
      "Soy sauce 2 tbsp",
      "Dark soy sauce 1 tsp",
      "Tomato paste 1 tbsp",
      "Salt and sugar to taste",
      "Noodles as needed",
      "Water 800ml"
    ],
    steps: [
      { title: "Blanch the beef", desc: "Start the brisket in cold water, bring to a boil in a regular pot, then drain and rinse to remove any impurities." },
      { title: "Sauté garlic and ginger", desc: "Add garlic and ginger to the Thermomix and chop at speed 5. Add a little oil and sauté at 100°C, speed 1 for 3 minutes." },
      { title: "Cook the tomatoes", desc: "Add the tomato chunks and tomato paste. Cook at 100°C, speed 1 for 5 minutes, stirring until the tomatoes break down and release their juice." },
      { title: "Braise the beef", desc: "Add the blanched brisket, soy sauce, dark soy sauce, salt, sugar, and water. Cook at 100°C, stir setting, reverse, for 40 minutes." },
      { title: "Cook noodles and assemble", desc: "Boil noodles in a separate pot, drain, and place in bowls. Ladle the tomato beef broth generously on top. Eat while hot!" }
    ]
  },
  21: {
    title: "Orange Glazed Chicken Wings",
    category: "Hot Dishes",
    desc: "The Thermomix cooks the wings until fully infused with flavor, then a quick trip to the oven crisps them up. Fresh orange zest keeps the whole dish bright and light.",
    difficulty: "Easy",
    ingredients: [
      "Chicken mid-wings 500g",
      "Sugar 10g",
      "Soy sauce 15g",
      "Dark soy sauce 20g",
      "Shaoxing rice wine 50g",
      "Water 100g",
      "Ginger 20g, sliced",
      "Orange 1, sliced"
    ],
    steps: [
      { title: "Cook and marinate", desc: "Add the wings, sugar, soy sauce, dark soy sauce, rice wine, water, and ginger slices to the Thermomix. Cook at Varoma temperature, speed 1 for 26 minutes until the wings are cooked through and flavorful." },
      { title: "Coat and rest", desc: "Use the spatula to gently toss so every wing is coated in sauce. Transfer to a bowl and let cool slightly." },
      { title: "Roast", desc: "Preheat the oven to 200°C. Arrange the wings on a baking tray and lay a few orange slices on top. Roast for 15 minutes until the skin is golden and caramelized." },
      { title: "Plate and serve", desc: "Plate up and serve hot — crispy on the outside, juicy inside, with a wonderful orange fragrance." }
    ]
  },
  22: {
    title: "Beef Meatballs",
    category: "Main Dish",
    desc: "Springy, bouncy handmade beef meatballs — the Thermomix handles the toughest part (grinding the meat), and the kids absolutely love them.",
    difficulty: "Medium",
    ingredients: [
      "Beef 300g, cut into small chunks",
      "Egg whites 2",
      "Salt 9g",
      "Scallion-ginger water 45g",
      "Cornstarch 15g",
      "Ground black pepper to taste"
    ],
    steps: [
      { title: "Prep the beef", desc: "Cut the beef into mahjong-tile-sized pieces, rinse clean, then freeze until just firm." },
      { title: "Grind the meat", desc: "Place the semi-frozen beef in the Thermomix and pulse at speed 6 for 20 seconds. Scrape down the sides, then pulse at speed 6 for another 20 seconds." },
      { title: "Season and work the paste", desc: "Add salt, egg whites, scallion-ginger water, cornstarch, and black pepper. Mix at speed 3 for 3 minutes until the paste becomes elastic and sticky." },
      { title: "Cook the meatballs", desc: "Fill the Thermomix with about 1900g of water and preheat to 80°C on stir setting. Wet your hands with cold water and squeeze out the meatballs. Bring to 100°C and cook until the meatballs float to the surface — they're done." }
    ]
  },
  23: {
    title: "Fish Balls",
    category: "Main Dish",
    desc: "Silky-smooth, springy homemade fish balls with zero additives — so fresh you could eat them plain.",
    difficulty: "Medium",
    ingredients: [
      "Fish fillet 400g (grass carp or sea bass, skin and bones removed)",
      "Scallion-ginger water 100g (added in stages)",
      "Egg whites 3",
      "Shaoxing rice wine 40g",
      "Cornstarch 20g",
      "White pepper powder 5g",
      "Salt 15g"
    ],
    steps: [
      { title: "First grind", desc: "Place the fish in the Thermomix with 50g of scallion-ginger water and blend at speed 8 for 15 seconds. Repeat this step a total of 4 times, adding 50g of scallion-ginger water each time." },
      { title: "Add seasonings", desc: "Add egg whites, rice wine, cornstarch, remaining scallion-ginger water, and white pepper. Blend at speed 8 for another 30 seconds." },
      { title: "Salt and build elasticity", desc: "Add salt and mix at reverse, speed 3 for 2 minutes. Drop a small amount into cold water — if it floats, the paste has the right elasticity." },
      { title: "Cook the fish balls", desc: "Bring a pot of water to a boil with a pinch of salt. Reduce to a gentle simmer. Wet your hands with cold water and squeeze out the fish balls into the pot. They're ready when they expand and float to the top, about 3–5 minutes." }
    ]
  },
  27: {
    title: "Sichuan Boiled Beef (Shui Zhu Niu Rou)",
    category: "Hot Dishes",
    desc: "A Sichuan classic — numbing, spicy, and intensely aromatic. The Thermomix makes the tender beef and rich spicy base effortless. Dead silence at the table is guaranteed.",
    difficulty: "Medium",
    ingredients: [
      "Fresh beef 300g, sliced thin against the grain",
      "Cornstarch 10g",
      "Water 500ml",
      "Dried Sichuan peppercorns 2g",
      "Dried chili peppers 10g, finely chopped",
      "Pixian doubanjiang (broad bean chili paste) 50g, finely chopped",
      "Bean sprouts 100g (or cucumber, tender greens)",
      "Scallion and garlic 30g",
      "Green onions 20g, thinly sliced",
      "Soy sauce 1 tbsp",
      "Dark soy sauce a small dash",
      "Sugar a pinch",
      "Salt to taste",
      "Cooking oil as needed"
    ],
    steps: [
      { title: "Make the cornstarch slurry", desc: "Combine cornstarch and 500ml water in the Thermomix and blend at speed 10 for 10 seconds. Pour through a strainer and set aside — this is the key to tender beef." },
      { title: "Marinate the beef", desc: "Slice the beef thin against the grain. Mix with the strained cornstarch slurry, soy sauce, dark soy sauce, and a pinch of sugar. Marinate for 20 minutes, coating each slice evenly." },
      { title: "Build the spicy base", desc: "Add scallion and garlic to the Thermomix and chop at speed 5. Add oil and the doubanjiang and cook at 100°C, speed 1 for 5 minutes until the red oil and aroma are fully developed." },
      { title: "Cook the vegetables", desc: "Add enough water and bring to a boil. Add the bean sprouts and cook at 100°C, stir setting for 3 minutes. Remove and spread across the bottom of a large deep bowl." },
      { title: "Blanch the beef", desc: "Keep the broth at 100°C. Slide the beef slices in one by one, stirring gently with the stir setting in reverse. Remove as soon as the slices change color and arrange over the vegetables. Pour the hot broth on top." },
      { title: "Finish with hot oil", desc: "Scatter the chopped dried chilies, Sichuan peppercorns, and sliced green onions over the top. Heat a ladle of oil until smoking hot and pour it directly over the dish. It will sizzle dramatically — serve immediately." }
    ]
  },
  26: {
    title: "Red-Braised Pork Belly (Hong Shao Rou)",
    category: "Hot Dishes",
    desc: "A classic homestyle red-braised pork — rock sugar caramelized to amber, slow-braised in the Thermomix until every piece melts in your mouth.",
    difficulty: "Medium",
    ingredients: [
      "Pork belly 600g, cut into 4cm cubes",
      "Rock sugar 30g",
      "Soy sauce 3 tbsp",
      "Dark soy sauce 1 tbsp",
      "Shaoxing rice wine 3 tbsp",
      "Ginger 4 slices",
      "Green onion 1 section",
      "Star anise 2",
      "Water 400ml"
    ],
    steps: [
      { title: "Blanch the pork", desc: "Start the pork belly in cold water, bring to a boil, skim off the foam, then drain and rinse clean." },
      { title: "Caramelize the sugar", desc: "Add a little oil and the rock sugar to the Thermomix. Cook at 100°C, speed 1 for 5 minutes until the sugar melts into a deep amber caramel." },
      { title: "Coat the pork", desc: "Add the pork belly and cook at 100°C, stir setting, reverse for 3 minutes, turning until every piece is evenly coated in caramel." },
      { title: "Braise slowly", desc: "Add soy sauce, dark soy sauce, rice wine, ginger, green onion, star anise, and water. Cook at 100°C, stir setting, reverse for 45 minutes until the pork is meltingly tender." },
      { title: "Reduce and serve", desc: "Remove the green onion, ginger, and star anise. Reduce at 120°C, stir setting, reverse for 7 minutes until the sauce thickens and clings to the pork. Plate and garnish with scallions." }
    ]
  },
  1: {
    title: "Creamy Mushroom Soup",
    category: "Soups",
    desc: "Fresh mushrooms and heavy cream blended into a silky, velvety soup — a crowd-pleasing, warming classic for the whole family.",
    difficulty: "Easy",
    ingredients: [
      "Fresh mushrooms 400g",
      "Onion 1, roughly chopped",
      "Garlic 2 cloves",
      "Heavy cream 150ml",
      "Milk 200ml",
      "Unsalted butter 20g",
      "Salt and white pepper to taste",
      "Fresh parsley, chopped, a small amount"
    ],
    steps: [
      { title: "Sauté the onion", desc: "Add butter, garlic, and onion to the bowl. Cook at 100°C, speed 1 for 5 minutes until the onion softens and becomes translucent." },
      { title: "Add mushrooms", desc: "Add the mushrooms and cook at 100°C, speed 1 for 8 minutes until they release their liquid and soften." },
      { title: "Blend smooth", desc: "Let cool briefly, then gradually increase from speed 5 to speed 9 and blend for 1 minute until perfectly smooth." },
      { title: "Add cream", desc: "Pour in the heavy cream and milk. Heat at 90°C, speed 3 for 5 minutes. Season with salt and white pepper." },
      { title: "Serve", desc: "Ladle into bowls and sprinkle with chopped parsley. Serve hot. Pairs beautifully with crusty bread." }
    ]
  },
  16: {
    title: "Corn and Spare Rib Soup",
    category: "Soups",
    desc: "Sweet corn with pork ribs makes a milky-white, naturally sweet and refreshing broth — loved by kids and grandparents alike.",
    difficulty: "Easy",
    ingredients: [
      "Pork spare ribs 500g",
      "Sweet corn 2 ears, cut into sections",
      "Carrot 1, cut into rolling chunks",
      "Ginger 3 slices",
      "Water 1200ml",
      "Salt to taste",
      "Goji berries a small handful (optional)"
    ],
    steps: [
      { title: "Blanch the ribs", desc: "Start the ribs in cold water in a regular pot, bring to a boil, then drain and rinse clean. Don't skip this step — it's what keeps the broth clear and sweet." },
      { title: "Add everything", desc: "Place the ribs, corn sections, carrot, ginger slices, and water into the Thermomix." },
      { title: "Slow braise", desc: "Cook at 100°C, stir setting, reverse for 50 minutes. The broth will gradually turn a milky white as it simmers." },
      { title: "Season and serve", desc: "Season with salt and garnish with a few goji berries. Serve hot — the corn will be sweet and tender." }
    ]
  },
  24: {
    title: "Enoki Mushrooms with Beef Slices (Jin Zhen Fei Niu)",
    category: "Hot Dishes",
    desc: "A rich golden broth loaded with silky wagyu-style beef slices and crunchy enoki mushrooms — tangy, spicy, and gone from the table in seconds.",
    difficulty: "Medium",
    ingredients: [
      "Thinly sliced beef (fatty) 350g",
      "Enoki mushrooms 120g, root ends removed",
      "Chicken stock 900g",
      "Green pickled peppers 20g",
      "Yellow lantern chili sauce 20g",
      "White vinegar 100g",
      "Oil 15g",
      "Scallions 2 stalks, cut into sections",
      "Ginger 5 slices",
      "Garlic 3 cloves, sliced",
      "Salt 3g",
      "Sugar 5g",
      "Sliced green onions and fresh bird's eye chilies to garnish"
    ],
    steps: [
      { title: "Blanch the beef", desc: "Drop the beef slices into boiling water briefly — as soon as they change color, remove and drain." },
      { title: "Build the aromatics", desc: "Add oil, scallions, ginger, garlic, green pickled peppers, and yellow lantern chili sauce to the Thermomix. Sauté at 120°C, speed 1 for 3 minutes." },
      { title: "Simmer the broth", desc: "Pour in the chicken stock, white vinegar, salt, and sugar. Cook at 100°C, stir setting for 8 minutes." },
      { title: "Add enoki mushrooms", desc: "Add the enoki mushrooms and cook at 100°C, stir setting for another 3 minutes until softened and full of flavor." },
      { title: "Add the beef", desc: "Add the blanched beef slices. Cook at Varoma temperature, reverse, speed 1 for 3 minutes. Pour into a large bowl and top with sliced green onions and bird's eye chili rounds." }
    ]
  },
  11: {
    title: "Pickled Daikon Radish",
    category: "Cold Dishes / Appetizers",
    desc: "Tangy, sweet, and satisfyingly crunchy pickled radish — the Thermomix handles the pickling in a flash. Keep a jar in the fridge for a go-to appetizer anytime.",
    difficulty: "Easy",
    ingredients: [
      "White daikon radish 1000g",
      "Soy sauce 130g",
      "Vinegar 100g",
      "Rock sugar 100g"
    ],
    steps: [
      { title: "Make the brine", desc: "Add vinegar, soy sauce, and rock sugar to the bowl. Cook at 100°C, stir setting for about 6 minutes until the rock sugar is fully dissolved." },
      { title: "Pickle the radish", desc: "Rinse and thinly slice the daikon. Add to the bowl. Cook at 70°C, stir setting, reverse for 18 minutes, gently turning the slices so they absorb the brine." },
      { title: "Cool and jar", desc: "Transfer to a glass jar and let cool to room temperature. Refrigerate." },
      { title: "Tips", desc: "The flavor and crunch improve after chilling overnight. Even better the next day." }
    ]
  },
  25: {
    title: "Mala Spicy Duck Tongues",
    category: "Cold Dishes / Appetizers",
    desc: "Numbing, spicy, and wonderfully chewy — braised in the Thermomix and tossed in a bold dressing. Perfect with drinks or over rice.",
    difficulty: "Easy",
    ingredients: [
      "Duck tongues 250g, blanched and drained",
      "Water 800g",
      "Soy sauce 2 tsp",
      "Dark soy sauce 1 tsp",
      "Chinese 13-spice braise packet 1",
      "Salt 1/4 tsp",
      "Sugar 1/4 tsp",
      "Sichuan pepper powder 2 tsp",
      "Chili oil 4 tsp",
      "Sesame oil 2 tsp",
      "White sesame seeds 2 tbsp"
    ],
    steps: [
      { title: "Blanch the duck tongues", desc: "Blanch the duck tongues in boiling water to remove any gamey smell and impurities. Drain and set aside." },
      { title: "Braise", desc: "Add the blanched tongues, water, soy sauce, dark soy sauce, and the 13-spice braise packet to the Thermomix. Cook at 100°C, speed 1 for 20 minutes." },
      { title: "Remove and drain", desc: "Remove the duck tongues, drain well, and let cool slightly." },
      { title: "Dress and serve", desc: "Mix salt, sugar, Sichuan pepper powder, chili oil, and sesame oil into a dressing. Toss the duck tongues thoroughly in the dressing, then sprinkle with white sesame seeds." }
    ]
  },
  4: {
    title: "Apple Cinnamon Muffins",
    category: "Desserts",
    desc: "The kids' favorite afternoon treat — tender apple chunks in every bite, filled with the warm scent of cinnamon.",
    difficulty: "Medium",
    ingredients: [
      "Cake flour 200g",
      "Apples 2, peeled and diced",
      "Eggs 2",
      "Milk 120ml",
      "Unsalted butter 80g",
      "Granulated sugar 90g",
      "Baking powder 1.5 tsp",
      "Ground cinnamon 1 tsp"
    ],
    steps: [
      { title: "Preheat oven", desc: "Preheat the oven to 180°C. Line a muffin tin with paper liners and set aside." },
      { title: "Melt butter", desc: "Add the butter and melt at 50°C, speed 2 for about 2 minutes. Add sugar, eggs, and milk, then mix at speed 4 until smooth." },
      { title: "Add dry ingredients", desc: "Sift in the flour, baking powder, and cinnamon. Mix at speed 4 for about 10 seconds — just until no dry flour remains." },
      { title: "Fold in apples", desc: "Gently fold in the diced apples with a spatula, using light folding motions to keep the batter airy." },
      { title: "Bake", desc: "Fill the muffin cups about three-quarters full. Bake at 180°C for about 22 minutes. A toothpick inserted in the center should come out clean." }
    ]
  },
  17: {
    title: "Double-Skin Milk Pudding (Shuang Pi Nai)",
    category: "Desserts",
    desc: "Better than anything from a bubble tea shop — silky smooth, with a delicate milk skin on top. Chilled overnight makes it even more heavenly.",
    difficulty: "Medium",
    ingredients: [
      "Whole milk 500ml",
      "Egg whites 3",
      "Sugar 40g"
    ],
    steps: [
      { title: "Heat the milk", desc: "Pour milk into the Thermomix and heat at 80°C, speed 2 for 5 minutes. Pour into bowls and let cool. A skin will naturally form on the surface — this is the first skin." },
      { title: "Beat the egg whites", desc: "Add sugar to the egg whites and beat using the butterfly whisk at speed 4 for about 2 minutes until foamy. You don't need stiff peaks." },
      { title: "Combine", desc: "Gently lift the milk skin from the edge of the bowl with a toothpick. Slowly pour the egg white mixture beneath the skin from the side, then gently float the skin back to the surface." },
      { title: "Steam", desc: "Add water to a steamer. Cover the bowls with plastic wrap and steam at 80°C for 25 minutes. Do not lift the lid during steaming!" },
      { title: "Chill and serve", desc: "Let cool, then refrigerate for 1 hour. The texture becomes even more silky and tender when chilled." }
    ]
  },
  12: {
    title: "Homemade Soy Milk",
    category: "Drinks",
    desc: "So much richer than anything from the store! Homemade soy milk with no additives — thick, wholesome, and deeply satisfying for breakfast.",
    difficulty: "Easy",
    ingredients: [
      "Dried soybeans 100g (soaked overnight)",
      "Water 1000ml",
      "Sugar to taste"
    ],
    steps: [
      { title: "Soak the beans", desc: "Soak the soybeans in water overnight. Rinse several times before using." },
      { title: "Add ingredients", desc: "Pour the soaked beans and 1000ml of water into the Thermomix." },
      { title: "Blend", desc: "Gradually increase from speed 5 to speed 10 and blend for 1 minute until completely smooth." },
      { title: "Strain", desc: "Pour through a nut milk bag or fine-mesh strainer to remove the okara." },
      { title: "Cook", desc: "Return the strained soy milk to the Thermomix and cook at 100°C, speed 2 for 8 minutes. It must be fully cooked before drinking! Sweeten to taste and serve hot." }
    ]
  },
  7: {
    title: "Passion Fruit Lemon Sparkling Drink",
    category: "Drinks",
    desc: "A refreshing, tangy-sweet summer drink — the perfect after-school reward for the kids.",
    difficulty: "Easy",
    ingredients: [
      "Passion fruit 3, pulp scooped out",
      "Fresh lemon 1, juiced",
      "Honey 2 tbsp",
      "Sparkling water 400ml, chilled",
      "Ice cubes as needed"
    ],
    steps: [
      { title: "Make the syrup", desc: "Add the passion fruit pulp, lemon juice, and honey to the Thermomix. Blend at speed 5 for 30 seconds until well combined." },
      { title: "Strain (optional)", desc: "If you prefer no seeds, strain through a fine mesh to get a clear juice." },
      { title: "Assemble", desc: "Fill glasses with ice, pour in the fruit juice, then slowly top with chilled sparkling water. Don't stir — keep those bubbles!" }
    ]
  },
  8: {
    title: "Banana Cocoa Smoothie",
    category: "Drinks",
    desc: "Naturally sweet with no added sugar — thick, creamy, and a healthy breakfast drink the kids will love.",
    difficulty: "Easy",
    ingredients: [
      "Ripe bananas 2 (frozen gives a thicker texture)",
      "Cocoa powder 2 tbsp",
      "Milk 250ml",
      "Honey 1 tbsp (optional)",
      "Ice cubes a small handful"
    ],
    steps: [
      { title: "Add ingredients", desc: "Add the bananas (frozen is best), cocoa powder, and milk to the Thermomix." },
      { title: "Blend", desc: "Gradually increase from speed 5 to speed 10 and blend for about 1 minute until completely smooth with no lumps." },
      { title: "Serve immediately", desc: "Pour into glasses and drink right away — best enjoyed fresh." }
    ]
  },
  6: {
    title: "Homemade Peanut Butter",
    category: "Sauces & Condiments",
    desc: "Just peanuts and a pinch of salt — no additives whatsoever. Richer and more flavorful than anything you'll find in a jar at the store.",
    difficulty: "Easy",
    ingredients: [
      "Roasted skinned peanuts 300g",
      "Salt 1/4 tsp",
      "Honey 1 tbsp (optional)",
      "Grapeseed oil a small drizzle"
    ],
    steps: [
      { title: "Prep the peanuts", desc: "Use pre-roasted, skinned peanuts. Make sure they're completely dry — no moisture at all." },
      { title: "Initial blend", desc: "Add the peanuts and gradually increase from speed 5 to speed 10. Blend for 1 minute until you have a coarse crumble." },
      { title: "Keep grinding", desc: "Continue blending at speed 10 for 3 more minutes. The peanuts will go from powder to releasing their oils and becoming a paste. Scrape down the sides as needed." },
      { title: "Season and jar", desc: "Add salt and honey, then blend at speed 5 for 10 seconds. Transfer to a clean glass jar, seal, and refrigerate. Keeps for about 1 month." }
    ]
  },
  18: {
    title: "Scallion Oil",
    category: "Sauces & Condiments",
    desc: "One jar of scallion oil transforms noodles, rice, or anything you toss it with. Homemade beats store-bought ten times over — one batch lasts ages.",
    difficulty: "Easy",
    ingredients: [
      "Green onions 200g, cut into 5cm sections",
      "Vegetable oil 300ml",
      "Salt a small pinch"
    ],
    steps: [
      { title: "Dry the scallions thoroughly", desc: "Wash the green onions and let them dry completely — any moisture will cause dangerous splattering in hot oil. Air-dry for at least 30 minutes." },
      { title: "Add to Thermomix", desc: "Place the scallion sections and oil in the Thermomix, making sure the scallions are fully submerged." },
      { title: "Slow fry", desc: "Cook at 120°C, stir setting, reverse for 15 minutes. The scallions will slowly turn from bright green to golden." },
      { title: "Strain and jar", desc: "Strain out the scallion solids through a fine-mesh strainer, leaving behind the clear golden oil. Let cool, then transfer to a clean glass jar, seal, and refrigerate. Keeps for about one month." }
    ]
  },
  19: {
    title: "Chili Sauce",
    category: "Sauces & Condiments",
    desc: "A must-have for spice lovers! Make it as hot as you want — a spoonful makes everything better.",
    difficulty: "Easy",
    ingredients: [
      "Fresh red chilies 300g, stems removed",
      "Garlic 50g",
      "Ginger 20g",
      "Cooking oil 50ml",
      "Salt 1 tsp",
      "Sugar 1 tsp",
      "Soy sauce 1 tbsp"
    ],
    steps: [
      { title: "Prep the ingredients", desc: "Remove the stems from the chilies and wash them. They must be completely dry. No need to pre-chop the garlic and ginger — just toss them in." },
      { title: "Chop", desc: "Add the chilies, garlic, and ginger together. Blend at speed 5 for 5 seconds until coarsely chopped." },
      { title: "Fry", desc: "Add the cooking oil and cook at 100°C, speed 1 for 10 minutes, frying off the moisture in the chilies and developing the aroma." },
      { title: "Season and jar", desc: "Add salt, sugar, and soy sauce, then continue at 100°C, speed 1 for another 5 minutes until slightly thickened. Let cool, then transfer to a glass jar and refrigerate." }
    ]
  },
  30: {
    title: "Chengdu Green Chili Sauce (Qing Jiao Jiang)",
    category: "Sauces & Condiments",
    desc: "A secret-recipe Chengdu-style green chili sauce — aromatic, spicy, and savory. Great for tossing noodles or as a dipping sauce. Swap in bird's eye chilies for extra heat.",
    difficulty: "Easy",
    ingredients: [
      "Er jing tiao green chilies 50g",
      "Ginger 10g",
      "Garlic 10g",
      "Soy sauce 20g",
      "Oil 50g",
      "Fermented black beans (douchi) 20g",
      "Sweet bean paste (tian mian jiang) 5g",
      "Sugar 5g",
      "Salt 1/2 tsp",
      "Sichuan pepper powder 1/4 tsp",
      "MSG or chicken bouillon 1/2 tsp",
      "Vinegar 10g",
      "Finely chopped celery 20g"
    ],
    steps: [
      { title: "Chop the aromatics", desc: "Add the green chilies, ginger, and garlic to the Thermomix. Chop at speed 6 for 5 seconds." },
      { title: "Fry", desc: "Add oil and cook at Varoma temperature, speed 0.5 for 3 minutes." },
      { title: "Add seasonings", desc: "Add fermented black beans, sweet bean paste, soy sauce, salt, sugar, Sichuan pepper powder, and MSG. Cook at Varoma temperature — speed 1 for the first minute, then speed 0.5 for the remaining 4 minutes (5 minutes total)." },
      { title: "Finish", desc: "Add vinegar and chopped celery. Mix at speed 2 for 10 seconds until evenly combined. Jar up and refrigerate." }
    ]
  },
  20: {
    title: "Tomato Sauce",
    category: "Sauces & Condiments",
    desc: "Slow-cooked from fresh tomatoes — tangy, sweet, and deeply flavorful. Far better than anything from a jar. Perfect for pizza, pasta, and more.",
    difficulty: "Easy",
    ingredients: [
      "Ripe tomatoes 800g",
      "Onion 1/2",
      "Garlic 3 cloves",
      "Olive oil 2 tbsp",
      "Salt 1 tsp",
      "Sugar 1 tsp",
      "Fresh basil leaves a small handful (optional)"
    ],
    steps: [
      { title: "Sauté onion and garlic", desc: "Add olive oil, chopped onion, and garlic to the Thermomix. Cook at 100°C, speed 1 for 5 minutes until softened and fragrant." },
      { title: "Add tomatoes", desc: "Chop the tomatoes and add them. Cook at 100°C, speed 2 for 15 minutes until the tomatoes completely break down and the color deepens." },
      { title: "Blend smooth", desc: "Let cool slightly, then blend at speed 8 for 30 seconds until smooth." },
      { title: "Reduce and season", desc: "Add salt and sugar. Cook at 90°C, speed 2 for another 5 minutes until the sauce thickens. Let cool, jar up, and refrigerate. Keeps for about 2 weeks." }
    ]
  },
  34: {
    title: "Homemade Shrimp Balls",
    category: "Main Dish",
    desc: "Springy, bouncy homemade shrimp balls — the Thermomix handles grinding and working the paste in two easy steps. Chill for an hour and they're ready to cook. Way fresher than store-bought.",
    difficulty: "Easy",
    ingredients: [
      "Shrimp, peeled and deveined 300g",
      "Salt to taste",
      "Shaoxing rice wine a small dash",
      "Egg white 1",
      "Scallion-ginger water as needed",
      "White pepper powder a pinch",
      "Cornstarch as needed"
    ],
    steps: [
      { title: "Grind the shrimp", desc: "Add the shrimp to the Thermomix and blend at speed 6 for 15 seconds. Scrape down the sides, then blend at speed 6 for another 15 seconds until you have a fine paste." },
      { title: "Season and work the paste", desc: "Add salt, rice wine, egg white, scallion-ginger water, white pepper, and cornstarch. Mix at speed 3 for 3 minutes until the paste is elastic and sticky." },
      { title: "Chill to set", desc: "Transfer the paste to a bowl and refrigerate for 1 hour — this gives the shrimp balls a better shape and springier texture." },
      { title: "Cook the shrimp balls", desc: "Heat a pot of water to 85°C (not a full rolling boil). Wet your hands with cold water and squeeze out the shrimp balls into the pot. They're done when they float to the surface and turn white." }
    ]
  },
  32: {
    title: "Mung Bean Milk Granita",
    category: "Drinks",
    desc: "Mung bean granita topped with homemade milk jelly — cool, refreshing, and gorgeous. The ultimate summer treat.",
    difficulty: "Medium",
    ingredients: [
      "Mung beans 250g, pre-cooked",
      "Milk 75g (for granita)",
      "Water 100g (for granita)",
      "Whole milk 200g (for milk jelly, full-fat preferred)",
      "Sugar 20g",
      "Milk powder 20g (optional)",
      "Gelatin sheets about 2g, bloomed in cold water"
    ],
    steps: [
      { title: "Make the mung bean granita", desc: "Add cooked mung beans, 75g milk, and 100g water to the Thermomix. Blend with the blade until smooth. Pour into ice cube trays and freeze for at least 4 hours." },
      { title: "Make the milk jelly", desc: "Add 200g milk, sugar, and milk powder to the Thermomix. Heat at 80°C, speed 2 for 5 minutes until sugar dissolves. Add the bloomed and squeezed-dry gelatin sheets and stir at speed 3 for 30 seconds until fully melted. Pour into a container and refrigerate until set." },
      { title: "Assemble", desc: "Remove the frozen granita from the tray and briefly pulse in the Thermomix to break it into shaved ice. Divide into glasses and top with cubed or poured milk jelly. Serve right away." }
    ]
  },
  33: {
    title: "Soy-Braised Whole Chicken (Chi You Ji)",
    category: "Hot Dishes",
    desc: "A whole chicken slow-braised in soy until the skin turns a gorgeous glossy mahogany. Brush with sesame oil and tear into it by hand — the only right way to eat it.",
    difficulty: "Easy",
    ingredients: [
      "Whole chicken 1 (about 2 lbs), head and feet removed",
      "Oyster sauce 160g",
      "Soy sauce 80g",
      "Dark soy sauce 10g",
      "Rock sugar 30g",
      "Water 200g",
      "Rice wine 2 tbsp",
      "Ginger 5 slices",
      "Scallions 3 stalks, tied into knots",
      "Cinnamon stick 1 small piece",
      "Bay leaves 2",
      "Star anise 2",
      "Sesame oil as needed"
    ],
    steps: [
      { title: "Make the braising liquid", desc: "Add ginger slices, scallion knots, cinnamon stick, bay leaves, star anise, oyster sauce, soy sauce, dark soy sauce, rock sugar, water, and rice wine to the Thermomix. Cook at Varoma temperature, reverse, stir setting for 5 minutes until deeply aromatic." },
      { title: "Braise the whole chicken", desc: "Rest the chicken (head and feet removed) upright on the blade cover, then set the measuring cup on top. Cook at Varoma temperature, reverse, stir setting for 30 minutes. Pause a few times during cooking to spoon the braising liquid over the chicken for even color. Let it rest in the closed bowl for an additional 5 minutes." },
      { title: "Glaze and serve", desc: "Remove the chicken and arrange on a platter. Brush with a layer of sesame oil while still hot for a shinier, more fragrant finish. Tear into pieces by hand for the full experience." }
    ]
  },
  31: {
    title: "Matcha Jelly",
    category: "Desserts",
    desc: "A silky, fragrant matcha jelly — the Thermomix makes it effortless. Chill, cut into cubes, and serve with red beans and milk for a dessert that's as beautiful as it is delicious.",
    difficulty: "Easy",
    ingredients: [
      "Milk 100ml",
      "Heavy cream 160ml",
      "Sugar 30g",
      "Matcha powder 6g",
      "Gelatin sheets 10g, bloomed in cold water"
    ],
    steps: [
      { title: "Heat the dairy", desc: "Add milk, heavy cream, and sugar to the Thermomix. Heat at 80°C, speed 1 for 5 minutes." },
      { title: "Dissolve the matcha", desc: "Sift the matcha powder and dissolve it in a small amount of the hot liquid, stirring until completely lump-free. Pour back into the Thermomix." },
      { title: "Add gelatin", desc: "Add the bloomed and squeezed-dry gelatin sheets. Stir at speed 3 for 30 seconds until fully dissolved and smooth." },
      { title: "Strain and refrigerate", desc: "Pass through a strainer into a container. Refrigerate for at least 3 hours until set." },
      { title: "Serve", desc: "Cut into small cubes. Serve with red beans and milk — light, refreshing, and visually stunning." }
    ]
  },
  29: {
    title: "Loquat Cough Syrup (Pi Pa Gao)",
    category: "Drinks",
    desc: "A homemade fritillary loquat syrup — fresh loquat slow-cooked with traditional Chinese herbs for a natural, soothing remedy. More wholesome than anything you'd buy, and a single batch goes a long way.",
    difficulty: "Medium",
    ingredients: [
      "Fritillary (chuan bei) powder 2g (from a 5g pack, e.g. Tong Ren Tang brand)",
      "Dried tangerine peel (chen pi) 20g",
      "Platycodon root (jie geng) 20g",
      "Lily bulb (bai he) 20g",
      "Coltsfoot flower (kuan dong hua) 20g",
      "Loquat leaves (pi pa ye) 200g",
      "Fresh loquats 1000g",
      "Rock sugar 50–100g (adjust to taste)",
      "Water 1500ml"
    ],
    steps: [
      { title: "Soak the herbs", desc: "Rinse all herbs (except the fritillary powder) to remove surface dust. Place in a pot with 1.5L water and soak for 30 minutes. For fresh loquat leaves, scrub off the fuzzy coating with a brush and snip into thin strips before adding." },
      { title: "Simmer the herbs", desc: "Bring to a boil over high heat, then reduce to medium-low and simmer for 30 minutes." },
      { title: "Concentrate the liquid", desc: "Strain the herbal liquid into a clean pot. Add 50–100g rock sugar and reduce over high heat to about 500ml. Set aside." },
      { title: "Blend the loquats", desc: "Peel and pit the loquats. Blend in the Thermomix at speed 10 for 30 seconds until completely smooth." },
      { title: "Simmer into syrup", desc: "Pour the herbal liquid into the Thermomix with the loquat puree. Cook at 100°C, speed 2 and simmer, watching until the mixture reduces into a thick, syrupy consistency. Around the 10-minute mark, pour the fritillary powder in through the lid opening and stir to incorporate." },
      { title: "Jar and store", desc: "Transfer the finished syrup to a clean glass jar while still hot. Seal and store in the refrigerator." }
    ]
  },
  28: {
    title: "Walnut Peanut Milk",
    category: "Drinks",
    desc: "Toasted walnuts and peanuts blended into a rich, nutty milk — nourishing and deeply warming with every sip.",
    difficulty: "Easy",
    ingredients: [
      "Walnuts 150g",
      "Peanuts 100g",
      "Powdered sugar 30g (adjust to taste)",
      "Water 500g",
      "Milk 200g"
    ],
    steps: [
      { title: "Toast the nuts", desc: "Roast the walnuts and peanuts in the oven at 150°C for 15 minutes until fragrant and golden. Remove and let cool. No oven? Toast in a dry skillet, stirring constantly, until golden." },
      { title: "Remove skins", desc: "Rub the roasted nuts together to loosen the skins, then discard them." },
      { title: "Grind", desc: "Add the walnuts and peanuts to the Thermomix. Blend at speed 7 for 10 seconds until ground." },
      { title: "Cook", desc: "Add powdered sugar and water. Cook at 100°C, speed 1 for 10 minutes. Then add milk and continue at 100°C, speed 1 for another 2 minutes." },
      { title: "Blend smooth", desc: "Blend at speed 10 for 2 minutes until silky smooth. Serve hot. Add more milk or sugar to adjust the richness and sweetness to your taste." }
    ]
  },
  35: {
    title: "Mixed Vegetable Soup",
    category: "Soups",
    desc: "Tomatoes, potatoes, oyster mushrooms, and cabbage all in one pot — tangy, rich, and full of natural vegetable sweetness. Nourishing and belly-warming.",
    difficulty: "Easy",
    ingredients: [
      "Onion 100g",
      "Tomatoes 400g",
      "Olive oil 15g",
      "Potatoes 300g, cut into chunks",
      "Cabbage 300g, cut into chunks",
      "Carrot 100g, cut into chunks",
      "Oyster mushrooms 150g, torn into pieces",
      "Water 800g",
      "Salt 1 tsp"
    ],
    steps: [
      { title: "Prep the vegetables", desc: "Cut the onion, tomatoes, potatoes, cabbage, and carrot into small chunks. Tear the oyster mushrooms and set aside." },
      { title: "Chop the onion", desc: "Add the onion to the bowl and chop at speed 5 for 5 seconds." },
      { title: "Sauté", desc: "Add the tomatoes and olive oil. Cook at 120°C, speed 1 for 8 minutes until the tomatoes break down and release their juice." },
      { title: "Simmer", desc: "Add the potatoes, cabbage, carrot, oyster mushrooms, and water. Cook at 100°C, reverse, stir setting for 18 minutes until all the vegetables are fully tender." },
      { title: "Season", desc: "Add salt and stir at 100°C, reverse, stir setting for 1 minute until evenly seasoned. Serve." }
    ]
  },
  36: {
    title: "Pickled Mustard Greens with Eggplant",
    category: "Cold Dishes / Appetizers",
    desc: "Steamed eggplant tossed with pickled mustard greens, oyster sauce, and soy sauce — a simple, appetizing summer side dish in just a few steps.",
    difficulty: "Easy",
    ingredients: [
      "Eggplant 320g",
      "Cooked pickled mustard greens (xian cai) to taste",
      "Oyster sauce 15g",
      "Soy sauce 10g",
      "Olive oil 10g (optional)"
    ],
    steps: [
      { title: "Steam the eggplant", desc: "Trim and wash the eggplant, then cut into pieces. Lay on a steaming tray and steam for 13 minutes after the steam rises, until fully soft." },
      { title: "Toss", desc: "Add the steamed eggplant to the Thermomix bowl along with the pickled mustard greens, oyster sauce, soy sauce, and olive oil. Mix at reverse, speed 3 for 5 seconds." },
      { title: "Plate", desc: "Transfer to a plate. Even better after chilling — a refreshing cold appetizer for warm weather." }
    ]
  },
  37: {
    title: "Salted Egg Yolk Bacon Pull-Apart Bread",
    category: "Main Dish",
    desc: "Fluffy, pillowy pull-apart bread layered with salted egg yolk, bacon, and scallions — a different flavor combination in every bite.",
    difficulty: "Medium",
    ingredients: [
      "Bread flour 240g",
      "Cake flour 60g",
      "Milk 170g",
      "Egg, beaten 30g",
      "Granulated sugar 20g",
      "Salt 1/2 tsp",
      "Unsalted butter 20g, softened",
      "Instant yeast 1 tsp",
      "Salted egg yolks 3, finely chopped",
      "Green onions 2–3 stalks, thinly sliced",
      "Bacon as needed, finely chopped"
    ],
    steps: [
      { title: "Knead the dough", desc: "Add milk and beaten egg to the Thermomix and stir at speed 3 for 10 seconds. Add all remaining ingredients except butter and knead at speed 3–6 for 30 seconds. Add the softened butter and run the kneading program for 3–4 minutes until a large, thin windowpane can be stretched." },
      { title: "First rise", desc: "Shape the dough into a ball, cover with plastic wrap, and let rise in a warm spot until doubled in size, about 60 minutes." },
      { title: "Roll out and fill", desc: "Punch down the dough and let it rest for 10 minutes. Roll out into a large rectangle and scatter the chopped salted egg yolk, bacon, and scallions evenly over the surface." },
      { title: "Cut, arrange, and second rise", desc: "Cut into small pieces with a knife and arrange loosely in a baking pan. Proof in an enclosed environment at 36–38°C until noticeably puffed up." },
      { title: "Bake", desc: "Preheat the oven to 180°C. Bake on the lower-middle rack for 30–35 minutes. Check the color after 12–15 minutes and cover loosely with foil if it's browning too fast. Enjoy straight from the oven." }
    ]
  },
  38: {
    title: "Beef Pan-Fried Buns (Sheng Jian Bao)",
    category: "Main Dish",
    desc: "Crispy golden bottoms, fluffy soft tops, and a juicy beef-and-onion filling. The whole kitchen smells incredible while these are cooking.",
    difficulty: "Medium",
    ingredients: [
      "Ground beef 500g",
      "Water 50g",
      "Onion 100g",
      "Shaoxing rice wine 10g",
      "Oil 15g",
      "Soy sauce 10g",
      "Salt 3g",
      "Sugar 3g",
      "Cornstarch 1 tsp",
      "Five-spice powder 1 tsp",
      "Oyster sauce 10g",
      "All-purpose flour 500g (for the dough)",
      "Sugar 10g (for the dough)",
      "Instant yeast 4g (for the dough)",
      "Water 240g (for the dough)",
      "Sliced green onions and black sesame seeds to garnish"
    ],
    steps: [
      { title: "Make the dough", desc: "Add all dough ingredients to the Thermomix. Run the slow-proof kneading program to form the dough. Set aside to rise." },
      { title: "Prepare the filling", desc: "Add onion and water and blend at speed 7 for 4 seconds until finely chopped. Add all remaining beef filling ingredients and mix at reverse, speed 1 for 2 minutes until well combined and sticky." },
      { title: "Wrap the buns", desc: "Once the dough has risen, divide into portions. Roll out each piece and fill with the beef mixture. Pinch firmly to seal." },
      { title: "Pan-fry and steam", desc: "Heat a thin layer of oil in a skillet. Place the buns seam-side down and fry over medium heat until the bottoms are golden. Add a small splash of water, cover, and steam until the water evaporates. Sprinkle with sliced green onions and black sesame seeds before serving." }
    ]
  },
  39: {
    title: "Pasta Meat Sauce (Bolognese-Style)",
    category: "Sauces & Condiments",
    desc: "A homemade Italian-style meat sauce — ground beef, tomatoes, and mushrooms simmered into a rich, savory, deeply flavorful sauce. Works great on pasta or as a pizza base.",
    difficulty: "Easy",
    ingredients: [
      "Butter 30g",
      "Tomato 1",
      "Onion 1/3",
      "White button mushrooms 40g",
      "Ground beef 100g",
      "Soy sauce 15g",
      "Powdered sugar 10g",
      "Tomato paste 60g",
      "Salt 5g",
      "Oyster sauce 15g",
      "Crushed black pepper 1g",
      "Dried basil 1g"
    ],
    steps: [
      { title: "Sauté aromatics", desc: "Chop the onion and mushrooms at speed 5 for 8 seconds. Add butter and cook at 120°C, reverse, stir setting for 3 minutes until fragrant." },
      { title: "Cook the sauce", desc: "Add the tomato (cut into chunks) and blend at speed 5 for 5 seconds. Add the ground beef and all remaining seasonings. Cook at 100°C, reverse, stir setting for 20 minutes." },
      { title: "Finish", desc: "Add crushed black pepper and dried basil. Mix at speed 1, reverse for 1 minute until evenly combined. Done when the timer sounds." }
    ]
  },
  40: {
    title: "Mulberry Jam",
    category: "Sauces & Condiments",
    desc: "A fresh mulberry jam with a bright, naturally fruity tang — wonderful on toast or stirred into yogurt. The heat-sealing trick sanitizes the lid at the same time.",
    difficulty: "Easy",
    ingredients: [
      "Fresh mulberries 300g",
      "Rock sugar 80g"
    ],
    steps: [
      { title: "Wash", desc: "Remove the stems and place the mulberries in the steamer basket. Fill the main bowl with enough water to cover the fruit. Wash at speed 4.5 for 5 minutes, then drain." },
      { title: "Cook into jam", desc: "Add the mulberries and rock sugar to the main bowl. Blend at speed 6 for 5 seconds to break them down. Cook at Varoma temperature, speed 1 for 20 minutes, using the steamer basket in place of the measuring cup to allow steam to escape while preventing splatters." },
      { title: "Jar and seal", desc: "While still very hot, pour the jam into glass jars. Immediately invert the jars to seal them — the heat will sterilize the lids. Once cool, refrigerate." }
    ]
  },
  41: {
    title: "Pork and Onion Flatbread (Xian Bing)",
    category: "Main Dish",
    desc: "Thin-skinned, generously filled flatbreads pan-fried until golden on both sides — the Thermomix makes quick work of the filling, and the result is crispy on the outside and juicy within.",
    difficulty: "Medium",
    ingredients: [
      "All-purpose flour 250g",
      "Warm water 130g",
      "Salt 3g",
      "Pork 250g",
      "Onion 300g",
      "Fresh ginger 10g",
      "Dark soy sauce 5g",
      "Oyster sauce 5g",
      "Chinese five-spice powder 1 tsp"
    ],
    steps: [
      { title: "Mix and rest the dough", desc: "Add warm water, flour, and salt to the Thermomix. Run the kneading program for 30 seconds. Transfer to a large bowl, cover with plastic wrap, and let rest for 20 minutes." },
      { title: "Grind the pork", desc: "Cut the pork into chunks and add to the Thermomix. Pulse with Turbo 3–4 times until ground to your preferred texture. Set aside." },
      { title: "Mix the filling", desc: "Cut the onion into strips and add to the bowl. Turbo for 2 seconds to chop. Add the ground pork and all seasonings. Mix at speed 3 for 30 seconds until well combined." },
      { title: "Shape the flatbreads", desc: "Divide the rested dough into 12 portions. Roll each one thin, add the filling, and crimp into a round flat patty." },
      { title: "Pan-fry", desc: "Heat a thin layer of oil in a skillet over medium heat. Fry until both sides are golden. Add a small splash of water, cover, and steam until cooked through. Serve hot." }
    ]
  },
  43: {
    title: "Taiwanese Braised Pork Rice (Lu Rou Fan)",
    category: "Main Dish",
    desc: "Skin-on pork belly diced and slowly braised, fragrant with fried shallots, spooned over a bowl of white rice — a soul-satisfying Taiwanese classic.",
    difficulty: "Easy",
    ingredients: [
      "Pork belly 500g, skin-on, cut into small cubes",
      "Soy sauce 50g",
      "Dark soy sauce 15g",
      "Rock sugar 20g",
      "Fried shallots (crispy shallots) 25g",
      "Water 500g"
    ],
    steps: [
      { title: "Render the fat", desc: "Add all the pork belly cubes to the Thermomix. Cook at Varoma temperature, stir setting for 15 minutes to render out the fat until the meat becomes translucent." },
      { title: "Braise slowly", desc: "Add soy sauce, dark soy sauce, rock sugar, fried shallots, and water. Cook at Varoma temperature, stir setting for 30 minutes until the pork is meltingly tender and the sauce is rich and glossy." },
      { title: "Serve over rice", desc: "Ladle generously over freshly cooked white rice (about 18 minutes in the rice cooker). Dig in!" }
    ]
  },
  42: {
    title: "Pork Steamed Buns (Rou Bao Zi)",
    category: "Main Dish",
    desc: "The Thermomix grinds the pork into a coarse, textured filling — scallions soaked in ginger water make it incredibly fragrant. Thin-skinned, juicy, and better than anything you'd buy.",
    difficulty: "Medium",
    ingredients: [
      "Pork shoulder 300g (30% fat, 70% lean)",
      "Soy sauce 45g",
      "Dark soy sauce 15g",
      "Rock sugar powder 5g",
      "Sesame oil 5g",
      "Green onions 100g, chopped",
      "Scallion-ginger water 100g (or Sichuan peppercorn water)"
    ],
    steps: [
      { title: "Grind the filling", desc: "Cut the pork into small chunks and add to the Thermomix. Mix at reverse, speed 2.5 for 2 minutes, slowly pouring in the scallion-ginger water through the lid opening as it runs. The goal is a coarse, textured ground meat." },
      { title: "Season", desc: "Add soy sauce, dark soy sauce, rock sugar powder, and sesame oil. Mix at reverse, speed 2.5 for 2 minutes until well seasoned." },
      { title: "Add scallions and chill", desc: "Add the chopped scallions and mix at reverse, speed 2.5 for 20 seconds. Remove and refrigerate for 3 hours for best flavor." },
      { title: "Wrap and steam", desc: "Make the dough using your usual method, roll out wrappers, fill with the pork mixture, and seal tightly. Steam at Varoma temperature, stir setting for 15 minutes after the steam rises." }
    ]
  }
};
