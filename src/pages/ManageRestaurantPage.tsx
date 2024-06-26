import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/user-profile-form/manage-restaurant-form/ManageRestaurantForm";


const ManageRestaurantPage = () =>{

    const { createRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();
    const { restaurant } = useGetMyRestaurant();
    const { updateRestaurant, isLoading: isUpdateLoading } = useUpdateMyRestaurant();

    const isEditing = !!restaurant;

    return (
        <ManageRestaurantForm 
        onSave={isEditing ? updateRestaurant : createRestaurant} 
        isLoading={isUpdateLoading || isCreateLoading} 
        restaurant={restaurant}
        />
    );
};

export default ManageRestaurantPage;
