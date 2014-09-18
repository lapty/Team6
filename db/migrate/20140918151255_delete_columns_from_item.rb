class DeleteColumnsFromItem < ActiveRecord::Migration
  def change
    remove_column :items, :item_name
    remove_column :items, :item_description
    add_column :items, :name, :string
    add_column :items, :description, :text
  end
end
