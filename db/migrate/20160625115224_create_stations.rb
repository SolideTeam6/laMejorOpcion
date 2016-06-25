class CreateStations < ActiveRecord::Migration
  def change
    create_table :stations do |t|
      t.string :name
      t.text :address
      t.float :lat
      t.float :long
      t.string :logo
      t.boolean :active

      t.timestamps null: false
    end
  end
end
