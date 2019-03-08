class CreateConferences < ActiveRecord::Migration[5.2]
  def change
    create_table :conferences do |t|
      t.string :name
      t.string :short_name
      t.references :division, foreign_key: true

      t.timestamps
    end
  end
end
