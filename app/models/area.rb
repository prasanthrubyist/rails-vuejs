class Area < ApplicationRecord
  has_many :sub_areas, dependent: :destroy
  accepts_nested_attributes_for :sub_areas, allow_destroy: true
  # mount_uploader :image, ImageUploader
  has_attached_file :image
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

end
