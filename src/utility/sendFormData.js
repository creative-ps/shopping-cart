export default function sendFormData(formData){
    const useName = formData.get("userName");
    const phoneNo = formData.get("phoneNumber");
    const email = formData.get("emailAddress");
    const homeAdd = formData.get("homeAddress");
    const streetNo = formData.get("streetNumber");
    const city = formData.get("cityName");
    const state = formData.get("stateN");
    const pin = formData.get("PinCode");
    const country = formData.get("Country");
    const landmark = formData.get("LandMark");
     
    const shippingDetails = {
                                userName:useName,
                                phoneNumber:phoneNo,
                                email:email,
                                homeAddress:homeAdd,
                                streetNumber:streetNo,
                                city:city,
                                state:state,
                                pinCode:pin,
                                country:country,
                                landmark:landmark
                            }
    console.info(shippingDetails);
    return shippingDetails;

}