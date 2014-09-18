# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
menus = Menu.create([
  {menu_name: 'Husk Supper Menu', menu_section_name: ''}
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

{description: 'Baked Geechie Boy Grits with Sweetwater Valley Cheddar', item_price: 8, menu_id: 1}])