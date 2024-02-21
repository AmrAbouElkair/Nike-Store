import { services } from "../../constants";
import ServiceCard from "./sections/ServiceCard";

const Services = () => {
  return (
    <div className="max-container flex flex-wrap justify-center gap-9">
      {services.map((service, i) => (
        <ServiceCard key={service.label} {...service} id={i} />
      ))}
    </div>
  );
};

export default Services;
