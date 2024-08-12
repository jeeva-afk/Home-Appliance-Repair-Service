
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ServicemanDashboard = ({ servicemanId }) => {
    const [serviceman, setServiceman] = useState(null);
    const [status, setStatus] = useState('');

    useEffect(() => {
        const fetchServiceman = async () => {
            try {
                const response = await axios.get(`/api/servicemen/${servicemanId}`);
                setServiceman(response.data);
                setStatus(response.data.status);
            } catch (error) {
                console.error('Error fetching serviceman:', error);
            }
        };

        fetchServiceman();
    }, [servicemanId]);

    const toggleStatus = async () => {
        const newStatus = status === 'free' ? 'busy' : 'free';
        try {
            const response = await axios.put(`/api/servicemen/${servicemanId}`, { status: newStatus });
            setStatus(response.data.status);
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    if (!serviceman) {
        return <div>Loading...</div>;
    }

    return (
        <div className="serviceman-dashboard">
            <h2>{serviceman.name}'s Dashboard</h2>
            <p>Status: {status}</p>
            <button onClick={toggleStatus}>
                Mark as {status === 'free' ? 'Busy' : 'Free'}
            </button>
        </div>
    );
};

export default ServicemanDashboard;
