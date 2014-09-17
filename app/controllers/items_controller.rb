class ItemsController < ApplicationController
	before_action :authenticate_user
  before_action :find_menu
  before_action :find_item, only: [:show, :edit, :update, :destroy]
  def index
    @items = Item.all
    respond_to do |format|
      format.json { render json: @menu.items.as_json }
  end

  def show
  end

  def new
    @item = Item.new
  end

  def create
    @item = @menu.items.create item_params
    respond_to do |format|
      format.json { render json: @menu.item.as_json }
    end
  end

  def edit
  end

  def update
    @item.update_attributes item_params
    respond_to do |format|
      format.json { render json: @menu.item.as_json }
    end
  end

  def destroy
    @item.delete
    respond_to do |format|
      format.json { render json: @menu.item.as_json }
    end
  end

  private
  def find_menu
  	@menu = Menu.find params[:id]
  end

  def find_item
  	@item = Item.find params[:id]
  end
  def item_params
    params.require(:item).permit(:item_name, :item_description, :item_price)
  end
end
