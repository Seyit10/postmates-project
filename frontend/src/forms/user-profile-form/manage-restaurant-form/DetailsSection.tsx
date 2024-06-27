import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailSection = () =>{
    const { control } = useFormContext();
    return (
        <div className="space-y-2">
            <div>
                <h2 className="text-2xl font-bold"> Detaylar </h2>
                <FormDescription>
                    Restoran bilgilerinizi giriniz.
                </FormDescription>
            </div>
            <FormField 
            control={control} 
            name="restaurantName" 
            render={({ field })=> (
            <FormItem>
                <FormLabel>Restoran Adı</FormLabel>
                <FormControl>
                    <Input {...field} className="bg-white"/>
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
        />
        <div className="flex gap-4">
        <FormField 
             control={control} 
             name="city" 
             render={({ field })=> (
             <FormItem className="flex-1">
                 <FormLabel>Şehir</FormLabel>
                    <FormControl>
                        <Input {...field} className="bg-white"/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />

            <FormField 
                control={control} 
                name="country" 
                render={({ field })=> (
                <FormItem className="flex-1">
                    <FormLabel> Ülke </FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white"/>
                        </FormControl>
                        <FormMessage />
                    </FormItem> 
                )}
                />
            </div>

            <FormField 
                control={control} 
                name="deliveryPrice" 
                render={({ field })=> (
                <FormItem className="max-w-[25%]">
                    <FormLabel> Teslimat Fiyatı (₺)</FormLabel>
                        <FormControl>
                        <Input {...field} className="bg-white" placeholder="0.00"/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField 
                control={control} 
                name="estimatedDeliveryTime" 
                render={({ field })=> (
                <FormItem className="max-w-[25%]">
                    <FormLabel>Tahmini Teslimat Süresi (Dakika)</FormLabel>
                        <FormControl>
                        <Input {...field} className="bg-white" placeholder="30"/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

        </div>
    )
}

export default DetailSection;