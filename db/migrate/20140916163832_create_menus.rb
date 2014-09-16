class CreateMenus < ActiveRecord::Migration
  def change
    create_table :menus do |t|
      t.string :menu_name
      t.string :menu_section_name
      t.string :item
      t.text :item_description
      t.float :price
      t.timestamps
    end
  end
end
