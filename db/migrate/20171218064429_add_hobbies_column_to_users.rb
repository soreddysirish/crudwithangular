class AddHobbiesColumnToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :hobbies, :text
  end
end
