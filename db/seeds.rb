# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
menus = Menu.create([
  {menu_name: 'Husk Supper Menu', menu_section_name: ''},
  {menu_name: 'McCradys Dinner Menu', menu_section_name: ''},
  {menu_name: 'Chicago Brunch Menu', menu_section_name: ''},
  {menu_name: 'Minero Menu', menu_section_name: ''}
  ])

items = Item.create([ {description: 'Wood Fired Shishito Peppers with Kentucky Soy Ponzu, Benne', item_price: 8, menu_id: 1}, 

{description: 'Marinated Peaches with Surryano Ham, Roasted Sweet Corn, Frilly Mustards, Toasted VA Peanuts, Honey Ricotta', item_price: 12, menu_id: 1},

{description: 'A Salad of Arugula with Glazed Beets and Summer Berries, Candied Pecans, Asher Blue, Strawberry Vinaigrette', item_price: 12, menu_id: 1},

{description: 'Oven Roasted Rappahanock Oysters with Herbed Chicken “Butter” and House Made Hot Sauce Purée', item_price: 15, menu_id: 1},

{description: 'Chilled Sweet Corn Soup with NC Blue Crab, Shaved Fennel and Scallions, Buttermilk Crème Fraîche, TX Olive Oil', item_price: 13, menu_id: 1},

{description: 'Southern Fried Chicken Skins with Red Pepper Honey, Espelette and Cilantro', item_price: 10, menu_id: 1},

{description: 'Kentuckyaki Glazed Pig’s Ear Lettuce Wraps with Sweet Vinegar Marinated Cucumbers and Red Onions, Benne', item_price: 11, menu_id: 1},

{description: 'Pan Fried HUSK Bologna with TN Cheddar Pimento Cheese, House Made Pickle Relish, Grilled Ciabatta', item_price: 11, menu_id: 1},

{description: 'Slow Smoked TN Pork Ribs with Hot Bourbon Honey Glaze, NC Honey Crisp Apples', item_price: 14, menu_id: 1},

{description: 'Wood Fired Clams, Carolina Porter Beer Broth, Embered Shiitakes, Wilted Arugula with Roasted Garlic Crostini', item_price: 14, menu_id: 1},

{description: 'SC Chicken, Spiced Pecans, Pan Fried Cabbage with HUSK Mustard, Honey Crisp Apples and Sweet Onion, Brown Butter Jus', item_price: 29, menu_id: 1},

{description: 'Cornmeal Dusted Catfish, Sweet Corn and VA Sausage “Gumbo”, Carolina Gold Rice, Charred Okra, Confit Cherry Tomatoes', item_price: 29, menu_id: 1},

{description: 'Confit Duck Leg, Anson Mills Farro “Fried Rice”, Pickled SC Chanterelles and Sweet Peas, Bourbon Barrel Soy, Duck Egg', item_price: 30, menu_id: 1},

{description: 'Slow Cooked Heritage Pork, Black Eye Peas with Country Ham and Smoky Tomato Jus, Spicy Mustard Greens', item_price: 30, menu_id: 1},

{description: 'Pink Snapper from Mark Marhefka, Summer Squash and Zucchini, Ember Roasted Fennel, Asian Pear Vinaigrette', item_price: 30, menu_id: 1},

{description: 'TN Flat Iron*, Roasted Oyster Mushrooms with Potatoes and Baby Carrots, Braised Brisket, Natural Jus', item_price: 30, menu_id: 1},

{description: 'Atlantic Grouper, Red Pepper Glazed Butter Peas with Torn Basil, Marinated Heirloom Tomatoes, Goat’s Milk Feta', item_price: 30, menu_id: 1},

{description: 'A Skillet of Cornbread with Allan Benton’s TN Bacon', item_price: 8, menu_id: 1},

{description: 'Pink Eyed Peas with Roasted Peppers, Onions and Scallions', item_price: 8, menu_id: 1},

{description: 'Baked Geechie Boy Grits with Sweetwater Valley Cheddar', item_price: 8, menu_id: 1},

{name: 'Summer Melon, Edisto Cucumber and Fennel', description:
'Junmai Nigori, Tozai, “Snow Maiden,” Kyoto-Japan', menu_id: 2},

{name: 'Cox Farms Beef Tartare*, Farro, Mustard Seed and Maple Hibiscus', description:'Foggy Ridge Cider, “First Fruit,” Dugspur-Virginia, 2012', menu_id: 2},

{name: 'Everglades Frog Legs, Muscadine, Bell Pepper, Chervil and Nasturtium', description: 'Alfred Merkelbach, Riesling-Spatlese, “Erdener Treppchen,” Mosel-Germany, 2012', menu_id: 2},

{name: 'Swordfish, Red Cabbage, Purslane and Black Truffle', description:
'Thomas Labaille, Pinot Noir (Rosé), “L’Authentique,” Sancerre-France, 2013', menu_id: 2},

{name: 'Snapper, Tomato, Zucchini, Garlic, Sorrel, and Dill', description:
'Val de Mer, Patrick Piuze, Chardonney, Chablis-France, 2011', menu_id: 2},

{name: 'Cox Farms Ribeye*, Beet, Blueberry and Shiso', description:
'Broc Cellars, Carignan, Anderson Valley-California, 2012', menu_id: 2},

{name: 'Tennessee Rabbit, Field Peas, Potato, Onion, and Pine', description:
'Sattler, St. Laurent, Burgenland-Austria, 2012', menu_id: 2},


{name: 'Duo of Berkshire Pork*, Leek, Pear, Mint and Vadouvan', description:
'Marcel Giraudon, Pinot Noir, Bougogne-Chitry-France, 2013', menu_id: 2},

{name: 'Baba Cake, Lavender, Honey and Citrus', description:
'Brooks, Late Harvest Riesling, “Tethys,” Willamette Valley-Oregon, 2012', menu_id: 2},

{name: 'Chocolate Tart, Nectarine, Popcorn and Basil', description:
'Mathiasson, Flora Vermouth, “Yount Mill Vineyard,” Napa Valley-California, 2011', menu_id: 2},

{name: 'Wild Bay Panna Cotta, Blackberry and Marigold', description:
'Caves Carod, Muscat/Clairette, Clairette de Die, Rhone Valley-France, NV', menu_id: 2},

{name: 'Eggs Vegetable Omelet', description:
'Three egg omelet with mushrooms, spinach, tomatoes, sautéed onions, mozzarella', item_price: 9, menu_id: 3},

{name: 'Denver Omelet', description:
'Three egg omelet with bacon, peppers, sautéed onions, aged cheddar', item_price: 9, menu_id: 3},

{name: 'Crab Benedict', description:
'Two poached eggs, English muffin, fresh crabmeat, fried green tomatoes, hollandaise sauce', item_price: 11, menu_id: 3},

{name: 'Classic Eggs Benedict', description:
'Two poached eggs, toasted English muffin, grilled Canadian bacon, hollandaise sauce', item_price: 9, menu_id: 3},

{name: 'Steak and Eggs Benedict', description:
'Medallions of Beef tenderloin, toasted English muffin, two poached eggs and tomato hollandaise sauce', item_price: 13, menu_id: 3},

{name: 'Creme Brûlée French Toast', description:
'Thick cut brioche bread dipped in our brûlée batter topped with a caramelized sugar crust, warm maple syrup, severed with fresh bacon', item_price: 8, menu_id: 3},

{name: 'Homemade Pancakes', description:
'A stack of airy buttermilk pancakes served with warm maple syrup seasonal berries and whipped cream', item_price: 7, menu_id: 3}])