class MenusController < ApplicationController
  # before_action :authenticate_user
  before_action :find_menu, only: [:show, :edit, :update, :destroy]
  def index
    @menus = Menu.all
    respond_to do |format|
      format.json { render json: @menus.as_json }
    end
  end

  def show
  end

  def new
    @menu = Menu.new
  end

  def create
    @menu = Menu.create menu_params
    respond_to do |format|
      format.json { render json: @menu.as_json}
    end
  end

  def edit
  end

  def update
    @menu = @menu.update_attributes menu_params
    respond_to do |format|
      format.json { render json: @menu.as_json}
    end
  end

  def destroy
    @menu.delete
    respond_to do |format|
      format.json { render json: @menu.as_json}
    end
  end

  private
  def menu_params
    params.require(:menu).permit(:menu_name, :menu_section_name)
  end
  def find_menu
    @menu =Menu.find params[:id]
  end
end
