class HomeController < ApplicationController
  def index
      @stations =  Station.all.where('active = 1')
  end
end
