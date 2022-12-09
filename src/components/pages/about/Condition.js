import ConditionDesc from "./ConditionDesc";
import { FaTruck, FaIdCard, FaHeadset } from "react-icons/fa";
import { GoSync } from "react-icons/go";
const Condition = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 my-10  gap-7 lg:px-20 px-10  max-w-screen-2xl  mx-auto">
      <ConditionDesc
        icon={<FaTruck />}
        title="Free shipping"
        desc="If your glasses aren’t perfect, return them within 30 days for a full refund"
      />
      <ConditionDesc
        icon={<FaIdCard />}
        title="Securety Payments"
        desc="Pay with the world’s most popular and secure payment methods"
      />
      <ConditionDesc
        icon={<GoSync />}
        title="14-Day Returns"
        desc="Our Buyer Protection covers your purchase from click to delivery."
      />
      <ConditionDesc
        icon={<FaHeadset />}
        title="24/7 Support"
        desc="Delivered to your door If your glasses aren’t perfect, return them within"
      />
    </div>
  );
};

export default Condition;
