class Area < ApplicationRecord
  has_many :sub_areas, dependent: :destroy
  accept_nested_attributes_for :sub_areas, allow_destroy: true
end
