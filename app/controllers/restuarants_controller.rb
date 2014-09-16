class RestuarantsController < ApplicationController
  before_action :authenticate_user
  before_action :find_restaurant, only: [:show, :edit, :update, :destroy]  
  def index
    @restaurants = restaurant.all
  end

  def show
  end

  def new
    @restaurant = Restaurant.new
  end

  def create
    @restuarant = Restaurant.create restaurant_params
    if @restaurant.save == true
    redirect_to restaurants_path
    else
    render :new
    end
  end

  def edit
  end

  def update
    @restaurant.update_attributes restaurant_params
    redirect_to restaurants_path(@restaurant)
  end

  def destroy
    @restaurant.delete
    redirect_to restaurants_path(@restaurants)
  end

  private
  def find_restaurant
    @restaurant = Restaurant.find params[:id]
  end

  def restaurant_params
    params.require(:restaurant).permit(:restaurant_name, :description, :latitude, :longitude, :address)
  end

end
