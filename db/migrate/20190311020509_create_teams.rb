class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :mascot
      t.string :coach
      t.integer :wins
      t.integer :losses
      t.references :conference, foreign_key: true

      t.timestamps
    end
  end
end
