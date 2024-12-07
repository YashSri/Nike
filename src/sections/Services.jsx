import React from 'react';
import { services } from '../constants';
import ServiceCard from '../COMPONENTS/ServiceCard'; // Default import

function Services() {
    return (
        <section className="max-contianer flex justify-center flex-wrap gap-9">
            {services.map((service) => (
                <ServiceCard key={service.label} {...service} />
            ))}
        </section>
    );
}

export default Services;
