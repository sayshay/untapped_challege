class AddStarterToPlayer < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :starter, :boolean
  end
end
