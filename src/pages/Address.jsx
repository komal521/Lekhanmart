import React, { useState } from "react";
import plus from "../assets/plus.png";
import homeIcon from "../assets/home.png";
import workIcon from "../assets/briefcase (1).png";
import otherIcon from "../assets/briefcase (1).png";
import locationIcon from "../assets/location.png";
import phoneIcon from "../assets/telephone.png";
import editIcon from "../assets/pencil.png";
import deleteIcon from "../assets/delete.png";
import warrantyIcon from "../assets/warranty.png";
const AddressCard = ({ type, name, address, phone, isDefault, onEdit, onDelete }) => {
  const icon =
    type === "HOME" ? homeIcon : type === "WORK" ? workIcon : otherIcon;
  return (
    <div className="bg-white border rounded-xl p-4 w-full md:w-[300px] shadow-sm">
      {/* Top */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2 font-semibold">
          <img src={icon} className="w-4 h-4" />
          {type}
        </div>
        {isDefault && (
           <span className="text-xs bg-[#C2863FFF] text-white px-2 py-1 rounded">
          Default</span>
        )}</div>
      <h3 className="font-semibold">{name}</h3>
      <div className="flex gap-2 text-sm text-gray-600 mt-1">
        <img src={locationIcon} className="w-4 h-4 mt-1" />
        <p>{address}</p>
      </div>
      <div className="flex gap-2 text-sm text-gray-600 mt-1">
        <img src={phoneIcon} className="w-4 h-4" />
        <p>{phone}</p>
      </div>
      <div className="flex justify-between items-center mt-3 text-sm">
        <div className="flex gap-4">
          <button onClick={onEdit} className="flex items-center gap-1">
            <img src={editIcon} className="w-4 h-4" />
            Edit
          </button>
          <button onClick={onDelete} className="flex items-center gap-1 text-red-500">
            <img src={deleteIcon} className="w-4 h-4" />
            Delete
          </button>
        </div>
        <button onClick={() => alert("Set as default")}
          className=" text-black text-xs" >
          Set Default
        </button>
       </div>
      </div>);};
     const Address = () => {
     const [addresses] = useState([
    {
      id: 1,
      type: "HOME",
      name: "Shruti Kausal",
      address:
        "123, 5th Main Road, 2nd Cross, Sector 4, HSR Layout, Bengaluru - 560102",
      phone: "+91 9876543210",
      isDefault: true,
    },
    {
      id: 2,
      type: "WORK",
      name: "Rahul Sharma",
      address:
        "123, 5th Main Road, 2nd Cross, Sector 4, HSR Layout, Bengaluru - 560102",
      phone: "+91 9876543210",
    },
    {
      id: 3,
      type: "OTHER",
      name: "Rohit Sharma",
      address:
        "123, 5th Main Road, 2nd Cross, Sector 4, HSR Layout, Bengaluru - 560102",
      phone: "+91 9876543210",
    },
  ]);
  const handleDelete = (name) => {
    alert(`Delete clicked for ${name}`);
  };
  const handleEdit = (name) => {
    alert(`Edit clicked for ${name}`);
  };
  const handleAdd = () => {
    alert("Add New Address Clicked");
  };
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-xl font-semibold">Saved Addresses</h2>
        <span className="text-sm text-black bg-white px-3 py-1 rounded-full">
          {addresses.length} Saved Locations
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Manage your shipping and billing locations for a faster checkout experience.
      </p>
      <div className="flex flex-wrap gap-4">
        <div onClick={handleAdd}
          className="border-2 border-dashed rounded-xl p-6 w-full md:w-[300px] flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50" >
          <img src={plus} className="w-6 h-6 mb-2" />
          <p className="font-medium">Add New Address</p>
          <p className="text-xs text-gray-400 mt-1 text-center">
            Save a new address for faster checkout
          </p>
        </div>
        {addresses.map((item) =>
          item.name === "Rohit Sharma" ? (
            <div key={item.id} className="w-full">
              <AddressCard {...item}
                onEdit={() => handleEdit(item.name)}
                onDelete={() => handleDelete(item.name)} />
            </div> ) : (
            <AddressCard key={item.id}
              {...item}
              onEdit={() => handleEdit(item.name)}
              onDelete={() => handleDelete(item.name)}/>
          ))}
      </div>
      <div className="mt-6 p-4 rounded-xl flex gap-3 text-black"
        style={{ backgroundColor: "#C2863FFF" }} >
        <img src={warrantyIcon} className="w-5 h-5 mt-1" />
        <p className="text-sm text-white">
          Standardized Shipping:
          <br />
          We recommend keeping your primary residential address as your Default to ensure smooth order processing.
            Lekhanmart  delivers  to over 15,000+ pincodes  nationwide.
        </p>
      </div>
      <div className="mt-6 p-6 rounded-xl text-center"
        style={{ backgroundColor: "#FFF49CFF" }}>
        <img src={locationIcon} className="w-6 h-6 mx-auto mb-2" />
        <h3 className="font-semibold">Address not found?</h3>
        <p className="text-sm text-gray-600 mt-1">
          If you're having trouble saving an address, or our  system  doesn't recognize  your location,please
          contact our customer  support  for  manual  verification.
        </p>
        <button onClick={() => alert("Contact Support Clicked")}
          className="mt-3 bg-[#C2863FFF] text-white px-4 py-2 rounded-full text-sm" >
          Contact Support Team
        </button>
      </div>
    </div>
  );
};
export default Address;