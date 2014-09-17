class MenusController < ApplicationController
  before_action :authenticate_user
  before_action :find_restaurant
  before_action :find_menu, only: [:show, :edit, :update, :destory]
  def index
    @menus = Menu.all

  end

  def show
  end

  def new
    @menu = Menu.new
  end

  def create
    @menu = @restaurant.menus.create menu_params
    respond_to do |format|
      format.json { render json: @restaurant.menu.as_json}
    end
  end

  def edit
  end

  def update
    @menu = @menu.update_attributes menu_params
    respond_to do |format|
      format.json { render json@ restaurant.menu.as_json}
    end  
  end

  def destroy
    @menu.delete 
    respond_to do |format|
      format.json { render json: @ restaurant.menu.as_json}
    end
  end

  private
  def menu_params
    params.require(:menu).permit(:item_name, :item_description, :item_price)
  end
  def find_restaurant
    @restaurant = Restaurant.find_menu params[:restaurant_id]
  end
  def find_menu
    @menu =Menu.find_menu params [:id]
  end
end
