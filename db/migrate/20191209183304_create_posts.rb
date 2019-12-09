class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :original_post_id
      t.string  :title
      t.text    :text
      t.string  :content_url
      t.string  :tags
      t.integer :user_id, null: false
      
      t.timestamps
    end
    add_index :posts, [:user_id, :id]
  end
end
