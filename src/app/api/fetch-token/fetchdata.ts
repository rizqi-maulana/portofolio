export const fetchData = async () => {
    const token = localStorage.getItem('token');
    if (token) {
        const formdata = new FormData();
        formdata.append('token', token);

        try {
            const response = await fetch('/api/fetch-token', {
                method: 'POST',
                body: formdata
            });

            if (response.ok) {
                const data = await response.json();
                return data
            } else {
                console.error('Failed to fetch token:', response.status);
            }
        } catch (error) {
            console.error('Error fetching token:', error);
        }
    }
};