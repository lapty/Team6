class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
    	t.text :item_name
    	t.string :item_description
    	t.float :item_price
      t.timestamps
    end
  end
end
