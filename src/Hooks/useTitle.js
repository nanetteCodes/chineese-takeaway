import { useEffect } from 'react';
export function useTitle({ openFood, orders }) {
    useEffect(() => {
        if (openFood) {
            document.title = openFood.name;
        } else {
            document.title = `Chinese Takeaway  ${orders.length > 0 ? `[${orders.length}]` : ''}`;
        }
    });
}
