class RestaurantsController < ApplicationController
  # before_action :authenticate_user
  # before_action :find_restaurant, only: [:show, :edit, :update, :destroy] 
  # def index
  #   @restaurants = Restaurant.all
  #   respond_to do |format|
  #     format.json { render json: @restaurants.as_json }
  # end

  # def show
  # end

  # def new
  #   @restaurant = Restaurant.new
  # end

  # def create
  #   @restuarant = Restaurant.create restaurant_params
  #   respond_to do |format|
  #     format.json { render json: @restaurant.as_json }
  #   end
  # end

  # def edit
  # end

  # def update
  #   @restaurant.update_attributes restaurant_params
  #   respond_to do |format|
  #     format.json { render json: @restaurant.as_json }
  #   end
  # end

  # def destroy
  #   @restaurant.delete
  #   respond_to do |format|
  #     format.json { render json: @restaurant.as_json }
  #   end
  # end

  # private
  # def find_restaurant
  #   @restaurant = Restaurant.find params[:id]
  # end

  # def restaurant_params
  #   params.require(:restaurant).permit(:restaurant_name, :description, :latitude, :longitude, :address)
  # end
end
