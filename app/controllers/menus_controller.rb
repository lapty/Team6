class MenusController < ApplicationController
  before_action :authenticate_user
  before_action :find_menu, only: [:show, :edit, :update, :destory]
  def index
    @menus = Menu.all

  end

  def show
  end

  def new
    @restaurant = Restaurant.new
  end

  def create
    @menu = @menu.restaurants.create menu_params
    respond_to do |format|
      format.json { render json: @menu.as_json}
    end
  end

  def edit
  end

  def update
    @
end
