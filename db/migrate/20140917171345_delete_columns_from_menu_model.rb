class DeleteColumnsFromMenuModel < ActiveRecord::Migration
  def change
  	remove_column :menus, :item
  	remove_column :menus, :item_description
  	remove_column :menus, :price
  end
end
