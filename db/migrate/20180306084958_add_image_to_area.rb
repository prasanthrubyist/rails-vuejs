class AddImageToArea < ActiveRecord::Migration[5.1]
  def change
    add_column :areas, :image, :string
  end
end
