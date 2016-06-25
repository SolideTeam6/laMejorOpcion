class Station < ActiveRecord::Base
    mount_uploader :logo, ImageUploader

    validates_processing_of :logo
    validate :image_size_validation

private
  def image_size_validation
    errors[:logo] << "should be less than 500KB" if logo.size > 0.5.megabytes
  end
end
