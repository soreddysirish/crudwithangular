class UsersController < ApplicationController
	
	def index
		@users = User.all
	end

	def new
	end

	def create 
		@user = params[:user]
		@user_data = User.new(name:@user[:name],email:@user[:email],mobile:@user[:mobile],hobbies: params[:user][:hobbies].to_json)
		if @user_data.save
			flash[:notice] = "Successfully created..."
		else
			flash[:error] = "error while creating..."
		end
		redirect_to root_path
	end

	def destroy
		@user = User.find(params[:id])
		if @user.destroy
			render :json => @user
		else
			flash[:error] = "error while deleting..."
		end
	end

	def show
		@user = User.find(params[:id])
	end

	def edit
		@user = User.find(params[:id])
	end

	def update
		@user = User.find(params[:id])
		if @user.update(name:params[:user][:name],email:params[:user][:email],mobile:params[:user][:mobile],hobbies: params[:user][:hobbies].to_json)
			flash[:notice] = "Successfully created..."
		else
			flash[:error] = "error..."
		end
	end
end
