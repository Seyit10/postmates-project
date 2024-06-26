import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyRestaurant = () =>{
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestaurantRequest = async ():Promise<Restaurant> =>{
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`,{
      method: "GET",
      headers:{
        Authorization: `Bearer ${accessToken}`
      }
    });

    if(!response.ok){
      throw new Error("failed to get restaurant");
    }
    return response.json();
  };

  const { data:restaurant, isLoading } = useQuery(
    "fetchMyRestaurant",
    getMyRestaurantRequest
  
  );

  return{
    restaurant,
    isLoading
  };

};


export const useCreateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const useCreateMyRestaurantRequest = async(restaurantFormData: FormData): 
  Promise<Restaurant>=>{
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
        method: "POST",
        headers:{
          Authorization: `Bearer ${accessToken}`
        },
        body: restaurantFormData,
    });

    if(!response.ok){
      throw new Error("Restoran Olusturulamadı!");
    }

    return response.json();

  };

  const {
    mutate:createRestaurant,
    isLoading,
    isSuccess,
    error
  } = useMutation(useCreateMyRestaurantRequest);

  if(isSuccess){
    toast.success("Restorant Oluşturuldu!");
  }

  if(error){
    toast.error("restoran güncellenemiyor!")
  }

  return { createRestaurant, isLoading };

};

export const useUpdateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateRestaurantRequest = async (restaurantFormData: FormData):Promise<Restaurant> =>{
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`,{
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantFormData,
    });

    if(!response){
      throw new Error("Restoran güncellenemedi!")
    };

    return response.json();

  };

  const {
    mutate: updateRestaurant,
    isLoading,
    error,
    isSuccess, 
  } = useMutation(updateRestaurantRequest);

  if(isSuccess){
    toast.success("Restoran Güncellendi!");
  };

  if(error){
    toast.error("Restoran Güncellenemedi!");
  }

  return{ updateRestaurant, isLoading };

};













